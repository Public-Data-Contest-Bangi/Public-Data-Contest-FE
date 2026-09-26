import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useAccessibleRoute() {
  const navigate = useNavigate();
  const location = useLocation();

  const [departure, setDeparture] = useState('현재 위치');
  const [arrival, setArrival] = useState(location.state?.arrival || '도착지를 선택해주세요');
  const [avoidStairs, setAvoidStairs] = useState(false);

  const [selectedFacility, setSelectedFacility] = useState(null);
  const [sheetExpanded, setSheetExpanded] = useState(false);

  const initialArrival = location.state?.arrival || null;
  const initialArrivalCoord = location.state?.arrivalCoord || null;

  const handleArrivalSelected = (facility) => {
    setArrival(facility.name);
    setSelectedFacility(facility);
    setSheetExpanded(false);
  };

  const handleSwap = () => {
    setDeparture(arrival);
    setArrival(departure);
  };

  const toggleSheet = () => {
    setSheetExpanded((prev) => !prev);
  };

  const closeSheet = () => {
    setSelectedFacility(null);
    setSheetExpanded(false);
    setArrival('도착지를 선택해주세요');
  };

  const goSelectedFacilityDetail = () => {
    if (!selectedFacility) return;
    navigate(`/facility-detail/${selectedFacility.facilityId}`);
  };

  const toggleAvoidStairs = () => {
    setAvoidStairs((prev) => !prev);
  };

  return {
    departure,
    arrival,
    avoidStairs,
    toggleAvoidStairs,
    initialArrival,
    initialArrivalCoord,
    handleArrivalSelected,
    handleSwap,
    selectedFacility,
    sheetExpanded,
    toggleSheet,
    closeSheet,
    goSelectedFacilityDetail,
  };
}