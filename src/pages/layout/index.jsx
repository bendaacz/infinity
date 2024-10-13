import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import MediaQuery from 'react-responsive';
import Nav from "../navbar/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning, faDollarSign, faServer } from '@fortawesome/free-solid-svg-icons';
import Loader from "react-loaders";
import Typewriter from 'typewriter-effect';
import useLoading from '../../Loading.jsx';
import "../../App.scss";

function Layout() {
  const loading = useLoading();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setFadeIn(true);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      <MediaQuery minWidth={1060}>
        <Nav />
        {loading ? (
          <Loader type="ball-grid-pulse" />
        ) : (
          <div className={`select-none h-[1500px] ${fadeIn ? 'fade-in' : ''}`}>
            <h1 className="text-white font-header text-xl flex mt-[50px] justify-center h-[228px]">infinity</h1>
            <div className="flex flex-col items-center justify-center">
              <p className="font-header flex text-[#999999] mt-[10px]">SECURED WITH CONFIDENCE!</p>
              <p className="font-header flex text-[#CFCFCF] ml-[18px]">PEACEFUL NIGHTS START NOW.</p>
            </div>
            <div className="flex items-center justify-center font-header text-base">
              <div className='mb-[100px] mt-[100px]'>
                <Link to="/get-started">
                  <button className="text-[28px] bg-transparent border-[5px] border-white rounded-full px-4 py-2 text-white hover:bg-white hover:text-black w-[310px] h-[94px]">
                    protect now!
                  </button>
                </Link>
              </div>
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



            <div className='flex justify-center mt-[100px]'>
              <div className='flex flex-col'>
                <div className='text-[#ffffffbb] font-header text-[45px]'>
                  <Typewriter
                    options={{
                      strings: ["Need more?", "Not enough?", "Have concerns?", "Tight on budget?"],
                      autoStart: true,
                      pauseFor: 500,
                      loop: true,
                    }}
                  />
                </div>
                <div className='font-normal mt-[20px] text-white text-[80px]'>CONTACT US!</div>
              </div>
            </div>
          </div>
        )}
      </MediaQuery>
    </>
  );
}

export default Layout;
