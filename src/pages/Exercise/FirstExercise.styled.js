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

    font-size: 19px;
    font-weight: 700;
    color: #111111;
`;

/* 배너 */

export const Banner = styled.div`
    width: 100%;
    height: 195px;

    position: relative;
    overflow: hidden;

    margin-bottom: 40px;
    padding: 20px 18px;

    box-sizing: border-box;

    border-radius: 13px;

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
    margin-top: 10px;

    font-family: Pretendard;
    font-size: 22px;
    line-height: normal;
    font-weight: 700;

    color: #ffffff;
`;

export const BannerDescription = styled.div`
    margin-top: 60px;

    font-size: 14px;
    line-height: normal;
    font-weight: 500;

    color: rgba(255, 255, 255, 0.9);
`;

export const BannerImage = styled.img`
    position: absolute;

    right: -25px;
    bottom: 5px;

    width: 213px;
    height: 178px;

    object-fit: contain;

    z-index: 1;
`;

/* 질문 공통 */

export const QuestionSection = styled.section`
    width: 100%;

    margin-bottom: 36px;
`;

export const QuestionHeader = styled.div`
    display: flex;
    align-items: center;

    gap: 10px;

    margin-bottom: 18px;
`;

export const Number = styled.div`
    width: 26px;
    height: 26px;

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
    font-size: 16px;
    font-weight: 700;

    color: #000000;
`;

/* 드롭다운 */

export const Select = styled.select`
    width: calc(100% - 34px);
    height: 42px;

    margin-left: 34px;

    padding: 0 42px 0 14px;

    box-sizing: border-box;

    border: 1px solid #8ce4bd;
    border-radius: 6px;

    outline: none;

    background-color: #ffffff;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' fill='none' stroke='%23444444' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");

    background-repeat: no-repeat;
    background-position: right 14px center;
    background-size: 12px 8px;

    font-size: 12px;
    color: #444444;

    cursor: pointer;

    &:focus {
        border-color: #1fce8b;
    }
`;

/* 운동 종류 */

export const ExerciseTypeHeader = styled.div`
    width: calc(100% - 34px);

    margin-left: 34px;
    margin-bottom: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const RequiredText = styled.span`
    font-size: 11px;
    font-weight: 400;

    color: #888888;
`;

export const SelectAllButton = styled.button`
    padding: 0;

    border: none;
    background: none;

    font-size: 11px;
    font-weight: 600;

    color: #16b978;

    cursor: pointer;
`;

export const CheckGrid = styled.div`
    width: calc(100% - 34px);

    margin-left: 34px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 8px 10px;
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

    font-size: 12px;
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