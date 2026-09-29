import kendo from '../../../assets/images/exercisename/kendo.png';
import golf from '../../../assets/images/exercisename/golf.png';
import basketball from '../../../assets/images/exercisename/basketball.png';
import dance from '../../../assets/images/exercisename/dance.png';
import rollerinline from '../../../assets/images/exercisename/rollerinline.png';
import danceart from '../../../assets/images/exercisename/danceart.png';
import volleyball from '../../../assets/images/exercisename/volleyball.png';
import badminton from '../../../assets/images/exercisename/badminton.png';
import boxing from '../../../assets/images/exercisename/boxing.png';
import bowling from '../../../assets/images/exercisename/bowling.png';
import skating from '../../../assets/images/exercisename/skating.png';
import swim from '../../../assets/images/exercisename/swim.png';
import squash from '../../../assets/images/exercisename/squash.png';
import horseRiding from '../../../assets/images/exercisename/horse-riding.png';
import baseball from '../../../assets/images/exercisename/baseball.png';
import aerobic from '../../../assets/images/exercisename/aerobic.png';
import yoga from '../../../assets/images/exercisename/yoga.png';
import judo from '../../../assets/images/exercisename/judo.png';
import jumpRope from '../../../assets/images/exercisename/jump-rope.png';
import soccer from '../../../assets/images/exercisename/soccer.png';
import tableTennis from '../../../assets/images/exercisename/table-tennis.png';
import taekwondo from '../../../assets/images/exercisename/taekwondo.png';
import tennis from '../../../assets/images/exercisename/tennis.png';
import fencing from '../../../assets/images/exercisename/fencing.png';
import pilates from '../../../assets/images/exercisename/pilates.png';
import hapkido from '../../../assets/images/exercisename/hapkido.png';
import fitness from '../../../assets/images/exercisename/fitness.png';
import crossfit from '../../../assets/images/exercisename/crossfit.png';
import jiuJitsu from '../../../assets/images/exercisename/jiu-jitsu.png';
import climbing from '../../../assets/images/exercisename/climbing.png';
import billiards from '../../../assets/images/exercisename/billiards.png';

// 서버가 내려주는 종목명(facility.sports[].name) 기준 매핑
export const SPORT_ICON_MAP = {
  검도: kendo,
  골프: golf,
  농구: basketball,
  댄스: dance,
  롤러인라인: rollerinline,
  무용: danceart,
  배구: volleyball,
  배드민턴: badminton,
  복싱: boxing,
  볼링: bowling,
  스케이트: skating,
  수영: swim,
  스쿼시: squash,
  승마: horseRiding,
  야구: baseball,
  에어로빅: aerobic,
  요가: yoga,
  유도: judo,
  줄넘기: jumpRope,
  축구: soccer,
  탁구: tableTennis,
  태권도: taekwondo,
  테니스: tennis,
  펜싱: fencing,
  필라테스: pilates,
  합기도: hapkido,
  헬스: fitness,
  크로스핏: crossfit,
  주짓수: jiuJitsu,
  클라이밍: climbing,
  당구: billiards,
};

export const SPORT_DISPLAY_NAME_MAP = {
  크로스핏: '크로스핏',
};

export function getSportIcon(name) {
  return SPORT_ICON_MAP[name] || null;
}

export function getSportDisplayName(name) {
  return SPORT_DISPLAY_NAME_MAP[name] || name;
}