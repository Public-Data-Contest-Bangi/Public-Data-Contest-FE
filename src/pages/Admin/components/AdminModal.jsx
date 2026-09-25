import * as S from "../AdminPage.styled";

export default function AdminModal({
    modal,
    onClose,
    onConfirm,
}) {
    if (!modal.open) {
        return null;
    }

    const isConfirm =
        modal.type === "confirm";

    return (
        <S.ModalOverlay>
            <S.ModalBox>
                <S.ModalTitle>
                    {modal.title}
                </S.ModalTitle>

                <S.ModalMessage>
                    {modal.message}
                </S.ModalMessage>

                <S.ModalButtonArea>
                    {isConfirm && (
                        <S.ModalCancelButton
                            type="button"
                            onClick={
                                onClose
                            }
                        >
                            취소
                        </S.ModalCancelButton>
                    )}

                    <S.ModalConfirmButton
                        type="button"
                        onClick={
                            isConfirm
                                ? onConfirm
                                : onClose
                        }
                    >
                        {isConfirm
                            ? "확인"
                            : "닫기"}
                    </S.ModalConfirmButton>
                </S.ModalButtonArea>
            </S.ModalBox>
        </S.ModalOverlay>
    );
}