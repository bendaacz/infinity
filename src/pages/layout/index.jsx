import MediaQuery from 'react-responsive';
import Nav from "../navbar/index";

function Layout() {
    return (
      <>
<MediaQuery minWidth={1060}>
<Nav />
<h1 className="text-white font-header text-xl flex mt-[50px] justify-center h-[228px]">infinity</h1>
<div className="flex flex-col items-center justify-center">
<p className="font-header flex text-[#999999] mt-[10px] ">SECURED WITH CONFIDENCE!</p>
<p className="font-header flex text-[#CFCFCF] ml-[18px]">PEACEFUL NIGHTS START NOW.</p>
</div>
<div className="flex items-center justify-center font-header text-base">
  <button className="text-[28px] mb-[100px] bg-transparent border-[5px] border-white rounded-full px-4 py-2 text-white hover:bg-white hover:text-black mt-[100px] w-[310px] h-[94px]">
  protect now!
  </button>
  </div>
  <div className='flex items-center justify-center'>
  <div className='bg-[#262626] w-[1380px] h-[430px] flex items-center justify-center place-content-evenly'>
  <div className="flex justify-between items-center mt-[40px] whitespace-nowrap">
  <div className="flex gap-4">
    <p className='text-white bg-[#262626]'>nazdar</p>
    <p className='text-white bg-[#262626]'>nazdar</p>
    <p className='text-white bg-[#262626]'>nazdar</p>
    </div>
    </div>
  </div>
</div>
  </MediaQuery>
  </>
    );
}

export default Layout;