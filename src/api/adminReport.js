import client from "./client";

// 전체 신고 목록 조회
export const getAdminReports = async ({
    page = 1,
    size = 20,
} = {}) => {
    const response = await client.get(
        "/api/admin/reports",
        {
            params: {
                page,
                size,
            },
        }
    );

    return response.data;
};

// 신고 상세 조회
export const getAdminReportDetail = async (
    reportId
) => {
    const response = await client.get(
        `/api/admin/reports/${reportId}`
    );

    return response.data;
};

// 신고 첨부 사진 조회
export const getAdminReportPhoto = async (
    reportId,
    photoId
) => {
    const response = await client.get(
        `/api/admin/reports/${reportId}/photos/${photoId}`
    );

    return response.data;
};

// 답변 등록
export const createReportAnswer = async (
    reportId,
    content
) => {
    const response = await client.post(
        `/api/admin/reports/${reportId}/answer`,
        {
            content,
        }
    );

    return response.data;
};

// 답변 수정
export const updateReportAnswer = async (
    reportId,
    content
) => {
    const response = await client.patch(
        `/api/admin/reports/${reportId}/answer`,
        {
            content,
        }
    );

    return response.data;
};

// 답변 삭제
export const deleteReportAnswer = async (
    reportId
) => {
    const response = await client.delete(
        `/api/admin/reports/${reportId}/answer`
    );

    return response.data;
};