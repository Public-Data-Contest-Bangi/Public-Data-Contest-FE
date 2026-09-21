import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { REGION_DATA } from '../utils/regionData';

export function useFacilitySearch() {
  const navigate = useNavigate();
  const [province, setProvince] = useState('서울특별시');
  const [district, setDistrict] = useState(REGION_DATA['서울특별시'][0]);
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
    setDistrict(REGION_DATA[p][0]);
    setOpenMenu(null);
  };

  const handleSelectDistrict = (d) => {
    setDistrict(d);
    setOpenMenu(null);
  };

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const goBack = () => {
    navigate(-1);
  };

  const goSearchResult = () => {
    navigate('/search-result');
  };

  return {
    province,
    district,
    openMenu,
    provinceRef,
    districtRef,
    handleSelectProvince,
    handleSelectDistrict,
    toggleMenu,
    goBack,
    goSearchResult,
  };
}