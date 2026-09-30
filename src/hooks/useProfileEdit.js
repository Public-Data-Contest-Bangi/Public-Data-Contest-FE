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
    checkLoginIdAvailability,
    checkNicknameAvailability,
} from "../api/auth";

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
        originalUserId,
        setOriginalUserId,
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
        originalNickname,
        setOriginalNickname,
    ] = useState("");

    const [
        email,
        setEmail,
    ] = useState("");

    const [
        userIdStatus,
        setUserIdStatus,
    ] = useState(null);

    const [
        nicknameStatus,
        setNicknameStatus,
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

            return;
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

                    const currentLoginId =
                        loginId ?? "";

                    const currentNickname =
                        nickname ?? "";

                    setUserId(
                        currentLoginId
                    );

                    setOriginalUserId(
                        currentLoginId
                    );

                    setName(
                        name ?? ""
                    );

                    setNickname(
                        currentNickname
                    );

                    setOriginalNickname(
                        currentNickname
                    );

                    setEmail(
                        email ?? ""
                    );

                    /*
                     * 현재 사용 중인 값이므로
                     * 처음부터 정상 상태로 표시
                     */
                    setUserIdStatus(
                        "current"
                    );

                    setNicknameStatus(
                        "current"
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
        const value =
            e.target.value;

        setUserId(
            value
        );

        /*
         * 입력값을 바꾸면
         * 기존 중복확인 결과 무효화
         */
        if (
            value.trim() ===
            originalUserId
        ) {
            setUserIdStatus(
                "current"
            );
        } else {
            setUserIdStatus(
                null
            );
        }
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
        const value =
            e.target.value;

        setNickname(
            value
        );

        /*
         * 입력값을 바꾸면
         * 기존 중복확인 결과 무효화
         */
        if (
            value.trim() ===
            originalNickname
        ) {
            setNicknameStatus(
                "current"
            );
        } else {
            setNicknameStatus(
                null
            );
        }
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
       아이디 중복 확인
    ========================= */

    const handleIdCheck =
        async () => {
            const trimmedUserId =
                userId.trim();

            if (!trimmedUserId) {
                setUserIdStatus(
                    "empty"
                );

                return;
            }

            /*
             * 기존 아이디와 같으면
             * 자기 자신의 아이디이므로
             * API 호출 필요 없음
             */
            if (
                trimmedUserId ===
                originalUserId
            ) {
                setUserIdStatus(
                    "current"
                );

                return;
            }

            try {
                await checkLoginIdAvailability(
                    trimmedUserId
                );

                /*
                 * Swagger 기준
                 * 200 SUCCESS = 사용 가능
                 */
                setUserIdStatus(
                    "available"
                );
            } catch (error) {
                const status =
                    error.response
                        ?.status;

                const code =
                    error.response
                        ?.data
                        ?.code;

                console.error(
                    "아이디 중복 확인 실패:",
                    error.response
                        ?.data ??
                        error
                );

                /*
                 * Swagger 기준
                 * 409 DUPLICATE_LOGIN_ID
                 * = 이미 사용 중
                 */
                if (
                    status === 409 ||
                    code ===
                        "DUPLICATE_LOGIN_ID"
                ) {
                    setUserIdStatus(
                        "duplicate"
                    );

                    return;
                }

                setUserIdStatus(
                    null
                );

                openModal(
                    "아이디 중복 확인에 실패했습니다."
                );
            }
        };

    /* =========================
       닉네임 중복 확인
    ========================= */

    const handleNicknameCheck =
        async () => {
            const trimmedNickname =
                nickname.trim();

            if (!trimmedNickname) {
                setNicknameStatus(
                    "empty"
                );

                return;
            }

            /*
             * 현재 사용 중인 닉네임이면
             * 중복 검사할 필요 없음
             */
            if (
                trimmedNickname ===
                originalNickname
            ) {
                setNicknameStatus(
                    "current"
                );

                return;
            }

            try {
                await checkNicknameAvailability(
                    trimmedNickname
                );

                /*
                 * Swagger 기준
                 * 200 SUCCESS = 사용 가능
                 */
                setNicknameStatus(
                    "available"
                );
            } catch (error) {
                const status =
                    error.response
                        ?.status;

                const code =
                    error.response
                        ?.data
                        ?.code;

                console.error(
                    "닉네임 중복 확인 실패:",
                    error.response
                        ?.data ??
                        error
                );

                /*
                 * Swagger 기준
                 * 409 DUPLICATE_NICKNAME
                 * = 이미 사용 중
                 */
                if (
                    status === 409 ||
                    code ===
                        "DUPLICATE_NICKNAME"
                ) {
                    setNicknameStatus(
                        "duplicate"
                    );

                    return;
                }

                setNicknameStatus(
                    null
                );

                openModal(
                    "닉네임 중복 확인에 실패했습니다."
                );
            }
        };

    /* =========================
       회원정보 수정
    ========================= */

    const handleSubmit =
        async () => {
            const trimmedUserId =
                userId.trim();

            const trimmedName =
                name.trim();

            const trimmedNickname =
                nickname.trim();

            if (!trimmedUserId) {
                openModal(
                    "아이디를 입력해 주세요."
                );

                return;
            }

            /*
             * 아이디를 변경했다면
             * 중복확인 필수
             */
            if (
                trimmedUserId !==
                    originalUserId &&
                userIdStatus !==
                    "available"
            ) {
                openModal(
                    "아이디 중복 확인을 완료해 주세요."
                );

                return;
            }

            if (!trimmedName) {
                openModal(
                    "이름을 입력해 주세요."
                );

                return;
            }

            if (!trimmedNickname) {
                openModal(
                    "닉네임을 입력해 주세요."
                );

                return;
            }

            /*
             * 닉네임을 변경했다면
             * 중복확인 필수
             */
            if (
                trimmedNickname !==
                    originalNickname &&
                nicknameStatus !==
                    "available"
            ) {
                openModal(
                    "닉네임 중복 확인을 완료해 주세요."
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
                    trimmedName,

                nickname:
                    trimmedNickname,

                loginId:
                    trimmedUserId,
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
                 * 중복확인 이후 다른 사용자가
                 * 먼저 같은 아이디를 등록한 경우 등
                 * 서버에서 최종적으로 중복을 잡아낼 수 있음
                 */
                if (
                    status === 409 &&
                    code ===
                        "DUPLICATE_LOGIN_ID"
                ) {
                    setUserIdStatus(
                        "duplicate"
                    );

                    openModal(
                        "이미 사용 중인 아이디입니다."
                    );

                    return;
                }

                if (
                    status === 409 &&
                    code ===
                        "DUPLICATE_NICKNAME"
                ) {
                    setNicknameStatus(
                        "duplicate"
                    );

                    openModal(
                        "이미 사용 중인 닉네임입니다."
                    );

                    return;
                }

                /*
                 * 비밀번호 변경 요청 중
                 * 현재 비밀번호 관련 서버 오류
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

        currentPassword,
        newPassword,
        confirmPassword,

        userIdStatus,
        nicknameStatus,

        newPasswordStatus,
        confirmPasswordStatus,

        isModalOpen,
        modalMessage,
        closeModal,

        handleUserIdChange,
        handleNameChange,
        handleNicknameChange,

        handleCurrentPasswordChange,
        handleNewPasswordChange,
        handleConfirmPasswordChange,

        handleIdCheck,
        handleNicknameCheck,

        handleSubmit,
    };
}