import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <div className="flex justify-end mt-[10px] mr-[10px]">
      <Link to="/mobile/menu">
        <FontAwesomeIcon className='text-white' size='3x' icon={faBars} />
      </Link>
    </div>
  );
}