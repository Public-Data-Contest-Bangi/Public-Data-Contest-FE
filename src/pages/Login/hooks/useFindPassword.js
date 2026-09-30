import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    sendPasswordResetCode,
    confirmPasswordResetCode,
    resetPassword,
} from "../../../api/auth";

export default function useFindPassword() {
    const navigate = useNavigate();

    const [name, setName] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [
        verificationCode,
        setVerificationCode,
    ] = useState("");

    const [
        resetToken,
        setResetToken,
    ] = useState("");

    const [
        newPassword,
        setNewPassword,
    ] = useState("");

    const [
        confirmPassword,
        setConfirmPassword,
    ] = useState("");

    const [
        emailMessage,
        setEmailMessage,
    ] = useState("");

    const [
        emailStatus,
        setEmailStatus,
    ] = useState(null);

    const [
        verificationMessage,
        setVerificationMessage,
    ] = useState("");

    const [
        verificationStatus,
        setVerificationStatus,
    ] = useState(null);

    const [
        passwordMessage,
        setPasswordMessage,
    ] = useState("");

    const [
        isVerified,
        setIsVerified,
    ] = useState(false);

    const [
        isLoading,
        setIsLoading,
    ] = useState(false);

    const validatePassword = (
        password
    ) => {
        const hasLetter =
            /[A-Za-z]/.test(
                password
            );

        const hasNumber =
            /\d/.test(
                password
            );

        const hasSpecial =
            /[!@#$%^&*(),.?":{}|<>]/.test(
                password
            );

        return (
            password.length >= 8 &&
            hasLetter &&
            hasNumber &&
            hasSpecial
        );
    };

    // 인증번호 발송
    const handleEmailCheck =
        async () => {
            if (!name.trim()) {
                setEmailMessage(
                    "이름을 입력해주세요."
                );

                setEmailStatus(
                    "error"
                );

                return;
            }

            if (!email.trim()) {
                setEmailMessage(
                    "이메일을 입력해주세요."
                );

                setEmailStatus(
                    "error"
                );

                return;
            }

            try {
                setIsLoading(true);

                setEmailMessage(
                    ""
                );

                setEmailStatus(
                    null
                );

                await sendPasswordResetCode({
                    name:
                        name.trim(),

                    email:
                        email.trim(),
                });

                setEmailMessage(
                    "인증번호가 발송되었습니다."
                );

                setEmailStatus(
                    "success"
                );

                // 새 인증번호를 발송했으므로
                // 이전 인증 상태 초기화
                setVerificationCode(
                    ""
                );

                setVerificationMessage(
                    ""
                );

                setVerificationStatus(
                    null
                );

                setResetToken(
                    ""
                );

                setIsVerified(
                    false
                );

                console.log(
                    "비밀번호 재설정 인증번호 발송 성공"
                );
            } catch (error) {
                console.error(
                    "인증번호 발송 실패:",
                    error.response
                        ?.data
                );

                setEmailMessage(
                    error.response
                        ?.data
                        ?.message ??
                        "이름 또는 이메일을 확인해주세요."
                );

                setEmailStatus(
                    "error"
                );
            } finally {
                setIsLoading(
                    false
                );
            }
        };

    // 인증번호 확인
    const handleVerificationCheck =
        async () => {
            if (
                !verificationCode.trim()
            ) {
                setVerificationMessage(
                    "인증번호를 입력해주세요."
                );

                setVerificationStatus(
                    "error"
                );

                return;
            }

            try {
                setIsLoading(
                    true
                );

                setVerificationMessage(
                    ""
                );

                setVerificationStatus(
                    null
                );

                const response =
                    await confirmPasswordResetCode({
                        name:
                            name.trim(),

                        email:
                            email.trim(),

                        code:
                            verificationCode.trim(),
                    });

                setResetToken(
                    response.data
                        .resetToken
                );

                setVerificationMessage(
                    "인증되었습니다."
                );

                setVerificationStatus(
                    "success"
                );

                setIsVerified(
                    true
                );

                console.log(
                    "인증번호 확인 성공:",
                    response.data
                );
            } catch (error) {
                console.error(
                    "인증번호 확인 실패:",
                    error.response
                        ?.data
                );

                setVerificationMessage(
                    error.response
                        ?.data
                        ?.message ??
                        "인증번호를 확인해주세요."
                );

                setVerificationStatus(
                    "error"
                );

                setResetToken(
                    ""
                );

                setIsVerified(
                    false
                );
            } finally {
                setIsLoading(
                    false
                );
            }
        };

    // 새 비밀번호 저장
    const handlePasswordChange =
        async () => {
            if (!newPassword) {
                setPasswordMessage(
                    "새 비밀번호를 입력해주세요."
                );

                return;
            }

            if (
                !validatePassword(
                    newPassword
                )
            ) {
                setPasswordMessage(
                    "영문, 숫자, 특수문자를 포함해 8자 이상 입력해주세요."
                );

                return;
            }

            if (
                newPassword !==
                confirmPassword
            ) {
                setPasswordMessage(
                    "비밀번호가 일치하지 않습니다."
                );

                return;
            }

            if (!resetToken) {
                setPasswordMessage(
                    "인증번호 확인을 먼저 진행해주세요."
                );

                return;
            }

            try {
                setIsLoading(
                    true
                );

                setPasswordMessage(
                    ""
                );

                await resetPassword({
                    name:
                        name.trim(),

                    email:
                        email.trim(),

                    resetToken,

                    newPassword,
                });

                console.log(
                    "비밀번호 재설정 성공"
                );

                navigate(
                    "/login",
                    {
                        replace:
                            true,
                    }
                );
            } catch (error) {
                console.error(
                    "비밀번호 재설정 실패:",
                    error.response
                        ?.data
                );

                setPasswordMessage(
                    error.response
                        ?.data
                        ?.message ??
                        "비밀번호 재설정에 실패했습니다."
                );
            } finally {
                setIsLoading(
                    false
                );
            }
        };

    const handleNameChange =
        (e) => {
            setName(
                e.target.value
            );

            setEmailMessage(
                ""
            );

            setEmailStatus(
                null
            );

            setVerificationMessage(
                ""
            );

            setVerificationStatus(
                null
            );

            setVerificationCode(
                ""
            );

            setResetToken(
                ""
            );

            setIsVerified(
                false
            );
        };

    const handleEmailChange =
        (e) => {
            setEmail(
                e.target.value
            );

            setEmailMessage(
                ""
            );

            setEmailStatus(
                null
            );

            setVerificationMessage(
                ""
            );

            setVerificationStatus(
                null
            );

            setVerificationCode(
                ""
            );

            setResetToken(
                ""
            );

            setIsVerified(
                false
            );
        };

    const handleVerificationCodeChange =
        (e) => {
            setVerificationCode(
                e.target.value
            );

            setVerificationMessage(
                ""
            );

            setVerificationStatus(
                null
            );

            setResetToken(
                ""
            );

            setIsVerified(
                false
            );
        };

    const handleNewPasswordChange =
        (e) => {
            setNewPassword(
                e.target.value
            );

            setPasswordMessage(
                ""
            );
        };

    const handleConfirmPasswordChange =
        (e) => {
            setConfirmPassword(
                e.target.value
            );

            setPasswordMessage(
                ""
            );
        };

    return {
        name,
        email,
        verificationCode,
        newPassword,
        confirmPassword,

        emailMessage,
        emailStatus,

        verificationMessage,
        verificationStatus,

        passwordMessage,

        isVerified,
        isLoading,

        handleNameChange,
        handleEmailChange,
        handleVerificationCodeChange,
        handleNewPasswordChange,
        handleConfirmPasswordChange,

        handleEmailCheck,
        handleVerificationCheck,
        handlePasswordChange,
    };
}