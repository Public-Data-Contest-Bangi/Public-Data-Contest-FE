import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { validatePassword } from "../utils/passwordValidation";

export default function useProfileEdit() {
    const navigate = useNavigate();

    const [userId, setUserId] = useState("ham4246");
    const [name, setName] = useState("햄지");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("hamham@gmail.com");
    const [verificationCode, setVerificationCode] =
        useState("");

    const [emailStatus, setEmailStatus] = useState(null);
    const [verificationStatus, setVerificationStatus] =
        useState(null);

    const [currentPassword, setCurrentPassword] =
        useState("");
    const [newPassword, setNewPassword] =
        useState("");
    const [confirmPassword, setConfirmPassword] =
        useState("");

    const [
        currentPasswordStatus,
        setCurrentPasswordStatus,
    ] = useState(null);

    const [
        newPasswordStatus,
        setNewPasswordStatus,
    ] = useState(null);

    const [
        confirmPasswordStatus,
        setConfirmPasswordStatus,
    ] = useState(null);

    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);

        setEmailStatus(null);
        setVerificationStatus(null);
        setVerificationCode("");
    };

    const handleVerificationCodeChange = (e) => {
        setVerificationCode(e.target.value);
        setVerificationStatus(null);
    };

    const handleCurrentPasswordChange = (e) => {
        setCurrentPassword(e.target.value);
        setCurrentPasswordStatus(null);
    };

    const handleNewPasswordChange = (e) => {
        const value = e.target.value;

        setNewPassword(value);

        if (!value) {
            setNewPasswordStatus(null);
            setConfirmPasswordStatus(null);
            return;
        }

        setNewPasswordStatus(
            validatePassword(value)
                ? "success"
                : "error"
        );

        if (confirmPassword) {
            setConfirmPasswordStatus(
                value === confirmPassword
                    ? "success"
                    : "error"
            );
        }
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;

        setConfirmPassword(value);

        if (!value) {
            setConfirmPasswordStatus(null);
            return;
        }

        setConfirmPasswordStatus(
            value === newPassword
                ? "success"
                : "error"
        );
    };

    const handleIdCheck = () => {
        // TODO: 아이디 중복확인 API 연결
        console.log("아이디 중복 확인:", userId);
    };

    const handleNicknameCheck = () => {
        // TODO: 닉네임 중복확인 API 연결
        console.log("닉네임 중복 확인:", nickname);
    };

    const handleEmailVerify = () => {
        if (!email.trim()) {
            setEmailStatus("error");
            return;
        }

        // TODO: 이메일 인증번호 전송 API 연결
        console.log("이메일 인증 요청:", email);

        /*
        API 연결 후 예시

        성공:
        setEmailStatus("sent");

        이미 가입된 이메일:
        setEmailStatus("duplicate");
        */

        // 임시 테스트
        setEmailStatus("sent");
        setVerificationStatus(null);
    };

    const handleCodeVerify = () => {
        if (!verificationCode.trim()) {
            setVerificationStatus("error");
            return;
        }

        // TODO: 실제 인증번호 확인 API 연결

        // 임시 테스트용 인증번호
        if (verificationCode === "123456") {
            setVerificationStatus("success");
        } else {
            setVerificationStatus("error");
        }
    };

    const handleCurrentPasswordCheck = () => {
        if (!currentPassword) {
            setCurrentPasswordStatus("error");
            return;
        }

        // TODO: 현재 비밀번호 확인 API 연결

        // 임시 테스트용 비밀번호
        if (currentPassword === "1234") {
            setCurrentPasswordStatus("success");
        } else {
            setCurrentPasswordStatus("error");
        }
    };

    const handleSubmit = () => {
        if (
            newPassword &&
            newPasswordStatus !== "success"
        ) {
            alert(
                "새 비밀번호 형식을 확인해 주세요."
            );
            return;
        }

        if (
            newPassword &&
            confirmPasswordStatus !== "success"
        ) {
            alert(
                "새 비밀번호가 일치하지 않습니다."
            );
            return;
        }

        if (
            newPassword &&
            currentPasswordStatus !== "success"
        ) {
            alert(
                "현재 비밀번호를 확인해 주세요."
            );
            return;
        }

        const profileData = {
            userId,
            name,
            nickname,
            email,
            newPassword,
        };

        console.log(
            "회원정보 수정:",
            profileData
        );

        // TODO: 회원정보 수정 API 연결

        navigate("/mypage");
    };

    return {
        userId,
        name,
        nickname,
        email,
        verificationCode,

        currentPassword,
        newPassword,
        confirmPassword,

        emailStatus,
        verificationStatus,

        currentPasswordStatus,
        newPasswordStatus,
        confirmPasswordStatus,

        handleUserIdChange,
        handleNameChange,
        handleNicknameChange,
        handleEmailChange,
        handleVerificationCodeChange,

        handleCurrentPasswordChange,
        handleNewPasswordChange,
        handleConfirmPasswordChange,

        handleIdCheck,
        handleNicknameCheck,
        handleEmailVerify,
        handleCodeVerify,
        handleCurrentPasswordCheck,

        handleSubmit,
    };
}