import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ACCESSIBILITY_ITEMS, SPORT_OPTIONS } from '../utils/searchFilterOptions';

export function useSearchFilter() {
  const navigate = useNavigate();
  const location = useLocation();

  const incomingKeyword = location.state?.keyword || '';
  const incomingCodes = location.state?.accessibilityCodes || [];
  const incomingSportIds = location.state?.sportIds || [];
  const incomingVoucherStatus = location.state?.voucherStatus || 'ALL';

  const initialChecked = useMemo(() => {
    const result = {};
    ACCESSIBILITY_ITEMS.forEach((item) => {
      result[item.id] = item.code ? incomingCodes.includes(item.code) : false;
    });
    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [checked, setChecked] = useState(initialChecked);
  const [selectedSports, setSelectedSports] = useState(
    SPORT_OPTIONS.filter((s) => incomingSportIds.includes(s.id)).map((s) => s.name)
  );
  const [voucher, setVoucher] = useState(incomingVoucherStatus === 'AVAILABLE' ? '이용 가능' : '전체');
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
    const resetChecked = {};
    ACCESSIBILITY_ITEMS.forEach((item) => {
      resetChecked[item.id] = false;
    });
    setChecked(resetChecked);
    setSelectedSports([]);
    setVoucher('전체');
  };

  const toggleSportMenu = () => {
    setSportMenuOpen((prev) => !prev);
  };

  const toggleSport = (name) => {
    setSelectedSports((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const applyFilters = () => {
    const accessibilityCodes = ACCESSIBILITY_ITEMS
      .filter((item) => item.code && checked[item.id])
      .map((item) => item.code);

    const sportIds = SPORT_OPTIONS
      .filter((s) => selectedSports.includes(s.name))
      .map((s) => s.id);

    const voucherStatus = voucher === '이용 가능' ? 'AVAILABLE' : 'ALL';

    navigate('/search-result', {
      state: { keyword: incomingKeyword, accessibilityCodes, sportIds, voucherStatus },
      replace: true,
    });
  };

  const closeFilter = () => {
    navigate('/search-result', {
      state: {
        keyword: incomingKeyword,
        accessibilityCodes: incomingCodes,
        sportIds: incomingSportIds,
        voucherStatus: incomingVoucherStatus,
      },
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