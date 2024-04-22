import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
    return (
        <>
            <div className="">
                <div className="h-[50vh] flex-row items-center space-y-[1vh]">
                    <div className="flex justify-end mt-[15px] mr-[20px]">
                        <Link to="/">
                            <FontAwesomeIcon className='text-white' size='3x' icon={faX} />
                        </Link>
                    </div>
                    <Link to="/">
                        <p className="font-normal text-white hover:text-[#b8b8b8] text-[50px] flex justify-center">home</p>
                    </Link>
                    <Link to="/mobile/contact">
                        <p className="font-light text-[#7cc4ff] hover:text-[#008cff] text-[40px] flex justify-center">contact</p>
                    </Link>
                    <Link to="/mobile/about">
                        <p className="font-light text-white hover:text-[#b8b8b8] text-[40px] flex justify-center">about</p>
                    </Link>
                </div>
                <Link to="/mobile/sign-up">
                    <p className="font-light text-[#bf87ff] hover:text-[#9b44ff] text-[45px] flex justify-center">sign up</p>
                </Link>
                <Link to="/mobile/log-in">
                    <p className="font-light text-white hover:text-[#b8b8b8] text-[45px] flex justify-center">log in</p>
                </Link>
            </div>
        </>
    );
}