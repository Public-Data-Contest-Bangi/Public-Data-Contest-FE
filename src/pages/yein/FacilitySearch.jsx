import { useEffect, useRef, useState } from 'react';
import './FacilitySearch.css';
import mascotSearchImg from './assets/facility-search/mascot-search.png';

const regionData = {
  서울특별시: ['종로구','중구','용산구','성동구','광진구','동대문구','중랑구','성북구','강북구','도봉구','노원구','은평구','서대문구','마포구','양천구','강서구','구로구','금천구','영등포구','동작구','관악구','서초구','강남구','송파구','강동구'],
  부산광역시: ['중구','서구','동구','영도구','부산진구','동래구','남구','북구','해운대구','사하구','금정구','강서구','연제구','수영구','사상구','기장군'],
  대구광역시: ['중구','동구','서구','남구','북구','수성구','달서구','달성군','군위군'],
  인천광역시: ['중구','동구','미추홀구','연수구','남동구','부평구','계양구','서구','강화군','옹진군'],
  광주광역시: ['동구','서구','남구','북구','광산구'],
  대전광역시: ['동구','중구','서구','유성구','대덕구'],
  울산광역시: ['중구','남구','동구','북구','울주군'],
  세종특별자치시: ['세종특별자치시'],
  경기도: ['수원시','성남시','의정부시','안양시','부천시','광명시','평택시','동두천시','안산시','고양시','과천시','구리시','남양주시','오산시','시흥시','군포시','의왕시','하남시','용인시','파주시','이천시','안성시','김포시','화성시','광주시','양주시','포천시','여주시','연천군','가평군','양평군'],
  강원특별자치도: ['춘천시','원주시','강릉시','동해시','태백시','속초시','삼척시','홍천군','횡성군','영월군','평창군','정선군','철원군','화천군','양구군','인제군','고성군','양양군'],
  충청북도: ['청주시','충주시','제천시','보은군','옥천군','영동군','증평군','진천군','괴산군','음성군','단양군'],
  충청남도: ['천안시','공주시','보령시','아산시','서산시','논산시','계룡시','당진시','금산군','부여군','서천군','청양군','홍성군','예산군','태안군'],
  전북특별자치도: ['전주시','군산시','익산시','정읍시','남원시','김제시','완주군','진안군','무주군','장수군','임실군','순창군','고창군','부안군'],
  전라남도: ['목포시','여수시','순천시','나주시','광양시','담양군','곡성군','구례군','고흥군','보성군','화순군','장흥군','강진군','해남군','영암군','무안군','함평군','영광군','장성군','완도군','진도군','신안군'],
  경상북도: ['포항시','경주시','김천시','안동시','구미시','영주시','영천시','상주시','문경시','경산시','의성군','청송군','영양군','영덕군','청도군','고령군','성주군','칠곡군','예천군','봉화군','울진군','울릉군'],
  경상남도: ['창원시','진주시','통영시','사천시','김해시','밀양시','거제시','양산시','의령군','함안군','창녕군','고성군','남해군','하동군','산청군','함양군','거창군','합천군'],
  제주특별자치도: ['제주시','서귀포시'],
};

const provinces = Object.keys(regionData);

