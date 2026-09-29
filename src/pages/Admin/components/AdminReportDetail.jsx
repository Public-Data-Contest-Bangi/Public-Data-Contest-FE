import Header from "../../../components/common/Header";

import {
    REPORT_TYPE_LABEL,
} from "../constants/adminReportConstants";

import {
    formatAdminReportDate,
} from "../utils/adminReportUtils";

import * as S from "../AdminPage.styled";

export default function AdminReportDetail({
    report,

    answer,
    setAnswer,

    isEditingAnswer,
    isLoading,

    onBack,

    onEditStart,
    onEditCancel,

    onSubmit,
    onDelete,
}) {
    if (isLoading) {
        return (
            <S.EmptyList>
                신고 내용을 불러오는 중이에요.
            </S.EmptyList>
        );
    }

    const isAnswered =
        report.status === "ANSWERED";

    const isReadOnly =
        isAnswered &&
        !isEditingAnswer;

    return (
        <>
            <Header
                title="신고 상세"
                onBack={onBack}
            />

            <S.DetailContent>
                <S.StatusRow>
                    <S.DetailLabel>
                        처리 상태
                    </S.DetailLabel>

                    <S.Status
                        $completed={
                            isAnswered
                        }
                    >
                        {isAnswered
                            ? "답변 완료"
                            : "답변 대기"}
                    </S.Status>
                </S.StatusRow>

                <S.DetailBlock>
                    <S.DetailLabel>
                        신고 유형
                    </S.DetailLabel>

                    <S.DetailValue>
                        {REPORT_TYPE_LABEL[
                            report.type
                        ] ??
                            report.type}
                    </S.DetailValue>
                </S.DetailBlock>

                <S.DetailBlock>
                    <S.DetailLabel>
                        제목
                    </S.DetailLabel>

                    <S.DetailValue>
                        {report.title}
                    </S.DetailValue>
                </S.DetailBlock>

                <S.DetailBlock>
                    <S.DetailLabel>
                        신고 내용
                    </S.DetailLabel>

                    <S.ReportContent>
                        {report.content}
                    </S.ReportContent>
                </S.DetailBlock>

                {report.photos?.length >
                    0 && (
                    <S.DetailBlock>
                        <S.DetailLabel>
                            첨부 사진
                        </S.DetailLabel>

                        <S.PhotoGrid>
                            {report.photos.map(
                                (
                                    photo
                                ) => (
                                    <S.PhotoImage
                                        key={
                                            photo.photoId
                                        }
                                        src={
                                            photo.displayUrl ??
                                            photo.url
                                        }
                                        alt="신고 첨부 사진"
                                    />
                                )
                            )}
                        </S.PhotoGrid>
                    </S.DetailBlock>
                )}

                <S.DetailBlock>
                    <S.DetailLabel>
                        신고일
                    </S.DetailLabel>

                    <S.DetailValue>
                        {formatAdminReportDate(
                            report.createdAt
                        )}
                    </S.DetailValue>
                </S.DetailBlock>

                <S.Divider />

                <S.AnswerArea>
                    <S.AnswerTitle>
                        관리자 답변
                    </S.AnswerTitle>

                    <S.Textarea
                        placeholder="사용자에게 전달할 답변을 입력해주세요."
                        value={answer}
                        readOnly={
                            isReadOnly
                        }
                        $readOnly={
                            isReadOnly
                        }
                        onChange={(e) =>
                            setAnswer(
                                e.target.value
                            )
                        }
                    />

                    <S.ButtonArea>
                        {isAnswered ? (
                            isEditingAnswer ? (
                                <>
                                    <S.DeleteButton
                                        type="button"
                                        onClick={
                                            onEditCancel
                                        }
                                    >
                                        수정 취소
                                    </S.DeleteButton>

                                    <S.SubmitButton
                                        type="button"
                                        onClick={
                                            onSubmit
                                        }
                                    >
                                        답변 저장
                                    </S.SubmitButton>
                                </>
                            ) : (
                                <>
                                    <S.DeleteButton
                                        type="button"
                                        onClick={
                                            onDelete
                                        }
                                    >
                                        답변 삭제
                                    </S.DeleteButton>

                                    <S.SubmitButton
                                        type="button"
                                        onClick={
                                            onEditStart
                                        }
                                    >
                                        답변 수정
                                    </S.SubmitButton>
                                </>
                            )
                        ) : (
                            <S.SubmitButton
                                type="button"
                                onClick={
                                    onSubmit
                                }
                            >
                                답변 등록
                            </S.SubmitButton>
                        )}
                    </S.ButtonArea>
                </S.AnswerArea>
            </S.DetailContent>
        </>
    );
}