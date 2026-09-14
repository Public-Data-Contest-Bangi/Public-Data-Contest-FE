import { useNavigate } from "react-router-dom";

import * as S from "./ProfileEditPage.styled";

import useProfileEdit from "../../hooks/useProfileEdit";
import useProfileImage from "../../hooks/useProfileImage";
import ProfileField from "./components/ProfileField";

import profileCharacter from "../../assets/images/profile-character.png";
import backIcon from "../../assets/icons/back.png";

export default function ProfileEditPage() {
    const navigate = useNavigate();

    const {
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
    } = useProfileEdit();

    const {
        fileInputRef,
        profileImage,
        handleProfileImageClick,
        handleProfileImageChange,
    } = useProfileImage(profileCharacter);

    const profileFields = [
        {
            label: "아이디 입력",
            value: userId,
            onChange: handleUserIdChange,
            placeholder: "아이디",
            buttonText: "중복확인",
            onButtonClick: handleIdCheck,
        },
        {
            label: "이름 입력",
            value: name,
            onChange: handleNameChange,
            placeholder: "이름",
        },
        {
            label: "닉네임 입력",
            value: nickname,
            onChange: handleNicknameChange,
            placeholder: "닉네임",
            buttonText: "중복확인",
            onButtonClick: handleNicknameCheck,
        },
        {
            label: "이메일",
            value: email,
            onChange: handleEmailChange,
            placeholder: "e-mail@gmail.com",
            buttonText: "인증",
            onButtonClick: handleEmailVerify,
            message:
                emailStatus === "duplicate"
                    ? "이미 가입된 이메일입니다."
                    : emailStatus === "sent"
                      ? "인증번호를 전송했습니다."
                      : emailStatus === "error"
                        ? "이메일을 입력해 주세요."
                        : null,
            messageType:
                emailStatus === "sent"
                    ? "success"
                    : emailStatus
                      ? "error"
                      : null,
        },
        {
            label: "인증번호 입력",
            value: verificationCode,
            onChange: handleVerificationCodeChange,
            placeholder: "인증번호",
            buttonText: "확인",
            onButtonClick: handleCodeVerify,
            message:
                verificationStatus === "success"
                    ? "인증되었습니다."
                    : verificationStatus === "error"
                      ? "인증번호가 일치하지 않습니다."
                      : null,
            messageType:
                verificationStatus === "success"
                    ? "success"
                    : verificationStatus === "error"
                      ? "error"
                      : null,
        },
    ];

    const passwordFields = [
        {
            label: "현재 비밀번호",
            type: "password",
            value: currentPassword,
            onChange: handleCurrentPasswordChange,
            placeholder: "현재 비밀번호",
            buttonText: "확인",
            onButtonClick: handleCurrentPasswordCheck,
            message:
                currentPasswordStatus === "success"
                    ? "현재 비밀번호가 확인되었습니다."
                    : currentPasswordStatus === "error"
                      ? "비밀번호가 일치하지 않습니다."
                      : null,
            messageType:
                currentPasswordStatus === "success"
                    ? "success"
                    : currentPasswordStatus === "error"
                      ? "error"
                      : null,
        },
        {
            label: "새 비밀번호",
            type: "password",
            value: newPassword,
            onChange: handleNewPasswordChange,
            placeholder: "새 비밀번호",
            message:
                newPasswordStatus === "success"
                    ? "사용 가능한 비밀번호입니다."
                    : "영문, 숫자, 특수문자를 포함해 8자 이상 입력해 주세요.",
            messageType:
                newPasswordStatus === "success"
                    ? "success"
                    : newPasswordStatus === "error"
                      ? "error"
                      : "helper",
        },
        {
            label: "새 비밀번호 확인",
            type: "password",
            value: confirmPassword,
            onChange: handleConfirmPasswordChange,
            placeholder: "새 비밀번호 확인",
            message:
                confirmPasswordStatus === "success"
                    ? "비밀번호가 일치합니다."
                    : confirmPasswordStatus === "error"
                      ? "비밀번호가 일치하지 않습니다."
                      : null,
            messageType:
                confirmPasswordStatus === "success"
                    ? "success"
                    : confirmPasswordStatus === "error"
                      ? "error"
                      : null,
        },
    ];

    return (
        <S.Page>
            <S.Container>
                <S.Header>
                    <S.BackButton
                        type="button"
                        onClick={() => navigate(-1)}
                    >
                        <img
                            src={backIcon}
                            alt="뒤로가기"
                        />
                    </S.BackButton>

                    <S.HeaderTitle>
                        마이페이지
                    </S.HeaderTitle>
                </S.Header>

                <S.ProfileSection>
                    <S.ProfileImage
                        src={profileImage}
                        alt="프로필 이미지"
                    />

                    <S.ProfileImageChangeButton
                        type="button"
                        onClick={handleProfileImageClick}
                    >
                        <S.CameraIcon
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                d="M9 4.5 10.2 3h3.6L15 4.5h3A2.5 2.5 0 0 1 20.5 7v10A2.5 2.5 0 0 1 18 19.5H6A2.5 2.5 0 0 1 3.5 17V7A2.5 2.5 0 0 1 6 4.5h3Z"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinejoin="round"
                            />

                            <circle
                                cx="12"
                                cy="12"
                                r="3.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            />
                        </S.CameraIcon>

                        프로필 사진 변경
                    </S.ProfileImageChangeButton>

                    <S.HiddenFileInput
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleProfileImageChange}
                    />
                </S.ProfileSection>

                <S.FormSection>
                    {profileFields.map((field) => (
                        <ProfileField
                            key={field.label}
                            {...field}
                        />
                    ))}
                </S.FormSection>

                <S.Divider />

                <S.PasswordSection>
                    <S.PasswordTitle>
                        비밀번호 변경
                    </S.PasswordTitle>

                    {passwordFields.map((field) => (
                        <ProfileField
                            key={field.label}
                            {...field}
                        />
                    ))}
                </S.PasswordSection>

                <S.SubmitButton
                    type="button"
                    onClick={handleSubmit}
                >
                    수정 완료
                </S.SubmitButton>
            </S.Container>
        </S.Page>
    );
}