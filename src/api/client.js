import axios from "axios";

const client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

// accessToken이 있는 경우에만 인증 헤더 추가
client.interceptors.request.use(
    (config) => {
        const accessToken =
            localStorage.getItem("accessToken");

        const publicUrls = [
            "/api/auth/login",
            "/api/auth/tokens",
            "/api/auth/signups",
            "/api/auth/email-verifications",
            "/api/auth/email-verifications/confirmation",
            "/api/auth/login-id/availability",
            "/api/auth/nickname/availability",
        ];

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

export default client;