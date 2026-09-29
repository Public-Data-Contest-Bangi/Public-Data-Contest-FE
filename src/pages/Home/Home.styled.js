import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    max-width: 375px;
    min-height: 100dvh;

    margin: 0 auto;

    background: #ffffff;
`;

export const Content = styled.main`
    width: 100%;

    padding: 14px 18px 92px;

    box-sizing: border-box;
`;

/* =========================
   HERO
========================= */

export const Hero = styled.section`
    position: relative;

    width: 100%;
    height: 190px;

    padding: 18px 18px 20px;

    box-sizing: border-box;

    overflow: hidden;

    border-radius: 0 0 26px 26px;

    background:
        linear-gradient(
            145deg,
            #ffffff 0%,
            #f8fffb 55%,
            #effcf6 100%
        );
`;

export const Logo = styled.img`
    position: relative;
    z-index: 3;

    width: 48px;
    height: auto;

    display: block;
`;

export const HeroText = styled.div`
    position: absolute;

    left: 18px;
    bottom: 22px;

    z-index: 3;
`;

export const Greeting = styled.p`
    margin: 0;

    color: #161616;

    font-size: 20px;
    font-weight: 750;
    line-height: 1.35;
    letter-spacing: -0.6px;
`;

export const HeroSubText = styled.p`
    margin: 7px 0 0;

    color: #7b8b84;

    font-size: 11px;
    font-weight: 500;
    line-height: 1.45;
`;

export const MascotGlow = styled.div`
    position: absolute;

    right: 6px;
    bottom: 12px;

    width: 145px;
    height: 145px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(64, 210, 147, 0.20) 0%,
            rgba(64, 210, 147, 0.10) 55%,
            rgba(64, 210, 147, 0) 72%
        );

    z-index: 1;
`;

export const Mascot = styled.img`
    position: absolute;

    right: -3px;
    bottom: 4px;

    width: 165px;
    height: 165px;

    object-fit: contain;

    z-index: 2;

    pointer-events: none;
`;

/* =========================
   COMMON SECTION
========================= */

export const SectionHeader = styled.div`
    width: 100%;

    margin-bottom: 11px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SectionTitle = styled.h2`
    margin: 0;

    color: #151515;

    font-size: 18px;
    font-weight: 700;

    letter-spacing: -0.3px;
`;

export const MoreButton = styled.button`
    padding: 0;

    display: flex;
    align-items: center;

    gap: 3px;

    border: none;

    background: transparent;

    color: #999999;

    font-family: inherit;
    font-size: 11px;

    cursor: pointer;

    span {
        font-size: 16px;
    }
`;

/* =========================
   FAVORITES
========================= */

export const FavoriteSection = styled.section`
    margin-top: 18px;
`;

/* 찜 목록 한 줄 가로 스크롤 */
export const FavoriteScroller = styled.div`
    display: flex;
    align-items: flex-start;

    gap: 12px;

    margin: 0 -18px;
    padding: 0 18px 4px;

    overflow-x: auto;

    scroll-behavior: smooth;
    overscroll-behavior-x: contain;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const FavoriteItem = styled.button`
    width: 76px;

    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 7px;

    flex-shrink: 0;

    border: none;

    background: transparent;

    font-family: inherit;

    cursor: pointer;
`;

export const FavoriteMoreItem = styled.button`
    width: 76px;

    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 7px;

    flex-shrink: 0;

    border: none;

    background: transparent;

    font-family: inherit;

    cursor: pointer;
`;

export const FavoriteMoreCircle = styled.div`
    width: 72px;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    border: 1px dashed #bcebd8;
    border-radius: 16px;

    background: #f5fcf9;

    color: #2cc98e;

    font-size: 14px;
    font-weight: 700;
`;

export const FavoriteMoreText = styled.span`
    color: #777777;

    font-size: 10.5px;
    font-weight: 500;
`;

export const FavoriteImage = styled.img`
    width: 72px;
    height: 72px;

    border-radius: 16px;

    object-fit: cover;

    background: #f2f2f2;
    border: 1px solid #e1f4eb;
`;

export const FavoritePlaceholder = styled.div`
    width: 72px;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 16px;

    background: #eefbf5;

    color: #40d293;

    font-size: 24px;
