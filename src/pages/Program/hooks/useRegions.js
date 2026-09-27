import {
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    fetchRegions,
} from "../../../api/facilities";

export default function useRegions() {
    const [regions, setRegions] =
        useState([]);

    const [province, setProvince] =
        useState("");

    const [city, setCity] =
        useState("");

    const [
        subDistrict,
        setSubDistrict,
    ] = useState("");

    const [isLoading, setIsLoading] =
        useState(true);

    const [error, setError] =
        useState(null);

    useEffect(() => {
        const controller =
            new AbortController();

        const loadRegions =
            async () => {
                try {
                    setIsLoading(true);
                    setError(null);

                    const data =
                        await fetchRegions({
                            signal:
                                controller.signal,
                        });

                    setRegions(data);
                } catch (error) {
                    if (
                        controller.signal
                            .aborted
                    ) {
                        return;
                    }

                    console.error(
                        "지역 목록 조회 실패:",
                        error
                    );

                    setError(error);
                } finally {
                    if (
                        !controller.signal
                            .aborted
                    ) {
                        setIsLoading(false);
                    }
                }
            };

        loadRegions();

        return () => {
            controller.abort();
        };
    }, []);

    // 1단계: 시/도 목록
    const provinces = useMemo(
        () => [
            ...new Set(
                regions.map(
                    (region) =>
                        region.provinceName
                )
            ),
        ],
        [regions]
    );

    // 선택된 시/도의 지역 데이터
    const provinceRegions = useMemo(
        () =>
            regions.filter(
                (region) =>
                    region.provinceName ===
                    province
            ),
        [regions, province]
    );

    // 2단계: 시/군/구 목록
    //
    // 예)
    // "고양시"        -> "고양시"
    // "고양시 덕양구" -> "고양시"
    // "마포구"        -> "마포구"
    const cities = useMemo(
        () => [
            ...new Set(
                provinceRegions
                    .map((region) => {
                        const name =
                            region.districtName?.trim();

                        if (!name) {
                            return null;
                        }

                        return name.split(
                            " "
                        )[0];
                    })
                    .filter(Boolean)
            ),
        ],
        [provinceRegions]
    );

    // 3단계: 선택한 시 아래의 구 목록
    //
    // 예)
    // city = "고양시"
    // "고양시 덕양구" -> "덕양구"
    // "고양시 일산동구" -> "일산동구"
    const subDistricts = useMemo(
        () => {
            if (!city) {
                return [];
            }

            return [
                ...new Set(
                    provinceRegions
                        .filter((region) =>
                            region.districtName?.startsWith(
                                `${city} `
                            )
                        )
                        .map((region) =>
                            region.districtName
                                .slice(
                                    city.length
                                )
                                .trim()
                        )
                        .filter(Boolean)
                ),
            ];
        },
        [
            provinceRegions,
            city,
        ]
    );

    // 최종 검색에 사용할 regionCode
    const regionCode = useMemo(
        () => {
            if (!province || !city) {
                return undefined;
            }

            // 하위 구까지 선택한 경우
            if (subDistrict) {
                const fullName =
                    `${city} ${subDistrict}`;

                return regions.find(
                    (region) =>
                        region.provinceName ===
                            province &&
                        region.districtName ===
                            fullName
                )?.regionCode;
            }

            // 서울특별시 → 마포구처럼
            // 2단계에서 끝나는 지역
            return regions.find(
                (region) =>
                    region.provinceName ===
                        province &&
                    region.districtName ===
                        city
            )?.regionCode;
        },
        [
            regions,
            province,
            city,
            subDistrict,
        ]
    );

    const selectProvince = (
        value
    ) => {
        setProvince(value);

        setCity("");
        setSubDistrict("");
    };

    const selectCity = (
        value
    ) => {
        setCity(value);

        setSubDistrict("");
    };

    return {
        province,
        city,
        subDistrict,

        provinces,
        cities,
        subDistricts,

        regionCode,

        isLoading,
        error,

        selectProvince,
        selectCity,
        setSubDistrict,
    };
}