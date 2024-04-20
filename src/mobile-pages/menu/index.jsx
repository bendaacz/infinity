import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
    return (
        <>
            <div className="flex justify-end mt-[10px] mr-[10px]">
                <Link to="/">
                    <FontAwesomeIcon className='text-white' size='3x' icon={faX} />
                </Link>
            </div>
            <div className="border flex justify-center items-center fixed">
                <p className="font-normal text-white">home</p>
                <p className="font-light text-white">contact</p>
                <p className="font-light text-white">about</p>

                <p className="font-light text-white">sign up</p>
                <p className="font-light text-white">sign in</p>
            </div>
        </>
    );
}