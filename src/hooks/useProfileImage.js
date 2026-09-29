// useProfileImage.js

import {
    useEffect,
    useRef,
    useState,
} from "react";

export default function useProfileImage(
    defaultImage
) {
    const fileInputRef =
        useRef(null);

    const [
        profileImage,
        setProfileImage,
    ] = useState(defaultImage);

    const [
        profileImageFile,
        setProfileImageFile,
    ] = useState(null);

    useEffect(() => {
        setProfileImage(
            defaultImage
        );
    }, [defaultImage]);

    const handleProfileImageClick =
        () => {
            fileInputRef.current?.click();
        };

    const handleProfileImageChange =
        (e) => {
            const file =
                e.target.files?.[0];

            if (!file) {
                return;
            }

            const imageUrl =
                URL.createObjectURL(
                    file
                );

            setProfileImage(
                imageUrl
            );

            setProfileImageFile(
                file
            );
        };

    return {
        fileInputRef,

        profileImage,
        profileImageFile,

        handleProfileImageClick,
        handleProfileImageChange,
    };
}