import MobileLayout from "../../../components/layout/MobileLayout";
import Header from "../../../components/common/Header";
import Button from "../../../components/common/Button";
import BottomNav from "../../../components/BottomNav";

import useReportHistory from "./hooks/useReportHistory";
import {
    getReportStatusLabel,
    isReportAnswered,
} from "./utils/reportLabels";

import * as S from "./ReportHistory.styled";

function ReportHistory() {
    const {
        reports,
        isLoading,
        handleReportClick,
        handleNewReport,
    } = useReportHistory();

    return (
        <MobileLayout>
            <S.Inner>
                <Header title="신고 내역" />

                <S.Content>
                    {isLoading ? null : reports.length === 0 ? (
                        <S.EmptyState>
                            아직 등록한 신고가 없어요.
                            <br />
                            불편한 점이 있다면 새 신고를 작성해 주세요.
                        </S.EmptyState>
                    ) : (
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
                                                $isCompleted={isReportAnswered(
                                                    report.status
                                                )}
                                            >
                                                {getReportStatusLabel(
                                                    report.status
                                                )}
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
                    )}

                    <S.ButtonArea>
                        <Button
                            height="52px"
                            radius="10px"
                            onClick={handleNewReport}
                        >
                            새 신고
                        </Button>
                    </S.ButtonArea>
                </S.Content>

                <BottomNav />
            </S.Inner>
        </MobileLayout>
    );
}

export default ReportHistory;