import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;

    background: #ffffff;
`;

export const Container = styled.div`
    width: 375px;
    min-height: 100vh;

    padding: 0 16px 28px;

    box-sizing: border-box;
    background: #ffffff;
`;

export const Header = styled.header`
    width: 100%;
    height: 72px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BackButton = styled.button`
    position: absolute;

    left: 0;

    border: none;
    background: none;

    font-size: 36px;
    font-weight: 300;

    line-height: 1;

    cursor: pointer;
`;

export const Title = styled.h1`
    margin: 0;

    font-size: 18px;
    font-weight: 700;
    color: #111111;
`;

/* 배너 */

export const Banner = styled.div`
    width: 100%;
    height: 134px;

    position: relative;
    overflow: hidden;

    margin-bottom: 20px;
    padding: 20px 18px;

    box-sizing: border-box;

    border-radius: 12px;

    background: linear-gradient(
        135deg,
        #22d59a 0%,
        #33d693 100%
    );
`;

export const BannerText = styled.div`
    position: relative;
    z-index: 2;
`;

export const BannerTitle = styled.div`
    font-size: 17px;
    line-height: 1.35;
    font-weight: 700;

    color: #ffffff;
`;

export const BannerDescription = styled.div`
    margin-top: 13px;

    font-size: 10px;
    line-height: 1.5;
    font-weight: 400;

    color: rgba(255, 255, 255, 0.9);
`;

export const BannerImage = styled.img`
    position: absolute;

    right: 2px;
    bottom: -5px;

    width: 125px;
    height: 125px;

    object-fit: contain;

    z-index: 1;
`;

/* 질문 공통 */

export const QuestionSection = styled.section`
    width: 100%;

    margin-bottom: 27px;
`;

export const QuestionHeader = styled.div`
    display: flex;
    align-items: center;

    gap: 10px;

    margin-bottom: 12px;
`;

export const Number = styled.div`
    width: 24px;
    height: 24px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #1fce8b;

    font-size: 12px;
    font-weight: 700;

    color: #ffffff;
`;

export const Question = styled.div`
    font-size: 14px;
    font-weight: 700;

    color: #222222;
`;

/* 드롭다운 */

export const Select = styled.select`
    width: calc(100% - 34px);
    height: 42px;

    margin-left: 34px;
    padding: 0 14px;

    box-sizing: border-box;

    border: 1px solid #8ce4bd;
    border-radius: 6px;

    outline: none;
    background: #ffffff;

    font-size: 12px;
    color: #444444;

    cursor: pointer;

    &:focus {
        border-color: #1fce8b;
    }
`;

/* 체크박스 */

export const CheckGrid = styled.div`
    width: calc(100% - 34px);

    margin-left: 34px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 7px 8px;
`;

export const CheckItem = styled.button`
    min-height: 32px;

    padding: 6px 8px;

    display: flex;
    align-items: center;

    gap: 8px;

    box-sizing: border-box;

    border: 1px solid
        ${({ $selected }) =>
            $selected ? "#20cf8b" : "#dddddd"};

    border-radius: 6px;

    background: ${({ $selected }) =>
        $selected ? "#f1fff8" : "#ffffff"};

    font-size: 11px;
    font-weight: 400;

    color: #333333;

    cursor: pointer;
`;

export const CheckBox = styled.span`
    width: 14px;
    height: 14px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    border: 1px solid
        ${({ $selected }) =>
            $selected ? "#20cf8b" : "#bdbdbd"};

    border-radius: 2px;

    background: ${({ $selected }) =>
        $selected ? "#20cf8b" : "#ffffff"};

    font-size: 10px;
    color: #ffffff;
`;

/* 시간 */

export const OptionRow = styled.div`
    width: calc(100% - 34px);

    margin-left: 34px;
    margin-bottom: 10px;

    display: flex;
    align-items: center;
`;

export const OptionLabel = styled.div`
    width: 58px;

    flex-shrink: 0;

    font-size: 12px;
    font-weight: 600;

    color: #333333;
`;

export const ChipGroup = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;
`;

export const Chip = styled.button`
    min-width: 54px;
    height: 34px;

    padding: 0 13px;

    border: 1px solid
        ${({ $selected }) =>
            $selected ? "#20cf8b" : "#dddddd"};

    border-radius: 18px;

    background: ${({ $selected }) =>
        $selected ? "#eafff5" : "#ffffff"};

    font-size: 11px;
    font-weight: 500;

    color: ${({ $selected }) =>
        $selected ? "#16b978" : "#333333"};

    cursor: pointer;
`;

/* 하단 버튼 */

export const FindButton = styled.button`
    width: 100%;
    height: 48px;

    margin-top: 5px;

    border: none;
    border-radius: 10px;

    background: #20cf8b;

    font-size: 15px;
    font-weight: 700;

    color: #ffffff;

    cursor: pointer;

    &:active {
        opacity: 0.9;
    }
`;