export const REPORTS = [
    {
        id: 1,
        category: "체육시설 정보 오류",
        status: "답변 완료",
        title: "잠실종합운동장 위치 정보가 실제와 달라요",
        date: "2026.08.20",
        content:
            "지도에서는 경사로로 표시되어 있는데 실제로는 계단만 있어서 혼자 이동할 수 없었어요. 확인 부탁드립니다.",
        images: [],
        answer:
            "불편을 드려 죄송합니다. 확인 후 수정 완료했습니다.",
        answerDate: "2026.09.01",
    },
    {
        id: 2,
        category: "무장애 경로 오류",
        status: "답변 대기",
        title: "무장애 경로가 실제 경로와 달라요",
        date: "2026.08.03",
        content:
            "안내된 무장애 경로와 실제 이동 가능한 경로가 달라요. 확인 부탁드립니다.",
        images: [],
        answer: null,
        answerDate: null,
    },
    {
        id: 3,
        category: "서비스 오류",
        status: "답변 완료",
        title: "프로필 사진이 바뀌지 않아요",
        date: "2026.06.29",
        content:
            "프로필 사진을 변경했는데 기존 사진이 계속 표시됩니다.",
        images: [],
        answer:
            "불편을 드려 죄송합니다. 현재 수정 완료되었습니다.",
        answerDate: "2026.07.01",
    },
];

export const getReportById = (id) =>
    REPORTS.find(
        (report) =>
            report.id === Number(id)
    );