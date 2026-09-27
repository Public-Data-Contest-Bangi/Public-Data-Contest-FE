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

    padding: 16px 24px 40px;

    box-sizing: border-box;
`;

/* =========================
   종목 특성
========================= */

export const TagSection = styled.section`
    margin-bottom: 20px;
`;

export const Tags = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 6px;
`;

export const Tag = styled.div`
    width: fit-content;
    min-height: 30px;

    padding: 0 11px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    box-sizing: border-box;

    border: 1px solid
        ${({ $matched }) =>
            $matched
                ? "#40D293"
                : "#D3D3D3"};

    border-radius: 9px;

    background: ${({ $matched }) =>
        $matched
            ? "#EDFAF5"
            : "#FFFFFF"};

    color: ${({ $matched }) =>
        $matched
            ? "#20B87D"
            : "#444444"};

    font-size: 12px;
    font-weight: ${({ $matched }) =>
        $matched ? 700 : 500};

    white-space: nowrap;
`;

export const MatchGuide = styled.div`
    margin-top: 12px;

    display: flex;
    align-items: center;

    gap: 7px;

    color: #888888;

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

/* =========================
   운동 소개
========================= */

export const Intro = styled.section`
    margin-bottom: 25px;
    padding: 22px 20px;

    box-sizing: border-box;

    border: 1px solid #d9f3e8;
    border-radius: 16px;

    background: #f5fcf9;
`;

export const IntroBadge = styled.div`
    width: fit-content;

    margin-bottom: 12px;
    padding: 5px 9px;

    border-radius: 20px;

    background: #ddf8ed;

    color: #279c70;

    font-size: 11px;
    font-weight: 700;
`;

export const IntroTitle = styled.h2`
    margin: 0 0 12px;

    color: #173c2e;

    font-size: 23px;
    font-weight: 700;
    line-height: 1.35;

    white-space: pre-line;
`;

export const IntroDescription = styled.p`
    margin: 0;

    color: #65756e;

    font-size: 13px;
    font-weight: 400;
    line-height: 1.55;

    word-break: keep-all;
`;

/* =========================
   시설 영역
========================= */

export const FacilitySection = styled.section`
    width: 100%;
`;

export const FacilityHeader = styled.div`
    width: 100%;

    margin-bottom: 16px;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

export const FacilityTitle = styled.h3`
    margin: 0 0 5px;

    color: #111111;

    font-size: 18px;
    font-weight: 700;
`;

export const FacilityDescription = styled.p`
    margin: 0;

    color: #999999;

    font-size: 11px;
    font-weight: 400;
`;

export const FacilityCount = styled.span`
    padding-bottom: 2px;

    color: #40d293;

    font-size: 12px;
    font-weight: 700;
`;

export const FacilityList = styled.div`
    display: flex;
    flex-direction: column;

    gap: 12px;
`;

/* =========================
   시설 카드
========================= */

export const FacilityCard = styled.button`
    width: 100%;
    min-height: 108px;

    padding: 14px;

    display: flex;
    align-items: center;

    gap: 14px;

    box-sizing: border-box;

    border: 1px solid #e2e2e2;
    border-radius: 14px;

    background: #ffffff;

    box-shadow:
        0 2px 8px
        rgba(0, 0, 0, 0.025);

    text-align: left;

    cursor: pointer;

    transition:
        transform 0.15s,
        border-color 0.15s,
        background 0.15s;

    &:active {
        transform: scale(0.99);

        border-color: #b8ead5;

        background: #f9fdfb;
    }
`;

export const FacilityImage = styled.img`
    width: 76px;
    height: 76px;

    border-radius: 12px;

    object-fit: cover;

    flex-shrink: 0;

    background: #f3f3f3;
`;

export const FacilityImagePlaceholder = styled.div`
    width: 76px;
    height: 76px;

    border-radius: 12px;

    background: #f0f0f0;

    flex-shrink: 0;
`;

export const FacilityInfo = styled.div`
    flex: 1;
    min-width: 0;

    display: flex;
    flex-direction: column;

    gap: 8px;
`;

export const FacilityTop = styled.div`
    width: 100%;

    display: flex;
    align-items: flex-start;

    gap: 8px;
`;

export const FacilityName = styled.div`
    flex: 1;

    color: #111111;

    font-size: 16px;
    font-weight: 700;
    line-height: 1.35;

    word-break: keep-all;
`;

export const Distance = styled.span`
    flex-shrink: 0;

    color: #2cc68c;

    font-size: 13px;
    font-weight: 700;

    white-space: nowrap;
`;

export const Address = styled.div`
    display: -webkit-box;

    overflow: hidden;

    color: #888888;

    font-size: 11px;
    font-weight: 400;
    line-height: 1.45;

    word-break: keep-all;

    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

/* =========================
   상태
========================= */

export const StateText = styled.div`
    width: 100%;

    padding: 48px 0;

    color: #888888;

    font-size: 13px;
    text-align: center;
`;

export const EmptyBox = styled.div`
    width: 100%;

    padding: 34px 20px;

    box-sizing: border-box;

    border-radius: 14px;

    background: #f8f8f8;

    text-align: center;
`;

export const EmptyTitle = styled.div`
    margin-bottom: 6px;

    color: #555555;

    font-size: 14px;
    font-weight: 600;
`;

export const EmptyDescription = styled.div`
    color: #999999;

    font-size: 11px;
    font-weight: 400;
`;