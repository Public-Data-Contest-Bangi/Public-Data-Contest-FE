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
    CROQUET: "croquet.png",
    JIU_JITSU: "jiu-jitsu.png",
    CLIMBING: "climbing.png",
    BILLIARDS: "billiards.png",
};

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
    CROQUET: "croquet",
    JIU_JITSU: "jiu-jitsu",
    CLIMBING: "climbing",
    BILLIARDS: "billiards",
};

export const getExerciseImage = (sportCode) => {
    const fileName =
        SPORT_IMAGE_FILE[sportCode];

    if (!fileName) {
        return fitness;
    }

    const imagePath =
        `../../../assets/images/exercisename/${fileName}`;

    return exerciseImages[imagePath] || fitness;
};