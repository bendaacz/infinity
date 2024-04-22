import MobileNav from "../navbar/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning, faDollarSign, faServer } from '@fortawesome/free-solid-svg-icons';

export default function Layout() {
    return (
        <div className="h-[1500px]">
            <MobileNav />
            <div>
                <h1 className='flex justify-center text-white font-header text-[75px] mt-[20px]'>infinity</h1>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-header flex text-[#999999] text-[12px] mr-[5vh]">SECURED WITH CONFIDENCE!</p>
                    <p className="font-header flex text-[#CFCFCF] text-[12px] mr-[3vh]">PEACEFUL NIGHTS START NOW.</p>
                </div>
            </div>
            <div className=''>
                <div className='mt-[65px] flex items-center justify-center'>
                    <div className='bg-[#262626] w-10/12 h-[800px] flex items-center justify-center flex-col place-content-evenly'>
                        <div className=" flex flex-col items-center text-white bg-[#262626]">
                            <FontAwesomeIcon size='7x' className='bg-[#262626] text-[#7cc4ff]' icon={faBoltLightning} />
                            <p className='bg-[#262626] mt-[30px] text-[25px] font-normal'>{'>'}5ms latency</p>
                        </div>
                        <div className="mt-[70px] flex flex-col items-center text-white bg-[#262626]">
                            <FontAwesomeIcon size='7x' className='bg-[#262626] text-[#9da5ff]' icon={faDollarSign} />
                            <p className='bg-[#262626] mt-[30px] text-[25px] font-normal'>$100 credit bonus</p>
                        </div>
                        <div className="mt-[70px] flex flex-col items-center text-white bg-[#262626]">
                            <FontAwesomeIcon className='bg-[#262626] text-[#bf87ff]' size='7x' icon={faServer} />
                            <p className='bg-[#262626] mt-[30px] text-[25px] font-normal'>99.98% uptime</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}