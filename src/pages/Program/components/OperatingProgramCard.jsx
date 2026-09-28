import * as S from "./OperatingProgramCard.styled";

export default function OperatingProgramCard({
    program,
}) {
    const handleProgramDetail = () => {
        console.log(
            "선택한 프로그램:",
            program
        );

        // 나중에 프로그램 상세 화면이 생기면 연결
        // navigate(`/program/${program.id}`);
    };

    return (
        <S.Card>
            <S.CardHeader
                onClick={handleProgramDetail}
            >
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
                        {program.title || "-"}
                    </S.ProgramTitle>

                    {program.voucherAvailable && (
                        <S.VoucherTag>
                            바우처 사용 가능
                        </S.VoucherTag>
                    )}
                </S.ProgramTitleArea>

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
            </S.CardHeader>

            <S.Divider />

            <S.InfoList>
                <S.InfoRow>
                    <S.Label>
                        종목
                    </S.Label>

                    <S.Value>
                        {program.className || "-"}
                    </S.Value>
                </S.InfoRow>

                <S.InfoRow>
                    <S.Label>
                        요일
                    </S.Label>

                    <S.Value>
                        {program.days || "-"}
                    </S.Value>
                </S.InfoRow>

                <S.InfoRow>
                    <S.Label>
                        시간
                    </S.Label>

                    <S.Value>
                        {program.time || "-"}
                    </S.Value>
                </S.InfoRow>

                <S.InfoRow>
                    <S.Label>운영기간</S.Label>
                    <S.Value>
                        {program.operatingPeriod || "-"}
                    </S.Value>
                </S.InfoRow>

                <S.InfoRow>
                    <S.Label>
                        가격
                    </S.Label>

                    <S.Value>
                        {program.price || "-"}
                    </S.Value>
                </S.InfoRow>
            </S.InfoList>
        </S.Card>
    );
}