import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function MobileNav() {
    return (
        <div className="flex justify-end mt-[15px] mr-[20px]">
            <Link to="/mobile/menu">
                <FontAwesomeIcon className='text-white' size='3x' icon={faBars} />
            </Link>
        </div>
    );
};