import { useState } from "react";

import { PROFILE_AVATARS } from "../data/profileAvatars";

const STORAGE_KEY = "profileAvatar";

function useProfileAvatar() {
    const [selectedAvatarId, setSelectedAvatarId] = useState(() => {
        return (
            localStorage.getItem(STORAGE_KEY) ??
            PROFILE_AVATARS[0].id
        );
    });

    const [isAvatarPickerOpen, setIsAvatarPickerOpen] =
        useState(false);

    const selectedAvatar =
        PROFILE_AVATARS.find(
            (avatar) => avatar.id === selectedAvatarId
        ) ?? PROFILE_AVATARS[0];

    const openAvatarPicker = () => {
        setIsAvatarPickerOpen(true);
    };

    const closeAvatarPicker = () => {
        setIsAvatarPickerOpen(false);
    };

    const handleAvatarSelect = (avatarId) => {
        setSelectedAvatarId(avatarId);

        localStorage.setItem(
            STORAGE_KEY,
            avatarId
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