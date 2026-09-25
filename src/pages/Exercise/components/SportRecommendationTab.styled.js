import styled from "styled-components";

export const StateText = styled.div`
    padding: 70px 0;

    color: #888888;

    font-size: 14px;
    text-align: center;
`;

export const Intro = styled.div`
    margin-bottom: 24px;
`;

export const IntroTitle = styled.h2`
    margin: 0 0 6px;

    color: #171717;

    font-size: 20px;
    font-weight: 700;
    line-height: 1.4;
`;

export const IntroDescription = styled.p`
    margin: 0;

    color: #888888;

    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;

    word-break: keep-all;
`;

export const FitnessKeyword = styled.span`
    padding: 4px 8px;

    border-radius: 20px;

    background: #edf9f4;

    color: #24b77f;

    font-size: 10px;
    font-weight: 600;
    line-height: 1.2;

    white-space: nowrap;
`;


export const ExerciseTitleRow = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 7px;
`;

export const FitnessChipList = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 4px;
`;

export const FitnessChip = styled.span`
    padding: 3px 8px;

    border-radius: 999px;

    background: #eafbf4;

    color: #20b980;

    font-size: 10px;
    font-weight: 600;
    line-height: 1.4;

    white-space: nowrap;
`;

export const ExerciseList = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 12px;
`;

export const ExerciseCard = styled.button`
    width: 100%;
    min-height: 86px;

    padding: 12px 14px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 12px;

    box-sizing: border-box;

    border: 1px solid #d7d7d7;
    border-radius: 12px;

    background: #ffffff;

    font: inherit;
    text-align: left;

    appearance: none;

    cursor: pointer;

    &:active {
        background: #f8f8f8;
    }
`;

export const CardLeft = styled.div`
    flex: 1;
    min-width: 0;

    display: flex;
    align-items: center;

    gap: 16px;
`;

export const ExerciseImage = styled.img`
    width: 56px;
    height: 56px;

    flex-shrink: 0;

    object-fit: contain;
`;

export const ExerciseInfo = styled.div`
    flex: 1;
    min-width: 0;

    display: flex;
    flex-direction: column;

    gap: 5px;
`;

export const ExerciseName = styled.div`
    color: #111111;

    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
`;

export const ExerciseDescription = styled.div`
    color: #555555;

    font-size: 12.5px;
    font-weight: 400;
    line-height: 1.4;

    word-break: keep-all;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    overflow: hidden;
`;

export const Arrow = styled.span`
    width: 10px;
    height: 10px;

    margin-right: 4px;

    flex-shrink: 0;

    border-top: 2px solid #111111;
    border-right: 2px solid #111111;

    transform: rotate(45deg);
`;

export const BannerArea = styled.div`
    width: 100%;

    margin-top: 24px;
    margin-bottom: 20px;
`;