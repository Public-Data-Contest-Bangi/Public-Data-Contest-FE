import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    flex: 1;

    display: flex;
    flex-direction: column;

    background: #ffffff;

    box-sizing: border-box;
`;

export const Content = styled.main`
    width: 100%;

    padding: 12px 20px 0;

    box-sizing: border-box;
`;

export const Hero = styled.section`
    position: relative;

    width: 100%;
    height: 150px;

    display: flex;
    align-items: center;

    box-sizing: border-box;
`;

export const HeroText = styled.div`
    position: relative;
    z-index: 2;
`;

export const Title = styled.h1`
    margin: 0;

    color: #111111;

    font-size: 23px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: -0.4px;
`;

export const Mascot = styled.img`
    position: absolute;

    width: 180px;
    height: 180px;

    right: 2px;
    top: -4px;

    object-fit: contain;
`;

export const RegionSection = styled.section`
    width: 100%;
`;

export const SectionTitle = styled.h2`
    display: flex;
    align-items: center;

    gap: 8px;

    margin: 0 0 14px;

    color: #151515;

    font-size: 20px;
    font-weight: 700;
`;

export const PinIcon = styled.svg`
    width: 26px;
    height: 26px;

    fill: #18c987;

    flex-shrink: 0;
`;

export const CurrentLocationButton = styled.button`
    width: 100%;
    height: 52px;

    padding: 0 16px;

    display: flex;
    align-items: center;

    gap: 10px;

    border: none;
    border-radius: 8px;

    background: #e9fff6;

    color: #222222;

    font-family: inherit;
    font-size: 15px;
    font-weight: 500;

    cursor: pointer;

    box-sizing: border-box;
`;

export const TargetIcon = styled.img`
    width: 20px;
    height: 20px;

    object-fit: contain;

    flex-shrink: 0;
    filter: brightness(0) saturate(80%);
`;

export const Divider = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    gap: 10px;

    margin: 22px 0;

    color: #b5b5b5;

    font-size: 14px;

    &::before,
    &::after {
        content: "";

        flex: 1;

        height: 1px;

        background: #e4e4e4;
    }
`;

export const SelectList = styled.div`
    display: flex;
    flex-direction: column;

    gap: 18px;
`;

export const SelectWrapper = styled.div`
    position: relative;

    width: 100%;
    height: 52px;

    padding: 0 14px;

    display: flex;
    align-items: center;

    gap: 10px;

    border: 1px solid #cfcfcf;
    border-radius: 6px;

    background: #ffffff;

    box-sizing: border-box;
`;

export const BuildingIcon = styled.svg`
    width: 20px;
    height: 20px;

    fill: none;

    stroke: #111111;
    stroke-width: 1.7;

    flex-shrink: 0;
`;

export const LocationIcon = styled.svg`
    width: 20px;
    height: 20px;

    fill: none;

    stroke: #111111;
    stroke-width: 1.8;

    flex-shrink: 0;
`;

export const SelectButton = styled.button`
    flex: 1;

    min-width: 0;

    padding: 0;

    border: none;

    background: transparent;

    color: #202020;

    font-family: inherit;
    font-size: 15px;
    font-weight: 500;

    text-align: left;

    cursor: pointer;
`;

export const Chevron = styled.span`
    display: flex;

    align-items: center;
    justify-content: center;

    color: #777777;

    font-size: 19px;

    transform: ${({ $open }) =>
        $open
            ? "rotate(180deg)"
            : "rotate(0deg)"};

    transition: transform 0.15s ease;
`;

export const SelectMenu = styled.ul`
    position: absolute;

    top: calc(100% + 6px);
    left: 0;

    width: 100%;

    max-height: 220px;

    margin: 0;
    padding: 6px;

    overflow-y: auto;

    list-style: none;

    border: 1px solid #e4e4e4;
    border-radius: 8px;

    background: #ffffff;

    box-shadow:
        0 8px 20px
        rgba(0, 0, 0, 0.08);

    box-sizing: border-box;

    z-index: 30;

    li {
        list-style: none;
    }

    button {
        width: 100%;

        padding: 10px 12px;

        border: none;
        border-radius: 6px;

        background: transparent;

        color: #202020;

        font-family: inherit;
        font-size: 14px;

        text-align: left;

        cursor: pointer;

        box-sizing: border-box;
    }

    button:hover {
        background: #f5f5f5;
    }
`;

export const BottomArea = styled.div`
    width: 100%;

    margin-top: auto;

    padding: 24px 20px 20px;

    background: #ffffff;

    box-sizing: border-box;
`;