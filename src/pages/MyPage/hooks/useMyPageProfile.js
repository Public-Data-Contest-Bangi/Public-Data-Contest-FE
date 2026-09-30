// useMyPageProfile.js

import {
    useEffect,
    useState,
} from "react";

import {
    getMyProfile,
} from "../../../api/member";

import {
    findProfileAvatar,
    getSavedProfileAvatar,
} from "../ProfileEdit/hooks/useProfileAvatar";

import profileCharacter from "../../../assets/images/profile-character.png";

const CACHE_KEY =
    "profileAvatar";

// 서버 값이 없으면 기존 기본 캐릭터를 보여준다
const getAvatarImage = (avatarId) => {
    if (!avatarId) {
        return profileCharacter;
    }

    return findProfileAvatar(avatarId)
        .image;
};

const getCachedAvatarImage = () => {
    let cachedId = null;

    try {
        cachedId =
            localStorage.getItem(
                CACHE_KEY
            );
    } catch {
        cachedId = null;
    }

    return cachedId
        ? getSavedProfileAvatar().image
        : profileCharacter;
};

export default function useMyPageProfile() {
    const [
        nickname,
        setNickname,
    ] = useState("");

    const [
        email,
        setEmail,
    ] = useState("");

    // 서버 응답 전에는 캐시된 캐릭터를 잠깐 보여준다
    const [
        profileAvatar,
        setProfileAvatar,
    ] = useState(getCachedAvatarImage);

    const [
        isLoading,
        setIsLoading,
    ] = useState(true);

    useEffect(() => {
        let cancelled = false;

        const fetchMyProfile =
            async () => {
                try {
                    setIsLoading(true);

                    const response =
                        await getMyProfile();

                    if (cancelled) return;

                    const {
                        nickname,
                        email,
                        profileAvatarId,
                    } =
                        response.data ?? {};

                    setNickname(
                        nickname ?? ""
                    );

                    setEmail(
                        email ?? ""
                    );

                    setProfileAvatar(
                        getAvatarImage(
                            profileAvatarId
                        )
                    );

                    if (profileAvatarId) {
                        try {
                            localStorage.setItem(
                                CACHE_KEY,
                                profileAvatarId
                            );
                        } catch {
                            // 저장소 접근이 막힌 환경은 무시
                        }
                    }
                } catch (error) {
                    console.error(
                        "마이페이지 회원정보 조회 실패:",
                        error.response?.data
                    );
                } finally {
                    if (!cancelled) {
                        setIsLoading(false);
                    }
                }
            };

        fetchMyProfile();

        return () => {
            cancelled = true;
        };
    }, []);

    return {
        nickname,
        email,
        profileAvatar,
        isLoading,
    };
}