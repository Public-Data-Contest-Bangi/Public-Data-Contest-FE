import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100dvh;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;

    background: #ffffff;
`;

export const Content = styled.main`
    flex: 1;

    padding: 20px 28px 30px;

    box-sizing: border-box;
`;

/* 종목 태그 */

export const Tags = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 8px;

    margin-bottom: 37px;
`;

export const Tag = styled.div`
    width: fit-content;
    height: 32px;

    padding: 0 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    box-sizing: border-box;

    border: 1px solid #aaaaaa;
    border-radius: 8px;

    background: #ffffff;

    color: #111111;

    font-size: 14px;
    font-weight: 500;

    white-space: nowrap;
    word-break: keep-all;
`;

/* 안내 문구 */

export const Intro = styled.section`
    margin-bottom: 30px;
`;

export const IntroTitle = styled.h2`
    margin: 0 0 13px;

    color: #000;

    font-size: 24px;
    font-weight: 700;
    line-height: normal;

    white-space: pre-line;
`;

export const IntroDescription = styled.p`
    margin: 0;

    color: #222;

    font-size: 16px;
    font-weight: 400;
    line-height: normal;
`;

/* 시설 목록 */

export const FacilityList = styled.div`
    display: flex;
    flex-direction: column;

    gap: 20px;
`;

export const FacilityCard = styled.button`
    width: 100%;
    min-height: 107px;

    padding: 14px 13px;

    display: flex;
    align-items: center;

    gap: 20px;

    box-sizing: border-box;

    border: 1px solid #ababab;
    border-radius: 8px;

    background: #ffffff;

    text-align: left;

    cursor: pointer;

    &:active {
        background: #f7f7f7;
    }
`;

export const FacilityImage = styled.img`
    width: 71px;
    height: 71px;

    border-radius: 13px;

    object-fit: cover;

    flex-shrink: 0;
`;

export const FacilityImagePlaceholder = styled.div`
    width: 71px;
    height: 71px;

    border-radius: 13px;

    background: #dedede;

    flex-shrink: 0;
`;

export const FacilityInfo = styled.div`
    flex: 1;

    min-width: 0;

    display: flex;
    flex-direction: column;

    gap: 9px;
`;

export const FacilityTop = styled.div`
    width: 100%;

    display: flex;
    align-items: flex-start;

    gap: 13px;
`;

export const FacilityName = styled.div`
    flex: 1;

    color: #000;

    font-size: 16px;
    font-weight: 600;
    line-height: normal;

    word-break: keep-all;
`;

export const Distance = styled.span`
    flex-shrink: 0;

    color: #40D293;

    font-size: 14px;
    font-weight: 600;

    white-space: nowrap;
`;

export const Address = styled.div`
    color: #747474;

    font-size: 10px;
    font-weight: 400;
    line-height: normal;
`;

export const StateText = styled.div`
    width: 100%;

    padding: 40px 0;

    color: #888888;

    font-size: 14px;
    text-align: center;
`;