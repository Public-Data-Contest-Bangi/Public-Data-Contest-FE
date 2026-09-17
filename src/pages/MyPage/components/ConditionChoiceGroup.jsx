import * as S from "./MyConditionForm.styled";

function ConditionChoiceGroup({
    options,
    selected,
    onToggle,
    variant = "chip",
}) {
    const isSelected = (item) => {
        if (Array.isArray(selected)) {
            return selected.includes(
                item
            );
        }

        return selected === item;
    };

    const ChoiceButton =
        variant === "pill"
            ? S.PillButton
            : S.Chip;

    return (
        <S.ChoiceArea
            $variant={variant}
        >
            {options.map((item) => (
                <ChoiceButton
                    key={item}
                    type="button"
                    $selected={
                        isSelected(item)
                    }
                    onClick={() =>
                        onToggle(item)
                    }
                >
                    {item}
                </ChoiceButton>
            ))}
        </S.ChoiceArea>
    );
}

export default ConditionChoiceGroup;