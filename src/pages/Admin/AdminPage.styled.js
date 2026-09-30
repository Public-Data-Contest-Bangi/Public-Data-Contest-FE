import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    min-height: 100vh;

    padding: ${({ $detail }) => $detail ? "0 20px 40px" : "32px 20px 40px"};

    box-sizing: border-box;

    background: #ffffff;
`;

export const Header = styled.header`
    margin-bottom: 24px;
`;

export const Title = styled.h1`
    margin: 0 0 8px;

    color: #111111;

    font-size: 26px;
    font-weight: 700;
    line-height: 1.4;
`;

export const Description = styled.p`
    margin: 0;

    color: #888888;

    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
`;

export const FilterList = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns:
        repeat(3, 1fr);

    gap: 7px;

    margin-bottom: 32px;
`;

export const FilterButton = styled.button`
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 5px;

    border: 1px solid
        ${({ $active }) =>
            $active
                ? "#42dba0"
                : "#e5e5e5"};

    border-radius: 10px;

    background: ${({ $active }) =>
        $active
            ? "#eafbf4"
            : "#ffffff"};

    color: ${({ $active }) =>
        $active
            ? "#20b980"
            : "#777777"};

    font-size: 12px;
    font-weight: 600;

    cursor: pointer;
`;

export const FilterCount = styled.span`
    font-weight: 700;
`;

export const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 12px;
`;

export const SectionTitle = styled.h2`
    margin: 0;

    color: #171717;

    font-size: 18px;
    font-weight: 700;
`;

export const TotalCount = styled.span`
    color: #999999;

    font-size: 11px;
    font-weight: 500;
`;

export const ReportList = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 10px;
`;

export const ReportItem = styled.button`
    width: 100%;

    padding: 16px;

    box-sizing: border-box;

    border: 1px solid #e6e6e6;
    border-radius: 14px;

    background: #ffffff;

    text-align: left;

    cursor: pointer;

    &:active {
        background: #f8f8f8;
    }
`;

export const ReportTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 10px;
`;

export const Status = styled.span`
    width: fit-content;

    padding: 4px 8px;

    display: inline-flex;
    align-items: center;

    border-radius: 999px;

    background: ${({ $completed }) =>
        $completed
            ? "#f1f1f1"
            : "#eafbf4"};

    color: ${({ $completed }) =>
        $completed
            ? "#777777"
            : "#20b980"};

    font-size: 10px;
    font-weight: 700;

    white-space: nowrap;
`;

export const Date = styled.span`
    color: #aaaaaa;

    font-size: 10px;
`;

export const ReportTitle = styled.div`
    margin-bottom: 6px;

    color: #222222;

    font-size: 15px;
    font-weight: 700;
`;

export const ReportBottom = styled.div`
    display: flex;
    align-items: center;

    gap: 10px;
`;

export const ReportPreview = styled.div`
    flex: 1;
    min-width: 0;

    color: #888888;

    font-size: 11px;
    line-height: 1.5;

    overflow: hidden;

    display: -webkit-box;

    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;

export const Chevron = styled.span`
    flex-shrink: 0;

    color: #222222;

    font-size: 24px;
    font-weight: 300;
    line-height: 1;
`;

export const EmptyList = styled.div`
    padding: 80px 0;

    color: #aaaaaa;

    font-size: 12px;
    text-align: center;
`;

/* 상세 */

export const DetailHeader = styled.header`
    height: 44px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 28px;
`;

export const BackButton = styled.button`
    width: 36px;
    height: 36px;

    position: absolute;
    left: -8px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;

    background: transparent;

    color: #111111;

    font-size: 32px;
    font-weight: 300;
    line-height: 1;

    cursor: pointer;
`;

export const DetailHeaderTitle = styled.h1`
    margin: 0;

    color: #111111;

    font-size: 18px;
    font-weight: 700;
`;

export const DetailContent = styled.div`
    width: 100%;
`;

export const StatusRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 18px;
    margin-bottom: 22px;

    border-bottom: 1px solid #eeeeee;
`;

export const DetailBlock = styled.div`
    margin-bottom: 24px;
`;

export const DetailLabel = styled.div`
    margin-bottom: 8px;

    color: #888888;

    font-size: 11px;
    font-weight: 500;
