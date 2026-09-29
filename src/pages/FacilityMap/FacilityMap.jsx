// FacilityMap.jsx

import { useEffect, useState } from 'react';

import {
    useLocation,
    useNavigate,
} from 'react-router-dom';

import Header from '../../components/common/Header';
import BottomNav from '../../components/BottomNav';

import {
    useFacilityMap,
} from './hooks/useFacilityMap';

import RouteSearchCard from './components/RouteSearchCard';
import TransitRouteCard from './components/TransitRouteCard';
import MapArea from './components/MapArea';
import FacilityPreviewSheet from './components/FacilityPreviewSheet';
import PinLegendModal from './components/PinLegendModal';

import {
    Container,
    TransitNotice,
} from './FacilityMap.styled';

const PIN_LEGEND_SEEN_KEY = 'didimfit_pin_legend_seen';

function FacilityMap() {
    const location =
        useLocation();

    const navigate =
        useNavigate();

    const [
        routeMode,
        setRouteMode,
    ] = useState(
        location.state
            ?.routeMode ===
            'TRANSIT'
            ? 'TRANSIT'
            : 'WALK'
    );

    const [showPinLegend, setShowPinLegend] = useState(false);

    useEffect(() => {
        const seen = localStorage.getItem(PIN_LEGEND_SEEN_KEY);
        if (!seen) {
            setShowPinLegend(true);
        }
    }, []);

    const closePinLegend = () => {
        localStorage.setItem(PIN_LEGEND_SEEN_KEY, 'true');
        setShowPinLegend(false);
    };

    const {
        mapContainerRef,
        mapLoaded,
        mapError,

        markersLoading,
        loadFacilityMarkers,

        departure,
        arrival,

        locating,
        routeLoading,
        routeMessage,

        walkRouteData,
        transitRouteData,

        avoidStairs,

        handleSwap,
        goDepartureSearch,
        goArrivalSearch,
        moveToCurrentLocation,

        goSearchRoute,
        clearRoute,

        toggleAvoidStairs,

        selectedFacility,

        closeSheet,

        goSelectedFacilityDetail,
    } = useFacilityMap();

    const handleRouteModeChange =
        (mode) => {
            if (
                routeMode === mode
            ) {
                return;
            }

            setRouteMode(mode);

            clearRoute();

            navigate(
                location.pathname,
                {
                    replace: true,

                    state: {
                        ...location.state,
                        routeMode:
                            mode,
                    },
                }
            );
        };

    return (
        <Container>
            <Header title="지도" />

            <RouteSearchCard
                departure={
                    departure
                }
                arrival={
                    arrival
                }
                locating={
                    locating
                }
                routeLoading={
                    routeLoading
                }
                routeMode={
                    routeMode
                }
                avoidStairs={
                    avoidStairs
                }
                walkRouteData={
                    walkRouteData
                }
                onSwap={
                    handleSwap
                }
                onDepartureSearch={() =>
                    goDepartureSearch(
                        routeMode
                    )
                }
                onArrivalSearch={() =>
                    goArrivalSearch(
                        routeMode
                    )
                }
                onCurrentLocation={
                    moveToCurrentLocation
                }
                onRouteModeChange={
                    handleRouteModeChange
                }
                onToggleAvoidStairs={
                    toggleAvoidStairs
                }
                onSearchRoute={() =>
                    goSearchRoute(
                        routeMode
                    )
                }
            />

            {routeMessage && (
                <TransitNotice
                    role="status"
                >
                    {
                        routeMessage
                    }
                </TransitNotice>
            )}

            {routeMode ===
                'TRANSIT' && (
                    <TransitRouteCard
                        data={
                            transitRouteData
                        }
                    />
                )}

            <MapArea
                mapContainerRef={
                    mapContainerRef
                }
                mapLoaded={
                    mapLoaded
                }
                mapError={
                    mapError
                }
                markersLoading={
                    markersLoading
                }
                locating={
                    locating
                }
                onReloadMarkers={
                    loadFacilityMarkers
                }
                onCurrentLocation={
                    moveToCurrentLocation
                }
            />

            <FacilityPreviewSheet
                facility={selectedFacility}
                onClose={closeSheet}
                onDetail={goSelectedFacilityDetail}
            />

            {showPinLegend && <PinLegendModal onClose={closePinLegend} />}

            <BottomNav />
        </Container>
    );
}

export default FacilityMap;