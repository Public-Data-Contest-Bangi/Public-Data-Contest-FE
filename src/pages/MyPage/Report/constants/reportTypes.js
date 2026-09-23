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
                value: "",
            },
            {
                label: "스포츠강좌 정보 오류",
                value: "",
            },
            {
                label: "가맹점 정보 오류",
                value: "",
            },
        ],
    },
    {
        label: "서비스 이용",
        options: [
            {
                label: "운동 추천 오류",
                value: "",
            },
        ],
    },
    {
        label: "앱 자체 문제",
        options: [
            {
                label: "앱 오류·오작동",
                value: "",
            },
            {
                label: "접근성 불편",
                value: "",
            },
        ],
    },
    {
        label: "기타 건의사항",
        options: [
            {
                label: "기타 건의사항",
                value: "",
            },
        ],
    },
];

export default REPORT_TYPES;