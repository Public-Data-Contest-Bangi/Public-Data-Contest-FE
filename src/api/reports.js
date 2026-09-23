import api from "./client";

// 불편신고 등록
export const createReport = async ({
    type,
    title,
    content,
    photos = [],
}) => {
    const formData = new FormData();

    formData.append("type", type);
    formData.append("title", title);
    formData.append("content", content);

    photos.forEach((photo) => {
        formData.append("photos", photo);
    });

    const response = await api.post("/api/reports", formData);

    return response.data;
};

// 내 신고 목록 조회
export const getMyReports = async ({
    page = 1,
    size = 10,
} = {}) => {
    const response = await api.get("/api/reports/me", {
        params: {
            page,
            size,
        },
    });

    return response.data;
};

// 내 신고 상세 조회
export const getMyReportDetail = async (reportId) => {
    const response = await api.get(
        `/api/reports/me/${reportId}`
    );

    return response.data;
};

// 내 신고 삭제
export const deleteMyReport = async (reportId) => {
    const response = await api.delete(
        `/api/reports/me/${reportId}`
    );

    return response.data;
};

// 내 신고 첨부 사진 조회
export const getMyReportPhoto = async (
    reportId,
    photoId
) => {
    const response = await api.get(
        `/api/reports/me/${reportId}/photos/${photoId}`,
        {
            responseType: "blob",
        }
    );

    return URL.createObjectURL(
        response.data
    );
};