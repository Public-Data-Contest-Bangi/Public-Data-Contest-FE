import './Home.css';
import mascotImg from './assets/mascot-dumbbell.png';
import searchProgramImg from './assets/icon-search-program.png';
import recommendImg from './assets/icon-exercise-recommend.png';
import logoMark from './assets/logo-mark.png';
import BottomNav from '../../components/BottomNav';

const likedFacilities = [
  { id: 1, name: '서울 곰두리체육센터' },
  { id: 2, name: '올림픽체육관' },
];

function Home() {
  return (
    <div className="home">
      {/* 헤더: 로고 + fit 텍스트 + 마스코트 (Figma 좌표 그대로) */}
      <img src={logoMark} alt="Dfit" className="home__logo-mark" />
      <span className="home__logo-text">fit</span>
      <img src={mascotImg} alt="Dfit 마스코트" className="home__mascot" />

      {/* 인사말 텍스트 (Figma 좌표/폰트 그대로) */}
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

            {likedFacilities.map((facility) => (
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
          <div className="menu-card menu-card--large">
            <span className="menu-card__title">운동 추천</span>
            <img
              src={recommendImg}
              alt="운동 추천"
              className="menu-card__illust-recommend"
            />
          </div>

          <div className="home__menu-side">
            <div className="menu-card menu-card--small">
              <span className="menu-card__title">시설 검색</span>
              <div
                className="menu-card__icon menu-card__icon--search"
                style={{ backgroundImage: `url(${searchProgramImg})` }}
              />
            </div>
            <div className="menu-card menu-card--small">
              <span className="menu-card__title">
                프로그램
                <br />
                둘러보기
              </span>
              <div
                className="menu-card__icon menu-card__icon--program"
                style={{ backgroundImage: `url(${searchProgramImg})` }}
              />
            </div>
          </div>
        </section>
      </div>

      {/* 하단 안내 문구 (Figma 좌표/폰트/색상 그대로) */}
      <p className="home__banner">
        모든 체육시설의 무장애 경로는 지도에서 확인할 수 있어요!
      </p>

      <BottomNav />
    </div>
  );
}

export default Home;