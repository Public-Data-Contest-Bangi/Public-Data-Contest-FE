import { useNavigate } from "react-router-dom";

import { logout } from "../../../api/auth";

export default function useLogout() {
    const navigate = useNavigate();

    const clearLoginData = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("tokenType");
        localStorage.removeItem("expiresIn");
        localStorage.removeItem("memberDetails");

        // 사용자별 내 조건 로컬 데이터
        localStorage.removeItem(
            "didimfit-my-condition"
        );
    };

    const handleLogout = async () => {
        try {
            await logout();

            console.log(
                "로그아웃 API 성공"
            );
        } catch (error) {
            console.error(
                "로그아웃 API 실패:",
                error.response?.data
            );
        } finally {
            clearLoginData();

            navigate(
                "/login",
                {
                    replace: true,
                }
            );
        }
    };

    return {
        handleLogout,
    };
}