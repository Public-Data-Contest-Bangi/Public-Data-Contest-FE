import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DEPARTURE_PLACES } from '../utils/departureSearchData';

export function useDepartureSearch() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('체육관');

  const results = query.trim()
    ? DEPARTURE_PLACES.filter((place) => place.name.includes(query.trim()))
    : DEPARTURE_PLACES;

  const handleClear = () => {
    setQuery('');
  };

  const handleSelect = (place) => {
    navigate('/accessible-route', { state: { departure: place.name } });
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    query,
    setQuery,
    results,
    handleClear,
    handleSelect,
    goBack,
  };
}