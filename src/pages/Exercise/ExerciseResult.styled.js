import styled from "styled-components";

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
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;

    background: #ffffff;
`;

export const Content = styled.main`
    flex: 1;

    padding: 0 18px 100px;

    box-sizing: border-box;
`;

export const Title = styled.h1`
    margin: 0 0 22px;

    color: #111111;

    font-size: 25px;
    font-weight: 700;
    line-height: normal;
`;

export const ResultBanner = styled.div`
    position: relative;

    width: 100%;
    height: 150px;

    margin-bottom: 14px;
    padding: 18px 18px;

    display: flex;
    align-items: center;

    box-sizing: border-box;

    border: 1px solid #d2f3e5;
    border-radius: 16px;

    background: #effbf6;

    overflow: hidden;
`;

export const BannerText = styled.div`
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const BannerBadge = styled.span`
    margin-bottom: 8px;
    padding: 4px 8px;

    border-radius: 20px;

    background: #d7f7e9;

    color: #279c70;

    font-size: 11px;
    font-weight: 700;
`;

export const BannerTitle = styled.div`
    color: #173c2e;

    font-size: 20px;
    font-weight: 700;
    line-height: 1.35;
`;

export const BannerDescription = styled.div`
    margin-top: 8px;

    color: #63756d;

    font-size: 11px;
    font-weight: 500;
    line-height: 1.5;
`;

export const BannerCharacter = styled.img`
    position: absolute;

    right: 4px;
    bottom: -2px;

    width: 132px;
    height: 132px;

    object-fit: contain;
`;

export const MatchGuide = styled.div`
    width: 100%;

    margin: 0 0 16px;
    padding: 0 3px;

    display: flex;
    align-items: center;

    gap: 7px;

    box-sizing: border-box;

    color: #747474;

    font-size: 11px;
    font-weight: 400;
`;

export const MatchDot = styled.span`
    width: 7px;
    height: 7px;

    flex-shrink: 0;

    border-radius: 50%;

    background: #40d293;
`;

export const ExerciseList = styled.div`
    display: flex;
    flex-direction: column;

    gap: 17px;
`;

export const ExerciseCard = styled.button`
    width: 100%;
    min-height: 94px;

    padding: 12px 16px;

    display: flex;
    align-items: center;

    box-sizing: border-box;

    border: 1px solid #d2d2d2;
    border-radius: 11px;

    background: #ffffff;

    cursor: pointer;

    transition:
        background 0.15s,
        border-color 0.15s;

    &:active {
        border-color: #40d293;
        background: #f6fdf9;
    }
`;

export const ExerciseIcon = styled.img`
    width: 73px;
    height: 70px;

    margin-right: 15px;
    margin-left: -5px;

    object-fit: contain;
    flex-shrink: 0;
`;

export const ExerciseInfo = styled.div`
    flex: 1;
    min-width: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 8px;
`;

export const ExerciseName = styled.div`
    color: #111111;

    font-size: 18px;
    font-weight: 700;
`;

export const ExerciseCharacteristics = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 4px 8px;
`;

export const Characteristic = styled.span`
    color: ${({ $matched }) =>
        $matched
            ? "#2fc98f"
            : "#555555"};

    font-size: 13px;

    font-weight: ${({ $matched }) =>
        $matched ? 700 : 400};

    line-height: 1.4;
`;

export const Arrow = styled.div`
    margin-left: 10px;

    flex-shrink: 0;

    color: #111111;

    font-size: 31px;
    font-weight: 300;
    line-height: 1;
`;

export const StatusText = styled.div`
    width: 100%;

    padding: 40px 0;

    text-align: center;

    color: #747474;

    font-size: 14px;
`;

export const MessageBox = styled.div`
    width: 100%;
    min-height: 72px;

    margin-top: 70px;
    padding: 8px 16px 8px 12px;

    display: flex;
    align-items: center;

    box-sizing: border-box;

    border: 1px solid #d7f4e8;
    border-radius: 13px;

    background: #effbf6;
`;

export const MessageCharacter = styled.img`
    width: 78px;
    height: 78px;

    margin-right: 30px;
    margin-left: 10px;

    flex-shrink: 0;

    object-fit: contain;
`;

export const MessageText = styled.div`
    display: flex;
    flex-direction: column;

    gap: 7px;
`;

export const MessageTitle = styled.div`
    color: #173c2e;

    font-size: 15px;
    font-weight: 700;
`;

export const MessageDescription = styled.div`
    color: #7a8a83;

    font-size: 12px;
    font-weight: 400;
`;