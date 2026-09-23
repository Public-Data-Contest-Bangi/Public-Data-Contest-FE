import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createReport } from "../api/report";

function useReportCreate() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        type: "",
        title: "",
        content: "",
    });

    const [images, setImages] = useState([]);
    const [imageError, setImageError] =
        useState("");

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const handleChange = (name, value) => {
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (files) => {
        // 여기 부분은 네 기존 이미지 처리 코드
        // 그대로 유지해도 됨

        const newFiles = Array.from(files);

        if (
            images.length +
                newFiles.length >
            3
        ) {
            setImageError(
                "사진은 최대 3장까지 등록할 수 있습니다."
            );
            return;
        }

        setImageError("");

        setImages((prev) => [
            ...prev,
            ...newFiles,
        ]);
    };

    const handleRemoveImage = (index) => {
        setImages((prev) =>
            prev.filter(
                (_, i) => i !== index
            )
        );
    };

    const isValid = useMemo(() => {
        return (
            form.type.trim() &&
            form.title.trim() &&
            form.content.trim()
        );
    }, [form]);

    const handleSubmit = async () => {
        if (!isValid || isSubmitting) {
            return;
        }

        try {
            setIsSubmitting(true);

            const response =
                await createReport({
                    type: form.type,
                    title: form.title,
                    content: form.content,
                    photos: images,
                });

            console.log(
                "불편신고 등록 성공",
                response
            );

            navigate("/report-history");
        } catch (error) {
            console.error(
                "불편신고 등록 실패",
                error
            );

            console.error(
                "서버 응답",
                error.response?.data
            );
        } finally {
            setIsSubmitting(false);
        }
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