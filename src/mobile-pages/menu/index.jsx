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
                    <p className="font-normal text-white text-[50px] flex justify-center">home</p>
                    <p className="font-light text-[#7cc4ff] text-[40px] flex justify-center">contact</p>
                    <p className="font-light text-white text-[40px] flex justify-center">about</p>
                </div>
                <p className="font-light text-white text-[45px] flex justify-center">sign up</p>
                <p className="font-light text-[#bf87ff] text-[45px] flex justify-center">sign in</p>
            </div>
        </>
    );
}