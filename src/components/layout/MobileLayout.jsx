import styled from "styled-components";

const Page = styled.div`
    width: 100%;
    min-height: 100dvh;

    display: flex;
    justify-content: center;

    background: #ffffff;
`;

const Container = styled.div`
    width: 100%;
    min-width: 0;

    min-height: 100dvh;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;

    background: #ffffff;

    /*
     * PC에서 너무 넓게 퍼지는 것만 방지.
     * 일반 스마트폰에서는 100% 꽉 참.
     */
    @media (min-width: 481px) {
        max-width: 480px;
    }
`;

function MobileLayout({
    children,
    className,
}) {
    return (
        <Page>
            <Container
                className={
                    className
                }
            >
                {children}
            </Container>
        </Page>
    );
}

export default MobileLayout;