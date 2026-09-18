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

import {
    PROVINCES,
    REGION_DATA,
} from "../constants/regionData";

import mascotSearchImg from "../../yein/assets/facility-search/mascot-search.png";

import * as S from "./RegionSelection.styled";

export default function RegionSelection() {
    const navigate = useNavigate();
    const location = useLocation();

    const selectedSports =
        location.state?.sports ?? [];

    const [province, setProvince] =
        useState("서울특별시");

    const [district, setDistrict] =
        useState("중구");

    const [openMenu, setOpenMenu] =
        useState(null);

    const provinceRef = useRef(null);
    const districtRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const clickedProvince =
                provinceRef.current?.contains(
                    event.target
                );

            const clickedDistrict =
                districtRef.current?.contains(
                    event.target
                );

            if (
                !clickedProvince &&
                !clickedDistrict
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

    const handleSelectProvince = (value) => {
        setProvince(value);

        setDistrict(
            REGION_DATA[value][0]
        );

        setOpenMenu(null);
    };

    const handleSelectDistrict = (value) => {
        setDistrict(value);
        setOpenMenu(null);
    };

    const handleCurrentLocation = () => {
        if (!navigator.geolocation) {
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(
                    "현재 위치:",
                    position.coords.latitude,
                    position.coords.longitude
                );

                // TODO(API)
                // 위도/경도를 행정구역으로 변환하는 API 연결 후
                // province / district 변경
            },
            (error) => {
                console.error(
                    "위치 정보를 가져오지 못했습니다.",
                    error
                );
            }
        );
    };

    const handleSearch = () => {
        navigate(
            "/program-browse/results",
            {
                state: {
                    sports: selectedSports,
                    province,
                    district,
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
                        src={mascotSearchImg}
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
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <circle
                                cx="12"
                                cy="12"
                                r="5"
                            />

                            <path d="M12 2V5M12 19V22M2 12H5M19 12H22" />
                        </S.TargetIcon>

                        현재 위치로 찾기
                    </S.CurrentLocationButton>

                    <S.Divider>
                        <span>또는</span>
                    </S.Divider>

                    <S.SelectList>
                        {/* 시/도 */}
                        <S.SelectWrapper
                            ref={provinceRef}
                            onClick={() =>
                                setOpenMenu(
                                    openMenu ===
                                        "province"
                                        ? null
                                        : "province"
                                )
                            }
                        >
                            <S.BuildingIcon
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <rect
                                    x="5"
                                    y="3"
                                    width="14"
                                    height="18"
                                    rx="1"
                                />

                                <path d="M8 7H10M14 7H16M8 11H10M14 11H16M8 15H10M14 15H16M11 21V17H13V21" />
                            </S.BuildingIcon>

                            <S.SelectButton
                                type="button"
                                tabIndex={-1}
                            >
                                {province}
                            </S.SelectButton>

                            <svg
                                className={
                                    openMenu ===
                                        "province"
                                        ? "region-select__chevron region-select__chevron--open"
                                        : "region-select__chevron"
                                }
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M3 4.5L6 7.5L9 4.5"
                                    stroke="#8C8C8C"
                                    strokeWidth="1.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            {openMenu ===
                                "province" && (
                                    <S.SelectMenu
                                        onClick={(event) =>
                                            event.stopPropagation()
                                        }
                                    >
                                        {PROVINCES.map(
                                            (item) => (
                                                <li
                                                    key={
                                                        item
                                                    }
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleSelectProvince(
                                                                item
                                                            )
                                                        }
                                                    >
                                                        {
                                                            item
                                                        }
                                                    </button>
                                                </li>
                                            )
                                        )}
                                    </S.SelectMenu>
                                )}
                        </S.SelectWrapper>

                        {/* 구/군 */}
                        <S.SelectWrapper
                            ref={districtRef}
                            onClick={() =>
                                setOpenMenu(
                                    openMenu ===
                                        "district"
                                        ? null
                                        : "district"
                                )
                            }
                        >
                            <S.LocationIcon
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M12 2C8.1 2 5 5.1 5 9C5 14.3 12 22 12 22C12 22 19 14.3 19 9C19 5.1 15.9 2 12 2Z" />

                                <circle
                                    cx="12"
                                    cy="9"
                                    r="2.4"
                                />
                            </S.LocationIcon>

                            <S.SelectButton
                                type="button"
                                tabIndex={-1}
                            >
                                {district}
                            </S.SelectButton>

                            <svg
                                className={
                                    openMenu ===
                                        "district"
                                        ? "region-select__chevron region-select__chevron--open"
                                        : "region-select__chevron"
                                }
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M3 4.5L6 7.5L9 4.5"
                                    stroke="#8C8C8C"
                                    strokeWidth="1.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            {openMenu ===
                                "district" && (
                                    <S.SelectMenu
                                        onClick={(event) =>
                                            event.stopPropagation()
                                        }
                                    >
                                        {REGION_DATA[
                                            province
                                        ].map(
                                            (item) => (
                                                <li
                                                    key={
                                                        item
                                                    }
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleSelectDistrict(
                                                                item
                                                            )
                                                        }
                                                    >
                                                        {
                                                            item
                                                        }
                                                    </button>
                                                </li>
                                            )
                                        )}
                                    </S.SelectMenu>
                                )}
                        </S.SelectWrapper>
                    </S.SelectList>
                </S.RegionSection>
            </S.Content>

            <S.BottomArea>
                <Button
                    onClick={handleSearch}
                >
                    프로그램 검색하기
                </Button>
            </S.BottomArea>
        </S.Page>
    );
}