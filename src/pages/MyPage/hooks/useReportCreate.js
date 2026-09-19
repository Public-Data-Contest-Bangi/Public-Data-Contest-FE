import { useState } from "react";

const MAX_IMAGES = 3;

const ALLOWED_IMAGE_TYPES = [
    "image/jpeg",
    "image/png",
];

function useReportCreate() {
    const [form, setForm] = useState({
        type: "",
        title: "",
        content: "",
        email: "",
    });

    const [images, setImages] = useState([]);
    const [imageError, setImageError] = useState("");

    const handleChange = (name, value) => {
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files ?? []);

        if (!files.length) {
            return;
        }

        const invalidFile = files.find(
            (file) =>
                !ALLOWED_IMAGE_TYPES.includes(file.type)
        );

        if (invalidFile) {
            setImageError(
                "JPG·PNG 파일만 첨부할 수 있습니다."
            );

            e.target.value = "";
            return;
        }

        if (
            images.length + files.length >
            MAX_IMAGES
        ) {
            setImageError(
                "사진은 최대 3장까지 첨부할 수 있습니다."
            );

            e.target.value = "";
            return;
        }

        const newImages = files.map((file) => ({
            id: `${file.name}-${file.lastModified}`,
            file,
            preview: URL.createObjectURL(file),
        }));

        setImages((prev) => [
            ...prev,
            ...newImages,
        ]);

        setImageError("");

        e.target.value = "";
    };

    const handleRemoveImage = (id) => {
        setImages((prev) => {
            const target = prev.find(
                (image) => image.id === id
            );

            if (target) {
                URL.revokeObjectURL(
                    target.preview
                );
            }

            return prev.filter(
                (image) => image.id !== id
            );
        });

        setImageError("");
    };

    const isValid =
        form.type.trim() &&
        form.title.trim() &&
        form.content.trim();

    const handleSubmit = () => {
        if (!isValid) return;

        console.log("신고 폼:", form);

        console.log(
            "첨부 이미지:",
            images.map((image) => image.file)
        );

        // TODO: API 연결
    };

    return {
        form,
        images,
        imageError,
        isValid,

        handleChange,
        handleImageChange,
        handleRemoveImage,
        handleSubmit,
    };
}

export default useReportCreate;