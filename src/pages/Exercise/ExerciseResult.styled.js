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

    padding: 38px 18px 100px;

    box-sizing: border-box;
`;

/* 제목 */

export const Title = styled.h1`
    margin: 0 0 22px;

    color: #111111;

    font-size: 25px;
    font-weight: 700;
    line-height: normal;
`;

/* 상단 추천 배너 */

export const ResultBanner = styled.div`
    position: relative;
    overflow: hidden;

    width: 100%;
    height: 165px;

    margin-bottom: 41px;
    padding: 25px 16px;

    box-sizing: border-box;

    border-radius: 13px;

    background: #40D293;
`;

export const BannerText = styled.div`
    position: relative;
    z-index: 2;
`;

export const BannerTitle = styled.div`
    color: #ffffff;

    font-size: 22px;
    font-weight: 600;
    line-height: normal;
`;

export const BannerDescription = styled.div`
    margin-top: 55px;

    color: #fff;

    font-size: 14px;
    font-weight: 600;
`;

export const BannerCharacter = styled.img`
    position: absolute;

    right: 8px;
    bottom: 10px;

    width: 150px;
    height: 150px;

    object-fit: contain;
`;

/* 운동 추천 카드 */

export const ExerciseList = styled.div`
    display: flex;
    flex-direction: column;

    gap: 17px;
`;

export const ExerciseCard = styled.button`
    width: 100%;
    height: 94px;

    padding: 0 16px;

    display: flex;
    align-items: center;

    box-sizing: border-box;

    border: 1px solid #bcbcbc;
    border-radius: 8px;

    background: #ffffff;

    cursor: pointer;

    transition: 0.15s;

    &:active {
        background: #f7f7f7;
    }
`;

export const ExerciseIcon = styled.img`
    width: 73px;
    height: 70px;

    object-fit: contain;
    flex-shrink: 0;
    margin-right: 15px;
    margin-left: -5px;
    margin-top: -10px;
`;

export const ExerciseInfo = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 8px;
`;

export const ExerciseName = styled.div`
    color: #000;

    font-size: 18px;
    font-weight: 600;
`;

export const ExerciseDescription = styled.div`
    color: #222;

    font-size: 14px;
    font-weight: 400;
`;

export const Arrow = styled.div`
    margin-left: auto;

    color: #111111;

    font-size: 31px;
    font-weight: 300;
    line-height: 1;
`;

/* 하단 안내 */

export const MessageBox = styled.div`
    width: 100%;
    height: 70px;

    margin-top: 86px;
    padding: 0 16px;

    display: flex;
    align-items: center;

    box-sizing: border-box;

    border-radius: 10px;

    background: #dff9ef;

    overflow: hidden;
`;

export const MessageCharacter = styled.img`
    width: 113px;
    height: 84px;

    margin-top: 13px;
    margin-right: 5px;

    object-fit: contain;

`;

export const MessageText = styled.div`
    display: flex;
    flex-direction: column;

    gap: 7px;
`;

export const MessageTitle = styled.div`
    color: #222;

    font-size: 15px;
    font-weight: 700;
`;

export const MessageDescription = styled.div`
    color: #777777;

    font-size: 11px;
    font-weight: 400;
`;