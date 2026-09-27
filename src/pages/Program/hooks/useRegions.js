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

    const [district, setDistrict] =
        useState("");

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

    // 시/도 목록
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

    // 선택한 시/도에 해당하는 구/군 목록
    const districts = useMemo(
        () =>
            regions
                .filter(
                    (region) =>
                        region.provinceName ===
                        province
                )
                .map(
                    (region) =>
                        region.districtName
                ),
        [regions, province]
    );

    // 선택한 시/도 + 구/군의 regionCode
    const regionCode = useMemo(
        () =>
            regions.find(
                (region) =>
                    region.provinceName ===
                        province &&
                    region.districtName ===
                        district
            )?.regionCode,
        [
            regions,
            province,
            district,
        ]
    );

    // 시/도 선택
    const selectProvince = (
        value
    ) => {
        setProvince(value);

        // 시/도가 변경되면
        // 구/군은 다시 선택하도록 초기화
        setDistrict("");
    };

    return {
        province,
        district,
        provinces,
        districts,
        regionCode,

        isLoading,
        error,

        setDistrict,
        selectProvince,
    };
}