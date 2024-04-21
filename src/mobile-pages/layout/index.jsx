import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import MobileNav from "../navbar/index"

export default function Layout() {
    return (
        <>
            <MobileNav />
            <div>
                <h1 className='flex justify-center text-white font-header text-[75px] mt-[20px]'>infinity</h1>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-header flex text-[#999999] text-[12px] mt-[0px] mr-[5vh]">SECURED WITH CONFIDENCE!</p>
                    <p className="font-header flex text-[#CFCFCF] text-[12px] mr-[3vh]">PEACEFUL NIGHTS START NOW.</p>
                </div>
            </div>
        </>
    );
}