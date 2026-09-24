import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// 확인된 접근성 코드만 우선 연결 (장애인 화장실 / 엘리베이터)
// 나머지(휠체어 접근/경사로/장애인 주차장)는 API 코드값 확인 전까지 필터에 반영되지 않음
const ACCESSIBILITY_CODE_MAP = {
  restroom: 'ACCESSIBLE_TOILET',
  elevator: 'ELEVATOR',
};

export function useSearchFilter() {
  const navigate = useNavigate();
  const location = useLocation();

  const incomingKeyword = location.state?.keyword || '';
  const incomingCodes = location.state?.accessibilityCodes || [];

  const initialChecked = useMemo(
    () => ({
      wheelchair: false,
      ramp: false,
      elevator: incomingCodes.includes(ACCESSIBILITY_CODE_MAP.elevator),
      restroom: incomingCodes.includes(ACCESSIBILITY_CODE_MAP.restroom),
      parking: false,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const [checked, setChecked] = useState(initialChecked);
  const [selectedSports, setSelectedSports] = useState([]);
  const [voucher, setVoucher] = useState('전체');
  const [sportMenuOpen, setSportMenuOpen] = useState(false);
  const sportRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (sportRef.current && !sportRef.current.contains(e.target)) {
        setSportMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleCheck = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleReset = () => {
    setChecked({ wheelchair: false, ramp: false, elevator: false, restroom: false, parking: false });
    setSelectedSports([]);
    setVoucher('전체');
  };

  const toggleSportMenu = () => {
    setSportMenuOpen((prev) => !prev);
  };

  const toggleSport = (option) => {
    setSelectedSports((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const applyFilters = () => {
    const accessibilityCodes = Object.entries(ACCESSIBILITY_CODE_MAP)
      .filter(([id]) => checked[id])
      .map(([, code]) => code);

    navigate('/search-result', {
      state: { keyword: incomingKeyword, accessibilityCodes },
      replace: true,
    });
  };

  // 적용하지 않고 들어올 때 조건 그대로 되돌아감
  const closeFilter = () => {
    navigate('/search-result', {
      state: { keyword: incomingKeyword, accessibilityCodes: incomingCodes },
      replace: true,
    });
  };

  return {
    checked,
    selectedSports,
    voucher,
    sportMenuOpen,
    sportRef,
    toggleCheck,
    handleReset,
    toggleSportMenu,
    toggleSport,
    setVoucher,
    applyFilters,
    closeFilter,
  };
}