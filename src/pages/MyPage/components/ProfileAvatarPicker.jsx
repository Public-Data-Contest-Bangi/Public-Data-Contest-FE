import { PROFILE_AVATARS } from "../data/profileAvatars";

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
                onClick={(e) =>
                    e.stopPropagation()
                }
            >
                <S.AvatarModalTitle>
                    프로필 캐릭터 선택
                </S.AvatarModalTitle>

                <S.AvatarModalDescription>
                    마음에 드는 캐릭터를 선택해주세요.
                </S.AvatarModalDescription>

                <S.AvatarGrid>
                    {PROFILE_AVATARS.map(
                        (avatar) => (
                            <S.AvatarOption
                                key={avatar.id}
                                type="button"
                                $selected={
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
                                    alt="프로필 캐릭터"
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