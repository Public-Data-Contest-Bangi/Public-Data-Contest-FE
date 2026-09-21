import { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FACILITIES_DETAIL } from '../utils/facilityDetailData';

export function useFacilityDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const facility = FACILITIES_DETAIL[id] || FACILITIES_DETAIL[2];

  const [activeSlide, setActiveSlide] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const trackRef = useRef(null);
  const slideCount = 3;

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActiveSlide(index);
  };

  const toggleFavorite = () => {
    setFavorite((prev) => !prev);
  };

  const handleProgramClick = () => {
    navigate(`/facility-detail/${id}/programs`);
  };

  const goBack = () => {
    navigate(-1);
  };

  const goAccessibleRoute = () => {
    navigate('/accessible-route');
  };

  return {
    facility,
    activeSlide,
    favorite,
    trackRef,
    slideCount,
    handleScroll,
    toggleFavorite,
    handleProgramClick,
    goBack,
    goAccessibleRoute,
  };
}