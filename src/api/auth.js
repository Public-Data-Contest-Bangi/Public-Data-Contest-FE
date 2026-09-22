import client from "./client";

// 회원가입 인증번호 발송
export const sendSignupEmailVerification = async (email) => {
    const response = await client.post(
        "/api/auth/email-verifications",
        {
            email,
        }
    );

    return response.data;
};

// 회원가입 인증번호 확인
export const confirmSignupEmailVerification = async (
    email,
    code
) => {
    const response = await client.post(
        "/api/auth/email-verifications/confirmation",
        {
            email,
            code,
        }
    );

    return response.data;
};

// 회원가입
export const signup = async ({
    loginId,
    password,
    email,
    name,
    nickname,
}) => {
    const response = await client.post(
        "/api/auth/signups",
        {
            loginId,
            password,
            email,
            name,
            nickname,
        }
    );

    return response.data;
};

// 아이디 중복 확인
export const checkLoginIdAvailability = async (loginId) => {
    const response = await client.get(
        "/api/auth/login-id/availability",
        {
            params: {
                loginId,
            },
        }
    );

    return response.data;
};

// 닉네임 중복 확인
export const checkNicknameAvailability = async (nickname) => {
    const response = await client.get(
        "/api/auth/nickname/availability",
        {
            params: {
                nickname,
            },
        }
    );

    return response.data;
};

// 로그인
export const login = async ({
    loginId,
    password,
}) => {
    const response = await client.post(
        "/api/auth/login",
        {
            loginId,
            password,
        }
    );

    return response.data;
};

// 로그아웃
export const logout = async () => {
    const response = await client.post(
        "/api/auth/logout"
    );

    return response.data;
};

// 토큰 재발급
export const refreshTokens = async (
    refreshToken
) => {
    const response = await client.post(
        "/api/auth/tokens",
        {
            refreshToken,
        }
    );

    return response.data;
};

// 비밀번호 재설정 인증번호 발송
export const sendPasswordResetCode = async ({
    name,
    email,
}) => {
    const response = await client.post(
        "/api/auth/password/email-verifications",
        {
            name,
            email,
        }
    );

    return response.data;
};


// 비밀번호 재설정 인증번호 확인
export const confirmPasswordResetCode = async ({
    name,
    email,
    code,
}) => {
    const response = await client.post(
        "/api/auth/password/email-verifications/confirmation",
        {
            name,
            email,
            code,
        }
    );

    return response.data;
};


// 비밀번호 재설정
export const resetPassword = async ({
    name,
    email,
    resetToken,
    newPassword,
}) => {
    const response = await client.post(
        "/api/auth/password/reset",
        {
            name,
            email,
            resetToken,
            newPassword,
        }
    );

    return response.data;
};

// 회원 탈퇴
export const withdraw = async () => {
    const response = await client.delete(
        "/api/auth/withdraw"
    );

    return response.data;
};