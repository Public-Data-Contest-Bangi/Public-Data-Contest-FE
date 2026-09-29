import REPORT_TYPES from "../constants/reportTypes";

// 신고 유형 코드 → 한글 (reportTypes.js 표 재사용)
const TYPE_LABEL_MAP = REPORT_TYPES.reduce((acc, group) => {
    group.options.forEach((option) => {
        acc[option.value] = option.label;
    });
    return acc;
}, {});

// 신고 상태 코드 → 한글
const STATUS_LABEL_MAP = {
    PENDING: "답변 대기",
    ANSWERED: "답변 완료",
};

export function getReportTypeLabel(type) {
    if (!type) return "";
    return TYPE_LABEL_MAP[String(type).toUpperCase()] || type;
}

export function getReportStatusLabel(status) {
    if (!status) return "";
    return STATUS_LABEL_MAP[String(status).toUpperCase()] || status;
}

export function isReportAnswered(status) {
    if (!status) return false;
    return (
        String(status).toUpperCase() === "ANSWERED" ||
        status === "답변 완료"
    );
}