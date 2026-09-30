import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrap = styled.header`
    width: calc(100% + ${({ $inset = 0 }) => $inset * 2}px);
    margin-inline: ${({ $inset = 0 }) => -$inset}px;
    flex-shrink: 0;
    height: 72px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
`;

export const BackButton = styled.button`
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);

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

const Title = styled.h1`
    margin: 0;

    font-size: 18px;
    font-weight: 700;
    color: #111111;
`;

function Header({
    title,
    onBack,
    inset = 0,
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
        <HeaderWrap $inset={inset}>
            <BackButton
                type="button"
                aria-label="뒤로가기"
                onClick={handleBack}
            >
                <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.8899 1.76664L10.1216 -2.67029e-05L0.489917 9.62831C0.33466 9.78259 0.211445 9.96605 0.127365 10.1681C0.0432855 10.3702 0 10.5869 0 10.8058C0 11.0247 0.0432855 11.2414 0.127365 11.4435C0.211445 11.6456 0.33466 11.829 0.489917 11.9833L10.1216 21.6166L11.8883 19.85L2.84825 10.8083L11.8899 1.76664Z"
                        fill="#111111"
                    />
                </svg>
            </BackButton>

            <Title>{title}</Title>
        </HeaderWrap>
    );
}

export default Header;