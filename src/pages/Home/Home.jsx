import {
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import mascotImg from "../../assets/images/mascot-dumbbell.png";
import searchProgramImg from "../../assets/images/icon-search-program.png";
import recommendImg from "../../assets/images/icon-exercise-recommend.png";
import dfitLogo from "../../assets/images/Dfit.png";

import BottomNav from "../../components/BottomNav";

import useMyPageProfile from "../MyPage/hooks/useMyPageProfile";

import {
  getFavoriteFacilities,
} from "../../api/favorite";

import {
  getCurrentCoords,
} from "../../utils/geolocation";

import * as S from "./Home.styled";

function Home() {
  const navigate = useNavigate();

  const {
    nickname,
    isLoading: profileLoading,
  } = useMyPageProfile();

  const [favorites, setFavorites] =
    useState([]);

  const [favoriteTotalCount, setFavoriteTotalCount] =
    useState(0);

  const [
    favoritesLoading,
    setFavoritesLoading,
  ] = useState(true);

  const [
    favoritesError,
    setFavoritesError,
  ] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadFavorites() {
      try {
        setFavoritesLoading(true);
        setFavoritesError(false);

        const coords =
          await getCurrentCoords();

        const response =
          await getFavoriteFacilities({
            latitude:
              coords.latitude,
            longitude:
              coords.longitude,
            page: 0,
            size: 6,
          });

        if (!cancelled) {
          setFavorites(
            response.data?.facilities ?? []
          );

          setFavoriteTotalCount(
            response.data?.totalCount ?? 0
          );
        }
      } catch (error) {
        console.error(
          "홈 화면 찜한 시설 조회 실패",
          error
        );

        if (!cancelled) {
          setFavoritesError(true);
          setFavorites([]);
        }
      } finally {
        if (!cancelled) {
          setFavoritesLoading(false);
        }
      }
    }

    loadFavorites();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <S.Page>
      <S.Content>
        <S.Hero>
          <S.Logo
            src={dfitLogo}
            alt="3Fit"
          />

          <S.HeroText>
            <S.Greeting>
              {profileLoading
                ? "안녕하세요,"
                : `${nickname || "회원"}님,`}
              <br />
              오늘도 움직여볼까요?
            </S.Greeting>

            <S.HeroSubText>
              나에게 맞는 운동을
              찾아보세요
            </S.HeroSubText>
          </S.HeroText>

          <S.MascotGlow />

          <S.Mascot
            src={mascotImg}
            alt=""
          />
        </S.Hero>

        <S.FavoriteSection>
          <S.SectionHeader>
            <S.SectionTitle>
              찜한 시설
            </S.SectionTitle>

            <S.MoreButton
              type="button"
              onClick={() =>
                navigate("/favorites")
              }
            >
              전체보기
              <span>›</span>
            </S.MoreButton>
          </S.SectionHeader>

          {favoritesLoading ? (
            <S.FavoriteState>
              찜한 시설을
              불러오는 중이에요.
            </S.FavoriteState>
          ) : favoritesError ? (
            <S.FavoriteState>
              찜한 시설을
              불러오지 못했어요.
            </S.FavoriteState>
          ) : favorites.length ===
            0 ? (
            <S.EmptyFavorite
              type="button"
              onClick={() =>
                navigate(
                  "/facility-search"
                )
              }
            >
              <S.EmptyHeart>
                ♡
              </S.EmptyHeart>

              <S.EmptyText>
                <strong>
                  아직 찜한 시설이
                  없어요
                </strong>

                <span>
                  마음에 드는 시설을
                  찜해보세요!
                </span>
              </S.EmptyText>

              <S.EmptyArrow>
                ›
              </S.EmptyArrow>
            </S.EmptyFavorite>
          ) : (
            <S.FavoriteScroller>
              {favorites.map((facility) => (
                <S.FavoriteItem
                  key={facility.facilityId}
                  type="button"
                  onClick={() =>
                    navigate(
                      `/facility-detail/${facility.facilityId}`
                    )
                  }
                >
                  <S.FavoriteInfo>
                    <S.FavoriteTopRow>
                      <S.FavoriteDot />
                      <S.FavoriteLabel>
                        MY PICK
                      </S.FavoriteLabel>
                    </S.FavoriteTopRow>

                    <S.FavoriteName>
                      {facility.name}
                    </S.FavoriteName>
                  </S.FavoriteInfo>

                  <S.FavoriteArrow>
                    ›
                  </S.FavoriteArrow>
                </S.FavoriteItem>
              ))}

              {favoriteTotalCount >
                favorites.length && (
                  <S.FavoriteMoreItem
                    type="button"
                    onClick={() =>
                      navigate("/favorites")
                    }
                  >
                    +{favoriteTotalCount -
                      favorites.length}
                    개 더보기
                  </S.FavoriteMoreItem>
                )}
            </S.FavoriteScroller>
          )}
        </S.FavoriteSection>

        <S.MenuSection>
          <S.MenuHeader>
            <S.SectionTitle>
              무엇을 해볼까요?
            </S.SectionTitle>
          </S.MenuHeader>

          <S.MenuGrid>
            <S.RecommendCard
              type="button"
              onClick={() =>
                navigate("/exercise-recommend")
              }
            >
              <S.CardText>
                <S.MenuLabel>
                  운동 추천
                </S.MenuLabel>

                <S.MenuDescription>
                  나에게 맞는
                  <br />
                  운동을 찾아봐요
                </S.MenuDescription>
              </S.CardText>

              <S.RecommendImage
                src={recommendImg}
                alt=""
              />
            </S.RecommendCard>

            <S.SideMenu>
              <S.SmallMenuCard
                type="button"
                onClick={() =>
                  navigate(
                    "/facility-search"
                  )
                }
              >
                <S.CardText>
                  <S.MenuLabel>
                    시설 검색
                  </S.MenuLabel>

                  <S.SmallDescription>
                    가까운
                    <br />
                    체육시설
                  </S.SmallDescription>
                </S.CardText>

                <S.MenuIcon
                  $position="left"
                  $image={
                    searchProgramImg
                  }
                />
              </S.SmallMenuCard>

              <S.SmallMenuCard
                type="button"
                onClick={() =>
                  navigate(
                    "/program-browse"
                  )
                }
              >
                <S.CardText>
                  <S.MenuLabel>
                    프로그램
                    <br />
                    둘러보기
                  </S.MenuLabel>
                </S.CardText>

                <S.MenuIcon
                  $position="right"
                  $image={
                    searchProgramImg
                  }
                />
              </S.SmallMenuCard>
            </S.SideMenu>
          </S.MenuGrid>
        </S.MenuSection>

        <S.InfoBanner>
          <S.InfoIcon>
            i
          </S.InfoIcon>

          <span>
            모든 체육시설의 무장애
            경로는 지도에서 확인할 수
            있어요.
          </span>
        </S.InfoBanner>
      </S.Content>

      <BottomNav />
    </S.Page>
  );
}

export default Home;