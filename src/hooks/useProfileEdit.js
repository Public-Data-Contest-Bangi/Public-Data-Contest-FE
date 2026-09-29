import {
    useEffect,
    useState,
} from "react";

import {
    useNavigate,
} from "react-router-dom";

import {
    getMyProfile,
    updateMyProfile,
} from "../api/member";

import {
    validatePassword,
} from "../utils/passwordValidation";

export default function useProfileEdit() {
    const navigate =
        useNavigate();

    /* =========================
       회원정보
    ========================= */

    const [
        userId,
        setUserId,
    ] = useState("");

    const [
        name,
        setName,
    ] = useState("");

    const [
        nickname,
        setNickname,
    ] = useState("");

    const [
        email,
        setEmail,
    ] = useState("");

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

    /* =========================
       비밀번호
    ========================= */

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
        newPasswordStatus,
        setNewPasswordStatus,
    ] = useState(null);

    const [
        confirmPasswordStatus,
        setConfirmPasswordStatus,
    ] = useState(null);

    /* =========================
       모달
    ========================= */

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
        setModalMessage(
            message
        );

        setModalDestination(
            destination
        );

        setIsModalOpen(
            true
        );
    };

    const clearAuthData = () => {
        localStorage.removeItem(
            "accessToken"
        );

        localStorage.removeItem(
            "refreshToken"
        );

        localStorage.removeItem(
            "tokenType"
        );

        localStorage.removeItem(
            "expiresIn"
        );

        localStorage.removeItem(
            "memberDetails"
        );
    };

    const closeModal = () => {
        setIsModalOpen(
            false
        );

        if (
            modalDestination ===
            "login"
        ) {
            clearAuthData();

            navigate(
                "/login",
                {
                    replace: true,
                }
            );

            return;
        }

        if (
            modalDestination ===
            "mypage"
        ) {
            navigate(
                "/mypage",
                {
                    replace: true,
                }
            );
        }

        setModalDestination(
            null
        );
    };

    /* =========================
       회원정보 조회
    ========================= */

    useEffect(() => {
        const fetchMyProfile =
            async () => {
                try {
                    const response =
                        await getMyProfile();

                    const {
                        loginId,
                        name,
                        nickname,
                        email,
                    } =
                        response.data;

                    setUserId(
                        loginId ?? ""
                    );

                    setName(
                        name ?? ""
                    );

                    setNickname(
                        nickname ?? ""
                    );

                    setEmail(
                        email ?? ""
                    );
                } catch (error) {
                    console.error(
                        "회원정보 조회 실패:",
                        error.response
                            ?.data ??
                            error
                    );
                }
            };

        fetchMyProfile();
    }, []);

    /* =========================
       회원정보 입력
    ========================= */

    const handleUserIdChange = (
        e
    ) => {
        setUserId(
            e.target.value
        );

        setUserIdStatus(
            null
        );
    };

    const handleNameChange = (
        e
    ) => {
        setName(
            e.target.value
        );
    };

    const handleNicknameChange = (
        e
    ) => {
        setNickname(
            e.target.value
        );

        setNicknameStatus(
            null
        );
    };

    const handleEmailChange = (
        e
    ) => {
        setEmail(
            e.target.value
        );

        setEmailStatus(
            null
        );

        setVerificationStatus(
            null
        );

        setVerificationCode(
            ""
        );
    };

    const handleVerificationCodeChange =
        (e) => {
            setVerificationCode(
                e.target.value
            );

            setVerificationStatus(
                null
            );
        };

    /* =========================
       현재 비밀번호
    ========================= */

    const handleCurrentPasswordChange =
        (e) => {
            setCurrentPassword(
                e.target.value
            );
        };

    /* =========================
       새 비밀번호
    ========================= */

    const handleNewPasswordChange = (
        e
    ) => {
        const value =
            e.target.value;

        setNewPassword(
            value
        );

        if (!value) {
            setNewPasswordStatus(
                null
            );

            setConfirmPasswordStatus(
                null
            );

            return;
        }

        setNewPasswordStatus(
            validatePassword(
                value
            )
                ? "success"
                : "error"
        );

        if (
            confirmPassword
        ) {
            setConfirmPasswordStatus(
                value ===
                    confirmPassword
                    ? "success"
                    : "error"
            );
        }
    };

    const handleConfirmPasswordChange =
        (e) => {
            const value =
                e.target.value;

            setConfirmPassword(
                value
            );

            if (!value) {
                setConfirmPasswordStatus(
                    null
                );

                return;
            }

            setConfirmPasswordStatus(
                value ===
                    newPassword
                    ? "success"
                    : "error"
            );
        };

    /* =========================
       아이디 / 닉네임
    ========================= */

    const handleIdCheck = () => {
        if (
            !userId.trim()
        ) {
            setUserIdStatus(
                "empty"
            );

            return;
        }

        // TODO:
        // 아이디 중복확인 API 연결
        setUserIdStatus(
            "available"
        );
    };

    const handleNicknameCheck =
        () => {
            if (
                !nickname.trim()
            ) {
                setNicknameStatus(
                    "empty"
                );

                return;
            }

            // TODO:
            // 닉네임 중복확인 API 연결
            setNicknameStatus(
                "available"
            );
        };

    /* =========================
       이메일 인증
    ========================= */

    const handleEmailVerify =
        () => {
            if (
                !email.trim()
            ) {
                setEmailStatus(
                    "error"
                );

                return;
            }

            setEmailStatus(
                "sent"
            );

            setVerificationStatus(
                null
            );
        };

    const handleCodeVerify =
        () => {
            if (
                !verificationCode.trim()
            ) {
                setVerificationStatus(
                    "error"
                );

                return;
            }

            if (
                verificationCode ===
                "123456"
            ) {
                setVerificationStatus(
                    "success"
                );
            } else {
                setVerificationStatus(
                    "error"
                );
            }
        };

    /* =========================
       회원정보 수정
    ========================= */

    const handleSubmit =
        async () => {
            if (
                !userId.trim()
            ) {
                openModal(
                    "아이디를 입력해 주세요."
                );

                return;
            }

            if (
                !name.trim()
            ) {
                openModal(
                    "이름을 입력해 주세요."
                );

                return;
            }

            if (
                !nickname.trim()
            ) {
                openModal(
                    "닉네임을 입력해 주세요."
                );

                return;
            }

            /*
             * 비밀번호 변경 시 검사
             */
            if (newPassword) {
                if (
                    !currentPassword.trim()
                ) {
                    openModal(
                        "현재 비밀번호를 입력해 주세요."
                    );

                    return;
                }

                if (
                    newPasswordStatus !==
                    "success"
                ) {
                    openModal(
                        "새 비밀번호 형식을 확인해 주세요."
                    );

                    return;
                }

                if (
                    confirmPasswordStatus !==
                    "success"
                ) {
                    openModal(
                        "새 비밀번호가 일치하지 않습니다."
                    );

                    return;
                }
            }

            const profileData = {
                name:
                    name.trim(),

                nickname:
                    nickname.trim(),

                loginId:
                    userId.trim(),
            };

            /*
             * 비밀번호 변경 시에만 전송
             */
            if (newPassword) {
                profileData.currentPassword =
                    currentPassword;

                profileData.newPassword =
                    newPassword;
            }

            try {
                const response =
                    await updateMyProfile(
                        profileData
                    );

                console.log(
                    "회원정보 수정 성공:",
                    response
                );

                if (
                    newPassword
                ) {
                    openModal(
                        "비밀번호가 변경되었습니다.\n다시 로그인해 주세요.",
                        "login"
                    );

                    return;
                }

                openModal(
                    "회원정보가 수정되었습니다.",
                    "mypage"
                );
            } catch (error) {
                console.error(
                    "회원정보 수정 실패:",
                    error.response
                        ?.data ??
                        error
                );

                const status =
                    error.response
                        ?.status;

                const responseData =
                    error.response
                        ?.data;

                const message =
                    responseData
                        ?.message ??
                    "";

                const code =
                    responseData
                        ?.code ??
                    "";

                /*
                 * 비밀번호 변경 요청 중
                 * 현재 비밀번호 관련 서버 오류는
                 * 전부 같은 문구로 처리
                 */
                const isCurrentPasswordError =
                    newPassword &&
                    (
                        message.includes(
                            "현재 비밀번호"
                        ) ||
                        message.includes(
                            "currentPassword"
                        ) ||
                        message.includes(
                            "현재비밀번호"
                        ) ||
                        (
                            message.includes(
                                "비밀번호"
                            ) &&
                            (
                                message.includes(
                                    "일치"
                                ) ||
                                message.includes(
                                    "올바르"
                                ) ||
                                message.includes(
                                    "확인"
                                )
                            )
                        ) ||
                        code
                            .toUpperCase()
                            .includes(
                                "PASSWORD"
                            ) ||
                        status === 401
                    );

                if (
                    isCurrentPasswordError
                ) {
                    openModal(
                        "현재 비밀번호가 일치하지 않습니다."
                    );

                    return;
                }

                openModal(
                    message ||
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

        newPasswordStatus,
        confirmPasswordStatus,

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

        handleSubmit,
    };
}