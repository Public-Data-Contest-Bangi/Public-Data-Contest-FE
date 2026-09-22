import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useAccessibleRoute() {
  const navigate = useNavigate();
  const location = useLocation();

  const [departure, setDeparture] = useState(location.state?.departure || '현재 위치');
  const [arrival, setArrival] = useState('중구 체육센터');
  const [sheetExpanded, setSheetExpanded] = useState(false);

  const handleSwap = () => {
    setDeparture(arrival);
    setArrival(departure);
  };

  const toggleSheet = () => {
    setSheetExpanded((prev) => !prev);
  };

  const goDepartureSearch = () => {
    navigate('/departure-search');
  };

  return {
    departure,
    arrival,
    sheetExpanded,
    handleSwap,
    toggleSheet,
    goDepartureSearch,
  };
}