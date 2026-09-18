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

                <S.ProgramTitle>
                    {program.title}
                </S.ProgramTitle>

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
                    <S.Label>강좌이름</S.Label>
                    <S.Value>
                        {program.className}
                    </S.Value>
                </S.InfoRow>

                <S.InfoRow>
                    <S.Label>요일</S.Label>
                    <S.Value>
                        {program.days}
                    </S.Value>
                </S.InfoRow>

                <S.InfoRow>
                    <S.Label>시간</S.Label>
                    <S.Value>
                        {program.time}
                    </S.Value>
                </S.InfoRow>

                <S.InfoRow>
                    <S.Label>신청기간</S.Label>
                    <S.Value>
                        {program.applicationPeriod}
                    </S.Value>
                </S.InfoRow>

                <S.InfoRow>
                    <S.Label>가격</S.Label>
                    <S.Value>
                        {program.price}
                    </S.Value>
                </S.InfoRow>
            </S.InfoList>
        </S.Card>
    );
}