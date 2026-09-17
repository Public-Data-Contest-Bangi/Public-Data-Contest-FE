import * as S from "./MyConditionForm.styled";

function ConditionSelect({
    value,
    options,
    onChange,
}) {
    return (
        <S.SelectWrapper>
            <S.Select
                value={value}
                onChange={(e) =>
                    onChange(
                        e.target.value
                    )
                }
            >
                <option value="">
                    유형을 선택해 주세요
                </option>

                {options.map(
                    (option) => (
                        <option
                            key={option}
                            value={option}
                        >
                            {option}
                        </option>
                    )
                )}
            </S.Select>

            <S.SelectArrow />
        </S.SelectWrapper>
    );
}

export default ConditionSelect;