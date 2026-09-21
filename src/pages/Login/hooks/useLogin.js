import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../../api/auth";
import { getMyCondition } from "../../../api/myCondition";

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

            // 로그인
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

            // 토큰 저장
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

            // 로그인 성공 후
            // 내 조건 존재 여부 확인
            try {
                const conditionResponse =
                    await getMyCondition();

                const condition =
                    conditionResponse.data;

                console.log(
                    "로그인 후 내 조건:",
                    condition
                );

                // 조건이 아직 없는 사용자
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
                        "/preference"
                    );

                    return;
                }

                // 이미 조건을 저장한 사용자
                navigate("/");
            } catch (conditionError) {
                console.error(
                    "내 조건 조회:",
                    conditionError
                        .response?.data
                );

                // 저장된 조건 자체가 없는 경우
                if (
                    conditionError
                        .response
                        ?.status === 404
                ) {
                    navigate(
                        "/preference"
                    );

                    return;
                }

                // 예상치 못한 오류일 경우
                // 로그인 자체는 성공했으므로 홈 이동
                navigate("/");
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