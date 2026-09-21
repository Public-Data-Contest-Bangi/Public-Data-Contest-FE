import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useSearchFilter() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState({
    wheelchair: true,
    ramp: false,
    elevator: false,
    restroom: false,
    parking: false,
  });
  const [sport, setSport] = useState('전체');
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
    setChecked({
      wheelchair: false,
      ramp: false,
      elevator: false,
      restroom: false,
      parking: false,
    });
    setSport('전체');
    setVoucher('전체');
  };

  const toggleSportMenu = () => {
    setSportMenuOpen((prev) => !prev);
  };

  const selectSport = (option) => {
    setSport(option);
    setSportMenuOpen(false);
  };

  const goSearchResult = () => {
    navigate('/search-result');
  };

  return {
    checked,
    sport,
    voucher,
    sportMenuOpen,
    sportRef,
    toggleCheck,
    handleReset,
    toggleSportMenu,
    selectSport,
    setVoucher,
    goSearchResult,
  };
}