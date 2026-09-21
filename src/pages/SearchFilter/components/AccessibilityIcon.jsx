import wheelchairIcon from '../../../assets/icons/wheelchair-icon.png';
import rampIcon from '../../../assets/icons/ramp-icon.png';
import elevatorIcon from '../../../assets/icons/elevator-icon.png';
import restroomIcon from '../../../assets/icons/restroom-icon.png';
import parkingIcon from '../../../assets/icons/parking-icon.png';
import { ACCESS_ICON_SIZE } from '../utils/searchFilterOptions';

const ICON_MAP = {
  wheelchair: wheelchairIcon,
  ramp: rampIcon,
  elevator: elevatorIcon,
  restroom: restroomIcon,
  parking: parkingIcon,
};

function AccessibilityIcon({ type }) {
  const src = ICON_MAP[type];
  if (!src) return null;
  return (
    <img
      src={src}
      alt=""
      style={{ width: ACCESS_ICON_SIZE, height: ACCESS_ICON_SIZE, objectFit: 'contain' }}
    />
  );
}

export default AccessibilityIcon;