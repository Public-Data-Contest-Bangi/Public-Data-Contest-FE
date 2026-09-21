import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    sendSignupEmailVerification,
    confirmSignupEmailVerification,
    signup,
    checkLoginIdAvailability,
    checkNicknameAvailability,
} from "../../../api/auth";

const PASSWORD_REGEX =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/;

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

    const [idMessage, setIdMessage] = useState("");
    const [idMessageType, setIdMessageType] =
        useState("");

    const [
        isPasswordFormatError,
        setIsPasswordFormatError,
    ] = useState(false);

    const [
        confirmPasswordMessage,
        setConfirmPasswordMessage,
    ] = useState("");

    const [nicknameMessage, setNicknameMessage] =
        useState("");
    const [
        nicknameMessageType,
        setNicknameMessageType,
    ] = useState("");

    const [emailMessage, setEmailMessage] =
        useState("");
    const [emailMessageType, setEmailMessageType] =
        useState("");

    const [
        verificationMessage,
        setVerificationMessage,
    ] = useState("");
    const [
        verificationMessageType,
        setVerificationMessageType,
    ] = useState("");

    const [isEmailVerified, setIsEmailVerified] =
        useState(false);

    const changeForm = (key, value) => {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    // 아이디 입력
    const handleIdChange = (value) => {
        changeForm("userId", value);

        // 값을 수정하면 이전 중복 확인 결과 제거
        setIdMessage("");
        setIdMessageType("");
    };

    // 아이디 중복 확인
    const handleIdCheck = async () => {
        if (!form.userId.trim()) {
            setIdMessage("아이디를 입력해 주세요.");
            setIdMessageType("error");
            return;
        }

        try {
            await checkLoginIdAvailability(
                form.userId.trim()
            );

            setIdMessage(
                "사용 가능한 아이디입니다."
            );
            setIdMessageType("success");
        } catch (error) {
            setIdMessage(
                error.response?.data?.message ||
                "이미 존재하는 아이디입니다."
            );
            setIdMessageType("error");
        }
    };

    // 비밀번호 입력
    const handlePasswordChange = (value) => {
        changeForm("password", value);

        // 회원가입 시 에러가 떴던 상태라면
        // 올바른 형식으로 수정했을 때만 에러 해제
        if (
            isPasswordFormatError &&
            PASSWORD_REGEX.test(value)
        ) {
            setIsPasswordFormatError(false);
        }

        // 비밀번호 확인값이 이미 있으면 일치 여부만 확인
        if (form.confirmPassword) {
            if (value !== form.confirmPassword) {
                setConfirmPasswordMessage(
                    "비밀번호가 일치하지 않습니다."
                );
            } else {
                setConfirmPasswordMessage("");
            }
        }
    };

    // 비밀번호 확인
    const handleConfirmPasswordChange = (value) => {
        changeForm(
            "confirmPassword",
            value
        );

        if (!value) {
            setConfirmPasswordMessage("");
            return;
        }

        if (form.password !== value) {
            setConfirmPasswordMessage(
                "비밀번호가 일치하지 않습니다."
            );
        } else {
            setConfirmPasswordMessage("");
        }
    };

    // 닉네임 입력
    const handleNicknameChange = (value) => {
        changeForm("nickname", value);

        setNicknameMessage("");
        setNicknameMessageType("");
    };

    // 닉네임 중복 확인
    const handleNicknameCheck = async () => {
        if (!form.nickname.trim()) {
            setNicknameMessage(
                "닉네임을 입력해 주세요."
            );
            setNicknameMessageType("error");
            return;
        }

        try {
            await checkNicknameAvailability(
                form.nickname.trim()
            );

            setNicknameMessage(
                "사용 가능한 닉네임입니다."
            );
            setNicknameMessageType("success");
        } catch (error) {
            setNicknameMessage(
                error.response?.data?.message ||
                "이미 존재하는 닉네임입니다."
            );
            setNicknameMessageType("error");
        }
    };

    // 이메일 입력
    const handleEmailChange = (value) => {
        changeForm("email", value);

        setEmailMessage("");
        setEmailMessageType("");

        setVerificationMessage("");
        setVerificationMessageType("");

        setIsEmailVerified(false);
    };

    // 이메일 중복 확인 + 인증번호 발송
    const handleEmailCheck = async () => {
        if (!form.email) {
            setEmailMessage(
                "이메일을 입력해 주세요."
            );
            setEmailMessageType("error");
            return;
        }

        try {
            await sendSignupEmailVerification(
                form.email
            );

            setEmailMessage(
                "인증번호를 발송했습니다."
            );
            setEmailMessageType("success");
        } catch (error) {
            setEmailMessage(
                error.response?.data?.message ||
                "인증번호 발송에 실패했습니다."
            );

            setEmailMessageType("error");
        }
    };

    // 인증번호 입력
    const handleVerificationCodeChange = (value) => {
        changeForm(
            "verificationCode",
            value
        );

        setVerificationMessage("");
        setVerificationMessageType("");
        setIsEmailVerified(false);
    };

    // 인증번호 확인
    const handleVerificationCheck = async () => {
        if (!form.verificationCode) {
            setVerificationMessage(
                "인증번호를 입력해 주세요."
            );
            setVerificationMessageType(
                "error"
            );
            return;
        }

        try {
            await confirmSignupEmailVerification(
                form.email,
                form.verificationCode
            );

            setIsEmailVerified(true);

            setVerificationMessage(
                "인증 되었습니다."
            );
            setVerificationMessageType(
                "success"
            );
        } catch (error) {
            setIsEmailVerified(false);

            setVerificationMessage(
                "인증번호를 확인해 주세요."
            );
            setVerificationMessageType(
                "error"
            );
        }
    };

    // 회원가입
    const handleSignup = async () => {
        if (
            !PASSWORD_REGEX.test(
                form.password
            )
        ) {
            setIsPasswordFormatError(true);
            return;
        }

        if (
            form.password !==
            form.confirmPassword
        ) {
            setConfirmPasswordMessage(
                "비밀번호가 일치하지 않습니다."
            );
            return;
        }

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
            await signup({
                loginId: form.userId,
                password: form.password,
                email: form.email,
                name: form.name,
                nickname: form.nickname,
            });

            navigate("/login");
        } catch (error) {
            setVerificationMessage(
                error.response?.data?.message ||
                "회원가입에 실패했습니다."
            );
            setVerificationMessageType(
                "error"
            );
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
    };
}

export default useSignup;