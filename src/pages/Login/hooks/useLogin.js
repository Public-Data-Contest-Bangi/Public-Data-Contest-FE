import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../../api/auth";
import { getMyCondition } from "../../../api/myCondition";

const getRoleFromAccessToken = (token) => {
    try {
        const payload = token.split(".")[1];

        const base64 = payload
            .replace(/-/g, "+")
            .replace(/_/g, "/");

        const decodedPayload = JSON.parse(
            decodeURIComponent(
                atob(base64)
                    .split("")
                    .map(
                        (char) =>
                            "%" +
                            (
                                "00" +
                                char
                                    .charCodeAt(0)
                                    .toString(16)
                            ).slice(-2)
                    )
                    .join("")
            )
        );

        return decodedPayload.role;
    } catch (error) {
        console.error(
            "토큰 role 확인 실패:",
            error
        );

        return null;
    }
};

function useLogin() {
    const navigate = useNavigate();

    const [userId, setUserId] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [
        showPassword,
        setShowPassword,
    ] = useState(false);

    const [
        loginMessage,
        setLoginMessage,
    ] = useState("");

    const handleTogglePassword = () => {
        setShowPassword(
            (prev) => !prev
        );
    };

    const handleLogin = async () => {
        if (!userId.trim()) {
            setLoginMessage(
                "아이디를 입력해 주세요."
            );

            return;
        }

        if (!password) {
            setLoginMessage(
                "비밀번호를 입력해 주세요."
            );

            return;
        }

        try {
            setLoginMessage("");

            const response =
                await login({
                    loginId:
                        userId.trim(),
                    password,
                });

            const {
                accessToken,
                refreshToken,
                tokenType,
                expiresIn,
                memberDetails,
            } = response.data;

            localStorage.setItem(
                "accessToken",
                accessToken
            );

            localStorage.setItem(
                "refreshToken",
                refreshToken
            );

            localStorage.setItem(
                "tokenType",
                tokenType
            );

            localStorage.setItem(
                "expiresIn",
                String(expiresIn)
            );

            if (memberDetails) {
                localStorage.setItem(
                    "memberDetails",
                    JSON.stringify(
                        memberDetails
                    )
                );
            }

            // 토큰에서 권한 확인
            const role =
                getRoleFromAccessToken(
                    accessToken
                );

            console.log(
                "로그인 사용자 권한:",
                role
            );

            localStorage.setItem(
                "role",
                role ?? ""
            );

            // 관리자라면 조건 조회 없이 바로 관리자 페이지
            if (role === "ADMIN") {
                navigate(
                    "/admin",
                    {
                        replace: true,
                    }
                );

                return;
            }

            // 일반 사용자만 이용 조건 확인
            try {
                const conditionResponse =
                    await getMyCondition();

                const condition =
                    conditionResponse.data;

                console.log(
                    "로그인 후 내 조건:",
                    condition
                );

                if (
                    !condition ||
                    !Array.isArray(
                        condition.disabilityTypeIds
                    ) ||
                    condition
                        .disabilityTypeIds
                        .length === 0
                ) {
                    navigate(
                        "/preference",
                        {
                            replace: true,
                        }
                    );

                    return;
                }

                navigate("/", {
                    replace: true,
                });
            } catch (
                conditionError
            ) {
                console.error(
                    "내 조건 조회:",
                    conditionError
                        .response?.data
                );

                if (
                    conditionError
                        .response
                        ?.status === 404
                ) {
                    navigate(
                        "/preference",
                        {
                            replace: true,
                        }
                    );

                    return;
                }

                navigate("/", {
                    replace: true,
                });
            }
        } catch (error) {
            console.error(
                "로그인 실패:",
                error
            );

            setLoginMessage(
                error.response?.data
                    ?.message ||
                    "아이디 또는 비밀번호를 확인해 주세요."
            );
        }
    };

    return {
        userId,
        password,
        showPassword,
        loginMessage,

        setUserId,
        setPassword,

        handleTogglePassword,
        handleLogin,
    };
}

export default useLogin;