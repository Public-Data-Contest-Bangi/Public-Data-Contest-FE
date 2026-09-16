import { useNavigate } from "react-router-dom";

import MobileLayout from "../../../components/layout/MobileLayout";
import Header from "../../../components/common/Header";
import Button from "../../../components/common/Button";

import * as S from "./ReportHistory.styled";

const REPORTS = [
    {
        id: 1,
        date: "2026.08.20",
        title: "잠실종합운동장 위치 정보가 실제와 달라요",
    },
    {
        id: 2,
        date: "2026.08.03",
        title: "무장애 경로가 실제 경로와 달라요",
    },
    {
        id: 3,
        date: "2026.06.29",
        title: "프로필 사진이 바뀌지 않아요",
    },
];

function ReportHistory() {
    const navigate = useNavigate();

    return (
        <MobileLayout>
            <S.Inner>
                <Header title="신고 내역" />

                <S.Content>
                    <S.ReportList>
                        {REPORTS.map((report) => (
                            <S.ReportItem
                                key={report.id}
                                type="button"
                                onClick={() =>
                                    navigate(
                                        `/report-history/${report.id}`
                                    )
                                }
                            >
                                <S.ReportInfo>
                                    <S.Date>
                                        {report.date}
                                    </S.Date>

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
                            onClick={() =>
                                navigate("/report/new")
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