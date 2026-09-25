import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchFacilityDetail } from '../../../api/facilityDetail';
import { getCurrentCoords } from '../../../utils/geolocation';

export function useFacilityDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [facility, setFacility] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    async function loadDetail() {
      setLoading(true);
      setError(null);

      try {
        const coords = await getCurrentCoords();
        const data = await fetchFacilityDetail(id, coords);

        if (!cancelled) {
          setFacility(data);
        }
      } catch (err) {
        console.error('시설 상세 조회 실패:', err.response?.status, err.response?.data || err.message);
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadDetail();

    return () => {
      cancelled = true;
    };
  }, [id]);

  const slideCount = facility?.imageUrls?.length || 0;

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
    loading,
    error,
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