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
    height: 816px;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;

    background: #ffffff;
`;

export const Content = styled.main`
    width: 100%;

    flex: 1;

    padding: 0 20px 0;

    box-sizing: border-box;
`;

export const Header = styled.header`
    position: relative;

    width: 100%;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BackButton = styled.button`
    position: absolute;
    left: 0;

    width: 28px;
    height: 28px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;

    border: none;
    background: transparent;

    cursor: pointer;

    img {
        width: 22px;
        height: 22px;

        object-fit: contain;
    }
`;

export const HeaderTitle = styled.h1`
    margin: 0;

    font-size: 20px;
    font-weight: 500;

    color: #000;
`;

export const ProfileSection = styled.section`
    display: flex;
    align-items: center;

    gap: 14px;

    padding: 10px 0 28px;
`;

export const ProfileImage = styled.img`
    width: 120px;
    height: 120px;

    object-fit: contain;

    flex-shrink: 0;
`;

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const UserName = styled.strong`
    margin-bottom: 9px;

    font-size: 22px;
    font-weight: 700;

    color: #000;
`;

export const UserEmail = styled.span`
    margin-bottom: 15px;

    font-size: 16px;
    font-weight: 500;

    color: #747474;
`;

export const EditButton = styled.button`
    width: 74px;
    height: 27px;

    border: 1px solid #3ed89d;
    border-radius: 10px;

    background: #EAFFF8;

    font-size: 11px;
    font-weight: 500;

    color: #333333;

    cursor: pointer;
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;

    background: #CCC;
`;

export const MenuList = styled.div`
    display: flex;
    flex-direction: column;

    padding-top: 18px;
    gap: 23px;
`;

export const MenuItem = styled.button`
    width: 100%;
    height: 74px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 10px 0 14px;

    box-sizing: border-box;

    border: none;
    background: transparent;

    cursor: pointer;
`;

export const MenuLeft = styled.div`
    display: flex;
    align-items: center;

    gap: 18px;
`;

export const IconBox = styled.div`
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    background: #3ed89d;
    border-radius: 6px;

    img {
        width: 24px;
        height: 24px;

        display: block;
        object-fit: contain;
    }
`;

export const MenuLabel = styled.span`
    font-size: 14px;
    font-weight: 600;

    color: #000;
`;

export const Chevron = styled.img`
    width: 14px;
    height: 14px;

    object-fit: contain;

    transform: rotate(180deg);
`;

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;

    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.2);
`;

export const Modal = styled.div`
    width: 350px;
    height: 180px;

    padding: 12px 20px;

    box-sizing: border-box;

    border: 1px solid #CCC;
    border-radius: 8px;

    background: #ffffff;

    text-align: center;
`;

export const ModalTitle = styled.h2`
    margin: 10px 0 10px;

    font-size: 24px;
    font-weight: 600;
    font-family: Pretendard;

    color: #000;
`;

export const ModalDescription = styled.p`
    margin: 0 0 12px;

    font-size: 14px;
    line-height: 1.8;
    font-weight: 500;

    color: #000;
`;

export const ModalButtonGroup = styled.div`
    display: flex;
    justify-content: center;

    gap: 17px;
`;

export const WithdrawButton = styled.button`
    width: 70px;
    height: 32px;

    border: 1px solid rgba(0, 0, 0, 0.50);

    border-radius: 6px;

    background: #ffffff;

    font-size: 14px;
    color: #000;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 15px;

    cursor: pointer;
`;

export const CancelButton = styled.button`
    width: 70px;
    height: 32px;

    border: none;
    border-radius: 6px;

    background: #3ed89d;

    font-size: 14px;
    color: #ffffff;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 15px;

    cursor: pointer;
`;