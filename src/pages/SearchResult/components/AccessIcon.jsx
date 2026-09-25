import wheelchairIcon from '../../../assets/icons/wheelchair-icon.png';
import rampIcon from '../../../assets/icons/ramp-icon.png';
import elevatorIcon from '../../../assets/icons/elevator-icon.png';
import restroomIcon from '../../../assets/icons/restroom-icon.png';
import parkingIcon from '../../../assets/icons/parking-icon.png';
import { ACCESS_ICON_SIZE, matchAccessIconType } from '../utils/searchResultData';

const ICON_MAP = {
  wheelchair: wheelchairIcon,
  ramp: rampIcon,
  elevator: elevatorIcon,
  restroom: restroomIcon,
  parking: parkingIcon,
};

function AccessIcon({ name }) {
  const type = matchAccessIconType(name);
  const src = type ? ICON_MAP[type] : null;
  if (!src) return null;
  return (
    <img
      src={src}
      alt={name}
      title={name}
      style={{ width: ACCESS_ICON_SIZE, height: ACCESS_ICON_SIZE, objectFit: 'contain' }}
    />
  );
}

export default AccessIcon;