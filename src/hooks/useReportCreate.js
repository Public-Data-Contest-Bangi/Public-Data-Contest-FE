import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createReport } from "../api/reports";

function useReportCreate() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        type: "",
        title: "",
        content: "",
        email: "",
    });

    const [images, setImages] = useState([]);

    const handleChange = (name, value) => {
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (files) => {
        const selectedFiles = Array.from(files);

        const validFiles = selectedFiles.filter(
            (file) =>
                file.type.startsWith("image/") &&
                file.size <= 10 * 1024 * 1024
        );

        const availableCount =
            3 - images.length;

        const newImages = validFiles
            .slice(0, availableCount)
            .map((file) => ({
                file,
                preview:
                    URL.createObjectURL(file),
            }));

        setImages((prev) => [
            ...prev,
            ...newImages,
        ]);
    };

    const handleRemoveImage = (index) => {
        setImages((prev) => {
            URL.revokeObjectURL(
                prev[index].preview
            );

            return prev.filter(
                (_, i) => i !== index
            );
        });
    };

    const isValid =
        form.type &&
        form.title.trim() &&
        form.content.trim();

    const handleSubmit = async () => {
        if (!isValid) {
            return;
        }

        try {
            const response =
                await createReport({
                    type: form.type,
                    title: form.title.trim(),
                    content:
                        form.content.trim(),

                    // 여기 중요
                    photos: images.map(
                        (image) => image.file
                    ),
                });

            console.log(
                "불편신고 등록 성공:",
                response
            );

            navigate("/report-history");
        } catch (error) {
            console.error(
                "불편신고 등록 실패:",
                error
            );

            console.error(
                "서버 응답:",
                error.response?.data
            );

            console.error(
                "상태 코드:",
                error.response?.status
            );
        }
    };

    return {
        form,
        images,
        isValid,

        handleChange,
        handleImageChange,
        handleRemoveImage,
        handleSubmit,
    };
}

export default useReportCreate;