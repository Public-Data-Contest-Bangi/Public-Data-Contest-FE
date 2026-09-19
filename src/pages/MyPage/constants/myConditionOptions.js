export const DISABILITY_OPTIONS = [
    "지체장애",
    "뇌병변장애",
    "시각장애",
    "청각장애",
    "지적장애",
    "자폐성장애",
    "기타",
];

export const WHEELCHAIR_OPTIONS = [
    "사용함",
    "사용 안 함",
];

export const TRANSPORT_OPTIONS = [
    "대중교통",
    "저상버스",
    "장애인콜택시",
    "지하철(엘리베이터)",
    "자가용",
    "도보",
];

export const SPORTS_OPTIONS = [
    "수영",
    "탁구",
    "보치아",
    "배드민턴",
    "휠체어농구",
];

export const VOUCHER_OPTIONS = [
    "보유함",
    "보유 안 함",
];

export const DEFAULT_CONDITION = {
    disabilityTypes: [],

    wheelchair: "사용함",

    transports: [
        "저상버스",
        "지하철(엘리베이터)",
    ],

    sports: [
        "수영",
    ],

    voucher: "보유함",
};