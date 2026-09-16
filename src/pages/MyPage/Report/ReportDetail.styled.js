import styled from "styled-components";

export const Inner = styled.div`
    width: 100%;
    height: 100%;

    padding: 0 16px 20px;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
`;

export const Content = styled.main`
    flex: 1;

    min-height: 0;
`;

export const BadgeArea = styled.div`
    display: flex;
    align-items: center;

    gap: 12px;

    margin-top: 10px;
    margin-bottom: 33px;
`;

export const CategoryBadge = styled.span`
    min-width: 116px;
    height: 34px;

    padding: 12px 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    border: 1px solid #CCC;
    border-radius: 20px;

    color: #000;

    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
`;

export const StatusBadge = styled.span`
    height: 34px;

    padding: 12px 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    border: 1px solid #40D293;
    border-radius: 85px;

    color: #40D293;

    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
`;

export const Title = styled.h2`
    margin: 0 0 18px;

    font-size: 24px;
    line-height: normal;
    font-weight: 600;

    color: #000;
`;

export const Date = styled.p`
    margin: 0 0 12px;

    font-size: 14px;

    color: #777777;
`;

export const ContentBox = styled.div`
    width: 100%;
    min-height: 182px;

    padding: 18px;

    box-sizing: border-box;

    border: 1px solid #aaaaaa;
    border-radius: 8px;

    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0.32px;

    color: #000;
`;

export const ImageArea = styled.div`
    display: flex;

    gap: 11px;

    margin-top: 13px;
    margin-bottom: 28px;
`;

export const ReportImage = styled.img`
    width: 80px;
    height: 80px;

    border: 1px solid #bbbbbb;
    border-radius: 7px;

    object-fit: cover;
`;

export const ImagePlaceholder = styled.div`
    width: 80px;
    height: 80px;

    box-sizing: border-box;

    border: 1px solid #bbbbbb;
    border-radius: 7px;

    background: #ffffff;
`;

export const AnswerTitle = styled.h3`
    margin: 0 0 13px;

    font-size: 24px;
    font-weight: 600;

    color: #000;
`;

export const AnswerBox = styled.div`
    width: 100%;

    padding: 17px;

    box-sizing: border-box;

    border: 1px solid #aaaaaa;
    border-radius: 8px;
`;

export const AnswerText = styled.p`
    margin: 0 0 18px;

    font-size: 16px;
    line-height: 140%;

    color: #000;
`;

export const AnswerDate = styled.p`
    margin: 0;

    font-size: 14px;

    color: #999999;
`;

export const ButtonArea = styled.div`
    width: 100%;

    margin-top: 16px;

    flex-shrink: 0;
`;