// useProfileAvatar.js

import {
    useEffect,
    useState,
} from "react";

import {
    PROFILE_AVATARS,
} from "../data/profileAvatars";

const STORAGE_KEY =
    "profileAvatar";

const STORAGE_IMAGE_KEY =
    "profileAvatarImage";

function useProfileAvatar() {
    const [
        selectedAvatarId,
        setSelectedAvatarId,
    ] = useState(() => {
        const savedAvatarId =
            localStorage.getItem(
                STORAGE_KEY
            );

        const exists =
            PROFILE_AVATARS.some(
                (avatar) =>
                    avatar.id ===
                    savedAvatarId
            );

        return exists
            ? savedAvatarId
            : PROFILE_AVATARS[0].id;
    });

    const [
        isAvatarPickerOpen,
        setIsAvatarPickerOpen,
    ] = useState(false);

    const selectedAvatar =
        PROFILE_AVATARS.find(
            (avatar) =>
                avatar.id ===
                selectedAvatarId
        ) ??
        PROFILE_AVATARS[0];

    useEffect(() => {
        localStorage.setItem(
            STORAGE_KEY,
            selectedAvatar.id
        );

        localStorage.setItem(
            STORAGE_IMAGE_KEY,
            selectedAvatar.image
        );
    }, [selectedAvatar]);

    const openAvatarPicker =
        () => {
            setIsAvatarPickerOpen(
                true
            );
        };

    const closeAvatarPicker =
        () => {
            setIsAvatarPickerOpen(
                false
            );
        };

    const handleAvatarSelect = (
        avatarId
    ) => {
        const avatar =
            PROFILE_AVATARS.find(
                (item) =>
                    item.id ===
                    avatarId
            );

        if (!avatar) {
            return;
        }

        setSelectedAvatarId(
            avatar.id
        );

        localStorage.setItem(
            STORAGE_KEY,
            avatar.id
        );

        localStorage.setItem(
            STORAGE_IMAGE_KEY,
            avatar.image
        );

        closeAvatarPicker();
    };

    return {
        selectedAvatar,
        selectedAvatarId,

        isAvatarPickerOpen,

        openAvatarPicker,
        closeAvatarPicker,

        handleAvatarSelect,
    };
}

export default useProfileAvatar;