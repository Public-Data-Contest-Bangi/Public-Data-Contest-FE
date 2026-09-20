import MobileLayout from "../../../components/layout/MobileLayout";
import Header from "../../../components/common/Header";
import Button from "../../../components/common/Button";

import useReportEdit from "./hooks/useReportEdit";
import REPORT_TYPES from "./constants/reportTypes";

import * as S from "./ReportEdit.styled";

function ReportEdit() {
    const {
        report,
        category,
        title,
        content,
        isValid,
        handleCategoryChange,
        handleTitleChange,
        handleContentChange,
        handleCancel,
        handleSubmit,
    } = useReportEdit();

    if (!report) {
        return null;
    }

    return (
        <MobileLayout>
            <S.Inner>
                <Header title="신고 수정" />

                <S.Content>
                    <S.Field>
                        <S.Label>
                            신고 유형
                        </S.Label>

                        <S.SelectWrapper>
                            <S.Select
                                value={category}
                                onChange={handleCategoryChange}
                            >
                                <option value="">
                                    유형을 선택해 주세요
                                </option>

                                {REPORT_TYPES.map((group) => (
                                    <optgroup
                                        key={group.label}
                                        label={group.label}
                                    >
                                        {group.options.map((type) => (
                                            <option
                                                key={type}
                                                value={type}
                                            >
                                                {type}
                                            </option>
                                        ))}
                                    </optgroup>
                                ))}
                            </S.Select>

                            <S.SelectArrow />
                        </S.SelectWrapper>
                    </S.Field>

                    <S.Field>
                        <S.Label>
                            제목
                        </S.Label>

                        <S.TitleInput
                            type="text"
                            value={title}
                            onChange={
                                handleTitleChange
                            }
                            placeholder="신고 제목을 입력해 주세요."
                        />
                    </S.Field>

                    <S.Field>
                        <S.Label>
                            신고 내용
                        </S.Label>

                        <S.ContentInput
                            value={content}
                            onChange={
                                handleContentChange
                            }
                            placeholder="신고 내용을 입력해 주세요."
                            maxLength={500}
                        />

                        <S.CharacterCount>
                            {content.length}/500
                        </S.CharacterCount>
                    </S.Field>

                    <S.Field>
                        <S.Label>
                            첨부 이미지
                        </S.Label>

                        <S.ImageArea>
                            <S.ImageUploadButton
                                type="button"
                            >
                                <S.Plus>
                                    +
                                </S.Plus>

                                <S.UploadText>
                                    사진 추가
                                </S.UploadText>
                            </S.ImageUploadButton>

                            {report.images.map(
                                (
                                    image,
                                    index
                                ) => (
                                    <S.Preview
                                        key={
                                            index
                                        }
                                    >
                                        <S.PreviewImage
                                            src={
                                                image
                                            }
                                            alt={`첨부 이미지 ${index +
                                                1
                                                }`}
                                        />
                                    </S.Preview>
                                )
                            )}
                        </S.ImageArea>

                        <S.ImageGuide>
                            최대 2장까지 첨부할 수
                            있어요.
                        </S.ImageGuide>
                    </S.Field>
                </S.Content>

                <S.ButtonArea>
                    <S.CancelButton
                        type="button"
                        onClick={
                            handleCancel
                        }
                    >
                        취소
                    </S.CancelButton>

                    <S.SubmitArea>
                        <Button
                            height="52px"
                            radius="8px"
                            disabled={
                                !isValid
                            }
                            onClick={
                                handleSubmit
                            }
                        >
                            수정 완료
                        </Button>
                    </S.SubmitArea>
                </S.ButtonArea>
            </S.Inner>
        </MobileLayout>
    );
}

export default ReportEdit;