import styled from "styled-components";

const InfoBox = styled.div`
    width: 100%;
    height: 90px;

    padding: 8px 13px;

    display: flex;
    align-items: center;

    box-sizing: border-box;

    border-radius: 13px;

    background: #def8ef;
`;

const SmallMascot = styled.img`
    width: 130px;
    height: 130px;

    object-fit: contain;

    transform: translateY(3px);
`;

const InfoText = styled.p`
    margin: 0;

    color: #4b5f53;

    font-size: 13px;
    line-height: 25px;
    font-weight: 600;
`;

function InfoBanner({
    image,
    children,
}) {
    return (
        <InfoBox>
            <SmallMascot
                src={image}
                alt=""
            />

            <InfoText>
                {children}
            </InfoText>
        </InfoBox>
    );
}

export default InfoBanner;