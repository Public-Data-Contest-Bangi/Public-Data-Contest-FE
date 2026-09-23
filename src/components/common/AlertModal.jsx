import styled from "styled-components";

export default function AlertModal({
    isOpen,
    message,
    onConfirm,
}) {
    if (!isOpen) {
        return null;
    }

    return (
        <Overlay>
            <Modal>
                <Message>
                    {message}
                </Message>

                <ConfirmButton
                    type="button"
                    onClick={onConfirm}
                >
                    확인
                </ConfirmButton>
            </Modal>
        </Overlay>
    );
}

const Overlay = styled.div`
    position: fixed;
    inset: 0;

    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    box-sizing: border-box;

    background: rgba(0, 0, 0, 0.4);
`;

const Modal = styled.div`
    width: 100%;
    max-width: 335px;

    padding: 28px 20px 20px;

    box-sizing: border-box;

    border-radius: 16px;

    background: #ffffff;

    text-align: center;
`;

const Message = styled.p`
    margin: 0 0 24px;

    white-space: pre-line;

    color: #222222;

    font-size: 16px;
    font-weight: 600;
    line-height: 24px;

    word-break: keep-all;
`;

const ConfirmButton = styled.button`
    width: 100%;
    height: 52px;

    border: none;
    border-radius: 10px;

    background: #41dc99;

    color: #ffffff;

    font-size: 16px;
    font-weight: 700;

    cursor: pointer;
`;