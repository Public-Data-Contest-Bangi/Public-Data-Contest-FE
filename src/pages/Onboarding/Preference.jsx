import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/common/Button";

import {
    DISABILITY_OPTIONS,
    VOUCHER_OPTIONS,
} from "../MyPage/constants/myConditionOptions";

import * as S from "./Preference.styled";

function Preference() {
    const navigate = useNavigate();

    const [disabilityTypes, setDisabilityTypes] =
        useState([]);

    const [wheelchair, setWheelchair] =
        useState("");

    const [voucher, setVoucher] =
        useState("");

    const toggleDisabilityType = (type) => {
        setDisabilityTypes((prev) =>
            prev.includes(type)
                ? prev.filter(
                    (item) => item !== type
                )
                : [...prev, type]
        );
    };

    const isFormValid =
        disabilityTypes.length > 0 &&
        wheelchair !== "" &&
        voucher !== "";

    const handleSubmit = () => {
        if (!isFormValid) {
            return;
        }

        const userPreference = {
            disabilityTypes,
            wheelchair,
            voucher,
        };

        console.log(
            "이용 환경 정보:",
            userPreference
        );

        // 추후 API 연결
        navigate("/");
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
                                        key={option}
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
                                        {option}
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

                        {wheelchair === "사용함" && (
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
                                        key={option}
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
                                        {option}
                                    </S.RadioButton>
                                )
                            )}
                        </S.RadioRow>

                        {voucher === "보유함" && (
                            <S.HelpText>
                                이용권 사용 가능 가맹점
                                정보를 홈 화면에 우선
                                노출해드려요.
                            </S.HelpText>
                        )}
                    </S.Section>

                    <S.ButtonArea>
                        <Button
                            disabled={!isFormValid}
                            onClick={handleSubmit}
                            height="46px"
                            radius="8px"
                            fontSize="16px"
                        >
                            완료하고 시작하기
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