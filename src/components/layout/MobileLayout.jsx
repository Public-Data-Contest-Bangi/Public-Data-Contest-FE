import styled from "styled-components";

const Page = styled.div`
    width: 100%;
    min-height: 816px;

    display: flex;
    justify-content: center;

    background: #ffffff;
`;

const Container = styled.div`
    width: 375px;
    height: 816px;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;

    background: #ffffff;
`;

function MobileLayout({
    children,
    className,
}) {
    return (
        <Page>
            <Container className={className}>
                {children}
            </Container>
        </Page>
    );
}

export default MobileLayout;