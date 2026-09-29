const iconFiles = import.meta.glob("../../../assets/images/exercisename/*.png", {
    eager: true,
    query: "?url",
    import: "default",
});

const getSportIcon = (fileName) =>
    fileName
        ? iconFiles[`../../../assets/images/exercisename/${fileName}.png`]
        : undefined;

export const SPORTS_OPTIONS = [
    { id: 1, code: "KENDO", name: "검도", icon: getSportIcon("kendo") },
    { id: 2, code: "GOLF", name: "골프", icon: getSportIcon("golf") },
    { id: 3, code: "BASKETBALL", name: "농구", icon: getSportIcon("basketball") },
    { id: 4, code: "DANCE", name: "댄스", icon: getSportIcon("dance") },
    { id: 5, code: "ROLLER_INLINE", name: "롤러인라인", icon: getSportIcon("rollerinline") },
    { id: 6, code: "DANCE_ART", name: "무용", icon: getSportIcon("danceart") },
    { id: 7, code: "VOLLEYBALL", name: "배구", icon: getSportIcon("volleyball") },
    { id: 8, code: "BADMINTON", name: "배드민턴", icon: getSportIcon("badminton") },
    { id: 9, code: "BOXING", name: "복싱", icon: getSportIcon("boxing") },
    { id: 10, code: "BOWLING", name: "볼링", icon: getSportIcon("bowling") },
    { id: 11, code: "SKATING", name: "스케이트", icon: getSportIcon("skating") },
    { id: 12, code: "SWIMMING", name: "수영", icon: getSportIcon("swim") },
    { id: 13, code: "SQUASH", name: "스쿼시", icon: getSportIcon("squash") },
    { id: 14, code: "HORSE_RIDING", name: "승마", icon: getSportIcon("horse-riding") },
    { id: 15, code: "BASEBALL", name: "야구", icon: getSportIcon("baseball") },
    { id: 16, code: "AEROBICS", name: "에어로빅", icon: getSportIcon("aerobic") },
    { id: 17, code: "YOGA", name: "요가", icon: getSportIcon("yoga") },
    { id: 18, code: "JUDO", name: "유도", icon: getSportIcon("judo") },
    { id: 19, code: "JUMP_ROPE", name: "줄넘기", icon: getSportIcon("jump-rope") },
    { id: 20, code: "SOCCER", name: "축구", icon: getSportIcon("soccer") },
    { id: 21, code: "TABLE_TENNIS", name: "탁구", icon: getSportIcon("table-tennis") },
    { id: 22, code: "TAEKWONDO", name: "태권도", icon: getSportIcon("taekwondo") },
    { id: 23, code: "TENNIS", name: "테니스", icon: getSportIcon("tennis") },
    { id: 24, code: "FENCING", name: "펜싱", icon: getSportIcon("fencing") },
    { id: 25, code: "PILATES", name: "필라테스", icon: getSportIcon("pilates") },
    { id: 26, code: "HAPKIDO", name: "합기도", icon: getSportIcon("hapkido") },
    { id: 27, code: "FITNESS", name: "헬스", icon: getSportIcon("fitness") },
    { id: 28, code: "CROSSFIT", name: "크로스핏", icon: getSportIcon("crossfit") },
    { id: 29, code: "JIU_JITSU", name: "주짓수", icon: getSportIcon("jiu-jitsu") },
    { id: 30, code: "CLIMBING", name: "클라이밍", icon: getSportIcon("climbing") },
    { id: 31, code: "BILLIARDS", name: "당구", icon: getSportIcon("billiards") },
];
