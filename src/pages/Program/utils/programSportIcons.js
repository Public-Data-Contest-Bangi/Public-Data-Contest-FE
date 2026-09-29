const icons = import.meta.glob('../../../assets/icons/program-sports/*.png', { eager: true, import: 'default' });
export const PROGRAM_SPORTS = [
  {
    "id": 1,
    "code": "KENDO",
    "name": "검도",
    "icon": "kendo"
  },
  {
    "id": 2,
    "code": "GOLF",
    "name": "골프",
    "icon": "golf"
  },
  {
    "id": 3,
    "code": "BASKETBALL",
    "name": "농구",
    "icon": "basketball"
  },
  {
    "id": 4,
    "code": "DANCE",
    "name": "댄스",
    "icon": "dance"
  },
  {
    "id": 5,
    "code": "ROLLER_INLINE",
    "name": "롤러인라인",
    "icon": "roller"
  },
  {
    "id": 6,
    "code": "DANCE_ART",
    "name": "무용",
    "icon": "dance"
  },
  {
    "id": 7,
    "code": "VOLLEYBALL",
    "name": "배구",
    "icon": "volleyball"
  },
  {
    "id": 8,
    "code": "BADMINTON",
    "name": "배드민턴",
    "icon": "badminton"
  },
  {
    "id": 9,
    "code": "BOXING",
    "name": "복싱",
    "icon": "boxing"
  },
  {
    "id": 10,
    "code": "BOWLING",
    "name": "볼링",
    "icon": "bowling"
  },
  {
    "id": 11,
    "code": "SKATING",
    "name": "스케이트",
    "icon": "skating"
  },
  {
    "id": 12,
    "code": "SWIMMING",
    "name": "수영",
    "icon": "swimming"
  },
  {
    "id": 13,
    "code": "SQUASH",
    "name": "스쿼시",
    "icon": "racket"
  },
  {
    "id": 14,
    "code": "HORSE_RIDING",
    "name": "승마",
    "icon": "horse-riding"
  },
  {
    "id": 15,
    "code": "BASEBALL",
    "name": "야구",
    "icon": "baseball"
  },
  {
    "id": 16,
    "code": "AEROBICS",
    "name": "에어로빅",
    "icon": "aerobics"
  },
  {
    "id": 17,
    "code": "YOGA",
    "name": "요가",
    "icon": "yoga"
  },
  {
    "id": 18,
    "code": "JUDO",
    "name": "유도",
    "icon": "martial-arts"
  },
  {
    "id": 19,
    "code": "JUMP_ROPE",
    "name": "줄넘기",
    "icon": "jump-rope"
  },
  {
    "id": 20,
    "code": "SOCCER",
    "name": "축구",
    "icon": "soccer"
  },
  {
    "id": 21,
    "code": "TABLE_TENNIS",
    "name": "탁구",
    "icon": "table-tennis"
  },
  {
    "id": 22,
    "code": "TAEKWONDO",
    "name": "태권도",
    "icon": "martial-arts"
  },
  {
    "id": 23,
    "code": "TENNIS",
    "name": "테니스",
    "icon": "racket"
  },
  {
    "id": 24,
    "code": "FENCING",
    "name": "펜싱",
    "icon": "fencing"
  },
  {
    "id": 25,
    "code": "PILATES",
    "name": "필라테스",
    "icon": "pilates"
  },
  {
    "id": 26,
    "code": "HAPKIDO",
    "name": "합기도",
    "icon": "martial-arts"
  },
  {
    "id": 27,
    "code": "FITNESS",
    "name": "헬스",
    "icon": "fitness"
  },
  {
    "id": 28,
    "code": "CROSSFIT",
    "name": "크로스핏",
    "icon": "fitness"
  },
  {
    "id": 29,
    "code": "JIU_JITSU",
    "name": "주짓수",
    "icon": "martial-arts"
  },
  {
    "id": 30,
    "code": "CLIMBING",
    "name": "클라이밍",
    "icon": "climbing"
  },
  {
    "id": 31,
    "code": "BILLIARDS",
    "name": "당구",
    "icon": "billiards"
  }
];

const aliases = [
  ['킥복싱', 'boxing'], ['kickboxing', 'boxing'], ['탁구', 'table-tennis'],
  ['테니스', 'racket'], ['풍선배구', 'volleyball'], ['발레', 'dance'],
  ['방송댄스', 'dance'], ['줌바', 'dance'], ['라인댄스', 'dance'],
  ['아쿠아', 'swimming'], ['피트니스', 'fitness'], ['웨이트', 'fitness'],
  ['인라인', 'roller'], ['암벽', 'climbing'], ['스케이팅', 'skating'],
  ...PROGRAM_SPORTS.map(sport => [sport.name, sport.icon]),
];
const normalize = value => String(value ?? '').replace(/[\s_-]/g, '').toLowerCase();
export function getProgramIconKey(program) {
  const sport = PROGRAM_SPORTS.find(item =>
    item.id === Number(program.sportId) || item.code === program.sportCode);
  if (sport) return sport.icon;
  for (const text of [program.className, program.title]) {
    const normalized = normalize(text);
    const match = aliases.find(([name]) => normalized.includes(normalize(name)));
    if (match) return match[1];
  }
  return 'general';
}
export function getProgramIcon(program) {
  return icons[`../../../assets/icons/program-sports/${getProgramIconKey(program)}.png`];
}
