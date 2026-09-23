import {
    useEffect,
    useState,
} from "react";
import { useNavigate } from "react-router-dom";

import {
    getMyProfile,
    updateMyProfile,
} from "../api/member";

import { validatePassword } from "../utils/passwordValidation";

export default function useProfileEdit() {
    const navigate = useNavigate();

    // 회원정보
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");

    const [
        verificationCode,
        setVerificationCode,
    ] = useState("");

    const [
        userIdStatus,
        setUserIdStatus,
    ] = useState(null);

    const [
        nicknameStatus,
        setNicknameStatus,
    ] = useState(null);

    const [
        emailStatus,
        setEmailStatus,
    ] = useState(null);

    const [
        verificationStatus,
        setVerificationStatus,
    ] = useState(null);

    // 비밀번호
    const [
        currentPassword,
        setCurrentPassword,
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

    // 모달
    const [
        isModalOpen,
        setIsModalOpen,
    ] = useState(false);

    const [
        modalMessage,
        setModalMessage,
    ] = useState("");

    const [
        modalDestination,
        setModalDestination,
    ] = useState(null);

    const openModal = (
        message,
        destination = null
    ) => {
        setModalMessage(message);
        setModalDestination(destination);
        setIsModalOpen(true);
    };

    const clearAuthData = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("tokenType");
        localStorage.removeItem("expiresIn");
        localStorage.removeItem("memberDetails");
    };

    const closeModal = () => {
        setIsModalOpen(false);

        if (modalDestination === "login") {
            // 비밀번호 변경 후 기존 토큰이 무효화될 수 있으므로 삭제
            clearAuthData();

            navigate(
                "/login",
                {
                    replace: true,
                }
            );

            return;
        }

        if (modalDestination === "mypage") {
            navigate(
                "/mypage",
                {
                    replace: true,
                }
            );
        }

        setModalDestination(null);
    };

    // 회원정보 조회
    useEffect(() => {
        const fetchMyProfile = async () => {
            try {
                const response =
                    await getMyProfile();

                const {
                    loginId,
                    name,
                    nickname,
                    email,
                } = response.data;

                setUserId(loginId ?? "");
                setName(name ?? "");
                setNickname(nickname ?? "");
                setEmail(email ?? "");

                console.log(
                    "회원정보 조회 성공:",
                    response.data
                );
            } catch (error) {
                console.error(
                    "회원정보 조회 실패:",
                    error.response?.data
                );
            }
        };

        fetchMyProfile();
    }, []);

    // 아이디
    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
        setUserIdStatus(null);
    };

    // 이름
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    // 닉네임
    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
        setNicknameStatus(null);
    };

    // 이메일
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

    // 현재 비밀번호
    const handleCurrentPasswordChange = (e) => {
        setCurrentPassword(e.target.value);
        setCurrentPasswordStatus(null);
    };

    // 새 비밀번호
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

    // 새 비밀번호 확인
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

    // 아이디 중복확인
    const handleIdCheck = () => {
        if (!userId.trim()) {
            setUserIdStatus("empty");
            return;
        }

        // TODO: 아이디 중복확인 API 연결
        setUserIdStatus("available");
    };

    // 닉네임 중복확인
    const handleNicknameCheck = () => {
        if (!nickname.trim()) {
            setNicknameStatus("empty");
            return;
        }

        // TODO: 닉네임 중복확인 API 연결
        setNicknameStatus("available");
    };

    // 이메일 인증
    const handleEmailVerify = () => {
        if (!email.trim()) {
            setEmailStatus("error");
            return;
        }

        setEmailStatus("sent");
        setVerificationStatus(null);
    };

    // 이메일 인증번호 확인
    const handleCodeVerify = () => {
        if (!verificationCode.trim()) {
            setVerificationStatus("error");
            return;
        }

        if (verificationCode === "123456") {
            setVerificationStatus("success");
        } else {
            setVerificationStatus("error");
        }
    };

    // 현재 비밀번호 입력 여부 확인
    const handleCurrentPasswordCheck = () => {
        if (!currentPassword.trim()) {
            setCurrentPasswordStatus("error");
            return;
        }

        // 실제 비밀번호 일치 여부는
        // PATCH 요청 시 서버에서 확인
        setCurrentPasswordStatus("ready");
    };

    // 회원정보 수정
    const handleSubmit = async () => {
        if (!userId.trim()) {
            openModal(
                "아이디를 입력해 주세요."
            );
            return;
        }

        if (!name.trim()) {
            openModal(
                "이름을 입력해 주세요."
            );
            return;
        }

        if (!nickname.trim()) {
            openModal(
                "닉네임을 입력해 주세요."
            );
            return;
        }

        // 새 비밀번호를 입력한 경우에만 검사
        if (
            newPassword &&
            newPasswordStatus !== "success"
        ) {
            openModal(
                "새 비밀번호 형식을 확인해 주세요."
            );
            return;
        }

        if (
            newPassword &&
            confirmPasswordStatus !== "success"
        ) {
            openModal(
                "새 비밀번호가 일치하지 않습니다."
            );
            return;
        }

        if (
            newPassword &&
            !currentPassword.trim()
        ) {
            openModal(
                "현재 비밀번호를 입력해 주세요."
            );
            return;
        }

        const profileData = {
            name: name.trim(),
            nickname: nickname.trim(),
            loginId: userId.trim(),
        };

        // 비밀번호 변경 시에만 추가
        if (newPassword) {
            profileData.currentPassword =
                currentPassword;

            profileData.newPassword =
                newPassword;
        }

        try {
            console.log(
                "회원정보 수정 요청:",
                profileData
            );

            const response =
                await updateMyProfile(
                    profileData
                );

            console.log(
                "회원정보 수정 성공:",
                response.data
            );

            // 비밀번호까지 변경한 경우
            if (newPassword) {
                openModal(
                    "비밀번호가 변경되었습니다.\n다시 로그인해 주세요.",
                    "login"
                );

                return;
            }

            // 이름 / 닉네임 / 아이디만 변경한 경우
            openModal(
                "회원정보가 수정되었습니다.",
                "mypage"
            );
        } catch (error) {
            console.error(
                "회원정보 수정 실패:",
                error.response?.data
            );

            const message =
                error.response?.data?.message;

            openModal(
                message ??
                    "회원정보 수정에 실패했습니다."
            );
        }
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

        userIdStatus,
        nicknameStatus,
        emailStatus,
        verificationStatus,

        currentPasswordStatus,
        newPasswordStatus,
        confirmPasswordStatus,

        // 모달
        isModalOpen,
        modalMessage,
        closeModal,

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