import AuthLayout from "../../components/auth/AuthLayout";
import Button from "../../components/common/Button";

import useFindPassword from "./hooks/useFindPassword";

import * as S from "./FindPassword.styled";

function FindPassword() {
    const {
        name,
        email,
        verificationCode,
        newPassword,
        confirmPassword,

        emailMessage,
        emailStatus,

        verificationMessage,
        verificationStatus,

        passwordMessage,

        isVerified,
        isLoading,

        handleNameChange,
        handleEmailChange,
        handleVerificationCodeChange,
        handleNewPasswordChange,
        handleConfirmPasswordChange,

        handleEmailCheck,
        handleVerificationCheck,
        handlePasswordChange,
    } = useFindPassword();

    return (
        <AuthLayout title="비밀번호 찾기">
            <S.Form>
                <S.Field>
                    <S.Label>
                        이름 입력
                    </S.Label>

                    <S.Input
                        type="text"
                        placeholder="이름을 입력해주세요"
                        value={name}
                        onChange={
                            handleNameChange
                        }
                    />
                </S.Field>

                <S.Field>
                    <S.Label>
                        이메일 입력
                    </S.Label>

                    <S.Row>
                        <S.Input
                            type="email"
                            placeholder="e-mail@gmail.com"
                            value={email}
                            onChange={
                                handleEmailChange
                            }
                        />

                        <S.CheckButton
                            type="button"
                            onClick={
                                handleEmailCheck
                            }
                            disabled={
                                isLoading
                            }
                        >
                            확인
                        </S.CheckButton>
                    </S.Row>

                    {emailMessage && (
                        emailStatus ===
                        "success" ? (
                            <S.SuccessMessage>
                                {
                                    emailMessage
                                }
                            </S.SuccessMessage>
                        ) : (
                            <S.ErrorMessage>
                                {
                                    emailMessage
                                }
                            </S.ErrorMessage>
                        )
                    )}
                </S.Field>

                <S.Field>
                    <S.Label>
                        인증번호 입력
                    </S.Label>

                    <S.Row>
                        <S.Input
                            type="text"
                            placeholder="인증번호"
                            value={
                                verificationCode
                            }
                            onChange={
                                handleVerificationCodeChange
                            }
                        />

                        <S.CheckButton
                            type="button"
                            onClick={
                                handleVerificationCheck
                            }
                            disabled={
                                isLoading
                            }
                        >
                            확인
                        </S.CheckButton>
                    </S.Row>

                    {verificationMessage && (
                        verificationStatus ===
                        "success" ? (
                            <S.SuccessMessage>
                                {
                                    verificationMessage
                                }
                            </S.SuccessMessage>
                        ) : (
                            <S.ErrorMessage>
                                {
                                    verificationMessage
                                }
                            </S.ErrorMessage>
                        )
                    )}
                </S.Field>

                {isVerified && (
                    <>
                        <S.Field>
                            <S.Label>
                                새 비밀번호 입력
                            </S.Label>

                            <S.Input
                                type="password"
                                placeholder="비밀번호"
                                value={
                                    newPassword
                                }
                                onChange={
                                    handleNewPasswordChange
                                }
                            />

                            <S.HelpText>
                                영문, 숫자,
                                특수문자를 포함해
                                8자 이상 입력해
                                주세요.
                            </S.HelpText>
                        </S.Field>

                        <S.Field>
                            <S.Label>
                                새 비밀번호 확인
                            </S.Label>

                            <S.Input
                                type="password"
                                placeholder="비밀번호 확인"
                                value={
                                    confirmPassword
                                }
                                onChange={
                                    handleConfirmPasswordChange
                                }
                            />

                            {passwordMessage && (
                                <S.ErrorMessage>
                                    {
                                        passwordMessage
                                    }
                                </S.ErrorMessage>
                            )}
                        </S.Field>
                    </>
                )}
            </S.Form>

            {isVerified && (
                <S.ButtonArea>
                    <Button
                        type="button"
                        onClick={
                            handlePasswordChange
                        }
                        disabled={
                            isLoading
                        }
                        height="54px"
                        radius="11px"
                        fontSize="19px"
                    >
                        {isLoading
                            ? "재설정 중..."
                            : "비밀번호 재설정"}
                    </Button>
                </S.ButtonArea>
            )}
        </AuthLayout>
    );
}

export default FindPassword;