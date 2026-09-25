import {
    ADMIN_REPORT_FILTERS,
    REPORT_TYPE_LABEL,
} from "../constants/adminReportConstants";

import { formatAdminReportDate } from "../utils/adminReportUtils";

import * as S from "../AdminPage.styled";

export default function AdminReportList({
    reports,
    filter,
    setFilter,
    getCount,
    onReportClick,
}) {
    return (
        <>
            <S.Header>
                <S.Title>
                    관리자 페이지
                </S.Title>

                <S.Description>
                    사용자 신고 내역을 확인하고
                    답변을 관리할 수 있어요.
                </S.Description>
            </S.Header>

            <S.FilterList>
                {ADMIN_REPORT_FILTERS.map(
                    (item) => (
                        <S.FilterButton
                            key={item.value}
                            type="button"
                            $active={
                                filter ===
                                item.value
                            }
                            onClick={() =>
                                setFilter(
                                    item.value
                                )
                            }
                        >
                            {item.label}

                            <S.FilterCount>
                                {getCount(
                                    item.value
                                )}
                            </S.FilterCount>
                        </S.FilterButton>
                    )
                )}
            </S.FilterList>

            <S.SectionHeader>
                <S.SectionTitle>
                    신고 목록
                </S.SectionTitle>

                <S.TotalCount>
                    총 {reports.length}건
                </S.TotalCount>
            </S.SectionHeader>

            {reports.length > 0 ? (
                <S.ReportList>
                    {reports.map(
                        (report) => (
                            <S.ReportItem
                                key={
                                    report.reportId
                                }
                                type="button"
                                onClick={() =>
                                    onReportClick(
                                        report
                                    )
                                }
                            >
                                <S.ReportTop>
                                    <S.Status
                                        $completed={
                                            report.status ===
                                            "ANSWERED"
                                        }
                                    >
                                        {report.status ===
                                        "ANSWERED"
                                            ? "답변 완료"
                                            : "답변 대기"}
                                    </S.Status>

                                    <S.Date>
                                        {formatAdminReportDate(
                                            report.createdAt
                                        )}
                                    </S.Date>
                                </S.ReportTop>

                                <S.ReportTitle>
                                    {
                                        report.title
                                    }
                                </S.ReportTitle>

                                <S.ReportBottom>
                                    <S.ReportPreview>
                                        {REPORT_TYPE_LABEL[
                                            report
                                                .type
                                        ] ??
                                            report.type}
                                    </S.ReportPreview>

                                    <S.Chevron>
                                        ›
                                    </S.Chevron>
                                </S.ReportBottom>
                            </S.ReportItem>
                        )
                    )}
                </S.ReportList>
            ) : (
                <S.EmptyList>
                    해당 상태의 신고가 없어요.
                </S.EmptyList>
            )}
        </>
    );
}