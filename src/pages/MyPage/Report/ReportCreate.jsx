import MobileLayout from "../../../components/layout/MobileLayout";
import Header from "../../../components/common/Header";
import Button from "../../../components/common/Button";

import ReportForm from "../components/ReportForm";
import useReportCreate from "../../../hooks/useReportCreate";

import * as S from "./ReportCreate.styled";

function ReportCreate() {
    const {
        form,
        images,
        imageError,
        isValid,
        handleChange,
        handleImageChange,
        handleRemoveImage,
        handleSubmit,
    } = useReportCreate();

    return (
        <MobileLayout>
            <S.Inner>
                <Header title="사용자 불편신고" />

                <S.Content>
                    <ReportForm
                        form={form}
                        images={images}
                        imageError={imageError}
                        onChange={handleChange}
                        onImageChange={handleImageChange}
                        onRemoveImage={handleRemoveImage}
                    />
                </S.Content>

                <S.ButtonArea>
                    <Button
                        disabled={!isValid}
                        height="52px"
                        radius="10px"
                        onClick={handleSubmit}
                    >
                        등록하기
                    </Button>
                </S.ButtonArea>
            </S.Inner>
        </MobileLayout>
    );
}

export default ReportCreate;