import client from "./client";

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
        formData.append(
            "photos",
            photo
        );
    });

    const response = await client.post(
        "/api/reports",
        formData
    );

    return response.data;
};