import {
    useEffect,
    useState,
} from "react";

import {
    getMyCondition,
    saveMyCondition,
    updateMyCondition,
} from "../../../api/myCondition";

import {
    getSavedCondition,
    saveCondition,
} from "../utils/myConditionStorage";

// TODO: 백엔드에서 장애유형 ID 받으면 여기만 채우기
const DISABILITY_ID_MAP = {
    // "지체장애": 1,
    // "뇌병변장애": 2,
    // "시각장애": 3,
    // "청각장애": 4,
    // "지적장애": 5,
    // "자폐성장애": 6,
    // "기타": 7,
};

const normalizeSavedCondition = (
    condition
) => ({
    disabilityTypes:
        condition?.disabilityTypes ??
        [],

    wheelchair:
        condition?.wheelchair ??
        "사용함",

    transports:
        condition?.transports ??
        [],

    sports:
        condition?.sports ??
        [],

    voucher:
        condition?.voucher ??
        "보유함",
});

const normalizeCondition = (
    condition
) => ({
    ...condition,

    disabilityTypes: [
        ...(condition.disabilityTypes ?? []),
    ].sort(),

    transports: [
        ...(condition.transports ?? []),
    ].sort(),

    sports: [
        ...(condition.sports ?? []),
    ].sort(),
});

const booleanToWheelchair = (
    value
) =>
    value
        ? "사용함"
        : "사용 안 함";

const booleanToVoucher = (
    value
) =>
    value
        ? "보유함"
        : "보유 안 함";

const wheelchairToBoolean = (
    value
) =>
    value === "사용함";

const voucherToBoolean = (
    value
) =>
    value === "보유함";

