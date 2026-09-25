import AuthLayout from "../../components/auth/AuthLayout";
import Button from "../../components/common/Button";

import useSignup from "./hooks/useSignup";
import * as S from "./Signup.styled";

import { useState } from "react";

function Signup() {
    const [locationAgreed, setLocationAgreed] =
        useState(false);

    const [locationError, setLocationError] =
        useState("");

    const handleSignupWithLocation = () => {
        if (!locationAgreed) {
            setLocationError(
                "현재 위치 수집 동의는 필수입니다."
            );
            return;
        }

        setLocationError("");

        if (!navigator.geolocation) {
            setLocationError(
                "현재 브라우저에서는 위치 정보를 사용할 수 없습니다."
            );
            return;
        }

        navigator.geolocation.getCurrentPosition(
            () => {
                handleSignup();
            },
            () => {
                setLocationError(
                    "회원가입을 위해 위치 권한을 허용해주세요."
                );
            }
        );
    };
    const {
        form,

        idMessage,
        idMessageType,

        isPasswordFormatError,
        confirmPasswordMessage,

        nicknameMessage,
        nicknameMessageType,

        emailMessage,
        emailMessageType,

        verificationMessage,
        verificationMessageType,

        changeForm,

        handleIdChange,
        handleIdCheck,

        handlePasswordChange,
        handleConfirmPasswordChange,

        handleNicknameChange,
        handleNicknameCheck,

        handleEmailChange,
        handleEmailCheck,

        handleVerificationCodeChange,
        handleVerificationCheck,

        handleSignup,
    } = useSignup();

    return (
        <AuthLayout title="회원가입">
            <S.Form>
                {/* 아이디 */}
                <S.Field>
                    <S.Label>아이디 입력</S.Label>

                    <S.Row>
                        <S.Input
                            type="text"
                            placeholder="아이디"
                            value={form.userId}
                            maxLength={30}
                            onChange={(e) =>
                                handleIdChange(
                                    e.target.value
                                )
                            }
                        />

                        <S.CheckButton
                            type="button"
                            onClick={handleIdCheck}
                        >
                            확인
                        </S.CheckButton>
                    </S.Row>

                    {idMessage &&
                        (idMessageType ===
                            "success" ? (
                            <S.SuccessMessage>
                                {idMessage}
                            </S.SuccessMessage>
                        ) : (
                            <S.ErrorMessage>
                                {idMessage}
                            </S.ErrorMessage>
                        ))}
                </S.Field>

                {/* 비밀번호 */}
                <S.Field>
                    <S.Label>
                        비밀번호 입력
                    </S.Label>

                    <S.Input
                        type="password"
                        placeholder="비밀번호"
                        value={form.password}
                        maxLength={20}
                        onChange={(e) =>
                            handlePasswordChange(
                                e.target.value
                            )
                        }
                    />

                    {isPasswordFormatError ? (
                        <S.ErrorMessage>
                            영문, 숫자, 특수문자를
                            포함해 8~20자로 입력해
                            주세요.
                        </S.ErrorMessage>
                    ) : (
                        <S.HelpText>
                            영문, 숫자, 특수문자를
                            포함해 8~20자로 입력해
                            주세요.
                        </S.HelpText>
                    )}
                </S.Field>

                {/* 비밀번호 확인 */}
                <S.Field>
                    <S.Label>
                        비밀번호 확인
                    </S.Label>

                    <S.Input
                        type="password"
                        placeholder="비밀번호 확인"
                        value={
                            form.confirmPassword
                        }
                        maxLength={20}
                        onChange={(e) =>
                            handleConfirmPasswordChange(
                                e.target.value
                            )
                        }
                    />

                    {confirmPasswordMessage && (
                        <S.ErrorMessage>
                            {
                                confirmPasswordMessage
                            }
                        </S.ErrorMessage>
                    )}
                </S.Field>

                {/* 이름 */}
                <S.Field>
                    <S.Label>이름 입력</S.Label>

                    <S.Input
                        type="text"
                        placeholder="이름"
                        value={form.name}
                        maxLength={20}
                        onChange={(e) =>
                            changeForm(
                                "name",
                                e.target.value
                            )
                        }
                    />
                </S.Field>

                {/* 닉네임 */}
                <S.Field>
                    <S.Label>
                        닉네임 입력
                    </S.Label>

                    <S.Row>
                        <S.Input
                            type="text"
                            placeholder="닉네임"
                            value={form.nickname}
                            maxLength={30}
                            onChange={(e) =>
                                handleNicknameChange(
                                    e.target.value
                                )
                            }
                        />

                        <S.CheckButton
                            type="button"
                            onClick={
                                handleNicknameCheck
                            }
                        >
                            확인
                        </S.CheckButton>
                    </S.Row>

                    {nicknameMessage &&
                        (nicknameMessageType ===
                            "success" ? (
                            <S.SuccessMessage>
                                {
                                    nicknameMessage
                                }
                            </S.SuccessMessage>
                        ) : (
                            <S.ErrorMessage>
                                {
                                    nicknameMessage
                                }
                            </S.ErrorMessage>
                        ))}
                </S.Field>

                {/* 이메일 */}
                <S.Field>
                    <S.Label>이메일</S.Label>

                    <S.Row>
                        <S.Input
                            type="email"
                            placeholder="e-mail@gmail.com"
                            value={form.email}
                            onChange={(e) =>
                                handleEmailChange(
                                    e.target.value
                                )
                            }
                        />

                        <S.CheckButton
                            type="button"
                            onClick={
                                handleEmailCheck
                            }
                        >
                            확인
                        </S.CheckButton>
                    </S.Row>

                    {emailMessage &&
                        (emailMessageType ===
                            "success" ? (
                            <S.SuccessMessage>
                                {emailMessage}
                            </S.SuccessMessage>
                        ) : (
                            <S.ErrorMessage>
                                {emailMessage}
                            </S.ErrorMessage>
                        ))}
                </S.Field>

                {/* 인증번호 */}
                <S.Field>
                    <S.Label>
                        인증번호 입력
                    </S.Label>

                    <S.Row>
                        <S.Input
                            type="text"
                            placeholder="인증번호"
                            value={
                                form.verificationCode
                            }
                            onChange={(e) =>
                                handleVerificationCodeChange(
                                    e.target.value
                                )
                            }
                        />

                        <S.CheckButton
                            type="button"
                            onClick={
                                handleVerificationCheck
                            }
                        >
                            확인
                        </S.CheckButton>
                    </S.Row>

                    {verificationMessage &&
                        (verificationMessageType ===
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
                        ))}
                </S.Field>

                {/* 현재 위치 수집 동의 */}
                <S.AgreementField>
                    <S.CheckboxLabel>
                        <S.Checkbox
                            type="checkbox"
                            checked={locationAgreed}
                            onChange={(e) => {
                                setLocationAgreed(
                                    e.target.checked
                                );

                                if (e.target.checked) {
                                    setLocationError("");
                                }
                            }}
                        />

                        <S.AgreementText>
                            현재 위치 수집에 동의합니다.
                            <S.Required>
                                (필수)
                            </S.Required>
                        </S.AgreementText>
                    </S.CheckboxLabel>

                    <S.AgreementDescription>
                        주변 체육시설 및 위치 기반 서비스를
                        제공하기 위해 현재 위치를 사용해요.
                    </S.AgreementDescription>

                    {locationError && (
                        <S.ErrorMessage>
                            {locationError}
                        </S.ErrorMessage>
                    )}
                </S.AgreementField>

                <Button
                    type="button"
                    onClick={handleSignup}
                >
                    회원가입
                </Button>
            </S.Form>
        </AuthLayout>
    );
}

export default Signup;