import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import mascotImg from '../../assets/images/mascot-dumbbell.png';
import searchProgramImg from '../../assets/images/icon-search-program.png';
import recommendImg from '../../assets/images/icon-exercise-recommend.png';
import logoMark from '../../assets/images/logo-mark.png';
import BottomNav from '../../components/BottomNav';
import useMyPageProfile from '../MyPage/hooks/useMyPageProfile';
import { getFavoriteFacilities } from '../../api/favorite';
import { getCurrentCoords } from '../../utils/geolocation';

function Home() {
  const navigate = useNavigate();
  const { nickname, isLoading: profileLoading } = useMyPageProfile();

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function loadFavorites() {
      try {
        const coords = await getCurrentCoords();
        const response = await getFavoriteFacilities({
          latitude: coords.latitude,
          longitude: coords.longitude,
          page: 0,
          size: 3,
        });

        if (!cancelled) {
          setFavorites(response.data?.facilities ?? []);
        }
      } catch (error) {
        console.error('홈 화면 찜한 시설 조회 실패', error);
      }
    }

    loadFavorites();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="home">
      <img src={logoMark} alt="Dfit" className="home__logo-mark" />

      <span className="home__logo-text">fit</span>

      <img src={mascotImg} alt="Dfit 마스코트" className="home__mascot" />

      <p className="home__greeting">
        {profileLoading ? '' : nickname}님,
        <br />
        오늘도 움직여볼까요?
      </p>

      <div className="home__body">
        <section className="home__liked">
          <div className="home__liked-scroll">
            <div className="liked-item">
              <div
                className="liked-card liked-card--active"
                onClick={() => navigate('/favorites')}
                role="button"
                tabIndex={0}
              >
                <svg
                  className="liked-card__heart"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21s-7.2-4.35-9.6-8.55C0.6 9.15 1.65 5.4 5.1 4.35c2.55-0.75 5.1 0.3 6.9 2.55 1.8-2.25 4.35-3.3 6.9-2.55 3.45 1.05 4.5 4.8 2.7 8.1C19.2 16.65 12 21 12 21Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>

                <span className="liked-card__label">찜한 시설</span>
              </div>
            </div>

            {favorites.map((facility) => (
              <div
                className="liked-item"
                key={facility.facilityId}
                onClick={() => navigate(`/facility-detail/${facility.facilityId}`)}
                role="button"
                tabIndex={0}
              >
                <div
                  className="liked-card liked-card--placeholder"
                  style={
                    facility.representativeImageUrl
                      ? {
                          backgroundImage: `url(${facility.representativeImageUrl})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }
                      : undefined
                  }
                />

                <span className="liked-item__caption">{facility.name}</span>
              </div>
            ))}

            <div className="liked-item">
              <div className="liked-card liked-card--placeholder liked-card--peek" />
            </div>
          </div>
        </section>

        <section className="home__menu">
          {/* 운동 추천 */}
          <div
            className="menu-card menu-card--large"
            onClick={() => navigate('/exercise-recommend')}
            role="button"
            tabIndex={0}
          >
            <span className="menu-card__title">운동 추천</span>

            <img src={recommendImg} alt="운동 추천" className="menu-card__illust-recommend" />
          </div>

          <div className="home__menu-side">
            <div
              className="menu-card menu-card--small"
              onClick={() => navigate('/facility-search')}
              role="button"
              tabIndex={0}
            >
              <span className="menu-card__title">시설 검색</span>

              <div
                className="menu-card__icon menu-card__icon--search"
                style={{
                  backgroundImage: `url(${searchProgramImg})`,
                }}
              />
            </div>

            <div
              className="menu-card menu-card--small"
              onClick={() => navigate('/program-browse')}
              role="button"
              tabIndex={0}
            >
              <span className="menu-card__title">
                프로그램
                <br />
                둘러보기
              </span>

              <div
                className="menu-card__icon menu-card__icon--program"
                style={{
                  backgroundImage: `url(${searchProgramImg})`,
                }}
              />
            </div>
          </div>
        </section>
      </div>

      <p className="home__banner">모든 체육시설의 무장애 경로는 지도에서 확인할 수 있어요!</p>

      <BottomNav />
    </div>
  );
}

export default Home;