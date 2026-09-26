import styled from "styled-components";

const InfoBox = styled.div`
    width: 100%;
    height: 90px;

    padding: 8px 13px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    border-radius: 13px;

    background: #def8ef;
`;

const ContentRow = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    transform: translateX(
        ${({ $contentOffsetX }) =>
            $contentOffsetX || "0px"}
    );
`;

const SmallMascot = styled.img`
    width: ${({ $imageSize }) =>
        $imageSize || "110px"};
    height: ${({ $imageSize }) =>
        $imageSize || "110px"};

    flex-shrink: 0;

    object-fit: contain;

    transform: translateY(
        ${({ $imageOffsetY }) =>
            $imageOffsetY || "0px"}
    );
`;

const InfoText = styled.p`
    margin: 0;

    color: #4b5f53;

    font-size: 13px;
    line-height: 25px;
    font-weight: 600;

    white-space: nowrap;
`;

function InfoBanner({
    image,
    imageSize = "110px",
    imageOffsetY = "0px",
    contentOffsetX = "0px",
    children,
}) {
    return (
        <InfoBox>
            <ContentRow
                $contentOffsetX={contentOffsetX}
            >
                <SmallMascot
                    src={image}
                    alt=""
                    $imageSize={imageSize}
                    $imageOffsetY={imageOffsetY}
                />

                <InfoText>
                    {children}
                </InfoText>
            </ContentRow>
        </InfoBox>
    );
}

export default InfoBanner;