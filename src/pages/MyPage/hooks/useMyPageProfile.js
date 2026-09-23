import {
    useEffect,
    useState,
} from "react";

import {
    getMyProfile,
} from "../../../api/member";

export default function useMyPageProfile() {
    const [nickname, setNickname] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [isLoading, setIsLoading] =
        useState(true);

    useEffect(() => {
        const fetchMyProfile = async () => {
            try {
                const response =
                    await getMyProfile();

                const {
                    nickname,
                    email,
                } = response.data;

                setNickname(
                    nickname ?? ""
                );

                setEmail(
                    email ?? ""
                );

                console.log(
                    "마이페이지 회원정보 조회 성공:",
                    response.data
                );
            } catch (error) {
                console.error(
                    "마이페이지 회원정보 조회 실패:",
                    error.response?.data
                );
            } finally {
                setIsLoading(false);
            }
        };

        fetchMyProfile();
    }, []);

    return {
        nickname,
        email,
        isLoading,
    };
}