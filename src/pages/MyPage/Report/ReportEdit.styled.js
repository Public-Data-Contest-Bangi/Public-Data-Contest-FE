import styled from "styled-components";

export const Inner = styled.div`
    width: 100%;
    min-height: 100dvh;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
`;

export const Content = styled.main`
    flex: 1;

    padding: 28px 20px 32px;

    display: flex;
    flex-direction: column;
    gap: 28px;

    box-sizing: border-box;
`;

export const Field = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Label = styled.label`
    color: #111111;

    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
`;

export const SelectWrapper = styled.div`
    position: relative;

    width: 100%;
`;

export const Select = styled.select`
    width: 100%;
    height: 48px;

    padding: 0 44px 0 14px;

    border: 1px solid #d9d9d9;
    border-radius: 8px;

    box-sizing: border-box;

    background: #ffffff;

    color: #222222;

    font-family: inherit;
    font-size: 14px;

    outline: none;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    cursor: pointer;

    &:focus {
        border-color: #41dc99;
    }
`;

export const SelectArrow = styled.span`
    position: absolute;

    top: 50%;
    right: 18px;

    width: 8px;
    height: 8px;

    border-right: 2px solid #222222;
    border-bottom: 2px solid #222222;

    transform: translateY(-70%) rotate(45deg);

    pointer-events: none;
`;

export const TitleInput = styled.input`
    width: 100%;
    height: 48px;

    padding: 0 14px;

    border: 1px solid #d9d9d9;
    border-radius: 8px;

    box-sizing: border-box;

    color: #222222;

    font-size: 14px;

    outline: none;

    &::placeholder {
        color: #aaaaaa;
    }

    &:focus {
        border-color: #40D293;
    }
`;

export const ContentInput = styled.textarea`
    width: 100%;
    height: 180px;

    padding: 14px;

    border: 1px solid #d9d9d9;
    border-radius: 8px;

    box-sizing: border-box;

    resize: none;

    color: #222222;

    font-family: inherit;
    font-size: 14px;
    line-height: 22px;

    outline: none;

    &::placeholder {
        color: #aaaaaa;
    }

    &:focus {
        border-color: #40D293;
    }
`;

export const CharacterCount = styled.span`
    align-self: flex-end;

    color: #999999;

    font-size: 12px;
`;

export const ImageArea = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const ImageUploadButton = styled.button`
    width: 82px;
    height: 82px;

    border: 1px solid #d9d9d9;
    border-radius: 8px;

    background: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 4px;

    cursor: pointer;
`;

export const Plus = styled.span`
    color: #777777;

    font-size: 24px;
    font-weight: 300;
`;

export const UploadText = styled.span`
    color: #777777;

    font-size: 11px;
`;

export const Preview = styled.div`
    width: 82px;
    height: 82px;

    overflow: hidden;

    border: 1px solid #d9d9d9;
    border-radius: 8px;
`;

export const PreviewImage = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
`;

export const ImageGuide = styled.p`
    margin: 0;

    color: #999999;

    font-size: 12px;
    line-height: 18px;
`;

export const ButtonArea = styled.div`
    width: 100%;

    padding: 0 20px 24px;

    display: flex;
    align-items: center;

    gap: 10px;

    box-sizing: border-box;
`;

export const CancelButton = styled.button`
    width: 96px;
    height: 52px;

    border: 1px solid #d9d9d9;
    border-radius: 8px;

    background: #ffffff;

    color: #555555;

    font-size: 16px;
    font-weight: 500;

    cursor: pointer;
`;

export const SubmitArea = styled.div`
    flex: 1;
`;