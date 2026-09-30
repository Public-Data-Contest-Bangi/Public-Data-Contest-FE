import {
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    createReportAnswer,
    deleteReportAnswer,
    getAdminReportDetail,
    getAdminReportPhoto,
    getAdminReports,
    updateReportAnswer,
} from "../../../api/adminReport";

export default function useAdminReports() {
    const [reports, setReports] =
        useState([]);

    const [
        selectedReport,
        setSelectedReport,
    ] = useState(null);

    const [filter, setFilter] =
        useState("ALL");

    const [answer, setAnswer] =
        useState("");

    const [
        originalAnswer,
        setOriginalAnswer,
    ] = useState("");

    const [
        isEditingAnswer,
        setIsEditingAnswer,
    ] = useState(false);

    const [isLoading, setIsLoading] =
        useState(true);

    const [
        isDetailLoading,
        setIsDetailLoading,
    ] = useState(false);

    const [error, setError] =
        useState("");

    const [modal, setModal] =
        useState({
            open: false,
            title: "",
            message: "",
            type: "notice",
            onConfirm: null,
        });

    const openNoticeModal = (
        title,
        message
    ) => {
        setModal({
            open: true,
            title,
            message,
            type: "notice",
            onConfirm: null,
        });
    };

    const openConfirmModal = (
        title,
        message,
        onConfirm
    ) => {
        setModal({
            open: true,
            title,
            message,
            type: "confirm",
            onConfirm,
        });
    };

    const closeModal = () => {
        setModal({
            open: false,
            title: "",
            message: "",
            type: "notice",
            onConfirm: null,
        });
    };

    const handleModalConfirm =
        async () => {
            const action =
                modal.onConfirm;

            closeModal();

            if (action) {
                await action();
            }
        };

    const fetchReports = async () => {
        try {
            setIsLoading(true);
            setError("");

            let page = 1;
            let hasNext = true;

            const allReports = [];

            while (hasNext) {
                const response =
                    await getAdminReports({
                        page,
                        size: 20,
                    });

                const data =
                    response.data;

                allReports.push(
                    ...(data?.reports ?? [])
                );

                hasNext =
                    data?.hasNext ??
                    false;

                page += 1;
            }

            setReports(allReports);
        } catch (error) {
            console.error(
                "관리자 신고 목록 조회 실패:",
                error.response?.data ??
                error
            );

            setError(
                error.response?.data
                    ?.message ??
                "신고 목록을 불러오지 못했습니다."
            );
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchReports();
    }, []);

    const filteredReports =
        useMemo(() => {
            if (filter === "ALL") {
                return reports;
            }

            return reports.filter(
                (report) =>
                    report.status ===
                    filter
            );
        }, [reports, filter]);

    const getCount = (status) => {
        if (status === "ALL") {
            return reports.length;
        }

        return reports.filter(
            (report) =>
                report.status ===
                status
        ).length;
    };

    const handleReportClick =
        async (report) => {
            try {
                setIsDetailLoading(
                    true
                );

                const response =
                    await getAdminReportDetail(
                        report.reportId
                    );

                const detail =
                    response.data;

                const photos =
                    await Promise.all(
                        (detail.photos ?? []).map(
                            async (photo) => {
                                try {
                                    const displayUrl =
                                        await getAdminReportPhoto(
                                            detail.reportId,
                                            photo.photoId
                                        );

                                    return {
                                        ...photo,
                                        displayUrl,
                                    };
                                } catch (error) {
                                    console.error(
                                        "신고 사진 조회 실패:",
                                        error.response?.data ??
                                        error
                                    );

                                    return {
                                        ...photo,
                                        displayUrl: null,
                                    };
                                }
                            }
                        )
                    );

                const answerContent =
                    detail.answer
                        ?.content ?? "";

                setSelectedReport({
                    ...detail,
                    photos,
                });

                setAnswer(
                    answerContent
                );

                setOriginalAnswer(
                    answerContent
                );

                setIsEditingAnswer(
                    false
                );
            } catch (error) {
                console.error(
                    "신고 상세 조회 실패:",
                    error.response?.data ??
                    error
                );

                openNoticeModal(
                    "신고 조회 실패",
                    error.response?.data
                        ?.message ??
                    "신고 상세 정보를 불러오지 못했습니다."
                );
            } finally {
                setIsDetailLoading(
                    false
                );
            }
        };

    const handleBack = () => {
        setSelectedReport(null);

        setAnswer("");
        setOriginalAnswer("");

        setIsEditingAnswer(false);
    };

    const handleEditStart = () => {
        setOriginalAnswer(answer);

        setIsEditingAnswer(true);
    };

    const handleEditCancel = () => {
        setAnswer(originalAnswer);

        setIsEditingAnswer(false);
    };

    const handleAnswerSubmit =
        async () => {
            if (!selectedReport) {
                return;
            }

            const content =
                answer.trim();

            if (!content) {
                openNoticeModal(
                    "답변을 입력해주세요",
                    "사용자에게 전달할 답변 내용을 입력해주세요."
                );

                return;
            }

            try {
                const isUpdate =
                    selectedReport.status ===
                    "ANSWERED";

                let response;

                if (isUpdate) {
                    response =
                        await updateReportAnswer(
                            selectedReport.reportId,
                            content
                        );
                } else {
                    response =
                        await createReportAnswer(
                            selectedReport.reportId,
                            content
                        );
                }

                if (!response.success) {
                    return;
                }

                const result =
                    response.data;

                const updatedContent =
                    result.answer
                        ?.content ??
                    content;

                const updatedAnswer = {
                    ...(selectedReport.answer ??
                        {}),

                    ...(result.answer ??
                        {}),

                    content:
                        updatedContent,
                };

                setSelectedReport(
                    (prev) => ({
                        ...prev,

                        status:
                            "ANSWERED",

                        answer:
                            updatedAnswer,
                    })
                );

                setReports((prev) =>
                    prev.map(
                        (report) =>
                            report.reportId ===
                                selectedReport.reportId
                                ? {
                                    ...report,
                                    status:
                                        "ANSWERED",
                                }
                                : report
                    )
                );

                setAnswer(
                    updatedContent
                );

                setOriginalAnswer(
                    updatedContent
                );

                setIsEditingAnswer(
                    false
                );

                openNoticeModal(
                    isUpdate
                        ? "답변 수정 완료"
                        : "답변 등록 완료",
                    isUpdate
                        ? "답변이 수정되었습니다."
                        : "답변이 등록되었습니다."
                );
            } catch (error) {
                console.error(
                    "관리자 답변 처리 실패:",
                    error.response?.data ??
                    error
                );

                openNoticeModal(
                    "답변 처리 실패",
                    error.response?.data
                        ?.message ??
                    "답변 처리 중 문제가 발생했습니다."
                );
            }
        };

    const handleAnswerDelete = () => {
        if (!selectedReport) {
            return;
        }

        openConfirmModal(
            "답변을 삭제하시겠어요?",
            "삭제한 답변은 다시 복구할 수 없어요.",
            async () => {
                try {
                    const response =
                        await deleteReportAnswer(
                            selectedReport.reportId
                        );

                    if (
                        !response.success
                    ) {
                        return;
                    }

                    setSelectedReport(
                        (prev) => ({
                            ...prev,
                            status:
                                "WAITING",
                            answer: null,
                        })
                    );

                    setReports((prev) =>
                        prev.map(
                            (
                                report
                            ) =>
                                report.reportId ===
                                    selectedReport.reportId
                                    ? {
                                        ...report,
                                        status:
                                            "WAITING",
                                    }
                                    : report
                        )
                    );

                    setAnswer("");
                    setOriginalAnswer("");

                    setIsEditingAnswer(
                        false
                    );

                    openNoticeModal(
                        "답변 삭제 완료",
                        "등록한 답변이 삭제되었습니다."
                    );
                } catch (error) {
                    console.error(
                        "관리자 답변 삭제 실패:",
                        error.response
                            ?.data ??
                        error
                    );

                    openNoticeModal(
                        "답변 삭제 실패",
                        error.response
                            ?.data
                            ?.message ??
                        "답변 삭제 중 문제가 발생했습니다."
                    );
                }
            }
        );
    };

    return {
        reports,
        filteredReports,

        selectedReport,

        filter,
        setFilter,

        answer,
        setAnswer,

        isEditingAnswer,

        isLoading,
        isDetailLoading,
        error,

        modal,

        getCount,

        handleReportClick,
        handleBack,

        handleEditStart,
        handleEditCancel,

        handleAnswerSubmit,
        handleAnswerDelete,

        closeModal,
        handleModalConfirm,
    };
}