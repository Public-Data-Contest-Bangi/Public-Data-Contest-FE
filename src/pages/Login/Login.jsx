import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Login.styled";

import logo from "../../assets/images/login.png";
import profileIcon from "../../assets/icons/profile.png";
import lockIcon from "../../assets/icons/lock.png";
import eyeIcon from "../../assets/icons/eye.png";

function Login() {
    const navigate = useNavigate();

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        console.log({
            userId,
            password,
        });

        // 추후 로그인 API 연결
    };

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <S.Page>
            <S.LoginContainer>
                <S.Logo
                    src={logo}
                    alt="디딤핏 캐릭터"
                />

                <S.BrandName>
                    디딤
                    <S.BrandAccent>
                        핏
                    </S.BrandAccent>
                </S.BrandName>

                <S.InputSection>
                    <S.InputWrapper>
                        <S.IconImage
                            src={profileIcon}
                            alt=""
                        />

                        <S.Input
                            type="text"
                            placeholder="아이디"
                            value={userId}
                            onChange={(e) =>
                                setUserId(e.target.value)
                            }
                        />
                    </S.InputWrapper>

                    <S.InputWrapper>
                        <S.IconImage
                            src={lockIcon}
                            alt=""
                        />

                        <S.Input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                        />

                        <S.PasswordButton
                            type="button"
                            onClick={handleTogglePassword}
                            aria-label={
                                showPassword
                                    ? "비밀번호 숨기기"
                                    : "비밀번호 보기"
                            }
                        >
                            <S.EyeIcon
                                src={eyeIcon}
                                alt=""
                            />
                        </S.PasswordButton>
                    </S.InputWrapper>
                </S.InputSection>

                <S.LoginButton
                    type="button"
                    onClick={handleLogin}
                >
                    로그인
                </S.LoginButton>

                <S.Divider>
                    <span />
                    <p>또는</p>
                    <span />
                </S.Divider>

                <S.LinkContainer>
                    <S.LinkButton
                        type="button"
                        onClick={() =>
                            navigate("/find-id")
                        }
                    >
                        아이디 찾기
                    </S.LinkButton>

                    <S.LinkButton
                        type="button"
                        onClick={() =>
                            navigate("/find-password")
                        }
                    >
                        비밀번호 찾기
                    </S.LinkButton>

                    <S.LinkButton
                        type="button"
                        onClick={() =>
                            navigate("/signup")
                        }
                    >
                        회원가입
                    </S.LinkButton>
                </S.LinkContainer>
            </S.LoginContainer>
        </S.Page>
    );
}

export default Login;