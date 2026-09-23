const REPORT_TYPES = [
    {
        label: "정보 오류",
        options: [
            {
                label: "체육시설 정보 오류",
                value: "FACILITY_INFORMATION",
            },
            {
                label: "무장애 경로 정보 오류",
                value: "ROUTE_INFORMATION",
            },
            {
                label: "스포츠강좌 정보 오류",
                value: "SPORTS_CLASS_INFORMATION",
            },
            {
                label: "가맹점 정보 오류",
                value: "MERCHANT_INFORMATION",
            },
        ],
    },
    {
        label: "서비스 이용",
        options: [
            {
                label: "운동 추천 오류",
                value: "EXERCISE_RECOMMENDATION",
            },
        ],
    },
    {
        label: "앱 자체 문제",
        options: [
            {
                label: "앱 오류·오작동",
                value: "APP_ERROR",
            },
            {
                label: "접근성 불편",
                value: "ACCESSIBILITY",
            },
        ],
    },
    {
        label: "기타 건의사항",
        options: [
            {
                label: "기타 건의사항",
                value: "SUGGESTION",
            },
        ],
    },
];

export default REPORT_TYPES;