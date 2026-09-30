import {
    useState,
} from "react";

import {
    useNavigate,
} from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import Button from "../../components/common/Button";

import findidcharacter from "../../assets/images/findidcharacter.png";

import {
    findLoginId,
} from "../../api/auth";

import * as S from "./FindId.styled";

function FindId() {
    const navigate =
        useNavigate();

    const [
        name,
        setName,
    ] = useState("");

    const [
        email,
        setEmail,
    ] = useState("");

    const [
        errorMessage,
        setErrorMessage,
    ] = useState("");

    const [
        foundLoginId,
        setFoundLoginId,
    ] = useState("");

    const [
        showResult,
        setShowResult,
    ] = useState(false);

    const [
        isLoading,
        setIsLoading,
    ] = useState(false);

    const handleFindId =
        async () => {
            const trimmedName =
                name.trim();

            const trimmedEmail =
                email.trim();

            if (!trimmedName) {
                setErrorMessage(
                    "이름을 입력해주세요."
                );

                return;
            }

            if (!trimmedEmail) {
                setErrorMessage(
                    "이메일을 입력해주세요."
                );

                return;
            }

            try {
                setIsLoading(true);
                setErrorMessage("");

                const response =
                    await findLoginId({
                        name:
                            trimmedName,

                        email:
                            trimmedEmail,
                    });

                const loginId =
                    response?.data
                        ?.loginId;

                if (!loginId) {
                    setErrorMessage(
                        "아이디 정보를 찾을 수 없습니다."
                    );

                    return;
                }

                setFoundLoginId(
                    loginId
                );

                setShowResult(
                    true
                );
            } catch (error) {
                console.error(
                    "아이디 찾기 실패:",
                    error.response?.data ??
                        error
                );

                setErrorMessage(
                    error.response
                        ?.data
                        ?.message ??
                        "이름 또는 이메일과 일치하는 회원이 없습니다."
                );
            } finally {
                setIsLoading(
                    false
                );
            }
        };

    const handleClose = () => {
        setShowResult(false);
    };

    const canSubmit =
        Boolean(
            name.trim() &&
                email.trim()
        );

    return (
        <>
            <AuthLayout title="아이디 찾기">
                <S.Form>
                    <S.Field>
                        <S.Label>
                            이름 입력
                        </S.Label>

                        <S.Input
                            type="text"
                            placeholder="이름을 입력해주세요"
                            value={
                                name
                            }
                            onChange={(e) => {
                                setName(
                                    e.target.value
                                );

                                setErrorMessage(
                                    ""
                                );
                            }}
                        />
                    </S.Field>

                    <S.Field>
                        <S.Label>
                            이메일 입력
                        </S.Label>

                        <S.Input
                            type="email"
                            placeholder="e-mail@gmail.com"
                            value={
                                email
                            }
                            onChange={(e) => {
                                setEmail(
                                    e.target.value
                                );

                                setErrorMessage(
                                    ""
                                );
                            }}
                        />

                        {errorMessage && (
                            <S.ErrorMessage>
                                {
                                    errorMessage
                                }
                            </S.ErrorMessage>
                        )}
                    </S.Field>
                </S.Form>

                <S.ButtonArea>
                    <Button
                        type="button"
                        onClick={
                            handleFindId
                        }
                        disabled={
                            !canSubmit ||
                            isLoading
                        }
                    >
                        {isLoading
                            ? "찾는 중..."
                            : "아이디 찾기"}
                    </Button>
                </S.ButtonArea>
            </AuthLayout>

            {showResult && (
                <div
                    style={{
                        position:
                            "fixed",

                        inset: 0,

                        zIndex:
                            9999,

                        display:
                            "flex",

                        alignItems:
                            "center",

                        justifyContent:
                            "center",

                        padding:
                            "20px",

                        background:
                            "rgba(0, 0, 0, 0.45)",

                        boxSizing:
                            "border-box",
                    }}
                >
                    <div
                        style={{
                            width:
                                "100%",

                            maxWidth:
                                "335px",

                            padding:
                                "28px 22px 22px",

                            boxSizing:
                                "border-box",

                            borderRadius:
                                "22px",

                            background:
                                "#ffffff",

                            textAlign:
                                "center",
                        }}
                    >
                        <img
                            src={
                                findidcharacter
                            }
                            alt="아이디 찾기 캐릭터"
                            style={{
                                width:
                                    "110px",

                                height:
                                    "110px",

                                objectFit:
                                    "contain",

                                marginBottom:
                                    "12px",
                            }}
                        />

                        <div
                            style={{
                                color:
                                    "#222222",

                                fontSize:
                                    "16px",

                                fontWeight:
                                    600,

                                lineHeight:
                                    1.6,
                            }}
                        >
                            회원님의 아이디는
                            <br />

                            <strong
                                style={{
                                    color:
                                        "#40d293",

                                    fontSize:
                                        "20px",

                                    fontWeight:
                                        700,
                                }}
                            >
                                {
                                    foundLoginId
                                }
                            </strong>

                            입니다.
                        </div>

                        <div
                            style={{
                                marginTop:
                                    "24px",

                                display:
                                    "flex",

                                gap:
                                    "10px",
                            }}
                        >
                            <button
                                type="button"
                                onClick={
                                    handleClose
                                }
                                style={{
                                    flex:
                                        1,

                                    height:
                                        "48px",

                                    border:
                                        "none",

                                    borderRadius:
                                        "12px",

                                    background:
                                        "#f2f2f2",

                                    color:
                                        "#555555",

                                    fontSize:
                                        "14px",

                                    fontWeight:
                                        600,

                                    cursor:
                                        "pointer",
                                }}
                            >
                                확인
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    navigate(
                                        "/find-password"
                                    )
                                }
                                style={{
                                    flex:
                                        1,

                                    height:
                                        "48px",

                                    border:
                                        "none",

                                    borderRadius:
                                        "12px",

                                    background:
                                        "#40d293",

                                    color:
                                        "#ffffff",

                                    fontSize:
                                        "14px",

                                    fontWeight:
                                        700,

                                    cursor:
                                        "pointer",
                                }}
                            >
                                비밀번호 찾기
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default FindId;