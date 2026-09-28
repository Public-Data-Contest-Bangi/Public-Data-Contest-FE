import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    flex: 1;

    background: #ffffff;

    box-sizing: border-box;
`;

export const Content = styled.main`
    width: 100%;

    padding: 18px 20px 100px;

    box-sizing: border-box;
`;

export const Banner = styled.div`
    position: relative;

    width: 100%;
    height: 142px;

    margin-bottom: 30px;
    padding: 0 24px;

    display: flex;
    align-items: center;

    overflow: hidden;

    border-radius: 16px;

    background: #e9fbf3;

    box-sizing: border-box;
`;

export const BannerText = styled.p`
    position: relative;
    z-index: 2;

    margin: 0;

    color: #202020;

    font-size: 19px;
    font-weight: 700;
    line-height: 1.5;

    letter-spacing: -0.5px;
`;

export const CharacterImage = styled.img`
    position: absolute;

    right: 12px;
    bottom: -3px;

    width: 145px;
    height: auto;

    object-fit: contain;
`;

export const BannerSubText = styled.span`
    color: rgba(255, 255, 255, 0.85);

    font-size: 13px;
    font-weight: 500;
    line-height: 1.4;
`;

export const BannerTitle = styled.p`
    margin: 0;

    color: #ffffff;

    font-size: 22px;
    font-weight: 700;
    line-height: 1.35;

    letter-spacing: -0.4px;
`;

export const Section = styled.section`
    width: 100%;
`;

export const SectionTitle = styled.h2`
    margin: 0 0 10px;

    color: #111111;

    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
`;

export const Notice = styled.p`
    margin: 0 0 22px;

    color: #8c8c8c;

    font-size: 11px;
    font-weight: 400;
    line-height: 1.6;

    word-break: keep-all;
`;

export const ProgramList = styled.div`
    display: flex;
    flex-direction: column;

    gap: 24px;
`;

export const StatusText = styled.div`
    width: 100%;

    padding: 40px 0;

    color: #888888;

    font-size: 14px;
    text-align: center;
`;