import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import findidcharacter from "../../assets/images/findidcharacter.png";
import * as S from "./FindId.styled";

function FindId() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showResult, setShowResult] = useState(false);

    const handleEmailCheck = () => {
        if (!email) {
            setErrorMessage("이메일을 입력해주세요.");
            return;
        }

        // 추후 API 연결
        setErrorMessage("가입되지 않은 이메일 입니다.");
    };

    const handleSelect = () => {
        if (!name || !email) {
            return;
        }

        // 추후 API 성공 시 받은 아이디를 사용
        setShowResult(true);
    };

    const handleClose = () => {
        setShowResult(false);
    };

    return (
        <>
            <AuthLayout title="아이디 찾기">
                <S.Form>
                    <S.Field>
                        <S.Label>이름 입력</S.Label>

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
                        <S.Label>이메일 입력</S.Label>

                        <S.EmailRow>
                            <S.Input
                                type="email"
                                placeholder="e-mail@gmail.com"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setErrorMessage("");
                                }}
                            />

                            <S.CheckButton
                                type="button"
                                onClick={handleEmailCheck}
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
            </AuthLayout>

            {showResult && (
                <S.ModalOverlay>
                    <S.Modal>
                        <S.ResultCharacter
                            src={findidcharacter}
                            alt="아이디 찾기 캐릭터"
                        />

                        <S.ResultText>
                            회원님의 아이디는
                            <S.UserId> ham4246 </S.UserId>
                            입니다.
                        </S.ResultText>

                        <S.ModalButtonRow>
                            <S.CancelButton
                                type="button"
                                onClick={handleClose}
                            >
                                확인
                            </S.CancelButton>

                            <S.ResetButton
                                type="button"
                                onClick={() =>
                                    navigate("/find-password")
                                }
                            >
                                비밀번호 찾기
                            </S.ResetButton>
                        </S.ModalButtonRow>
                    </S.Modal>
                </S.ModalOverlay>
            )}
        </>
    );
}

export default FindId;