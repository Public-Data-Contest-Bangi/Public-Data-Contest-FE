import {
    useNavigate,
    useParams,
} from "react-router-dom";

import {
    useEffect,
    useState,
} from "react";

import {
    getMyReportDetail,
    getMyReportPhoto,
    deleteMyReport,
} from "../../../../api/reports";

const REPORT_TYPE_LABEL = {
    FACILITY_INFORMATION:
        "체육시설 정보 오류",

    // 백엔드 enum 확인 후 추가
    // BARRIER_FREE_ROUTE_INFORMATION:
    //     "무장애 경로 정보 오류",

    // SPORTS_CLASS_INFORMATION:
    //     "스포츠강좌 정보 오류",
};

const STATUS_LABEL = {
    WAITING: "답변 대기",
    COMPLETED: "답변 완료",
};

const formatDate = (date) => {
    if (!date) {
        return "";
    }

    return date
        .slice(0, 10)
        .replaceAll("-", ".");
};

function useReportDetail() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [report, setReport] =
        useState(null);

    const [isLoading, setIsLoading] =
        useState(true);

    const [
        isDeleteModalOpen,
        setIsDeleteModalOpen,
    ] = useState(false);

    const [
        isDeleting,
        setIsDeleting,
    ] = useState(false);

    useEffect(() => {
        const fetchReportDetail =
            async () => {
                try {
                    setIsLoading(true);

                    const response =
                        await getMyReportDetail(
                            id
                        );

                    console.log(
                        "신고 상세 API 응답:",
                        response
                    );

                    const data =
                        response.data;

                    // 첨부 사진 조회
                    const images =
                        data.photos?.length
                            ? await Promise.all(
                                  data.photos.map(
                                      async (
                                          photo
                                      ) => {
                                          try {
                                              const photoResponse =
                                                  await getMyReportPhoto(
                                                      data.reportId,
                                                      photo.photoId
                                                  );

                                              console.log(
                                                  `신고 사진 ${photo.photoId} 응답:`,
                                                  photoResponse
                                              );

                                              // 응답이 string 자체인 경우
                                              if (
                                                  typeof photoResponse ===
                                                  "string"
                                              ) {
                                                  return photoResponse;
                                              }

                                              // API 공통 응답 구조인 경우
                                              if (
                                                  typeof photoResponse?.data ===
                                                  "string"
                                              ) {
                                                  return photoResponse.data;
                                              }

                                              // 상세 조회에서 이미 URL을 준 경우 fallback
                                              return (
                                                  photo.url ??
                                                  null
                                              );
                                          } catch (
                                              error
                                          ) {
                                              console.error(
                                                  `신고 사진 ${photo.photoId} 조회 실패:`,
                                                  error
                                              );

                                              return (
                                                  photo.url ??
                                                  null
                                              );
                                          }
                                      }
                                  )
                              )
                            : [];

                    const formattedReport = {
                        id: data.reportId,

                        category:
                            REPORT_TYPE_LABEL[
                                data.type
                            ] ?? data.type,

                        type: data.type,

                        title: data.title,

                        content: data.content,

                        date: formatDate(
                            data.createdAt
                        ),

                        status:
                            STATUS_LABEL[
                                data.status
                            ] ??
                            data.status,

                        images:
                            images.filter(
                                Boolean
                            ),

                        answer:
                            data.answer
                                ?.content ??
                            null,

                        answerDate:
                            formatDate(
                                data.answer
                                    ?.updatedAt ??
                                    data.answer
                                        ?.createdAt
                            ),
                    };

                    console.log(
                        "화면용 신고 상세:",
                        formattedReport
                    );

                    setReport(
                        formattedReport
                    );
                } catch (error) {
                    console.error(
                        "신고 상세 조회 실패:",
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
                } finally {
                    setIsLoading(false);
                }
            };

        if (id) {
            fetchReportDetail();
        }
    }, [id]);

    const isPending =
        report?.status ===
        "답변 대기";

    const handleDelete = () => {
        if (isDeleting) {
            return;
        }

        setIsDeleteModalOpen(true);
    };

    const handleDeleteCancel = () => {
        if (isDeleting) {
            return;
        }

        setIsDeleteModalOpen(false);
    };

    const handleDeleteConfirm =
        async () => {
            if (isDeleting || !id) {
                return;
            }

            try {
                setIsDeleting(true);

                const response =
                    await deleteMyReport(
                        id
                    );

                console.log(
                    "신고 삭제 성공:",
                    response
                );

                setIsDeleteModalOpen(
                    false
                );

                navigate(
                    "/report-history"
                );
            } catch (error) {
                console.error(
                    "신고 삭제 실패:",
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
            } finally {
                setIsDeleting(false);
            }
        };

    const handleBackToList = () => {
        navigate("/report-history");
    };

    return {
        report,

        isLoading,
        isPending,
        isDeleting,
        isDeleteModalOpen,

        handleDelete,
        handleDeleteCancel,
        handleDeleteConfirm,
        handleBackToList,
    };
}

export default useReportDetail;