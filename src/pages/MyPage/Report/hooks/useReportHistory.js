import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getMyReports } from "../../../../api/reports";

function useReportHistory() {
    const navigate = useNavigate();

    const [reports, setReports] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                setIsLoading(true);

                const response = await getMyReports({
                    page: 1,
                    size: 10,
                });

                console.log(
                    "🔥 신고 목록 전체 응답:",
                    response
                );

                console.log(
                    "🔥 실제 reports:",
                    response?.data?.reports
                );

                const reportList =
                    response?.data?.reports ?? [];

                const formattedReports =
                    reportList.map((report) => {
                        const date =
                            report.createdAt
                                ? report.createdAt
                                    .slice(0, 10)
                                    .replaceAll(
                                        "-",
                                        "."
                                    )
                                : "";

                        let status =
                            report.status;

                        if (
                            report.status ===
                            "WAITING"
                        ) {
                            status =
                                "답변 대기";
                        }

                        if (
                            report.status ===
                            "COMPLETED"
                        ) {
                            status =
                                "답변 완료";
                        }

                        return {
                            id: report.reportId,
                            title: report.title,
                            date,
                            status,
                            type: report.type,
                        };
                    });

                console.log(
                    "🔥 화면에 넣을 데이터:",
                    formattedReports
                );

                setReports(
                    formattedReports
                );
            } catch (error) {
                console.error(
                    "신고 목록 조회 실패:",
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

        fetchReports();
    }, []);

    const handleReportClick = (
        reportId
    ) => {
        navigate(
            `/report-history/${reportId}`
        );
    };

    const handleNewReport = () => {
        navigate("/report/new");
    };

    return {
        reports,
        isLoading,
        handleReportClick,
        handleNewReport,
    };
}

export default useReportHistory;