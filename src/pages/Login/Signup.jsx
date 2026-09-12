import { useState } from "react";
import AuthLayout from "../../components/auth/AuthLayout";
import * as S from "./Signup.styled";
import Button from "../../components/common/Button";

function Signup() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] =
        useState("");
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [verificationCode, setVerificationCode] =
        useState("");

    const [passwordMessage, setPasswordMessage] =
        useState("");
    const [emailMessage, setEmailMessage] =
        useState("");
    const [verificationMessage, setVerificationMessage] =
        useState("");

    const handleIdCheck = () => {
        console.log("아이디 중복 확인:", userId);
    };

    const handleNicknameCheck = () => {
        console.log("닉네임 중복 확인:", nickname);
    };

    const handleEmailCheck = () => {
        setEmailMessage("이미 가입된 이메일입니다.");
    };

    const handleVerificationCheck = () => {
        setVerificationMessage("인증 되었습니다.");
    };

    const handleSignup = () => {
        if (password !== confirmPassword) {
            setPasswordMessage(
                "비밀번호가 일치하지 않습니다."
            );
            return;
        }

        console.log({
            userId,
            password,
            name,
            nickname,
            email,
            verificationCode,
        });
    };

    return (
        <AuthLayout title="회원가입">
            <S.Form>
                <S.Field>
                    <S.Label>아이디 입력</S.Label>

                    <S.Row>
                        <S.Input
                            type="text"
                            placeholder="아이디"
                            value={userId}
                            onChange={(e) =>
                                setUserId(e.target.value)
                            }
                        />

                        <S.CheckButton
                            type="button"
                            onClick={handleIdCheck}
                        >
                            확인
                        </S.CheckButton>
                    </S.Row>
                </S.Field>

                <S.Field>
                    <S.Label>비밀번호 입력</S.Label>

                    <S.Input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <S.HelpText>
                        영문, 숫자, 특수문자를 포함해 8자 이상 입력해 주세요.
                    </S.HelpText>
                </S.Field>

                <S.Field>
                    <S.Label>
                        비밀번호 확인
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

                <S.Field>
                    <S.Label>이름 입력</S.Label>

                    <S.Input
                        type="text"
                        placeholder="이름"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                    />
                </S.Field>

                <S.Field>
                    <S.Label>닉네임 입력</S.Label>

                    <S.Row>
                        <S.Input
                            type="text"
                            placeholder="닉네임"
                            value={nickname}
                            onChange={(e) =>
                                setNickname(
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
                </S.Field>

                <S.Field>
                    <S.Label>이메일</S.Label>

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
                    <S.Label>인증번호 입력</S.Label>

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
                            }}
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

                    {verificationMessage && (
                        <S.SuccessMessage>
                            {verificationMessage}
                        </S.SuccessMessage>
                    )}
                </S.Field>

                <Button onClick={handleSignup}>
                    회원가입
                </Button>
            </S.Form>
        </AuthLayout>
    );
}

export default Signup;