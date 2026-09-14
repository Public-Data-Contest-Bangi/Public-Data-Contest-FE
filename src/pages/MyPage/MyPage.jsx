import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./MyPage.styled";

import BottomNav from "../../components/BottomNav";

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
        path: "/report",
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

    const [isWithdrawModalOpen, setIsWithdrawModalOpen] =
        useState(false);

    const handleMenuClick = (item) => {
        if (item.path) {
            navigate(item.path);
            return;
        }

        if (item.action === "logout") {
            console.log("로그아웃");
            navigate("/login");
            return;
        }

        if (item.action === "withdraw") {
            setIsWithdrawModalOpen(true);
        }
    };

    const handleWithdraw = () => {
        console.log("회원 탈퇴");

        setIsWithdrawModalOpen(false);
        navigate("/login");
    };

    return (
        <S.Page>
            <S.Container>
                <S.Content>
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
                            src={profileCharacter}
                            alt="프로필 캐릭터"
                        />

                        <S.ProfileInfo>
                            <S.UserName>
                                햄지
                            </S.UserName>

                            <S.UserEmail>
                                hamham@gmail.com
                            </S.UserEmail>

                            <S.EditButton
                                type="button"
                                onClick={() =>
                                    navigate("/profile/edit")
                                }
                            >
                                정보수정
                            </S.EditButton>
                        </S.ProfileInfo>
                    </S.ProfileSection>

                    <S.Divider />

                    <S.MenuList>
                        {menuItems.map((item) => (
                            <S.MenuItem
                                key={item.id}
                                type="button"
                                onClick={() =>
                                    handleMenuClick(item)
                                }
                            >
                                <S.MenuLeft>
                                    <S.IconBox>
                                        <img
                                            src={item.icon}
                                            alt={item.label}
                                        />
                                    </S.IconBox>

                                    <S.MenuLabel>
                                        {item.label}
                                    </S.MenuLabel>
                                </S.MenuLeft>

                                {item.hasArrow && (
                                    <S.Chevron
                                        src={backIcon}
                                        alt=""
                                    />
                                )}
                            </S.MenuItem>
                        ))}
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
                            탈퇴 시 저장된 모든 데이터가 삭제되며
                            <br />
                            삭제된 데이터는 복구가 불가능합니다.
                        </S.ModalDescription>

                        <S.ModalButtonGroup>
                            <S.WithdrawButton
                                type="button"
                                onClick={handleWithdraw}
                            >
                                탈퇴
                            </S.WithdrawButton>

                            <S.CancelButton
                                type="button"
                                onClick={() =>
                                    setIsWithdrawModalOpen(false)
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