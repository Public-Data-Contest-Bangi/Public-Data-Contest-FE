import * as S from "./OperatingProgramCard.styled";

function normalizeHomepageUrl(url) {
    if (!url) {
        return null;
    }

    const trimmedUrl =
        String(url).trim();

    if (
        !trimmedUrl ||
        trimmedUrl.toLowerCase() ===
            "null"
    ) {
        return null;
    }

    if (
        /^https?:\/\//i.test(
            trimmedUrl
        )
    ) {
        return trimmedUrl;
    }

    return `https://${trimmedUrl}`;
}

export default function OperatingProgramCard({
    program,
}) {
    const homepageUrl =
        normalizeHomepageUrl(
            program.homepageUrl
        );

    const handleCardClick = () => {
        if (!homepageUrl) {
            console.log(
                "연결할 프로그램 홈페이지가 없습니다.",
                program
            );

            return;
        }

        window.open(
            homepageUrl,
            "_blank",
            "noopener,noreferrer"
        );
    };

    const handleKeyDown = (
        event
    ) => {
        if (!homepageUrl) {
            return;
        }

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {
            event.preventDefault();
            handleCardClick();
        }
    };

    return (
        <S.Card
            onClick={
                handleCardClick
            }
            onKeyDown={
                handleKeyDown
            }
            $clickable={
                Boolean(
                    homepageUrl
                )
            }
            role={
                homepageUrl
                    ? "link"
                    : undefined
            }
            tabIndex={
                homepageUrl
                    ? 0
                    : undefined
            }
        >
            <S.CardHeader>
                <S.ProgramIcon
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                >
                    <path
                        d="M6 23H26"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />

                    <path
                        d="M10 20L15 18L18 10"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    <circle
                        cx="19"
                        cy="7"
                        r="2.5"
                        fill="currentColor"
                    />
                </S.ProgramIcon>

                <S.ProgramTitleArea>
                    <S.ProgramTitle>
                        {program.title ||
                            "-"}
                    </S.ProgramTitle>

                    {program.voucherAvailable && (
                        <S.VoucherTag>
                            바우처 사용 가능
                        </S.VoucherTag>
                    )}
                </S.ProgramTitleArea>

                {homepageUrl && (
                    <S.ArrowIcon
                        viewBox="0 0 12 20"
                        aria-hidden="true"
                    >
                        <path
                            d="M2 2L10 10L2 18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </S.ArrowIcon>
                )}
            </S.CardHeader>

            <S.Divider />

            <S.InfoList>
                <S.InfoRow>
                    <S.Label>
                        종목
                    </S.Label>

                    <S.Value>
                        {program.className ||
                            "-"}
                    </S.Value>
                </S.InfoRow>

                <S.InfoRow>
                    <S.Label>
                        요일
                    </S.Label>

                    <S.Value>
                        {program.days ||
                            "-"}
                    </S.Value>
                </S.InfoRow>

                <S.InfoRow>
                    <S.Label>
                        시간
                    </S.Label>

                    <S.Value>
                        {program.time ||
                            "-"}
                    </S.Value>
                </S.InfoRow>

                <S.InfoRow>
                    <S.Label>
                        운영기간
                    </S.Label>

                    <S.Value>
                        {program.operatingPeriod ||
                            "-"}
                    </S.Value>
                </S.InfoRow>

                <S.InfoRow>
                    <S.Label>
                        가격
                    </S.Label>

                    <S.Value>
                        {program.price ||
                            "-"}
                    </S.Value>
                </S.InfoRow>
            </S.InfoList>
        </S.Card>
    );
}