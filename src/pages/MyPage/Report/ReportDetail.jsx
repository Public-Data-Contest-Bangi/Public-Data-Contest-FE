import MobileLayout from "../../../components/layout/MobileLayout";
import Header from "../../../components/common/Header";
import Button from "../../../components/common/Button";
import ConfirmModal from "../../../components/common/ConfirmModal";

import useReportDetail from "./hooks/useReportDetail";

import * as S from "./ReportDetail.styled";

function ReportDetail() {
    const {
        report,
        isPending,
        isDeleteModalOpen,
        handleEdit,
        handleDelete,
        handleDeleteCancel,
        handleDeleteConfirm,
        handleBackToList,
    } = useReportDetail();

    if (!report) {
        return null;
    }

    return (
        <MobileLayout>
            <S.Inner>
                <Header title="신고 상세" />

                <S.Content>
                    <S.BadgeArea>
                        <S.CategoryBadge>
                            {report.category}
                        </S.CategoryBadge>

                        <S.StatusBadge
                            $isCompleted={
                                report.status === "답변 완료"
                            }
                        >
                            {report.status}
                        </S.StatusBadge>
                    </S.BadgeArea>

                    <S.Title>
                        {report.title}
                    </S.Title>

                    <S.Date>
                        {report.date}
                    </S.Date>

                    <S.ContentBox>
                        {report.content}
                    </S.ContentBox>

                    <S.ImageArea>
                        {report.images.length > 0 ? (
                            report.images.map(
                                (image, index) => (
                                    <S.ReportImage
                                        key={index}
                                        src={image}
                                        alt={`신고 첨부 이미지 ${
                                            index + 1
                                        }`}
                                    />
                                )
                            )
                        ) : (
                            <>
                                <S.ImagePlaceholder />
                                <S.ImagePlaceholder />
                            </>
                        )}
                    </S.ImageArea>

                    {isPending && (
                        <S.EditButtonArea>
                            <S.EditButton
                                type="button"
                                onClick={handleEdit}
                            >
                                수정
                            </S.EditButton>

                            <S.DeleteButton
                                type="button"
                                onClick={handleDelete}
                            >
                                삭제
                            </S.DeleteButton>
                        </S.EditButtonArea>
                    )}

                    {!isPending &&
                        report.answer && (
                            <S.AnswerArea>
                                <S.AnswerTitle>
                                    받은 답변
                                </S.AnswerTitle>

                                <S.AnswerBox>
                                    <S.AnswerText>
                                        {report.answer}
                                    </S.AnswerText>

                                    <S.AnswerDate>
                                        {report.answerDate}
                                    </S.AnswerDate>
                                </S.AnswerBox>
                            </S.AnswerArea>
                        )}
                </S.Content>

                <S.ButtonArea>
                    <Button
                        height="52px"
                        radius="8px"
                        onClick={handleBackToList}
                    >
                        목록으로 돌아가기
                    </Button>
                </S.ButtonArea>
            </S.Inner>

            {isDeleteModalOpen && (
                <ConfirmModal
                    title="신고를 삭제하시겠습니까?"
                    description="삭제한 신고는 다시 복구할 수 없어요."
                    cancelText="취소"
                    confirmText="삭제"
                    onCancel={handleDeleteCancel}
                    onConfirm={handleDeleteConfirm}
                />
            )}
        </MobileLayout>
    );
}

export default ReportDetail;