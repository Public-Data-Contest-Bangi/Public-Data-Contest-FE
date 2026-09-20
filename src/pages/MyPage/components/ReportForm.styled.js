import styled from "styled-components";

export const Field = styled.div`
    width: 100%;

    position: relative;

    margin-bottom: 20px;
`;

export const Label = styled.label`
    display: block;

    margin-bottom: 9px;

    font-size: 14px;
    font-weight: 600;

    color: #111111;
`;

export const Optional = styled.span`
    margin-left: 4px;

    font-weight: 500;
`;

export const SelectWrapper = styled.div`
    position: relative;

    width: 100%;
`;

export const Select = styled.select`
    width: 100%;
    height: 48px;

    padding: 0 42px 0 14px;

    box-sizing: border-box;

    border: 1px solid #d1d1d1;
    border-radius: 8px;

    background: #ffffff;

    font-size: 13px;
    color: #111111;

    outline: none;
    cursor: pointer;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus {
        border-color: #40D293;
    }
`;

export const SelectArrow = styled.span`
    position: absolute;

    top: 50%;
    right: 16px;

    width: 8px;
    height: 8px;

    border-right: 2px solid #111111;
    border-bottom: 2px solid #111111;

    transform: translateY(-70%) rotate(45deg);

    pointer-events: none;
`;

export const Input = styled.input`
    width: 100%;
    height: 48px;

    padding: 0 14px;

    box-sizing: border-box;

    border: 1px solid #d1d1d1;
    border-radius: 8px;

    font-size: 13px;

    outline: none;

    &::placeholder {
        color: #b8b8b8;
    }

    &:focus {
        border-color: #40D293;
    }
`;

export const Textarea = styled.textarea`
    width: 100%;
    height: 150px;

    padding: 14px;

    box-sizing: border-box;

    resize: none;

    border: 1px solid #d1d1d1;
    border-radius: 8px;

    font-family: inherit;
    font-size: 13px;
    line-height: 1.6;

    outline: none;

    &::placeholder {
        color: #b8b8b8;
    }

    &:focus {
        border-color: #40D293;
    }
`;

export const Count = styled.div`
    margin-top: 6px;

    text-align: right;

    font-size: 11px;

    color: #aaaaaa;
`;

export const ImageList = styled.div`
    display: flex;
    align-items: center;

    gap: 10px;
`;

export const ImageBox = styled.div`
    position: relative;

    width: 76px;
    height: 76px;

    flex-shrink: 0;
`;

export const PreviewImage = styled.img`
    width: 100%;
    height: 100%;

    border-radius: 8px;

    object-fit: cover;
`;

export const RemoveButton = styled.button`
    position: absolute;

    top: -6px;
    right: -6px;

    width: 20px;
    height: 20px;

    padding: 0;

    border: none;
    border-radius: 50%;

    background: #555555;
    color: #ffffff;

    cursor: pointer;
`;

export const AddImageButton = styled.button`
    width: 76px;
    height: 76px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid #cccccc;
    border-radius: 8px;

    background: #ffffff;

    cursor: pointer;
`;

export const Plus = styled.span`
    font-size: 25px;
`;

export const HiddenInput = styled.input`
    display: none;
`;

export const ImageUploadSection = styled.div`
    width: 100%;

    margin-bottom: 20px;
`;

export const ImageError = styled.p`
    margin: 7px 0 0;

    color: #ff3838;

    font-size: 11px;
    font-weight: 400;
    line-height: 1.4;
`;