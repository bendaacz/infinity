import { Link } from "react-router-dom";
import MediaQuery from 'react-responsive';
import Nav from "../navbar/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning, faDollarSign, faServer } from '@fortawesome/free-solid-svg-icons'

function Layout() {
    return (
<MediaQuery minWidth={1060}>
<Nav />
<div className='h-[1500px]'>
<h1 className=" text-white font-header text-xl flex mt-[50px] justify-center h-[228px]">infinity</h1>
<div className="flex flex-col items-center justify-center">
<p className="font-header flex text-[#999999] mt-[10px] ">SECURED WITH CONFIDENCE!</p>
<p className="font-header flex text-[#CFCFCF] ml-[18px]">PEACEFUL NIGHTS START NOW.</p>
</div>
<div className="flex items-center justify-center font-header text-base">
  <Link to="/sign-up">
  <button className="text-[28px] mb-[100px] bg-transparent border-[5px] border-white rounded-full px-4 py-2 text-white hover:bg-white hover:text-black mt-[100px] w-[310px] h-[94px]">
  protect now!
  </button>
  </Link>
  </div>
  <div className='flex items-center justify-center'>
      <div className='bg-[#262626] w-[1380px] h-[430px] flex items-center justify-center place-content-evenly'>
        <div className="flex justify-between items-center mt-[40px] whitespace-nowrap">
          <div className="flex gap-[200px] bg-[#262626]">
            <div className="flex flex-col items-center text-white bg-[#262626]">
              <FontAwesomeIcon size='10x' className='bg-[#262626] text-[#7cc4ff]' icon={faBoltLightning} />
              <p className='bg-[#262626] mt-[50px] text-[25px] font-normal'>{'>'}5ms latency</p>
            </div>
            <div className="flex flex-col items-center text-white bg-[#262626]">
              <FontAwesomeIcon size='10x' className='bg-[#262626] text-[#9da5ff]' icon={faDollarSign} />
              <p className='bg-[#262626] mt-[50px] text-[25px] font-normal'>$100 credit bonus</p>
            </div>
            <div className="flex flex-col items-center text-white bg-[#262626]">
              <FontAwesomeIcon className='bg-[#262626] text-[#bf87ff]' size='10x' icon={faServer} />
              <p className='bg-[#262626] mt-[50px] text-[25px] font-normal'>99.98% uptime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </MediaQuery>
    );
}

export default Layout;