import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    const handleSubmit = () => {
        if (!isValid) {
            return;
        }

        console.log({
            ...form,
            images,
        });

        // 추후 API 연결

        navigate("/report-history");
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