import { useNavigate } from "react-router-dom";

import { withdraw } from "../../../api/auth";

export default function useWithdraw() {
    const navigate = useNavigate();

    const clearUserData = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("tokenType");
        localStorage.removeItem("expiresIn");
        localStorage.removeItem("memberDetails");
        localStorage.removeItem(
            "didimfit-my-condition"
        );
    };

    const handleWithdraw = async () => {
        try {
            const response =
                await withdraw();

            console.log(
                "회원 탈퇴 성공:",
                response
            );

            // 탈퇴 성공했을 때만 사용자 정보 삭제
            clearUserData();

            navigate(
                "/login",
                {
                    replace: true,
                }
            );

            return true;
        } catch (error) {
            console.error(
                "회원 탈퇴 실패:",
                error.response?.data
            );

            return false;
        }
    };

    return {
        handleWithdraw,
    };
}