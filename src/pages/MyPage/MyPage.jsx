import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./MyPage.styled";

import BottomNav from "../../components/BottomNav";
import Header from "../../components/common/Header";

import useLogout from "./hooks/useLogout";
import useWithdraw from "./hooks/useWithdraw";
import useMyPageProfile from "./hooks/useMyPageProfile";

import profileCharacter from "../../assets/images/profile-character.png";

import backIcon from "../../assets/icons/back.png";
import reportIcon from "../../assets/icons/reportIcon.png";
import challengeIcon from "../../assets/icons/challengeIcon.png";
import heartIcon from "../../assets/icons/heartIcon.png";
import logoutIcon from "../../assets/icons/logoutIcon.png";
import withdrawIcon from "../../assets/icons/withdrawIcon.png";

const menuItems = [
    {
        id: 1,
        label: "사용자 불편 신고",
        icon: reportIcon,
        path: "/report-history",
        hasArrow: true,
    },
    {
        id: 2,
        label: "내 조건",
        icon: challengeIcon,
        path: "/my-condition",
        hasArrow: true,
    },
    {
        id: 3,
        label: "즐겨찾기",
        icon: heartIcon,
        path: "/favorites",
        hasArrow: true,
    },
    {
        id: 4,
        label: "로그아웃",
        icon: logoutIcon,
        action: "logout",
        hasArrow: false,
    },
    {
        id: 5,
        label: "회원 탈퇴",
        icon: withdrawIcon,
        action: "withdraw",
        hasArrow: false,
    },
];

export default function MyPage() {
    const navigate = useNavigate();

    const {
        handleLogout,
    } = useLogout();

    const {
        handleWithdraw: withdrawMember,
    } = useWithdraw();

    const {
        nickname,
        email,
        isLoading,
    } = useMyPageProfile();

    const [
        isWithdrawModalOpen,
        setIsWithdrawModalOpen,
    ] = useState(false);

    const handleMenuClick = async (item) => {
        if (item.path) {
            navigate(item.path);
            return;
        }

        if (item.action === "logout") {
            await handleLogout();
            return;
        }

        if (item.action === "withdraw") {
            setIsWithdrawModalOpen(true);
        }
    };

    const handleWithdrawConfirm = async () => {
        const success =
            await withdrawMember();

        if (!success) {
            return;
        }

        setIsWithdrawModalOpen(false);
    };

    return (
        <S.Page>
            <S.Container>
                <S.Content>
                    <Header title="마이페이지" />

                    <S.ProfileSection>
                        <S.ProfileImage
                            src={profileCharacter}
                            alt="프로필 캐릭터"
                        />

                        <S.ProfileInfo>
                            <S.UserName>
                                {isLoading
                                    ? "불러오는 중..."
                                    : nickname}
                            </S.UserName>

                            <S.UserEmail>
                                {isLoading
                                    ? ""
                                    : email}
                            </S.UserEmail>

                            <S.EditButton
                                type="button"
                                onClick={() =>
                                    navigate(
                                        "/profile-edit"
                                    )
                                }
                            >
                                정보수정
                            </S.EditButton>
                        </S.ProfileInfo>
                    </S.ProfileSection>

                    <S.Divider />

                    <S.MenuList>
                        {menuItems.map(
                            (item) => (
                                <S.MenuItem
                                    key={
                                        item.id
                                    }
                                    type="button"
                                    onClick={() =>
                                        handleMenuClick(
                                            item
                                        )
                                    }
                                >
                                    <S.MenuLeft>
                                        <S.IconBox>
                                            <img
                                                src={
                                                    item.icon
                                                }
                                                alt={
                                                    item.label
                                                }
                                            />
                                        </S.IconBox>

                                        <S.MenuLabel>
                                            {
                                                item.label
                                            }
                                        </S.MenuLabel>
                                    </S.MenuLeft>

                                    {item.hasArrow && (
                                        <S.Chevron
                                            src={
                                                backIcon
                                            }
                                            alt=""
                                        />
                                    )}
                                </S.MenuItem>
                            )
                        )}
                    </S.MenuList>
                </S.Content>

                <BottomNav />
            </S.Container>

            {isWithdrawModalOpen && (
                <S.ModalOverlay>
                    <S.Modal>
                        <S.ModalTitle>
                            탈퇴 하시겠습니까?
                        </S.ModalTitle>

                        <S.ModalDescription>
                            탈퇴 시 저장된 모든
                            데이터가 삭제되며
                            <br />
                            삭제된 데이터는 복구가
                            불가능합니다.
                        </S.ModalDescription>

                        <S.ModalButtonGroup>
                            <S.WithdrawButton
                                type="button"
                                onClick={
                                    handleWithdrawConfirm
                                }
                            >
                                탈퇴
                            </S.WithdrawButton>

                            <S.CancelButton
                                type="button"
                                onClick={() =>
                                    setIsWithdrawModalOpen(
                                        false
                                    )
                                }
                            >
                                취소
                            </S.CancelButton>
                        </S.ModalButtonGroup>
                    </S.Modal>
                </S.ModalOverlay>
            )}
        </S.Page>
    );
}