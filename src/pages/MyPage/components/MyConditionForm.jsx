import Button from "../../../components/common/Button";

import ConditionChoiceGroup from "./ConditionChoiceGroup";

import {
    DISABILITY_OPTIONS,
    WHEELCHAIR_OPTIONS,
    TRANSPORT_OPTIONS,
    SPORTS_OPTIONS,
    VOUCHER_OPTIONS,
} from "../constants/myConditionOptions";

import * as S from "./MyConditionForm.styled";

function MyConditionForm({
    disabilityTypes,
    wheelchair,
    sports,
    voucher,

    saved,
    canSave,

    setWheelchair,
    setVoucher,

    handleDisabilityToggle,
    handleSportsToggle,
    handleSave,
}) {
    return (
        <S.Content>
            <S.Intro>
                <S.Title>
                    내 이용 조건을 수정할 수 있어요.
                </S.Title>

                <S.Description>
                    시설 이용과 이동 등에 필요한 정보만 입력받으며,
                    의료 정보는 수집하지 않아요.
                </S.Description>
            </S.Intro>

            <S.Section>
                <S.Label>
                    장애 유형
                    <S.SubLabel>
                        (중복 선택 가능)
                    </S.SubLabel>
                </S.Label>

                <ConditionChoiceGroup
                    options={DISABILITY_OPTIONS}
                    selected={disabilityTypes}
                    onToggle={handleDisabilityToggle}
                />
            </S.Section>

            <S.Section>
                <S.Label>
                    휠체어 사용 여부
                </S.Label>

                <ConditionChoiceGroup
                    options={WHEELCHAIR_OPTIONS}
                    selected={wheelchair}
                    onToggle={setWheelchair}
                    variant="pill"
                />

                <S.HelpText>
                    "사용함" 선택 시 무장애 경로·시설이 우선 추천돼요.
                </S.HelpText>
            </S.Section>

            <S.Section>
                <S.Label>
                    스포츠강좌이용권 보유 여부
                </S.Label>

                <ConditionChoiceGroup
                    options={VOUCHER_OPTIONS}
                    selected={voucher}
                    onToggle={setVoucher}
                    variant="pill"
                />
            </S.Section>

            <Button
                disabled={!canSave}
                height="52px"
                radius="8px"
                fontSize="17px"
                onClick={handleSave}
            >
                저장하기
            </Button>

            <S.SaveMessage $visible={saved}>
                조건이 저장 되었어요
            </S.SaveMessage>
        </S.Content>
    );
}

export default MyConditionForm;