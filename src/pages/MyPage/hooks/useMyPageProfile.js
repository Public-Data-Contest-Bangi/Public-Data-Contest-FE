// useMyPageProfile.js

import {
    useEffect,
    useState,
} from "react";

import {
    getMyProfile,
} from "../../../api/member";

import profileCharacter from "../../../assets/images/profile-character.png";

const AVATAR_IMAGE_STORAGE_KEY =
    "profileAvatarImage";

export default function useMyPageProfile() {
    const [
        nickname,
        setNickname,
    ] = useState("");

    const [
        email,
        setEmail,
    ] = useState("");

    const [
        profileAvatar,
        setProfileAvatar,
    ] = useState(() => {
        return (
            localStorage.getItem(
                AVATAR_IMAGE_STORAGE_KEY
            ) ||
            profileCharacter
        );
    });

    const [
        isLoading,
        setIsLoading,
    ] = useState(true);

    useEffect(() => {
        const fetchMyProfile =
            async () => {
                try {
                    setIsLoading(true);

                    const response =
                        await getMyProfile();

                    const {
                        nickname,
                        email,
                    } =
                        response.data;

                    setNickname(
                        nickname ??
                            ""
                    );

                    setEmail(
                        email ?? ""
                    );

                    setProfileAvatar(
                        localStorage.getItem(
                            AVATAR_IMAGE_STORAGE_KEY
                        ) ||
                            profileCharacter
                    );

                    console.log(
                        "마이페이지 회원정보 조회 성공:",
                        response.data
                    );
                } catch (error) {
                    console.error(
                        "마이페이지 회원정보 조회 실패:",
                        error.response
                            ?.data
                    );

                    setProfileAvatar(
                        localStorage.getItem(
                            AVATAR_IMAGE_STORAGE_KEY
                        ) ||
                            profileCharacter
                    );
                } finally {
                    setIsLoading(
                        false
                    );
                }
            };

        fetchMyProfile();
    }, []);

    return {
        nickname,
        email,
        profileAvatar,
        isLoading,
    };
}