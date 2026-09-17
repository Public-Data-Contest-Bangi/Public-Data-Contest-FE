import {
    DEFAULT_CONDITION,
} from "../constants/myConditionOptions";

const STORAGE_KEY =
    "didimfit-my-condition";

export const getSavedCondition = () => {
    try {
        const saved =
            localStorage.getItem(
                STORAGE_KEY
            );

        if (!saved) {
            return {
                ...DEFAULT_CONDITION,
                transports: [
                    ...DEFAULT_CONDITION.transports,
                ],
                sports: [
                    ...DEFAULT_CONDITION.sports,
                ],
            };
        }

        return {
            ...DEFAULT_CONDITION,
            ...JSON.parse(saved),
        };
    } catch {
        return {
            ...DEFAULT_CONDITION,
            transports: [
                ...DEFAULT_CONDITION.transports,
            ],
            sports: [
                ...DEFAULT_CONDITION.sports,
            ],
        };
    }
};

export const saveCondition = (
    condition
) => {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(condition)
    );
};