import { useState } from "react";

import AuthLayout from "../../components/auth/AuthLayout";
import Button from "../../components/common/Button";

import * as S from "./FindPassword.styled";

function FindPassword() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [verificationCode, setVerificationCode] =
        useState("");

    const [newPassword, setNewPassword] =
        useState("");
    const [confirmPassword, setConfirmPassword] =
        useState("");

    const [emailMessage, setEmailMessage] =
        useState("");
    const [verificationMessage, setVerificationMessage] =
        useState("");
    const [passwordMessage, setPasswordMessage] =
        useState("");

    const [isVerified, setIsVerified] =
        useState(false);

    const handleEmailCheck = () => {
        if (!email) {
            setEmailMessage(
                "이메일을 입력해주세요."
            );
            return;
        }

        // 추후 API 연결
        setEmailMessage(
            "가입되지 않은 이메일 입니다."
        );
    };

    const handleVerificationCheck = () => {
        if (!verificationCode) {
            setVerificationMessage(
                "인증번호를 입력해주세요."
            );
            return;
        }

        // 추후 실제 API 성공 시 true 처리
        setVerificationMessage(
            "인증 되었습니다."
        );

        setIsVerified(true);
    };

    const handlePasswordChange = () => {
        if (!newPassword) {
            setPasswordMessage(
                "새 비밀번호를 입력해주세요."
            );
            return;
        }

        if (newPassword !== confirmPassword) {
            setPasswordMessage(
                "비밀번호가 일치하지 않습니다."
            );
            return;
        }

        setPasswordMessage("");

        console.log({
            name,
            email,
            verificationCode,
            newPassword,
        });

        // 추후 비밀번호 재설정 API 연결
    };

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
                        onChange={(e) =>
                            setName(e.target.value)
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
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailMessage("");
                            }}
                        />

                        <S.CheckButton
                            type="button"
                            onClick={handleEmailCheck}
                        >
                            확인
                        </S.CheckButton>
                    </S.Row>

                    {emailMessage && (
                        <S.ErrorMessage>
                            {emailMessage}
                        </S.ErrorMessage>
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
                            value={verificationCode}
                            onChange={(e) => {
                                setVerificationCode(
                                    e.target.value
                                );
                                setVerificationMessage("");
                                setIsVerified(false);
                            }}
                        />

                        <S.CheckButton
                            type="button"
                            onClick={handleVerificationCheck}
                        >
                            확인
                        </S.CheckButton>
                    </S.Row>

                    {verificationMessage && (
                        <S.SuccessMessage>
                            {verificationMessage}
                        </S.SuccessMessage>
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
                                value={newPassword}
                                onChange={(e) =>
                                    setNewPassword(
                                        e.target.value
                                    )
                                }
                            />

                            <S.HelpText>
                                영문, 숫자, 특수문자를 포함해
                                8자 이상 입력해 주세요.
                            </S.HelpText>
                        </S.Field>

                        <S.Field>
                            <S.Label>
                                새 비밀번호 확인
                            </S.Label>

                            <S.Input
                                type="password"
                                placeholder="비밀번호 확인"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(
                                        e.target.value
                                    );
                                    setPasswordMessage("");
                                }}
                            />

                            {passwordMessage && (
                                <S.ErrorMessage>
                                    {passwordMessage}
                                </S.ErrorMessage>
                            )}
                        </S.Field>
                    </>
                )}
            </S.Form>

            {isVerified && (
                <S.ButtonArea>
                    <Button
                        onClick={handlePasswordChange}
                        height="54px"
                        radius="11px"
                        fontSize="19px"
                    >
                        비밀번호 재설정
                    </Button>
                </S.ButtonArea>
            )}
        </AuthLayout>
    );
}

export default FindPassword;