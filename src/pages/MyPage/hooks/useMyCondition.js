import {
    useEffect,
    useState,
} from "react";

import {
    getSavedCondition,
    saveCondition,
} from "../utils/myConditionStorage";

const normalizeCondition = (
    condition
) => ({
    ...condition,

    transports: [
        ...condition.transports,
    ].sort(),

    sports: [
        ...condition.sports,
    ].sort(),
});

function useMyCondition() {
    const [
        savedCondition,
        setSavedCondition,
    ] = useState(
        () => getSavedCondition()
    );

    const [
        disabilityType,
        setDisabilityType,
    ] = useState(
        savedCondition.disabilityType
    );

    const [
        wheelchair,
        setWheelchair,
    ] = useState(
        savedCondition.wheelchair
    );

    const [
        transports,
        setTransports,
    ] = useState(
        savedCondition.transports
    );

    const [
        sports,
        setSports,
    ] = useState(
        savedCondition.sports
    );

    const [
        voucher,
        setVoucher,
    ] = useState(
        savedCondition.voucher
    );

    const [
        saved,
        setSaved,
    ] = useState(false);

    const currentCondition = {
        disabilityType,
        wheelchair,
        transports,
        sports,
        voucher,
    };

    const requiredCompleted =
        disabilityType !== "" &&
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
        hasChanges;

    useEffect(() => {
        setSaved(false);
    }, [
        disabilityType,
        wheelchair,
        transports,
        sports,
        voucher,
    ]);

    const handleTransportToggle = (
        item
    ) => {
        setTransports((prev) => {
            if (prev.includes(item)) {
                // 선호 이동수단은 최소 1개 유지
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

    const handleSave = () => {
        if (!canSave) {
            return;
        }

        saveCondition(
            currentCondition
        );

        setSavedCondition({
            ...currentCondition,
            transports: [
                ...transports,
            ],
            sports: [
                ...sports,
            ],
        });

        setSaved(true);
    };

    return {
        disabilityType,
        wheelchair,
        transports,
        sports,
        voucher,

        saved,
        canSave,

        setDisabilityType,
        setWheelchair,
        setVoucher,

        handleTransportToggle,
        handleSportsToggle,
        handleSave,
    };
}

export default useMyCondition;