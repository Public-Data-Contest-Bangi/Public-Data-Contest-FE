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
    margin: 0 0 3px 8px;

    font-size: 11px;
    line-height: 13px;
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


export const ProfileSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 16px 0 54px;
`;

export const ProfileImageCircle = styled.div`
    width: 140px;
    height: 140px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #e5f8ed;

    overflow: hidden;
`;

export const ProfileImage = styled.img`
    width: 160px;
    height: 160px;
    margin-top: 30px;

    object-fit: contain;
    overflow: hidden;
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

    /* 경고/안내 문구가 없을 때 필드 사이 간격 */
    gap: 16px;
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

    margin: 24px 0 14px;

    background: #e1e1e1;
`;

export const PasswordSection = styled.section`
    display: flex;
    flex-direction: column;

    /* 비밀번호 영역도 동일하게 16px */
    gap: 16px;
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

export const AvatarOverlay = styled.div`
    position: fixed;
    inset: 0;

    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    box-sizing: border-box;

    background: rgba(0, 0, 0, 0.35);
`;

export const AvatarModal = styled.div`
    width: 100%;
    max-width: 335px;

    padding: 24px 20px 20px;

    box-sizing: border-box;

    border-radius: 16px;

    background: #ffffff;
`;

export const AvatarModalTitle = styled.h2`
    margin: 0;

    color: #111111;

    font-size: 18px;
    font-weight: 700;

    text-align: center;
`;

export const AvatarModalDescription = styled.p`
    margin: 8px 0 24px;

    color: #777777;

    font-size: 12px;
    font-weight: 400;

    text-align: center;
`;

export const AvatarGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 12px;
`;

export const AvatarOption = styled.button`
    aspect-ratio: 1;

    padding: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    border: ${({ $selected }) =>
        $selected
            ? `2px solid ${PRIMARY}`
            : "1px solid #e2e2e2"};

    border-radius: 14px;

    background: ${({ $selected }) =>
        $selected
            ? "#ecfff7"
            : "#ffffff"};

    cursor: pointer;

    img {
        width: 100%;
        height: 100%;

        object-fit: contain;
    }
`;

export const AvatarCloseButton = styled.button`
    width: 100%;
    height: 44px;

    margin-top: 20px;

    border: none;
    border-radius: 8px;

    background: #f4f4f4;

    color: #333333;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    &:active {
        background: #eaeaea;
    }
`;