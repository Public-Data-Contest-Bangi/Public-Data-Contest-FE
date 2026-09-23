import REPORT_TYPES from "../Report/constants/reportTypes";

import ReportImageUploader from "./ReportImageUploader";

import * as S from "./ReportForm.styled";

function ReportForm({
    form,
    images,
    imageError,
    onChange,
    onImageChange,
    onRemoveImage,
}) {
    return (
        <>
            <S.Field>
                <S.Label>
                    신고 유형
                </S.Label>

                <S.SelectWrapper>
                    <S.Select
                        value={form.type}
                        onChange={(e) =>
                            onChange("type", e.target.value)
                        }
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
                                        key={type.value}
                                        value={type.value}
                                    >
                                        {type.label}
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

                <S.Input
                    type="text"
                    value={form.title}
                    maxLength={50}
                    placeholder="제목을 입력해주세요"
                    onChange={(e) =>
                        onChange(
                            "title",
                            e.target.value
                        )
                    }
                />

                <S.Count>
                    {form.title.length} / 50
                </S.Count>
            </S.Field>

            <S.Field>
                <S.Label>
                    상세내용
                </S.Label>

                <S.Textarea
                    value={form.content}
                    maxLength={1000}
                    placeholder="불편했던 점이나 실제 정보와 다르게 표시된 내용을 자세히 적어 주세요."
                    onChange={(e) =>
                        onChange(
                            "content",
                            e.target.value
                        )
                    }
                />

                <S.Count>
                    {form.content.length} / 1,000
                </S.Count>
            </S.Field>

            <S.ImageUploadSection>
                <ReportImageUploader
                    images={images}
                    onChange={onImageChange}
                    onRemove={onRemoveImage}
                />

                {imageError && (
                    <S.ImageError>
                        {imageError}
                    </S.ImageError>
                )}
            </S.ImageUploadSection>

            <S.Field>
                <S.Label>
                    답변받을 이메일
                </S.Label>

                <S.Input
                    type="email"
                    value={form.email}
                    placeholder="이메일을 입력해주세요"
                    onChange={(e) =>
                        onChange(
                            "email",
                            e.target.value
                        )
                    }
                />
            </S.Field>
        </>
    );
}

export default ReportForm;