function FacilitySearch() {
  const [province, setProvince] = useState('서울특별시');
  const [district, setDistrict] = useState(regionData['서울특별시'][0]);
  const [openMenu, setOpenMenu] = useState(null); // 'province' | 'district' | null

  const provinceRef = useRef(null);
  const districtRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      const insideProvince = provinceRef.current && provinceRef.current.contains(e.target);
      const insideDistrict = districtRef.current && districtRef.current.contains(e.target);
      if (!insideProvince && !insideDistrict) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectProvince = (p) => {
    setProvince(p);
    setDistrict(regionData[p][0]);
    setOpenMenu(null);
  };

  const handleSelectDistrict = (d) => {
    setDistrict(d);
    setOpenMenu(null);
  };

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
        <div className="facility-search__hero-text">
          <p className="facility-search__hero-title">
            어디에서 운동하고
            <br />
            싶은가요?
          </p>
          <p className="facility-search__hero-subtitle">원하는 체육시설을 검색해보세요!</p>
        </div>
        <img src={mascotSearchImg} alt="" className="facility-search__mascot" />
      </section>

      <div className="facility-search__box facility-search__input-wrap">
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

        <button type="button" className="facility-search__box facility-search__current-location">
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
          <div className="facility-search__select-wrap" ref={provinceRef}>
            <svg
              className="facility-search__select-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="2" width="10" height="12" rx="1" stroke="var(--color-primary)" strokeWidth="1.3" />
              <rect x="5.5" y="4.5" width="2" height="2" fill="var(--color-primary)" />
              <rect x="8.5" y="4.5" width="2" height="2" fill="var(--color-primary)" />
              <rect x="5.5" y="7.5" width="2" height="2" fill="var(--color-primary)" />
              <rect x="8.5" y="7.5" width="2" height="2" fill="var(--color-primary)" />
              <rect x="6.5" y="11" width="3" height="3" fill="var(--color-primary)" />
            </svg>
            <button
              type="button"
              className="facility-search__select-trigger"
              onClick={() => setOpenMenu(openMenu === 'province' ? null : 'province')}
            >
              {province}
            </button>
            <svg
              className={`facility-search__select-chevron${openMenu === 'province' ? ' facility-search__select-chevron--open' : ''}`}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 4.5L6 7.5L9 4.5" stroke="#8C8C8C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {openMenu === 'province' && (
              <ul className="facility-search__select-menu">
                {provinces.map((p) => (
                  <li key={p}>
                    <button type="button" onClick={() => handleSelectProvince(p)}>
                      {p}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="facility-search__select-wrap" ref={districtRef}>
            <svg
              className="facility-search__select-icon"
              width="16"
              height="16"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 7.3125C14.2459 7.3125 14.9613 7.60882 15.4887 8.13626C16.0162 8.66371 16.3125 9.37908 16.3125 10.125C16.3125 10.4943 16.2398 10.8601 16.0984 11.2013C15.9571 11.5425 15.7499 11.8526 15.4887 12.1137C15.2276 12.3749 14.9175 12.5821 14.5763 12.7234C14.2351 12.8648 13.8693 12.9375 13.5 12.9375C12.7541 12.9375 12.0387 12.6412 11.5113 12.1137C10.9838 11.5863 10.6875 10.8709 10.6875 10.125C10.6875 9.37908 10.9838 8.66371 11.5113 8.13626C12.0387 7.60882 12.7541 7.3125 13.5 7.3125ZM13.5 2.25C15.5886 2.25 17.5916 3.07969 19.0685 4.55653C20.5453 6.03338 21.375 8.03642 21.375 10.125C21.375 16.0312 13.5 24.75 13.5 24.75C13.5 24.75 5.625 16.0312 5.625 10.125C5.625 8.03642 6.45469 6.03338 7.93153 4.55653C9.40838 3.07969 11.4114 2.25 13.5 2.25ZM13.5 4.5C12.0082 4.5 10.5774 5.09263 9.52252 6.14752C8.46763 7.20242 7.875 8.63316 7.875 10.125C7.875 11.25 7.875 13.5 13.5 21.0487C19.125 13.5 19.125 11.25 19.125 10.125C19.125 8.63316 18.5324 7.20242 17.4775 6.14752C16.4226 5.09263 14.9918 4.5 13.5 4.5Z"
                fill="var(--color-primary)"
              />
            </svg>
            <button
              type="button"
              className="facility-search__select-trigger"
              onClick={() => setOpenMenu(openMenu === 'district' ? null : 'district')}
            >
              {district}
            </button>
            <svg
              className={`facility-search__select-chevron${openMenu === 'district' ? ' facility-search__select-chevron--open' : ''}`}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 4.5L6 7.5L9 4.5" stroke="#8C8C8C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {openMenu === 'district' && (
              <ul className="facility-search__select-menu">
                {regionData[province].map((d) => (
                  <li key={d}>
                    <button type="button" onClick={() => handleSelectDistrict(d)}>
                      {d}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* 검색결과 리스트 자리 (지금은 빈 공간으로 둠) */}
      <div className="facility-search__results" />
    </div>
  );
}

export default FacilitySearch;