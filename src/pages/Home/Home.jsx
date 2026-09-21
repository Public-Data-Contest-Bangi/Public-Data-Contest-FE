import { useNavigate } from 'react-router-dom';
import './Home.css';
import mascotImg from '../../assets/images/mascot-dumbbell.png';
import searchProgramImg from '../../assets/images/icon-search-program.png';
import recommendImg from '../../assets/images/icon-exercise-recommend.png';
import logoMark from '../../assets/images/logo-mark.png';
import BottomNav from '../../components/BottomNav';
import { LIKED_FACILITIES } from './utils/homeData';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <img src={logoMark} alt="Dfit" className="home__logo-mark" />

      <span className="home__logo-text">fit</span>

      <img src={mascotImg} alt="Dfit 마스코트" className="home__mascot" />

      <p className="home__greeting">
        혜원님,
        <br />
        오늘도 움직여볼까요?
      </p>

      <div className="home__body">
        <section className="home__liked">
          <div className="home__liked-scroll">
            <div className="liked-item">
              <div className="liked-card liked-card--active">
                <svg
                  className="liked-card__heart"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21s-6.7-4.35-9.3-8.1C1 10.2 1.6 6.7 4.6 5.2c2.2-1.1 4.6-.3 5.9 1.4a4 4 0 0 1 1.5-1.4c3-1.5 5.4.1 5.9 2.6.8 3.6-2.9 8.3-7.9 13.2Z"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="liked-card__label">찜한 시설</span>
              </div>
            </div>

            {LIKED_FACILITIES.map((facility) => (
              <div className="liked-item" key={facility.id}>
                <div className="liked-card liked-card--placeholder" />

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