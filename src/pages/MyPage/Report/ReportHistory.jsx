import MobileLayout from "../../../components/layout/MobileLayout";
import Header from "../../../components/common/Header";
import Button from "../../../components/common/Button";

import useReportHistory from "./hooks/useReportHistory";

import * as S from "./ReportHistory.styled";

function ReportHistory() {
    const {
        reports,
        handleReportClick,
        handleNewReport,
    } = useReportHistory();

    return (
        <MobileLayout>
            <S.Inner>
                <Header title="신고 내역" />

                <S.Content>
                    <S.ReportList>
                        {reports.map((report) => (
                            <S.ReportItem
                                key={report.id}
                                type="button"
                                onClick={() =>
                                    handleReportClick(
                                        report.id
                                    )
                                }
                            >
                                <S.ReportInfo>
                                    <S.TopArea>
                                        <S.Date>
                                            {report.date}
                                        </S.Date>

                                        <S.StatusBadge
                                            $isCompleted={
                                                report.status ===
                                                "답변 완료"
                                            }
                                        >
                                            {report.status}
                                        </S.StatusBadge>
                                    </S.TopArea>

                                    <S.ReportTitle>
                                        {report.title}
                                    </S.ReportTitle>
                                </S.ReportInfo>

                                <S.Arrow />
                            </S.ReportItem>
                        ))}
                    </S.ReportList>

                    <S.ButtonArea>
                        <Button
                            height="52px"
                            radius="10px"
                            onClick={
                                handleNewReport
                            }
                        >
                            새 신고
                        </Button>
                    </S.ButtonArea>
                </S.Content>
            </S.Inner>
        </MobileLayout>
    );
}

export default ReportHistory;