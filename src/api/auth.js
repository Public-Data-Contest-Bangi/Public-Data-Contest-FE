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