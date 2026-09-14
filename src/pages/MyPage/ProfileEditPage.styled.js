import styled from "styled-components";

const PRIMARY = "#3ed89d";
const TEXT = "#111111";
const SUB_TEXT = "#666666";
const BORDER = "#cfcfcf";

const BaseButton = styled.button`
    border: none;
    cursor: pointer;
`;

const MessageText = styled.p`
    margin: -1px 0 0 8px;
    font-size: 11px;
`;

export const Page = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;

    background: #ffffff;
`;

export const Container = styled.div`
    position: relative;

    width: 375px;
    min-height: 815px;

    padding: 0 20px 60px;

    box-sizing: border-box;

    background: #ffffff;
`;

export const Header = styled.header`
    position: relative;

    width: 100%;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BackButton = styled(BaseButton)`
    position: absolute;
    left: 0;

    width: 28px;
    height: 28px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;

    background: transparent;

    img {
        width: 22px;
        height: 22px;

        object-fit: contain;
    }
`;

export const HeaderTitle = styled.h1`
    margin: 0;

    font-size: 20px;
    font-weight: 500;

    color: ${TEXT};
`;

export const ProfileSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 16px 0 54px;
`;

export const ProfileImage = styled.img`
    width: 130px;
    height: 130px;

    object-fit: contain;
`;

export const ProfileImageChangeButton = styled(BaseButton)`
    min-height: 36px;

    margin-top: 8px;
    padding: 0 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 5px;

    background: transparent;

    font-size: 12px;
    font-weight: 500;

    color: #222222;
`;

export const CameraIcon = styled.svg`
    width: 16px;
    height: 16px;

    flex-shrink: 0;
`;

export const HiddenFileInput = styled.input`
    display: none;
`;

export const FormSection = styled.section`
    display: flex;
    flex-direction: column;

    gap: 18px;
`;

export const FieldGroup = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 8px;
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;

    color: ${TEXT};
`;

export const InlineRow = styled.div`
    width: 100%;

    display: flex;

    gap: 14px;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;

    padding: 0 14px;

    box-sizing: border-box;

    border: 1px solid ${BORDER};
    border-radius: 7px;

    outline: none;

    background: #ffffff;

    font-size: 13px;
    color: #222222;

    &::placeholder {
        color: #a0a0a0;
    }

    &:focus {
        border-color: ${PRIMARY};
    }
`;

export const ActionButton = styled(BaseButton)`
    width: 64px;
    height: 40px;

    flex-shrink: 0;

    border-radius: 7px;

    background: ${PRIMARY};

    font-size: 13px;
    font-weight: 600;

    color: #ffffff;
`;

export const ErrorText = styled(MessageText)`
    color: #ff3838;
`;

export const SuccessText = styled(MessageText)`
    color: ${PRIMARY};
`;

export const HelperText = styled(MessageText)`
    font-size: 10px;

    color: ${SUB_TEXT};
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;

    margin: 44px 0 34px;

    background: #e1e1e1;
`;

export const PasswordSection = styled.section`
    display: flex;
    flex-direction: column;

    gap: 18px;
`;

export const PasswordTitle = styled.h2`
    margin: 0 0 6px;

    font-size: 18px;
    font-weight: 700;

    color: ${TEXT};
`;

export const SubmitButton = styled(BaseButton)`
    width: 100%;
    height: 48px;

    margin-top: 36px;

    border-radius: 8px;

    background: ${PRIMARY};

    font-size: 15px;
    font-weight: 600;

    color: #ffffff;

    &:active {
        opacity: 0.85;
    }
`;