// useProfileAvatar.js

import {
    useEffect,
    useState,
} from "react";

import {
    PROFILE_AVATARS,
} from "../data/profileAvatars";

import {
    getMyProfile,
    updateMyProfile,
} from "../../../api/member";

// 서버 응답 전 잠깐 보여줄 용도의 캐시
const STORAGE_KEY =
    "profileAvatar";

// 예전에 저장하던 이미지 경로 키 (더 이상 쓰지 않음)
const LEGACY_IMAGE_KEY =
    "profileAvatarImage";

const isValidAvatarId = (id) =>
    PROFILE_AVATARS.some(
        (avatar) => avatar.id === id
    );

// id로 캐릭터를 찾는다. 없으면 기본 캐릭터
export function findProfileAvatar(id) {
    return (
        PROFILE_AVATARS.find(
            (avatar) => avatar.id === id
        ) ?? PROFILE_AVATARS[0]
    );
}

const readCachedAvatarId = () => {
    try {
        return localStorage.getItem(
            STORAGE_KEY
        );
    } catch {
        return null;
    }
};

const writeCachedAvatarId = (id) => {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            id
        );
    } catch {
        // 저장소 접근이 막힌 환경은 무시
    }
};

// 다른 화면에서 쓰는 용도 (서버 응답 전 캐시 기준)
export function getSavedProfileAvatar() {
    return findProfileAvatar(
        readCachedAvatarId()
    );
}

function useProfileAvatar() {
    const [
        selectedAvatarId,
        setSelectedAvatarId,
    ] = useState(() => {
        const cachedId =
            readCachedAvatarId();

        return isValidAvatarId(cachedId)
            ? cachedId
            : PROFILE_AVATARS[0].id;
    });

    const [
        isAvatarPickerOpen,
        setIsAvatarPickerOpen,
    ] = useState(false);

    const [
        isAvatarSaving,
        setIsAvatarSaving,
    ] = useState(false);

    const selectedAvatar =
        findProfileAvatar(
            selectedAvatarId
        );

    // 화면에 들어오면 서버에 저장된 캐릭터를 불러온다
    useEffect(() => {
        let cancelled = false;

        try {
            localStorage.removeItem(
                LEGACY_IMAGE_KEY
            );
        } catch {
            // 무시
        }

        async function loadAvatar() {
            try {
                const response =
                    await getMyProfile();

                const serverId =
                    response?.data
                        ?.profileAvatarId;

                if (cancelled) return;

                if (isValidAvatarId(serverId)) {
                    setSelectedAvatarId(
                        serverId
                    );

                    writeCachedAvatarId(
                        serverId
                    );
                }
            } catch (error) {
                console.error(
                    "프로필 캐릭터 조회 실패:",
                    error.response?.data ||
                        error.message
                );
            }
        }

        loadAvatar();

        return () => {
            cancelled = true;
        };
    }, []);

    const openAvatarPicker = () => {
        setIsAvatarPickerOpen(true);
    };

    const closeAvatarPicker = () => {
        setIsAvatarPickerOpen(false);
    };

    const handleAvatarSelect = async (
        avatarId
    ) => {
        if (
            !isValidAvatarId(avatarId) ||
            isAvatarSaving
        ) {
            return;
        }

        const previousId =
            selectedAvatarId;

        // 먼저 화면에 반영하고 모달을 닫는다
        setSelectedAvatarId(avatarId);
        closeAvatarPicker();

        if (avatarId === previousId) {
            return;
        }

        setIsAvatarSaving(true);

        try {
            await updateMyProfile({
                profileAvatarId:
                    avatarId,
            });

            writeCachedAvatarId(
                avatarId
            );
        } catch (error) {
            console.error(
                "프로필 캐릭터 저장 실패:",
                error.response?.data ||
                    error.message
            );

            // 저장에 실패하면 원래 캐릭터로 되돌린다
            setSelectedAvatarId(
                previousId
            );

            alert(
                "캐릭터를 저장하지 못했어요. 잠시 후 다시 시도해주세요."
            );
        } finally {
            setIsAvatarSaving(false);
        }
    };

    return {
        selectedAvatar,
        selectedAvatarId,

        isAvatarPickerOpen,
        isAvatarSaving,

        openAvatarPicker,
        closeAvatarPicker,

        handleAvatarSelect,
    };
}

export default useProfileAvatar;