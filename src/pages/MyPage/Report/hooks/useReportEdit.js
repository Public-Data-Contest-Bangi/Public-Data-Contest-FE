import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { useState } from "react";

import { getReportById } from "../data/reportData";

function useReportEdit() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();

    const report =
        location.state?.report ??
        getReportById(id);

    const [category, setCategory] =
        useState(report?.category ?? "");

    const [title, setTitle] =
        useState(report?.title ?? "");

    const [content, setContent] =
        useState(report?.content ?? "");

    const handleCategoryChange = (
        event
    ) => {
        setCategory(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (
        event
    ) => {
        setContent(event.target.value);
    };

    const handleCancel = () => {
        navigate(
            `/report-history/${id}`
        );
    };

    const handleSubmit = () => {
        if (
            !category.trim() ||
            !title.trim() ||
            !content.trim()
        ) {
            window.alert(
                "모든 항목을 입력해 주세요."
            );

            return;
        }

        const updatedReport = {
            ...report,
            category,
            title,
            content,
        };

        // TODO(API): 신고 수정 API 연결

        navigate(
            `/report-history/${id}`,
            {
                state: {
                    updatedReport,
                },
                replace: true,
            }
        );
    };

    const isValid =
        category.trim() &&
        title.trim() &&
        content.trim();

    return {
        report,
        category,
        title,
        content,
        isValid,
        handleCategoryChange,
        handleTitleChange,
        handleContentChange,
        handleCancel,
        handleSubmit,
    };
}

export default useReportEdit;