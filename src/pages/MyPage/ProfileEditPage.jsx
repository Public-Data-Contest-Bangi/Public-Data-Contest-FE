import { useNavigate } from "react-router-dom";

import * as S from "./ProfileEditPage.styled";

import useProfileEdit from "../../hooks/useProfileEdit";
import ProfileField from "./components/ProfileField";

import useProfileAvatar from "./hooks/useProfileAvatar";
import ProfileAvatarPicker from "./components/ProfileAvatarPicker";
import AlertModal from "../../components/common/AlertModal";

import backIcon from "../../assets/icons/back.png";

export default function ProfileEditPage() {
    const navigate = useNavigate();

    const {
        userId,
        name,
        nickname,
        email,

        currentPassword,
        newPassword,
        confirmPassword,

        userIdStatus,
        nicknameStatus,

        currentPasswordStatus,
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
        handleCurrentPasswordCheck,

        handleSubmit,
    } = useProfileEdit();

    const {
        selectedAvatar,
        selectedAvatarId,
        isAvatarPickerOpen,
        openAvatarPicker,
        closeAvatarPicker,
        handleAvatarSelect,
    } = useProfileAvatar();

    const profileFields = [
        {
            label: "아이디 입력",
            value: userId,
            onChange: handleUserIdChange,
            placeholder: "아이디",
            buttonText: "중복확인",
            onButtonClick: handleIdCheck,

            message:
                userIdStatus === "available"
                    ? "사용 가능한 아이디입니다."
                    : userIdStatus === "current"
                        ? "현재 사용 중인 아이디입니다."
                        : userIdStatus === "duplicate"
                            ? "이미 사용 중인 아이디입니다."
                            : userIdStatus === "empty"
                                ? "아이디를 입력해 주세요."
                                : null,

            messageType:
                userIdStatus === "available" ||
                    userIdStatus === "current"
                    ? "success"
                    : userIdStatus
                        ? "error"
                        : null,
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

            message:
                nicknameStatus === "available"
                    ? "사용 가능한 닉네임입니다."
                    : nicknameStatus === "current"
                        ? "현재 사용 중인 닉네임입니다."
                        : nicknameStatus === "duplicate"
                            ? "이미 사용 중인 닉네임입니다."
                            : nicknameStatus === "empty"
                                ? "닉네임을 입력해 주세요."
                                : null,

            messageType:
                nicknameStatus === "available" ||
                    nicknameStatus === "current"
                    ? "success"
                    : nicknameStatus
                        ? "error"
                        : null,
        },

        {
            label: "이메일",
            value: email,
            placeholder: "e-mail@gmail.com",
            readOnly: true,

            message: "이메일은 변경할 수 없습니다.",
            messageType: "helper",
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
                currentPasswordStatus === "ready"
                    ? "현재 비밀번호가 입력되었습니다."
                    : currentPasswordStatus === "error"
                        ? "현재 비밀번호를 확인해 주세요."
                        : null,

            messageType:
                currentPasswordStatus === "ready"
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
                    <S.ProfileImageCircle>
                        <S.ProfileImage
                            src={selectedAvatar.image}
                            alt="프로필 캐릭터"
                        />
                    </S.ProfileImageCircle>

                    <S.ProfileImageChangeButton
                        type="button"
                        onClick={openAvatarPicker}
                    >
                        프로필 캐릭터 변경
                    </S.ProfileImageChangeButton>
                </S.ProfileSection>

                {isAvatarPickerOpen && (
                    <ProfileAvatarPicker
                        selectedAvatarId={selectedAvatarId}
                        onSelect={handleAvatarSelect}
                        onClose={closeAvatarPicker}
                    />
                )}

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
            <AlertModal
                isOpen={isModalOpen}
                message={modalMessage}
                onConfirm={closeModal}
            />
        </S.Page>
    );
}