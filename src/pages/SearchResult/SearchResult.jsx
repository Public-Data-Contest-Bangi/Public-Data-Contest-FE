import BottomNav from '../../components/BottomNav';
import Header from '../../components/common/Header';
import { useSearchResult } from './hooks/useSearchResult';
import { formatDistance } from './utils/searchResultData';
import { SPORT_OPTIONS, ACCESSIBILITY_ITEMS } from '../SearchFilter/utils/searchFilterOptions';
import { getSportIcon, getSportDisplayName } from '../FacilityDetail/utils/sportIcons';
import AccessIcon from './components/AccessIcon';
import {
  Container,
  FilterButton,
  CountText,
  ChipRow,
  Chip,
  List,
  Card,
  CardBody,
  CardTitleRow,
  CardName,
  CardDistance,
  CardSports,
  SportChip,
  SportChipIcon,
  CardAccessRow,
  CardChevron,
} from './SearchResult.styled';

function SearchResult() {
  const {
    keyword,
    accessibilityCodes,
    sportIds,
    voucherStatus,
    facilities,
    totalCount,
    loading,
    error,
    goBack,
    goFilter,
    goDetail,
  } = useSearchResult();

  const accessibilityLabels = ACCESSIBILITY_ITEMS.filter((item) =>
    item.code && accessibilityCodes.includes(item.code)
  ).map((item) => item.label);

  const sportLabels = SPORT_OPTIONS.filter((s) => sportIds.includes(s.id)).map((s) => s.name);

  const voucherLabel = voucherStatus === 'AVAILABLE' ? '스포츠 바우처 이용 가능' : null;

  const filterChips = [...accessibilityLabels, ...sportLabels, ...(voucherLabel ? [voucherLabel] : [])];

  return (
    <Container>
      <div style={{ position: 'relative' }}>
        <Header title="검색 결과" onBack={goBack} />
        <FilterButton type="button" aria-label="필터" onClick={goFilter}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="9" cy="6" r="2" fill="#ffffff" stroke="#1A1A1A" strokeWidth="1.6" />
            <circle cx="16" cy="12" r="2" fill="#ffffff" stroke="#1A1A1A" strokeWidth="1.6" />
            <circle cx="10" cy="18" r="2" fill="#ffffff" stroke="#1A1A1A" strokeWidth="1.6" />
          </svg>
        </FilterButton>
      </div>

      {loading && <CountText>&apos;{keyword}&apos; 검색 중...</CountText>}

      {!loading && error && <CountText>검색에 실패했어요. 잠시 후 다시 시도해주세요.</CountText>}

      {!loading && !error && (
        <>
          <CountText>
            {keyword ? `'${keyword}' 검색 결과 ` : ''}총 {totalCount}개
          </CountText>

          {filterChips.length > 0 && (
            <ChipRow>
              {filterChips.map((label) => (
                <Chip key={label}>{label}</Chip>
              ))}
            </ChipRow>
          )}

          {facilities.length === 0 ? (
            <CountText>검색 결과가 없어요</CountText>
          ) : (
            <List>
              {facilities.map((facility) => (
                <Card key={facility.facilityId} onClick={() => goDetail(facility.facilityId)}>
                  <CardBody>
                    <CardTitleRow>
                      <CardName>{facility.name}</CardName>
                      <CardDistance>{formatDistance(facility.distanceMeters)}</CardDistance>
                    </CardTitleRow>
                    <CardSports>
                      {(facility.sports || []).map((s) => {
                        const icon = getSportIcon(s.name);
                        const label = getSportDisplayName(s.name);
                        return (
                          <SportChip key={s.sportId}>
                            {icon && <SportChipIcon src={icon} alt="" />}
                            {label}
                          </SportChip>
                        );
                      })}
                    </CardSports>
                    <CardAccessRow>
                      {(facility.accessibilities || [])
                        .filter((a) => a.availability === 'AVAILABLE')
                        .map((a) => (
                          <AccessIcon key={a.code} name={a.name} />
                        ))}
                      <CardChevron>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1 1l6 6-6 6"
                            stroke="#B3B3B3"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </CardChevron>
                    </CardAccessRow>
                  </CardBody>
                </Card>
              ))}
            </List>
          )}
        </>
      )}

      <BottomNav />
    </Container>
  );
}

export default SearchResult;