function useMyCondition() {
    const initialCondition =
        normalizeSavedCondition(
            getSavedCondition()
        );

    const [
        savedCondition,
        setSavedCondition,
    ] = useState(initialCondition);

    const [
        disabilityTypes,
        setDisabilityTypes,
    ] = useState(
        initialCondition.disabilityTypes
    );

    const [
        wheelchair,
        setWheelchair,
    ] = useState(
        initialCondition.wheelchair
    );

    const [
        transports,
        setTransports,
    ] = useState(
        initialCondition.transports
    );

    const [
        sports,
        setSports,
    ] = useState(
        initialCondition.sports
    );

    const [
        voucher,
        setVoucher,
    ] = useState(
        initialCondition.voucher
    );

    const [
        saved,
        setSaved,
    ] = useState(false);

    const [
        isLoading,
        setIsLoading,
    ] = useState(false);

    // 서버에 기존 조건이 있는지
    const [
        hasServerCondition,
        setHasServerCondition,
    ] = useState(false);

    const currentCondition = {
        disabilityTypes,
        wheelchair,
        transports,
        sports,
        voucher,
    };

    const requiredCompleted =
        disabilityTypes.length >= 1 &&
        wheelchair !== "" &&
        transports.length >= 1 &&
        voucher !== "";

    const hasChanges =
        JSON.stringify(
            normalizeCondition(
                currentCondition
            )
        ) !==
        JSON.stringify(
            normalizeCondition(
                savedCondition
            )
        );

    const canSave =
        requiredCompleted &&
        hasChanges &&
        !isLoading;

    // 서버 내 조건 조회
    useEffect(() => {
        const fetchMyCondition =
            async () => {
                try {
                    setIsLoading(true);

                    const response =
                        await getMyCondition();

                    const {
                        disabilityTypeIds,
                        usesWheelchair,
                        hasSportsVoucher,
                    } = response.data;

                    setHasServerCondition(
                        true
                    );

                    const idToDisability =
                        Object.entries(
                            DISABILITY_ID_MAP
                        ).reduce(
                            (
                                result,
                                [name, id]
                            ) => {
                                result[id] =
                                    name;

                                return result;
                            },
                            {}
                        );

                    const mappedDisabilityTypes =
                        (
                            disabilityTypeIds ??
                            []
                        )
                            .map(
                                (id) =>
                                    idToDisability[
                                        id
                                    ]
                            )
                            .filter(Boolean);

                    const nextCondition = {
                        disabilityTypes:
                            mappedDisabilityTypes.length >
                            0
                                ? mappedDisabilityTypes
                                : initialCondition.disabilityTypes,

                        wheelchair:
                            booleanToWheelchair(
                                usesWheelchair
                            ),

                        // 현재 백엔드 API에 없어서 로컬 유지
                        transports:
                            initialCondition.transports,

                        sports:
                            initialCondition.sports,

                        voucher:
                            booleanToVoucher(
                                hasSportsVoucher
                            ),
                    };

                    setDisabilityTypes(
                        nextCondition.disabilityTypes
                    );

                    setWheelchair(
                        nextCondition.wheelchair
                    );

                    setVoucher(
                        nextCondition.voucher
                    );

                    setSavedCondition(
                        nextCondition
                    );

                    console.log(
                        "내 조건 조회 성공:",
                        response.data
                    );
                } catch (error) {
                    // 조건 최초 저장 전이라 GET이 실패하는 경우
                    if (
                        error.response?.status ===
                        404
                    ) {
                        setHasServerCondition(
                            false
                        );

                        return;
                    }

                    console.error(
                        "내 조건 조회 실패:",
                        error.response?.data
                    );
                } finally {
                    setIsLoading(false);
                }
            };

        fetchMyCondition();
    }, []);

    useEffect(() => {
        setSaved(false);
    }, [
        disabilityTypes,
        wheelchair,
        transports,
        sports,
        voucher,
    ]);

    const handleDisabilityToggle = (
        item
    ) => {
        setDisabilityTypes((prev) =>
            prev.includes(item)
                ? prev.filter(
                    (value) =>
                        value !== item
                )
                : [
                    ...prev,
                    item,
                ]
        );
    };

    const handleTransportToggle = (
        item
    ) => {
        setTransports((prev) => {
            if (prev.includes(item)) {
                if (prev.length === 1) {
                    return prev;
                }

                return prev.filter(
                    (value) =>
                        value !== item
                );
            }

            return [
                ...prev,
                item,
            ];
        });
    };

    const handleSportsToggle = (
        item
    ) => {
        setSports((prev) =>
            prev.includes(item)
                ? prev.filter(
                    (value) =>
                        value !== item
                )
                : [
                    ...prev,
                    item,
                ]
        );
    };

    const handleSave = async () => {
        if (!canSave) {
            return;
        }

        const disabilityTypeIds =
            disabilityTypes
                .map(
                    (type) =>
                        DISABILITY_ID_MAP[
                            type
                        ]
                )
                .filter(
                    (id) =>
                        id !== undefined
                );

        // 장애유형 ID를 아직 모르는 상태
        if (
            disabilityTypeIds.length !==
            disabilityTypes.length
        ) {
            console.error(
                "장애유형 ID 매핑이 필요합니다.",
                disabilityTypes
            );

            return;
        }

        const requestData = {
            disabilityTypeIds,

            usesWheelchair:
                wheelchairToBoolean(
                    wheelchair
                ),

            hasSportsVoucher:
                voucherToBoolean(
                    voucher
                ),
        };

        try {
            setIsLoading(true);

            if (hasServerCondition) {
                await updateMyCondition(
                    requestData
                );

                console.log(
                    "내 조건 수정 성공"
                );
            } else {
                await saveMyCondition(
                    requestData
                );

                setHasServerCondition(
                    true
                );

                console.log(
                    "내 조건 최초 저장 성공"
                );
            }

            // 이동수단 / 관심종목은
            // 현재 서버 API에 없어서 로컬 유지
            saveCondition(
                currentCondition
            );

            setSavedCondition({
                disabilityTypes: [
                    ...disabilityTypes,
                ],

                wheelchair,

                transports: [
                    ...transports,
                ],

                sports: [
                    ...sports,
                ],

                voucher,
            });

            setSaved(true);
        } catch (error) {
            console.error(
                "내 조건 저장 실패:",
                error.response?.data
            );

            console.error(
                "상태 코드:",
                error.response?.status
            );
        } finally {
            setIsLoading(false);
        }
    };

    return {
        disabilityTypes,
        wheelchair,
        transports,
        sports,
        voucher,

        saved,
        canSave,
        isLoading,

        setWheelchair,
        setVoucher,

        handleDisabilityToggle,
        handleTransportToggle,
        handleSportsToggle,
        handleSave,
    };
}

export default useMyCondition;