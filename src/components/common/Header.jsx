import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
    width: 100%;
    height: 72px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
`;

const BackButton = styled.button`
    position: absolute;
    left: 0;

    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding: 0;

    border: none;
    background: transparent;

    cursor: pointer;
`;

const BackIcon = styled.span`
    display: block;

    width: 10px;
    height: 10px;

    border-left: 2px solid #111111;
    border-bottom: 2px solid #111111;

    transform: rotate(45deg);
`;

const Title = styled.h1`
    margin: 0;

    font-size: 18px;
    font-weight: 700;
    color: #111111;
`;

function Header({
    title,
    onBack,
}) {
    const navigate = useNavigate();

    const handleBack = () => {
        if (onBack) {
            onBack();
            return;
        }

        navigate(-1);
    };

    return (
        <HeaderWrap>
            <BackButton
                type="button"
                aria-label="뒤로가기"
                onClick={handleBack}
            >
                <BackIcon />
            </BackButton>

            <Title>{title}</Title>
        </HeaderWrap>
    );
}

export default Header;