import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { useState } from "react";

import { getReportById } from "../data/reportData";

function useReportDetail() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();

    const [isDeleteModalOpen, setIsDeleteModalOpen] =
        useState(false);

    const originalReport = getReportById(id);

    const report =
        location.state?.updatedReport ??
        originalReport;

    const isPending =
        report?.status === "답변 대기";

    const handleEdit = () => {
        navigate(
            `/report-history/${id}/edit`,
            {
                state: {
                    report,
                },
            }
        );
    };

    const handleDelete = () => {
        setIsDeleteModalOpen(true);
    };

    const handleDeleteCancel = () => {
        setIsDeleteModalOpen(false);
    };

    const handleDeleteConfirm = () => {
        // TODO(API): 신고 삭제 API 연결

        setIsDeleteModalOpen(false);

        navigate("/report-history");
    };

    const handleBackToList = () => {
        navigate("/report-history");
    };

    return {
        report,
        isPending,
        isDeleteModalOpen,
        handleEdit,
        handleDelete,
        handleDeleteCancel,
        handleDeleteConfirm,
        handleBackToList,
    };
}

export default useReportDetail;