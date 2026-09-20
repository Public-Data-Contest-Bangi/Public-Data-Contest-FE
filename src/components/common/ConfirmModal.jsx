import styled from "styled-components";

function ConfirmModal({
    title,
    description,
    cancelText = "취소",
    confirmText = "확인",
    onCancel,
    onConfirm,
}) {
    return (
        <Overlay onClick={onCancel}>
            <Modal
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
            >
                <Title>{title}</Title>

                {description && (
                    <Description>
                        {description}
                    </Description>
                )}

                <ButtonArea>
                    <CancelButton
                        type="button"
                        onClick={onCancel}
                    >
                        {cancelText}
                    </CancelButton>

                    <ConfirmButton
                        type="button"
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </ConfirmButton>
                </ButtonArea>
            </Modal>
        </Overlay>
    );
}

export default ConfirmModal;

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    box-sizing: border-box;

    background: rgba(0, 0, 0, 0.35);
`;

const Modal = styled.div`
    width: 100%;
    max-width: 320px;

    padding: 24px 20px 20px;

    border-radius: 16px;

    box-sizing: border-box;

    background: #ffffff;

    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
`;

const Title = styled.h2`
    margin: 0;

    color: #111111;

    font-size: 18px;
    font-weight: 600;
    line-height: 26px;

    text-align: center;
`;

const Description = styled.p`
    margin: 10px 0 0;

    color: #777777;

    font-size: 14px;
    font-weight: 400;
    line-height: 21px;

    text-align: center;
`;

const ButtonArea = styled.div`
    margin-top: 24px;

    display: flex;
    gap: 8px;
`;

const CancelButton = styled.button`
    flex: 1;
    height: 48px;

    border: 1px solid #e2e2e2;
    border-radius: 8px;

    background: #ffffff;

    color: #555555;

    font-size: 15px;
    font-weight: 500;

    cursor: pointer;
`;

const ConfirmButton = styled.button`
    flex: 1;
    height: 48px;

    border: none;
    border-radius: 8px;

    background: #ff5c5c;

    color: #ffffff;

    font-size: 15px;
    font-weight: 600;

    cursor: pointer;
`;