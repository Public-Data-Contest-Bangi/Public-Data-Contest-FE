import styled from "styled-components";

export const Inner = styled.div`
    position: relative;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding-bottom: 64px;

    box-sizing: border-box;
`;

export const Content = styled.main`
    flex: 1;

    padding: 0 20px;

    box-sizing: border-box;
`;

export const Title = styled.h1`
    margin: 30px 0 48px;

    font-size: 32px;
    font-weight: 600;
    line-height: normal;
    color: #000;
`;

export const ResultText = styled.div`
    margin-bottom: 62px;

    font-size: 30px;
    line-height: normal;

    color: #333333;

    strong {
        font-weight: 700;
        color: #111111;
        font-size: 32px;
    }
`;

export const ExerciseCard = styled.div`
    width: 100%;
    height: 94px;

    padding: 15px 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;

    border: 1px solid #b5b5b5;
    border-radius: 8px;

    background: #ffffff;
`;

export const CardLeft = styled.div`
    display: flex;
    align-items: center;

    gap: 23px;
`;

export const ExerciseImage = styled.img`
    width: 65px;
    height: 65px;

    object-fit: contain;

    flex-shrink: 0;
`;

export const ExerciseInfo = styled.div`
    display: flex;
    flex-direction: column;

    gap: 8px;
`;

export const ExerciseName = styled.div`
    font-size: 20px;
    font-weight: 600;

    color: #000;
`;

export const ExerciseDescription = styled.div`
    font-size: 14px;
    font-weight: 400;

    color: #555555;
`;

export const Arrow = styled.span`
    width: 12px;
    height: 12px;

    margin-right: 3px;

    border-top: 2px solid #111111;
    border-right: 2px solid #111111;

    transform: rotate(45deg);
`;

export const BannerArea = styled.div`
    width: 100%;

    margin-bottom: 20px;
`;