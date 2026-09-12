import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./FindId.styled";

function FindId() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [errorMessage, setErrorMessage] =
        useState("");

    const handleEmailCheck = () => {
        if (!email) {
            setErrorMessage(
                "이메일을 입력해주세요."
            );
            return;
        }

        // 추후 API 연결
        setErrorMessage(
            "가입되지 않은 이메일 입니다."
        );
    };

    const handleSelect = () => {
        console.log({
            name,
            email,
        });
    };

    return (
        <S.Page>
            <S.Container>
                <S.Header>
                    <S.BackButton
                        onClick={() => navigate(-1)}
                    >
                        ‹
                    </S.BackButton>

                    <S.Title>아이디 찾기</S.Title>
                </S.Header>

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

                        <S.EmailRow>
                            <S.Input
                                type="email"
                                placeholder="e-mail@gmail.com"
                                value={email}
                                onChange={(e) => {
                                    setEmail(
                                        e.target.value
                                    );
                                    setErrorMessage("");
                                }}
                            />

                            <S.CheckButton
                                type="button"
                                onClick={
                                    handleEmailCheck
                                }
                            >
                                확인
                            </S.CheckButton>
                        </S.EmailRow>

                        {errorMessage && (
                            <S.ErrorMessage>
                                {errorMessage}
                            </S.ErrorMessage>
                        )}
                    </S.Field>
                </S.Form>

                <S.SelectButton
                    type="button"
                    onClick={handleSelect}
                >
                    선택하기
                </S.SelectButton>
            </S.Container>
        </S.Page>
    );
}

export default FindId;