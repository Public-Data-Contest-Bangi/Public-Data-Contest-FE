import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    sendSignupEmailVerification,
    confirmSignupEmailVerification,
    signup,
    checkLoginIdAvailability,
    checkNicknameAvailability,
} from "../../../api/auth";

// 영문 + 숫자 + 특수문자 포함, 8~20자
const PASSWORD_REGEX =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,20}$/;

function useSignup() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        userId: "",
        password: "",
        confirmPassword: "",
        name: "",
        nickname: "",
        email: "",
        verificationCode: "",
    });

    // 아이디
    const [idMessage, setIdMessage] =
        useState("");

    const [
        idMessageType,
        setIdMessageType,
    ] = useState("");

    // 비밀번호
    const [
        isPasswordFormatError,
        setIsPasswordFormatError,
    ] = useState(false);

    const [
        confirmPasswordMessage,
        setConfirmPasswordMessage,
    ] = useState("");

    // 닉네임
    const [
        nicknameMessage,
        setNicknameMessage,
    ] = useState("");

    const [
        nicknameMessageType,
        setNicknameMessageType,
    ] = useState("");

    // 이메일
    const [
        emailMessage,
        setEmailMessage,
    ] = useState("");

    const [
        emailMessageType,
        setEmailMessageType,
    ] = useState("");

    // 인증번호
    const [
        verificationMessage,
        setVerificationMessage,
    ] = useState("");

    const [
        verificationMessageType,
        setVerificationMessageType,
    ] = useState("");

    const [
        isEmailVerified,
        setIsEmailVerified,
    ] = useState(false);

    const [
        isLoading,
        setIsLoading,
    ] = useState(false);

    const changeForm = (key, value) => {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    // 아이디 입력
    const handleIdChange = (value) => {
        changeForm(
            "userId",
            value
        );

        // 아이디를 수정하면
        // 기존 중복확인 결과 초기화
        setIdMessage("");
        setIdMessageType("");
    };

    // 아이디 중복 확인
    const handleIdCheck = async () => {
        const loginId =
            form.userId.trim();

        if (!loginId) {
            setIdMessage(
                "아이디를 입력해 주세요."
            );

            setIdMessageType(
                "error"
            );

            return;
        }

        try {
            setIsLoading(true);

            await checkLoginIdAvailability(
                loginId
            );

            setIdMessage(
                "사용 가능한 아이디입니다."
            );

            setIdMessageType(
                "success"
            );
        } catch (error) {
            console.error(
                "아이디 중복확인 실패:",
                error.response?.data
            );

            setIdMessage(
                error.response?.data?.message ||
                "이미 존재하는 아이디입니다."
            );

            setIdMessageType(
                "error"
            );
        } finally {
            setIsLoading(false);
        }
    };

    // 비밀번호 입력
    const handlePasswordChange = (value) => {
        changeForm(
            "password",
            value
        );

        if (!value) {
            setIsPasswordFormatError(false);

            if (form.confirmPassword) {
                setConfirmPasswordMessage(
                    "비밀번호가 일치하지 않습니다."
                );
            }

            return;
        }

        // 기존에 형식 오류가 있었으면
        // 올바른 형식으로 수정했을 때 해제
        if (
            PASSWORD_REGEX.test(value)
        ) {
            setIsPasswordFormatError(false);
        }

        // 비밀번호 확인값이 이미 입력되어 있으면
        // 실시간 일치 여부 검사
        if (form.confirmPassword) {
            if (
                value !==
                form.confirmPassword
            ) {
                setConfirmPasswordMessage(
                    "비밀번호가 일치하지 않습니다."
                );
            } else {
                setConfirmPasswordMessage(
                    ""
                );
            }
        }
    };

    // 비밀번호 확인
    const handleConfirmPasswordChange = (
        value
    ) => {
        changeForm(
            "confirmPassword",
            value
        );

        if (!value) {
            setConfirmPasswordMessage(
                ""
            );
            return;
        }

        if (
            form.password !== value
        ) {
            setConfirmPasswordMessage(
                "비밀번호가 일치하지 않습니다."
            );
        } else {
            setConfirmPasswordMessage(
                ""
            );
        }
    };

    // 이름 입력
    const handleNameChange = (value) => {
        changeForm(
            "name",
            value
        );
    };

    // 닉네임 입력
    const handleNicknameChange = (
        value
    ) => {
        changeForm(
            "nickname",
            value
        );

        // 닉네임을 수정하면
        // 기존 중복확인 결과 초기화
        setNicknameMessage("");
        setNicknameMessageType("");
    };

    // 닉네임 중복 확인
    const handleNicknameCheck =
        async () => {
            const nickname =
                form.nickname.trim();

            if (!nickname) {
                setNicknameMessage(
                    "닉네임을 입력해 주세요."
                );

                setNicknameMessageType(
                    "error"
                );

                return;
            }

            try {
                setIsLoading(true);

                await checkNicknameAvailability(
                    nickname
                );

                setNicknameMessage(
                    "사용 가능한 닉네임입니다."
                );

                setNicknameMessageType(
                    "success"
                );
            } catch (error) {
                console.error(
                    "닉네임 중복확인 실패:",
                    error.response?.data
                );

                setNicknameMessage(
                    error.response?.data?.message ||
                    "이미 존재하는 닉네임입니다."
                );

                setNicknameMessageType(
                    "error"
                );
            } finally {
                setIsLoading(false);
            }
        };

    // 이메일 입력
    const handleEmailChange = (
        value
    ) => {
        changeForm(
            "email",
            value
        );

        setEmailMessage("");
        setEmailMessageType("");

        setVerificationMessage("");
        setVerificationMessageType("");

        changeForm(
            "verificationCode",
            ""
        );

        setIsEmailVerified(false);
    };

    // 회원가입 인증번호 발송
    const handleEmailCheck =
        async () => {
            const email =
                form.email.trim();

            if (!email) {
                setEmailMessage(
                    "이메일을 입력해 주세요."
                );

                setEmailMessageType(
                    "error"
                );

                return;
            }

            try {
                setIsLoading(true);

                await sendSignupEmailVerification(
                    email
                );

                setEmailMessage(
                    "인증번호를 발송했습니다."
                );

                setEmailMessageType(
                    "success"
                );

                // 인증번호를 다시 발송했다면
                // 이전 인증 상태 초기화
                setIsEmailVerified(false);

                setVerificationMessage("");
                setVerificationMessageType("");
            } catch (error) {
                console.error(
                    "인증번호 발송 실패:",
                    error.response?.data
                );

                setEmailMessage(
                    error.response?.data?.message ||
                    "인증번호 발송에 실패했습니다."
                );

                setEmailMessageType(
                    "error"
                );
            } finally {
                setIsLoading(false);
            }
        };

    // 인증번호 입력
    const handleVerificationCodeChange = (
        value
    ) => {
        changeForm(
            "verificationCode",
            value
        );

        setVerificationMessage("");
        setVerificationMessageType("");

        setIsEmailVerified(false);
    };

    // 인증번호 확인
    const handleVerificationCheck =
        async () => {
            const email =
                form.email.trim();

            const code =
                form.verificationCode.trim();

            if (!email) {
                setVerificationMessage(
                    "이메일을 입력해 주세요."
                );

                setVerificationMessageType(
                    "error"
                );

                return;
            }

            if (!code) {
                setVerificationMessage(
                    "인증번호를 입력해 주세요."
                );

                setVerificationMessageType(
                    "error"
                );

                return;
            }

            try {
                setIsLoading(true);

                await confirmSignupEmailVerification(
                    email,
                    code
                );

                setIsEmailVerified(true);

                setVerificationMessage(
                    "인증 되었습니다."
                );

                setVerificationMessageType(
                    "success"
                );
            } catch (error) {
                console.error(
                    "인증번호 확인 실패:",
                    error.response?.data
                );

                setIsEmailVerified(false);

                setVerificationMessage(
                    error.response?.data?.message ||
                    "인증번호를 확인해 주세요."
                );

                setVerificationMessageType(
                    "error"
                );
            } finally {
                setIsLoading(false);
            }
        };

    // 회원가입
    const handleSignup = async (
        locationConsent
    ) => {
        const loginId =
            form.userId.trim();

        const name =
            form.name.trim();

        const nickname =
            form.nickname.trim();

        const email =
            form.email.trim();

        if (!loginId) {
            setIdMessage(
                "아이디를 입력해 주세요."
            );

            setIdMessageType(
                "error"
            );

            return;
        }

        // 아이디 중복확인 완료 여부
        if (
            idMessageType !==
            "success"
        ) {
            setIdMessage(
                "아이디 중복 확인을 완료해 주세요."
            );

            setIdMessageType(
                "error"
            );

            return;
        }

        // 비밀번호 형식 검사
        if (
            !PASSWORD_REGEX.test(
                form.password
            )
        ) {
            setIsPasswordFormatError(
                true
            );

            return;
        }

        // 비밀번호 일치 검사
        if (
            form.password !==
            form.confirmPassword
        ) {
            setConfirmPasswordMessage(
                "비밀번호가 일치하지 않습니다."
            );

            return;
        }

        if (!name) {
            return;
        }

        if (!nickname) {
            setNicknameMessage(
                "닉네임을 입력해 주세요."
            );

            setNicknameMessageType(
                "error"
            );

            return;
        }

        // 닉네임 중복확인 완료 여부
        if (
            nicknameMessageType !==
            "success"
        ) {
            setNicknameMessage(
                "닉네임 중복 확인을 완료해 주세요."
            );

            setNicknameMessageType(
                "error"
            );

            return;
        }

        if (!email) {
            setEmailMessage(
                "이메일을 입력해 주세요."
            );

            setEmailMessageType(
                "error"
            );

            return;
        }

        // 이메일 인증 완료 여부
        if (!isEmailVerified) {
            setVerificationMessage(
                "이메일 인증을 완료해 주세요."
            );

            setVerificationMessageType(
                "error"
            );

            return;
        }

        try {
            setIsLoading(true);

            const response =
                await signup({
                    loginId: form.userId,
                    password: form.password,
                    email: form.email,
                    name: form.name,
                    nickname: form.nickname,
                    locationConsent,
                });

            console.log(
                "회원가입 성공:",
                response
            );

            navigate(
                "/login",
                {
                    replace: true,
                }
            );
        } catch (error) {
            console.error(
                "회원가입 실패:",
                error.response?.data
            );

            setVerificationMessage(
                error.response?.data?.message ||
                "회원가입에 실패했습니다."
            );

            setVerificationMessageType(
                "error"
            );
        } finally {
            setIsLoading(false);
        }
    };

    return {
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

        isEmailVerified,
        isLoading,

        changeForm,

        handleIdChange,
        handleIdCheck,

        handlePasswordChange,
        handleConfirmPasswordChange,

        handleNameChange,

        handleNicknameChange,
        handleNicknameCheck,

        handleEmailChange,
        handleEmailCheck,

        handleVerificationCodeChange,
        handleVerificationCheck,

        handleSignup,
    };
}

export default useSignup;