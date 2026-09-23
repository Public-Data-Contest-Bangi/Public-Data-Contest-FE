import axios from "axios";

const baseURL =
    import.meta.env.VITE_API_BASE_URL;

const client = axios.create({
    baseURL,
});

const publicUrls = [
    "/api/auth/login",
    "/api/auth/tokens",
    "/api/auth/signups",
    "/api/auth/email-verifications",
    "/api/auth/email-verifications/confirmation",
    "/api/auth/login-id/availability",
    "/api/auth/nickname/availability",
    "/api/auth/password/email-verifications",
    "/api/auth/password/email-verifications/confirmation",
    "/api/auth/password/reset",
];

// 인증정보 삭제
const clearAuthStorage = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("tokenType");
    localStorage.removeItem("expiresIn");
    localStorage.removeItem("memberDetails");
};

// accessToken이 있는 경우 인증 헤더 추가
client.interceptors.request.use(
    (config) => {
        const accessToken =
            localStorage.getItem(
                "accessToken"
            );

        const isPublicRequest =
            publicUrls.some((url) =>
                config.url?.startsWith(url)
            );

        if (
            accessToken &&
            !isPublicRequest
        ) {
            config.headers.Authorization =
                `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 토큰 재발급 중인지 확인
let isRefreshing = false;

// 재발급을 기다리는 요청들
let refreshSubscribers = [];

const subscribeTokenRefresh = (
    callback
) => {
    refreshSubscribers.push(callback);
};

const notifyTokenRefresh = (
    newAccessToken
) => {
    refreshSubscribers.forEach(
        (callback) =>
            callback(newAccessToken)
    );

    refreshSubscribers = [];
};

// 응답 interceptor
client.interceptors.response.use(
    (response) => {
        return response;
    },

    async (error) => {
        const originalRequest =
            error.config;

        const status =
            error.response?.status;

        const code =
            error.response?.data?.code;

        // accessToken 만료
        if (
            status === 401 &&
            code === "EXPIRED_TOKEN" &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            const refreshToken =
                localStorage.getItem(
                    "refreshToken"
                );

            if (!refreshToken) {
                clearAuthStorage();

                window.location.href =
                    "/login";

                return Promise.reject(
                    error
                );
            }

            // 이미 다른 요청이 토큰 재발급 중이면
            // 새 토큰이 나올 때까지 기다림
            if (isRefreshing) {
                return new Promise(
                    (resolve) => {
                        subscribeTokenRefresh(
                            (
                                newAccessToken
                            ) => {
                                originalRequest.headers.Authorization =
                                    `Bearer ${newAccessToken}`;

                                resolve(
                                    client(
                                        originalRequest
                                    )
                                );
                            }
                        );
                    }
                );
            }

            isRefreshing = true;

            try {
                // interceptor 영향을 받지 않도록
                // 일반 axios로 재발급 요청
                const response =
                    await axios.post(
                        `${baseURL}/api/auth/tokens`,
                        {
                            refreshToken,
                        }
                    );

                const tokenData =
                    response.data.data;

                const {
                    accessToken:
                    newAccessToken,
                    refreshToken:
                    newRefreshToken,
                    tokenType,
                    expiresIn,
                } = tokenData;

                // 새 토큰 저장
                localStorage.setItem(
                    "accessToken",
                    newAccessToken
                );

                localStorage.setItem(
                    "refreshToken",
                    newRefreshToken
                );

                if (tokenType) {
                    localStorage.setItem(
                        "tokenType",
                        tokenType
                    );
                }

                if (
                    expiresIn !==
                    undefined
                ) {
                    localStorage.setItem(
                        "expiresIn",
                        String(
                            expiresIn
                        )
                    );
                }

                // 기다리던 요청들에게 새 토큰 전달
                notifyTokenRefresh(
                    newAccessToken
                );

                // 실패했던 요청 다시 실행
                originalRequest.headers.Authorization =
                    `Bearer ${newAccessToken}`;

                return client(
                    originalRequest
                );
            } catch (
            refreshError
            ) {
                clearAuthStorage();

                window.location.href =
                    "/login";

                return Promise.reject(
                    refreshError
                );
            } finally {
                isRefreshing = false;
            }
        }

        // 토큰 자체가 잘못된 경우
        if (
            status === 401 &&
            code === "INVALID_TOKEN"
        ) {
            clearAuthStorage();
        }

        return Promise.reject(error);
    }
);

export default client;