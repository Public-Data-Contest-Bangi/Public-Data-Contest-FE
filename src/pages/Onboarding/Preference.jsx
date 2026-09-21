import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/common/Button";

import { saveMyCondition } from "../../api/myCondition";

import {
    DISABILITY_OPTIONS,
    VOUCHER_OPTIONS,
} from "../MyPage/constants/myConditionOptions";

import * as S from "./Preference.styled";

// TODO:
// 백엔드에서 장애유형 ID 받으면
// 여기만 실제 값으로 채우면 됨.
const DISABILITY_ID_MAP = {
    "지적장애": 1,
    "청각장애": 2,
    "지체장애": 3,
    "시각장애": 4,
    "척수장애": 5,
    "소아마비": 6,
    "뇌병변": 7,
};

function Preference() {
    const navigate = useNavigate();

    const [
        disabilityTypes,
        setDisabilityTypes,
    ] = useState([]);

    const [
        wheelchair,
        setWheelchair,
    ] = useState("");

    const [
        voucher,
        setVoucher,
    ] = useState("");

    const [
        isSubmitting,
        setIsSubmitting,
    ] = useState(false);

    const toggleDisabilityType = (
        type
    ) => {
        setDisabilityTypes(
            (prev) =>
                prev.includes(type)
                    ? prev.filter(
                        (item) =>
                            item !==
                            type
                    )
                    : [
                        ...prev,
                        type,
                    ]
        );
    };

    const isFormValid =
        disabilityTypes.length > 0 &&
        wheelchair !== "" &&
        voucher !== "";

    const handleSubmit = async () => {
        if (
            !isFormValid ||
            isSubmitting
        ) {
            return;
        }

        const disabilityTypeIds =
            disabilityTypes
                .map(
                    (type) =>
                        DISABILITY_ID_MAP[
                        type
                        ]
                )
                .filter(
                    (id) =>
                        id !==
                        undefined
                );

        // 아직 백엔드 ID 매핑을
        // 전부 받지 못한 경우
        if (
            disabilityTypeIds.length !==
            disabilityTypes.length
        ) {
            console.error(
                "장애유형 ID 매핑이 필요합니다.",
                disabilityTypes
            );

            alert(
                "장애유형 정보 연결이 아직 완료되지 않았습니다."
            );

            return;
        }

        const requestData = {
            disabilityTypeIds,

            usesWheelchair:
                wheelchair ===
                "사용함",

            hasSportsVoucher:
                voucher ===
                "보유함",
        };

        try {
            setIsSubmitting(true);

            console.log(
                "이용 환경 저장 요청:",
                requestData
            );

            const response =
                await saveMyCondition(
                    requestData
                );

            console.log(
                "이용 환경 저장 성공:",
                response
            );

            navigate("/");
        } catch (error) {
            console.error(
                "이용 환경 저장 실패:",
                error.response?.data
            );

            console.error(
                "상태 코드:",
                error.response?.status
            );

            alert(
                error.response?.data
                    ?.message ||
                "이용 환경 저장에 실패했습니다."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <S.Page>
            <S.Container>
                <S.Content>
                    <S.Title>
                        원활한 사용을 위해 이용 환경을
                        <br />
                        알려주세요.
                    </S.Title>

                    <S.Description>
                        시설 이용과 이동 등에 필요한 정보만
                        입력받으며,
                        <br />
                        의료정보는 수집하지 않아요.
                    </S.Description>

                    <S.Section>
                        <S.Label>
                            장애 유형

                            <S.MultipleText>
                                (중복 선택 가능)
                            </S.MultipleText>
                        </S.Label>

                        <S.ChipContainer>
                            {DISABILITY_OPTIONS.map(
                                (option) => (
                                    <S.Chip
                                        key={
                                            option
                                        }
                                        type="button"
                                        $selected={disabilityTypes.includes(
                                            option
                                        )}
                                        onClick={() =>
                                            toggleDisabilityType(
                                                option
                                            )
                                        }
                                    >
                                        {
                                            option
                                        }
                                    </S.Chip>
                                )
                            )}
                        </S.ChipContainer>
                    </S.Section>

                    <S.Section>
                        <S.Label>
                            휠체어 사용 여부
                        </S.Label>

                        <S.RadioRow>
                            <S.RadioButton
                                type="button"
                                $selected={
                                    wheelchair ===
                                    "사용함"
                                }
                                onClick={() =>
                                    setWheelchair(
                                        "사용함"
                                    )
                                }
                            >
                                사용함
                            </S.RadioButton>

                            <S.RadioButton
                                type="button"
                                $selected={
                                    wheelchair ===
                                    "사용 안 함"
                                }
                                onClick={() =>
                                    setWheelchair(
                                        "사용 안 함"
                                    )
                                }
                            >
                                사용 안 함
                            </S.RadioButton>
                        </S.RadioRow>

                        {wheelchair ===
                            "사용함" && (
                                <S.HelpText>
                                    ‘사용함’ 선택 시 무장애
                                    경로 · 시설이 우선
                                    추천돼요.
                                </S.HelpText>
                            )}
                    </S.Section>

                    <S.Section>
                        <S.Label>
                            스포츠강좌이용권 보유 여부
                        </S.Label>

                        <S.RadioRow>
                            {VOUCHER_OPTIONS.map(
                                (option) => (
                                    <S.RadioButton
                                        key={
                                            option
                                        }
                                        type="button"
                                        $selected={
                                            voucher ===
                                            option
                                        }
                                        onClick={() =>
                                            setVoucher(
                                                option
                                            )
                                        }
                                    >
                                        {
                                            option
                                        }
                                    </S.RadioButton>
                                )
                            )}
                        </S.RadioRow>

                        {voucher ===
                            "보유함" && (
                                <S.HelpText>
                                    이용권 사용 가능 가맹점
                                    정보를 홈 화면에 우선
                                    노출해드려요.
                                </S.HelpText>
                            )}
                    </S.Section>

                    <S.ButtonArea>
                        <Button
                            disabled={
                                !isFormValid ||
                                isSubmitting
                            }
                            onClick={
                                handleSubmit
                            }
                            height="46px"
                            radius="8px"
                            fontSize="16px"
                        >
                            {isSubmitting
                                ? "저장 중..."
                                : "완료하고 시작하기"}
                        </Button>
                    </S.ButtonArea>

                    <S.BottomText>
                        입력하신 정보는 마이페이지에서
                        언제든 수정할 수 있어요
                    </S.BottomText>
                </S.Content>
            </S.Container>
        </S.Page>
    );
}

export default Preference;