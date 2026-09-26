export const ACCESS_ICON_SIZE = 50;

// API가 내려주는 accessibilities[].name 텍스트에 이 키워드가 포함되어 있으면 해당 아이콘을 보여줌
// (accessibilityCodes 전체 enum을 아직 확정 못 해서, 표시는 이름 텍스트 매칭으로 처리)
export const ACCESS_ICON_KEYWORD_MAP = [
  { keyword: '휠체어', type: 'wheelchair' },
  { keyword: '경사로', type: 'ramp' },
  { keyword: '엘리베이터', type: 'elevator' },
  { keyword: '화장실', type: 'restroom' },
  { keyword: '주차', type: 'parking' },
];

export function matchAccessIconType(name) {
  const found = ACCESS_ICON_KEYWORD_MAP.find((item) => name?.includes(item.keyword));
  return found ? found.type : null;
}

export function formatDistance(meters) {
  if (meters === null || meters === undefined) return '';
  if (meters < 1000) return `${Math.round(meters)}m`;
  return `${(meters / 1000).toFixed(1)}km`;
}