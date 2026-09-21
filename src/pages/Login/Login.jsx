import { useNavigate } from "react-router-dom";
import * as S from "./Login.styled";

import logo from "../../assets/images/login.png";
import profileIcon from "../../assets/icons/profile.png";
import lockIcon from "../../assets/icons/lock.png";
import eyeIcon from "../../assets/icons/eye.png";

import Button from "../../components/common/Button";
import useLogin from "./hooks/useLogin";

function Login() {
    const navigate = useNavigate();

    const {
        userId,
        password,
        showPassword,
        loginMessage,

        setUserId,
        setPassword,

        handleTogglePassword,
        handleLogin,
    } = useLogin();

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
                                setUserId(
                                    e.target.value
                                )
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
                                setPassword(
                                    e.target.value
                                )
                            }
                        />

                        <S.PasswordButton
                            type="button"
                            onClick={
                                handleTogglePassword
                            }
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

                    {loginMessage && (
                        <S.ErrorMessage>
                            {loginMessage}
                        </S.ErrorMessage>
                    )}
                </S.InputSection>

                <S.ButtonArea>
                    <Button
                        onClick={handleLogin}
                        height="48px"
                        radius="10px"
                        fontSize="20px"
                    >
                        로그인
                    </Button>
                </S.ButtonArea>

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
                            navigate(
                                "/find-password"
                            )
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