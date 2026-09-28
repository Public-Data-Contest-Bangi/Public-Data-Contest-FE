import {
    useEffect,
    useState,
} from "react";
import { useNavigate } from "react-router-dom";

import {
    getFirstExercisePreferences,
    updateFirstExercisePreferences,
} from "../../../api/firstExercise";

import {
    ASSISTIVE_DEVICE_FROM_API,
    ASSISTIVE_DEVICE_TO_API,
    BODY_PART_FROM_API,
    BODY_PART_TO_API,
    EXERCISE_TYPE_FROM_API,
    EXERCISE_TYPE_OPTIONS,
    EXERCISE_TYPE_TO_API,
} from "../data/firstExerciseData";

function useFirstExercise() {
    const navigate = useNavigate();

    const [
        assistiveDevice,
        setAssistiveDevice,
    ] = useState("");

    const [
        bodyPart,
        setBodyPart,
    ] = useState("");

    const [
        exerciseTypes,
        setExerciseTypes,
    ] = useState([]);

    const [
        isLoading,
        setIsLoading,
    ] = useState(true);

    const [
        isSubmitting,
        setIsSubmitting,
    ] = useState(false);

    const [
        showValidation,
        setShowValidation,
    ] = useState(false);

    useEffect(() => {
        const controller =
            new AbortController();

        const fetchPreferences =
            async () => {
                try {
                    setIsLoading(true);

                    const response =
                        await getFirstExercisePreferences(
                            {
                                signal:
                                    controller
                                        .signal,
                            }
                        );

                    const responseBody =
                        response?.data ??
                        response;

                    const savedData =
                        responseBody &&
                            Object.prototype.hasOwnProperty.call(
                                responseBody,
                                "success"
                            )
                            ? responseBody.data
                            : responseBody;

                    if (!savedData) {
                        return;
                    }

                    setAssistiveDevice(
                        ASSISTIVE_DEVICE_FROM_API[
                        savedData
                            .assistiveDeviceType
                        ] ?? ""
                    );

                    setBodyPart(
                        BODY_PART_FROM_API[
                        savedData.bodyFocus
                        ] ?? ""
                    );

                    setExerciseTypes(
                        (
                            savedData
                                .preferredExerciseTypes ??
                            []
                        )
                            .map(
                                (type) =>
                                    EXERCISE_TYPE_FROM_API[
                                    type
                                    ]
                            )
                            .filter(Boolean)
                    );
                } catch (error) {
                    if (
                        error?.name === "CanceledError"
                    ) {
                        return;
                    }

                    // 처음 사용하는 사용자라 저장된 선호가 없는 경우
                    if (
                        error.response?.status === 404
                    ) {
                        return;
                    }

                    console.error(
                        "첫 운동 입력값 조회 실패:",
                        error.response?.data || error
                    );
                } finally {
                    setIsLoading(false);
                }
            };

        fetchPreferences();

        return () => {
            controller.abort();
        };
    }, []);

    const toggleExerciseType = (
        value
    ) => {
        setExerciseTypes((prev) =>
            prev.includes(value)
                ? prev.filter(
                    (item) =>
                        item !== value
                )
                : [...prev, value]
        );
    };

    const isAllSelected =
        exerciseTypes.length ===
        EXERCISE_TYPE_OPTIONS.length;

    const handleToggleAll = () => {
        if (isAllSelected) {
            setExerciseTypes([]);
            return;
        }

        setExerciseTypes(
            EXERCISE_TYPE_OPTIONS
        );
    };

    const handleSubmit = async () => {
        if (
            isLoading ||
            isSubmitting
        ) {
            return;
        }

        const isValid =
            assistiveDevice &&
            bodyPart &&
            exerciseTypes.length > 0;

        if (!isValid) {
            setShowValidation(true);
            return;
        }

        setShowValidation(false);

        const requestData = {
            assistiveDeviceType:
                ASSISTIVE_DEVICE_TO_API[
                assistiveDevice
                ],

            bodyFocus:
                BODY_PART_TO_API[
                bodyPart
                ],

            preferredExerciseTypes:
                exerciseTypes.map(
                    (type) =>
                        EXERCISE_TYPE_TO_API[
                        type
                        ]
                ),
        };

        try {
            setIsSubmitting(true);

            await updateFirstExercisePreferences(
                requestData
            );

            navigate(
                "/exercise-result",
                {
                    state: {
                        assistiveDevice,
                        bodyPart,
                        exerciseTypes,
                    },
                }
            );
        } catch (error) {
            console.error(
                "첫 운동 입력값 저장 실패:",
                error.response?.data ||
                error
            );

            alert(
                error.response?.data
                    ?.message ||
                "첫 운동 정보를 저장하지 못했습니다."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        assistiveDevice,
        bodyPart,
        exerciseTypes,

        isLoading,
        isSubmitting,

        assistiveError:
            showValidation &&
            !assistiveDevice,

        bodyPartError:
            showValidation &&
            !bodyPart,

        exerciseTypeError:
            showValidation &&
            exerciseTypes.length === 0,

        isAllSelected,

        setAssistiveDevice,
        setBodyPart,

        toggleExerciseType,
        handleToggleAll,
        handleSubmit,
    };
}

export default useFirstExercise;