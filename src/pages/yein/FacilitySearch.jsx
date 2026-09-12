import './FacilitySearch.css';
import mascotSearchImg from './assets/facility-search/mascot-search.png';

function FacilitySearch() {
  return (
    <div className="facility-search">
      <header className="facility-search__header">
        <button type="button" className="facility-search__back" aria-label="뒤로가기">
          <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.8899 1.76664L10.1216 -2.67029e-05L0.489917 9.62831C0.33466 9.78259 0.211445 9.96605 0.127365 10.1681C0.0432855 10.3702 0 10.5869 0 10.8058C0 11.0247 0.0432855 11.2414 0.127365 11.4435C0.211445 11.6456 0.33466 11.829 0.489917 11.9833L10.1216 21.6166L11.8883 19.85L2.84825 10.8083L11.8899 1.76664Z"
              fill="#1A1A1A"
            />
          </svg>
        </button>
        <h1 className="facility-search__title">체육시설 찾기</h1>
      </header>

      <section className="facility-search__hero">
        <img src={mascotSearchImg} alt="" className="facility-search__mascot" />
        <p className="facility-search__hero-title">어디에서 운동하고 싶은가요?</p>
        <p className="facility-search__hero-subtitle">원하는 체육시설을 검색해보세요!</p>
      </section>

      <div className="facility-search__input-wrap">
        <svg
          className="facility-search__input-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="7" stroke="#B3B3B3" strokeWidth="2" />
          <path d="M20 20l-3.5-3.5" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input type="text" className="facility-search__input" placeholder="시설명을 검색해주세요" />
      </div>

      <section className="facility-search__region">
        <div className="facility-search__region-label">
          <svg width="18" height="18" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.5 7.3125C14.2459 7.3125 14.9613 7.60882 15.4887 8.13626C16.0162 8.66371 16.3125 9.37908 16.3125 10.125C16.3125 10.4943 16.2398 10.8601 16.0984 11.2013C15.9571 11.5425 15.7499 11.8526 15.4887 12.1137C15.2276 12.3749 14.9175 12.5821 14.5763 12.7234C14.2351 12.8648 13.8693 12.9375 13.5 12.9375C12.7541 12.9375 12.0387 12.6412 11.5113 12.1137C10.9838 11.5863 10.6875 10.8709 10.6875 10.125C10.6875 9.37908 10.9838 8.66371 11.5113 8.13626C12.0387 7.60882 12.7541 7.3125 13.5 7.3125ZM13.5 2.25C15.5886 2.25 17.5916 3.07969 19.0685 4.55653C20.5453 6.03338 21.375 8.03642 21.375 10.125C21.375 16.0312 13.5 24.75 13.5 24.75C13.5 24.75 5.625 16.0312 5.625 10.125C5.625 8.03642 6.45469 6.03338 7.93153 4.55653C9.40838 3.07969 11.4114 2.25 13.5 2.25ZM13.5 4.5C12.0082 4.5 10.5774 5.09263 9.52252 6.14752C8.46763 7.20242 7.875 8.63316 7.875 10.125C7.875 11.25 7.875 13.5 13.5 21.0487C19.125 13.5 19.125 11.25 19.125 10.125C19.125 8.63316 18.5324 7.20242 17.4775 6.14752C16.4226 5.09263 14.9918 4.5 13.5 4.5Z"
              fill="var(--color-primary)"
            />
          </svg>
          <span>지역 검색</span>
        </div>

        <button type="button" className="facility-search__current-location">
          <svg width="20" height="16" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.7684 7.58333C17.3742 7.58333 15.435 9.5225 15.435 11.9167C15.435 14.3108 17.3742 16.25 19.7684 16.25C22.1625 16.25 24.1017 14.3108 24.1017 11.9167C24.1017 9.5225 22.1625 7.58333 19.7684 7.58333ZM29.4534 10.8333C29.208 8.63647 28.2229 6.58833 26.6598 5.02525C25.0967 3.46217 23.0486 2.47705 20.8517 2.23167V0H18.685V2.23167C16.4882 2.47705 14.44 3.46217 12.877 5.02525C11.3139 6.58833 10.3288 8.63647 10.0834 10.8333H7.85171V13H10.0834C10.3288 15.1969 11.3139 17.245 12.877 18.8081C14.44 20.3712 16.4882 21.3563 18.685 21.6017V23.8333H20.8517V21.6017C23.0486 21.3563 25.0967 20.3712 26.6598 18.8081C28.2229 17.245 29.208 15.1969 29.4534 13H31.685V10.8333H29.4534ZM19.7684 19.5C15.5759 19.5 12.185 16.1092 12.185 11.9167C12.185 7.72417 15.5759 4.33333 19.7684 4.33333C23.9609 4.33333 27.3517 7.72417 27.3517 11.9167C27.3517 16.1092 23.9609 19.5 19.7684 19.5Z"
              fill="var(--color-primary)"
            />
          </svg>
          <span>현재 위치로 찾기</span>
        </button>

        <div className="facility-search__divider">
          <span>또는</span>
        </div>

        <div className="facility-search__selects">
          <select className="facility-search__select" defaultValue="서울특별시">
            <option value="서울특별시">서울특별시</option>
            <option value="부산광역시">부산광역시</option>
            <option value="경기도">경기도</option>
          </select>
          <select className="facility-search__select" defaultValue="중구">
            <option value="중구">중구</option>
            <option value="종로구">종로구</option>
            <option value="강남구">강남구</option>
          </select>
        </div>
      </section>

      {/* 검색결과 리스트 자리 (지금은 빈 공간으로 둠) */}
      <div className="facility-search__results" />
    </div>
  );
}

export default FacilitySearch;