`;

export const DetailValue = styled.div`
    color: #222222;

    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;

    word-break: keep-all;
`;

export const ReportContent = styled.div`
    width: 100%;
    min-height: 96px;

    padding: 14px;

    box-sizing: border-box;

    border-radius: 10px;

    background: #f7f8f8;

    color: #333333;

    font-size: 13px;
    font-weight: 400;
    line-height: 1.6;

    word-break: keep-all;
`;

export const DetailInfoRow = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 16px;

    margin-bottom: 24px;
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;

    margin: 4px 0 24px;

    background: #eeeeee;
`;

export const AnswerArea = styled.div`
    width: 100%;
`;

export const AnswerTitle = styled.h2`
    margin: 0 0 12px;

    color: #171717;

    font-size: 16px;
    font-weight: 700;
`;

export const Textarea = styled.textarea`
    width: 100%;
    min-height: 140px;

    padding: 14px;

    box-sizing: border-box;

    border: 1px solid #dddddd;
    border-radius: 10px;

    outline: none;
    resize: none;

    color: #333333;

    font: inherit;
    font-size: 13px;
    line-height: 1.6;

    &::placeholder {
        color: #aaaaaa;
    }

    &:focus {
        border-color: #42dba0;
    }
`;

export const ButtonArea = styled.div`
    width: 100%;

    display: flex;

    gap: 8px;

    margin-top: 12px;
`;

export const DeleteButton = styled.button`
    flex: 1;
    height: 46px;

    border: 1px solid #dddddd;
    border-radius: 10px;

    background: #ffffff;

    color: #777777;

    font-size: 13px;
    font-weight: 600;

    cursor: pointer;
`;

export const SubmitButton = styled.button`
    flex: 1;
    height: 46px;

    border: none;
    border-radius: 10px;

    background: #42dba0;

    color: #ffffff;

    font-size: 13px;
    font-weight: 700;

    cursor: pointer;

    &:active {
        background: #35c990;
    }
`;

export const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns:
        repeat(2, 1fr);

    gap: 8px;
`;

export const PhotoImage = styled.img`
    width: 100%;
    aspect-ratio: 1;

    border-radius: 10px;

    object-fit: cover;
`;
export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;

    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    box-sizing: border-box;

    background: rgba(0, 0, 0, 0.35);
`;

export const ModalBox = styled.div`
    width: calc(100% - 40px);
    max-width: 320px;

    padding: 22px 20px 18px;

    box-sizing: border-box;

    border-radius: 16px;

    background: #ffffff;
`;

export const ModalTitle = styled.h3`
    margin: 0 0 8px;

    color: #171717;

    font-size: 17px;
    font-weight: 700;
    line-height: 1.4;

    text-align: center;
`;

export const ModalMessage = styled.p`
    margin: 0;

    color: #777777;

    font-size: 12px;
    font-weight: 400;
    line-height: 1.6;

    text-align: center;

    word-break: keep-all;
`;

export const ModalButtonArea = styled.div`
    width: 100%;

    display: flex;

    gap: 8px;

    margin-top: 22px;
`;

export const ModalCancelButton = styled.button`
    flex: 1;
    height: 44px;

    border: 1px solid #dddddd;
    border-radius: 10px;

    background: #ffffff;

    color: #666666;

    font-size: 13px;
    font-weight: 600;

    cursor: pointer;

    &:active {
        background: #f7f7f7;
    }
`;

export const ModalConfirmButton = styled.button`
    flex: 1;
    height: 44px;

    border: none;
    border-radius: 10px;

    background: #42dba0;

    color: #ffffff;

    font-size: 13px;
    font-weight: 700;

    cursor: pointer;

    &:active {
        background: #35c990;
    }
`;

export const LogoutArea = styled.div`
    width: 100%;

    padding: 14px 18px 0;

    display: flex;
    justify-content: flex-end;

    box-sizing: border-box;
`;

export const LogoutButton = styled.button`
    padding: 7px 12px;

    border: none;
    border-radius: 8px;

    background: #f3f3f3;

    color: #777777;

    font-family: inherit;
    font-size: 12px;
    font-weight: 600;

    cursor: pointer;

    &:hover {
        background: #ebebeb;
    }

    &:active {
        transform: scale(0.97);
    }
`;