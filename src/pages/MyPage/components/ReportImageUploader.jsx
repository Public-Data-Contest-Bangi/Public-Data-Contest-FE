import { useRef } from "react";

import * as S from "./ReportForm.styled";

function ReportImageUploader({
    images,
    onChange,
    onRemove,
}) {
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        onChange(e.target.files);

        e.target.value = "";
    };

    return (
        <S.Field>
            <S.Label>
                사진첨부
                <S.Optional>
                    (선택, 최대 3장)
                </S.Optional>
            </S.Label>

            <S.ImageList>
                {images.map(
                    (image, index) => (
                        <S.ImageBox
                            key={image.preview}
                        >
                            <S.PreviewImage
                                src={
                                    image.preview
                                }
                                alt={`첨부 이미지 ${
                                    index + 1
                                }`}
                            />

                            <S.RemoveButton
                                type="button"
                                onClick={() =>
                                    onRemove(
                                        index
                                    )
                                }
                            >
                                ×
                            </S.RemoveButton>
                        </S.ImageBox>
                    )
                )}

                {images.length < 3 && (
                    <S.AddImageButton
                        type="button"
                        onClick={() =>
                            fileInputRef.current?.click()
                        }
                    >
                        <S.Plus>+</S.Plus>

                        <span>
                            {images.length}/3
                        </span>
                    </S.AddImageButton>
                )}
            </S.ImageList>

            <S.HiddenInput
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg"
                multiple
                onChange={handleChange}
            />
        </S.Field>
    );
}

export default ReportImageUploader;