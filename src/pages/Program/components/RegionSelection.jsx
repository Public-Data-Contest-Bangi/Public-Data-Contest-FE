import {
    useEffect,
    useRef,
    useState,
} from "react";

import {
    useLocation,
    useNavigate,
} from "react-router-dom";

import Button from "../../../components/common/Button";

import mascotSearchImg from "../../../assets/images/mascot-search.png";
import locationIcon from "../../../assets/icons/location-icon.png";

import RegionSelectDropdown from "./RegionSelectDropdown";
import useRegions from "../hooks/useRegions";

import * as S from "./RegionSelection.styled";

export default function RegionSelection() {
    const navigate = useNavigate();
    const location = useLocation();

    const selectedSportIds =
        location.state?.sportIds ?? [];

    const {
        province,
        city,
        subDistrict,

        provinces,
        cities,
        subDistricts,

        regionCode,

        isLoading,

        selectProvince,
        selectCity,
        setSubDistrict,
    } = useRegions();

    const [openMenu, setOpenMenu] =
        useState(null);

    const provinceRef =
        useRef(null);

    const cityRef =
        useRef(null);

    const subDistrictRef =
        useRef(null);

    useEffect(() => {
        const handleClickOutside = (
            event
        ) => {
            const clickedProvince =
                provinceRef.current?.contains(
                    event.target
                );

            const clickedCity =
                cityRef.current?.contains(
                    event.target
                );

            const clickedSubDistrict =
                subDistrictRef.current?.contains(
                    event.target
                );

            if (
                !clickedProvince &&
                !clickedCity &&
                !clickedSubDistrict
            ) {
                setOpenMenu(null);
            }
        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    const handleProvinceSelect = (
        value
    ) => {
        selectProvince(value);
        setOpenMenu(null);
    };

    const handleCitySelect = (
        value
    ) => {
        selectCity(value);
        setOpenMenu(null);
    };

    const handleSubDistrictSelect = (
        value
    ) => {
        setSubDistrict(value);
        setOpenMenu(null);
    };

    /*
     * 현재 위치 검색
     * 현재 위치 버튼을 눌렀을 때만
     * 위치 권한 사용
     */
    const handleCurrentLocation = () => {
        if (
            selectedSportIds.length === 0
        ) {
            console.error(
                "선택한 종목 ID가 없습니다."
            );

            return;
        }

        if (!navigator.geolocation) {
            console.error(
                "현재 위치 기능을 지원하지 않습니다."
            );

            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {
                    latitude,
                    longitude,
                } = position.coords;

                navigate(
                    "/program-browse/results",
                    {
                        state: {
                            ...location.state,

                            sportIds:
                                selectedSportIds,

                            latitude,
                            longitude,

                            searchMode:
                                "CURRENT_LOCATION",
                        },
                    }
                );
            },
            (error) => {
                console.error(
                    "위치 정보를 가져오지 못했습니다.",
                    error
                );
            }
        );
    };

    /*
     * 도/시만 선택해도
     * 프로그램 검색 버튼 활성화
     */
    const canSearch =
        selectedSportIds.length > 0 &&
        Boolean(province);

    /*
     * 지역 검색
     * 현재 위치 권한 필요 없음
     */
    const handleSearch = () => {
        if (
            selectedSportIds.length === 0
        ) {
            console.error(
                "선택한 종목 ID가 없습니다."
            );

            return;
        }

        if (!province) {
            console.error(
                "도/시를 선택해 주세요."
            );

            return;
        }

        const regionName = [
            province,
            city,
            subDistrict,
        ]
            .filter(Boolean)
            .join(" ");

        navigate(
            "/program-browse/results",
            {
                state: {
                    ...location.state,

                    sportIds:
                        selectedSportIds,

                    province,

                    city:
                        city || null,

                    subDistrict:
                        subDistrict || null,

                    district:
                        subDistrict
                            ? `${city} ${subDistrict}`
                            : city || null,

                    regionCode:
                        regionCode || null,

                    regionName,

                    searchMode:
                        "REGION",
                },
            }
        );
    };

    return (
        <S.Page>
            <S.Content>
                <S.Hero>
                    <S.HeroText>
                        <S.Title>
                            지역을
                            <br />
                            선택하세요
                        </S.Title>
                    </S.HeroText>

                    <S.Mascot
                        src={
                            mascotSearchImg
                        }
                        alt=""
                    />
                </S.Hero>

                <S.RegionSection>
                    <S.SectionTitle>
                        <S.PinIcon
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M12 2C7.9 2 4.5 5.3 4.5 9.4C4.5 15 12 22 12 22C12 22 19.5 15 19.5 9.4C19.5 5.3 16.1 2 12 2ZM12 12.2C10.4 12.2 9.2 11 9.2 9.4C9.2 7.8 10.4 6.6 12 6.6C13.6 6.6 14.8 7.8 14.8 9.4C14.8 11 13.6 12.2 12 12.2Z" />
                        </S.PinIcon>

                        지역 검색
                    </S.SectionTitle>

                    <S.CurrentLocationButton
                        type="button"
                        onClick={
                            handleCurrentLocation
                        }
                    >
                        <S.TargetIcon
                            src={
                                locationIcon
                            }
                            alt=""
                        />

                        현재 위치로 찾기
                    </S.CurrentLocationButton>

                    <S.Divider>
                        <span>
                            또는
                        </span>
                    </S.Divider>

                    <S.SelectList>
                        <RegionSelectDropdown
                            type="province"
                            value={
                                province
                            }
                            placeholder="도/시 선택"
                            options={
                                provinces
                            }
                            isOpen={
                                openMenu ===
                                "province"
                            }
                            isLoading={
                                isLoading
                            }
                            wrapperRef={
                                provinceRef
                            }
                            onToggle={() =>
                                setOpenMenu(
                                    openMenu ===
                                        "province"
                                        ? null
                                        : "province"
                                )
                            }
                            onSelect={
                                handleProvinceSelect
                            }
                        />

                        <RegionSelectDropdown
                            type="city"
                            value={city}
                            placeholder="시/군/구 선택"
                            options={
                                cities
                            }
                            isOpen={
                                openMenu ===
                                "city"
                            }
                            isLoading={
                                isLoading
                            }
                            disabled={
                                !province
                            }
                            wrapperRef={
                                cityRef
                            }
                            onToggle={() =>
                                setOpenMenu(
                                    openMenu ===
                                        "city"
                                        ? null
                                        : "city"
                                )
                            }
                            onSelect={
                                handleCitySelect
                            }
                        />

                        {subDistricts.length >
                            0 && (
                            <RegionSelectDropdown
                                type="district"
                                value={
                                    subDistrict
                                }
                                placeholder="구 선택"
                                options={
                                    subDistricts
                                }
                                isOpen={
                                    openMenu ===
                                    "district"
                                }
                                isLoading={
                                    isLoading
                                }
                                disabled={
                                    !city
                                }
                                wrapperRef={
                                    subDistrictRef
                                }
                                onToggle={() =>
                                    setOpenMenu(
                                        openMenu ===
                                            "district"
                                            ? null
                                            : "district"
                                    )
                                }
                                onSelect={
                                    handleSubDistrictSelect
                                }
                            />
                        )}
                    </S.SelectList>
                </S.RegionSection>
            </S.Content>

            <S.BottomArea>
                <Button
                    onClick={
                        handleSearch
                    }
                    disabled={
                        isLoading ||
                        !canSearch
                    }
                >
                    프로그램 검색하기
                </Button>
            </S.BottomArea>
        </S.Page>
    );
}