`;

export const FavoriteName = styled.span`
    width: 76px;

    overflow: hidden;

    color: #444444;

    font-size: 10.5px;
    font-weight: 500;

    text-align: center;

    text-overflow: ellipsis;
    white-space: nowrap;
`;

/* 로딩 / 에러 */
export const FavoriteState = styled.div`
    width: 100%;

    padding: 22px 10px;

    box-sizing: border-box;

    border-radius: 14px;

    background: #f8f8f8;

    color: #999999;

    font-size: 11px;
    text-align: center;
`;

/* 찜 0개 */
export const EmptyFavorite = styled.button`
    width: 100%;
    min-height: 64px;

    padding: 10px 14px;

    display: flex;
    align-items: center;

    gap: 12px;

    box-sizing: border-box;

    border: 1px solid #d9f4e8;
    border-radius: 14px;

    background: #f5fcf9;

    font-family: inherit;
    text-align: left;

    cursor: pointer;
`;

export const EmptyHeart = styled.div`
    width: 38px;
    height: 38px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 11px;

    background: #dff8ed;

    color: #2cc98e;

    font-size: 21px;
`;

export const EmptyText = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;

    gap: 4px;

    strong {
        color: #222222;

        font-size: 12px;
        font-weight: 700;
    }

    span {
        color: #929292;

        font-size: 10px;
    }
`;

export const EmptyArrow = styled.span`
    flex-shrink: 0;

    color: #8eaaa0;

    font-size: 20px;
`;

/* =========================
   MENU
========================= */

export const MenuSection = styled.section`
    margin-top: 22px;
`;

export const MenuHeader = styled.div`
    margin-bottom: 11px;
`;

export const MenuGrid = styled.div`
    display: grid;

    grid-template-columns:
        minmax(0, 1.08fr)
        minmax(0, 0.92fr);

    gap: 10px;
`;

export const RecommendCard = styled.button`
    position: relative;

    min-height: 180px;

    padding: 0;

    overflow: hidden;

    box-sizing: border-box;

    border: none;
    border-radius: 18px;

    background: #f6f6f6;

    font-family: inherit;
    text-align: left;

    cursor: pointer;

    &:active {
        transform: scale(0.985);
    }
`;

export const SideMenu = styled.div`
    display: flex;
    flex-direction: column;

    gap: 10px;
`;

export const SmallMenuCard = styled.button`
    position: relative;

    min-height: 85px;

    padding: 14px;

    overflow: hidden;

    box-sizing: border-box;

    border: none;
    border-radius: 18px;

    background: #f6f6f6;

    font-family: inherit;
    text-align: left;

    cursor: pointer;

    &:active {
        transform: scale(0.985);
    }
`;

export const CardText = styled.div`
    position: absolute;

    top: 18px;
    left: 18px;

    z-index: 2;

    text-align: left;
`;

export const MenuLabel = styled.div`
    color: #171717;

    font-size: 15px;
    font-weight: 700;
    line-height: 1.35;
`;

export const MenuDescription = styled.div`
    margin-top: 5px;

    color: #82918b;

    font-size: 11px;
    font-weight: 400;
    line-height: 1.4;
`;

export const SmallDescription = styled.div`
    margin-top: 3px;

    color: #a0a0a0;

    font-size: 11px;
`;

export const RecommendImage = styled.img`
    position: absolute;

    right: -6px;
    bottom: 3px;

    width: 128px;
    height: 128px;

    object-fit: contain;
`;

export const MenuIcon = styled.div`
    position: absolute;

    right: 4px;
    bottom: 3px;

    width: 70px;
    height: 70px;

    background-image: ${({ $image }) =>
        `url("${$image}")`};

    background-repeat: no-repeat;
    background-size: 200% 100%;

    background-position: ${({ $position }) =>
        $position === "left"
            ? "left center"
            : "right center"};
`;

/* =========================
   INFO
========================= */

export const InfoBanner = styled.div`
    width: 100%;

    margin-top: 16px;
    padding: 9px 11px;

    display: flex;
    align-items: center;

    gap: 7px;

    box-sizing: border-box;

    border-radius: 11px;

    background: #f7f7f7;

    color: #808080;

    font-size: 9.5px;
    line-height: 1.4;
`;

export const InfoIcon = styled.span`
    width: 23px;
    height: 23px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #e5f7ef;

    color: #35bf89;

    font-size: 12px;
    font-weight: 800;
`;