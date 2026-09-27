import Button from '../../components/common/Button';
import mascotSearchImg from '../../assets/images/mascot-search.png';
import locationIcon from '../../assets/icons/location-icon.png';
import { useFacilitySearch } from './hooks/useFacilitySearch';
import RegionSelectDropdown from './components/RegionSelectDropdown';
import {
  Container,
  Header,
  BackButton,
  Title,
  Hero,
  HeroText,
  HeroTitle,
  HeroSubtitle,
  Mascot,
  InputWrap,
  InputIcon,
  Input,
  KeywordSubmit,
  Divider,
  RegionSection,
  SectionTitle,
  PinIcon,
  CurrentLocationButton,
  TargetIcon,
  SelectList,
  SubmitButtonWrap,
} from './FacilitySearch.styled';

function FacilitySearch() {
  const {
    keyword,
    setKeyword,
    openMenu,
    provinceRef,
    cityRef,
    subDistrictRef,
    province,
    city,
    subDistrict,
    provinces,
    cities,
    subDistricts,
    regionsLoading,
    regionLoading,
    canSearchRegion,
    toggleMenu,
    handleProvinceSelect,
    handleCitySelect,
    handleSubDistrictSelect,
    goBack,
    goCurrentLocationMap,
    goKeywordSearch,
    goSearchResult,
  } = useFacilitySearch();

  return (
    <Container>
      <Header>
        <BackButton type="button" aria-label="뒤로가기" onClick={goBack}>
          <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.8899 1.76664L10.1216 -2.67029e-05L0.489917 9.62831C0.33466 9.78259 0.211445 9.96605 0.127365 10.1681C0.0432855 10.3702 0 10.5869 0 10.8058C0 11.0247 0.0432855 11.2414 0.127365 11.4435C0.211445 11.6456 0.33466 11.829 0.489917 11.9833L10.1216 21.6166L11.8883 19.85L2.84825 10.8083L11.8899 1.76664Z"
              fill="#1A1A1A"
            />
          </svg>
        </BackButton>
        <Title>체육시설 찾기</Title>
      </Header>

      <Hero>
        <HeroText>
          <HeroTitle>
            어디에서 운동하고
            <br />
            싶은가요?
          </HeroTitle>
          <HeroSubtitle>원하는 체육시설을 검색해보세요!</HeroSubtitle>
        </HeroText>
        <Mascot src={mascotSearchImg} alt="" />
      </Hero>

      <InputWrap>
        <InputIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="7" stroke="#B3B3B3" strokeWidth="2" />
          <path d="M20 20l-3.5-3.5" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" />
        </InputIcon>
        <Input
          type="text"
          placeholder="시설명을 검색해주세요"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </InputWrap>

      <KeywordSubmit type="button" onClick={goKeywordSearch}>
        검색
      </KeywordSubmit>

      <Divider>
        <span>또는</span>
      </Divider>

      <RegionSection>
        <SectionTitle>
          <PinIcon viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C7.9 2 4.5 5.3 4.5 9.4C4.5 15 12 22 12 22C12 22 19.5 15 19.5 9.4C19.5 5.3 16.1 2 12 2ZM12 12.2C10.4 12.2 9.2 11 9.2 9.4C9.2 7.8 10.4 6.6 12 6.6C13.6 6.6 14.8 7.8 14.8 9.4C14.8 11 13.6 12.2 12 12.2Z" />
          </PinIcon>
          지역 검색
        </SectionTitle>

        <CurrentLocationButton type="button" onClick={goCurrentLocationMap}>
          <TargetIcon src={locationIcon} alt="" />
          현재 위치로 찾기
        </CurrentLocationButton>

        <Divider>
          <span>또는</span>
        </Divider>

        <SelectList>
          <RegionSelectDropdown
            type="province"
            value={province}
            placeholder="도/시 선택"
            options={provinces}
            isOpen={openMenu === 'province'}
            isLoading={regionsLoading}
            wrapperRef={provinceRef}
            onToggle={() => toggleMenu('province')}
            onSelect={handleProvinceSelect}
          />

          <RegionSelectDropdown
            type="city"
            value={city}
            placeholder="시/군/구 선택"
            options={cities}
            isOpen={openMenu === 'city'}
            isLoading={regionsLoading}
            disabled={!province}
            wrapperRef={cityRef}
            onToggle={() => toggleMenu('city')}
            onSelect={handleCitySelect}
          />

          {subDistricts.length > 0 && (
            <RegionSelectDropdown
              type="district"
              value={subDistrict}
              placeholder="구 선택"
              options={subDistricts}
              isOpen={openMenu === 'district'}
              isLoading={regionsLoading}
              disabled={!city}
              wrapperRef={subDistrictRef}
              onToggle={() => toggleMenu('district')}
              onSelect={handleSubDistrictSelect}
            />
          )}
        </SelectList>
      </RegionSection>

      <SubmitButtonWrap>
        <Button
          type="button"
          radius="16px"
          onClick={goSearchResult}
          disabled={regionLoading || !canSearchRegion}
        >
          {regionLoading ? '검색 중...' : '시설 검색하기'}
        </Button>
      </SubmitButtonWrap>
    </Container>
  );
}

export default FacilitySearch;