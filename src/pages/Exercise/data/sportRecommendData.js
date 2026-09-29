import fitness from "../../../assets/images/exercisename/fitness.png";

const exerciseImages = import.meta.glob(
    "../../../assets/images/exercisename/*.png",
    {
        eager: true,
        import: "default",
    }
);

const SPORT_IMAGE_FILE = {
    KENDO: "kendo.png",
    GOLF: "golf.png",
    BASKETBALL: "basketball.png",
    DANCE: "dance.png",
    ROLLER_INLINE: "roller-inline.png",
    DANCE_ART: "dance-art.png",
    VOLLEYBALL: "volleyball.png",
    BADMINTON: "badminton.png",
    BOXING: "boxing.png",
    BOWLING: "bowling.png",
    SKATING: "skating.png",
    SWIMMING: "swim.png",
    SQUASH: "squash.png",
    HORSE_RIDING: "horse-riding.png",
    BASEBALL: "baseball.png",
    AEROBICS: "aerobics.png",
    YOGA: "yoga.png",
    JUDO: "judo.png",
    JUMP_ROPE: "jump-rope.png",
    SOCCER: "soccer.png",
    TABLE_TENNIS: "table-tennis.png",
    TAEKWONDO: "taekwondo.png",
    TENNIS: "tennis.png",
    FENCING: "fencing.png",
    PILATES: "pilates.png",
    HAPKIDO: "hapkido.png",
    FITNESS: "fitness.png",
    CROSSFIT: "crossfit.png",
    JIU_JITSU: "jiu-jitsu.png",
    CLIMBING: "climbing.png",
    BILLIARDS: "billiards.png",
};

export const SPORT_ID = {
    KENDO: 1,
    GOLF: 2,
    BASKETBALL: 3,
    DANCE: 4,
    ROLLER_INLINE: 5,
    DANCE_ART: 6,
    VOLLEYBALL: 7,
    BADMINTON: 8,
    BOXING: 9,
    BOWLING: 10,
    SKATING: 11,
    SWIMMING: 12,
    SQUASH: 13,
    HORSE_RIDING: 14,
    BASEBALL: 15,
    AEROBICS: 16,
    YOGA: 17,
    JUDO: 18,
    JUMP_ROPE: 19,
    SOCCER: 20,
    TABLE_TENNIS: 21,
    TAEKWONDO: 22,
    TENNIS: 23,
    FENCING: 24,
    PILATES: 25,
    HAPKIDO: 26,
    FITNESS: 27,
    CROSSFIT: 28,
    JIU_JITSU: 29,
    CLIMBING: 30,
    BILLIARDS: 31,
};

// 기존 체력 추천 화면에서 사용
export const SPORT_ROUTE = {
    KENDO: "kendo",
    GOLF: "golf",
    BASKETBALL: "basketball",
    DANCE: "dance",
    ROLLER_INLINE: "roller-inline",
    DANCE_ART: "dance-art",
    VOLLEYBALL: "volleyball",
    BADMINTON: "badminton",
    BOXING: "boxing",
    BOWLING: "bowling",
    SKATING: "skating",
    SWIMMING: "swimming",
    SQUASH: "squash",
    HORSE_RIDING: "horse-riding",
    BASEBALL: "baseball",
    AEROBICS: "aerobics",
    YOGA: "yoga",
    JUDO: "judo",
    JUMP_ROPE: "jump-rope",
    SOCCER: "soccer",
    TABLE_TENNIS: "table-tennis",
    TAEKWONDO: "taekwondo",
    TENNIS: "tennis",
    FENCING: "fencing",
    PILATES: "pilates",
    HAPKIDO: "hapkido",
    FITNESS: "fitness",
    CROSSFIT: "crossfit",
    JIU_JITSU: "jiu-jitsu",
    CLIMBING: "climbing",
    BILLIARDS: "billiards",
};

// 백엔드 sportId → sportCode
const SPORT_CODE_BY_ID = {
    1: "KENDO",
    2: "GOLF",
    3: "BASKETBALL",
    4: "DANCE",
    5: "ROLLER_INLINE",
    6: "DANCE_ART",
    7: "VOLLEYBALL",
    8: "BADMINTON",
    9: "BOXING",
    10: "BOWLING",
    11: "SKATING",
    12: "SWIMMING",
    13: "SQUASH",
    14: "HORSE_RIDING",
    15: "BASEBALL",
    16: "AEROBICS",
    17: "YOGA",
    18: "JUDO",
    19: "JUMP_ROPE",
    20: "SOCCER",
    21: "TABLE_TENNIS",
    22: "TAEKWONDO",
    23: "TENNIS",
    24: "FENCING",
    25: "PILATES",
    26: "HAPKIDO",
    27: "FITNESS",
    28: "CROSSFIT",
    29: "JIU_JITSU",
    30: "CLIMBING",
    31: "BILLIARDS",
};

// 첫 운동 추천 화면에서 sportId 기준으로 사용
export const SPORT_ROUTE_BY_ID = Object.fromEntries(
    Object.entries(SPORT_CODE_BY_ID).map(
        ([sportId, sportCode]) => [
            sportId,
            SPORT_ROUTE[sportCode],
        ]
    )
);

// sportCode, sportId 둘 다 받을 수 있도록 처리
export const getExerciseImage = (
    sportCodeOrId
) => {
    const sportCode =
        typeof sportCodeOrId === "number" ||
        /^\d+$/.test(
            String(sportCodeOrId)
        )
            ? SPORT_CODE_BY_ID[
                  Number(sportCodeOrId)
              ]
            : sportCodeOrId;

    const fileName =
        SPORT_IMAGE_FILE[sportCode];

    if (!fileName) {
        return fitness;
    }

    const imagePath =
        `../../../assets/images/exercisename/${fileName}`;

    return (
        exerciseImages[imagePath] ||
        fitness
    );
};