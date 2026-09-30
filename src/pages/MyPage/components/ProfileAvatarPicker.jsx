import {
    PROFILE_AVATARS,
} from "../data/profileAvatars";

import * as S from "../ProfileEditPage.styled";

function ProfileAvatarPicker({
    selectedAvatarId,
    onSelect,
    onClose,
}) {
    return (
        <S.AvatarOverlay
            onClick={onClose}
        >
            <S.AvatarModal
                role="dialog"
                aria-modal="true"
                aria-labelledby="avatar-modal-title"
                onClick={(e) =>
                    e.stopPropagation()
                }
            >
                <S.AvatarModalTitle
                    id="avatar-modal-title"
                >
                    프로필 캐릭터 선택
                </S.AvatarModalTitle>

                <S.AvatarModalDescription>
                    마음에 드는 캐릭터를 선택해주세요.
                </S.AvatarModalDescription>

                <S.AvatarGrid>
                    {PROFILE_AVATARS.map(
                        (avatar) => (
                            <S.AvatarOption
                                key={
                                    avatar.id
                                }
                                type="button"
                                $selected={
                                    avatar.id ===
                                    selectedAvatarId
                                }
                                aria-label={`프로필 캐릭터 ${avatar.id} 선택`}
                                aria-pressed={
                                    avatar.id ===
                                    selectedAvatarId
                                }
                                onClick={() =>
                                    onSelect(
                                        avatar.id
                                    )
                                }
                            >
                                <img
                                    src={
                                        avatar.image
                                    }
                                    alt=""
                                />
                            </S.AvatarOption>
                        )
                    )}
                </S.AvatarGrid>

                <S.AvatarCloseButton
                    type="button"
                    onClick={onClose}
                >
                    닫기
                </S.AvatarCloseButton>
            </S.AvatarModal>
        </S.AvatarOverlay>
    );
}

export default ProfileAvatarPicker;