import * as S from "../ProfileEditPage.styled";

export default function ProfileField({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
    buttonText,
    onButtonClick,
    message,
    messageType,
}) {
    const input = (
        <S.Input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );

    return (
        <S.FieldGroup>
            <S.Label>{label}</S.Label>

            {buttonText ? (
                <S.InlineRow>
                    {input}

                    <S.ActionButton
                        type="button"
                        onClick={onButtonClick}
                    >
                        {buttonText}
                    </S.ActionButton>
                </S.InlineRow>
            ) : (
                input
            )}

            {message &&
                messageType === "success" && (
                    <S.SuccessText>
                        {message}
                    </S.SuccessText>
                )}

            {message &&
                messageType === "error" && (
                    <S.ErrorText>
                        {message}
                    </S.ErrorText>
                )}

            {message &&
                messageType === "helper" && (
                    <S.HelperText>
                        {message}
                    </S.HelperText>
                )}
        </S.FieldGroup>
    );
}