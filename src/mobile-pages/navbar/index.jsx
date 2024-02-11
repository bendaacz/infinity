import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';


export default function MobileNav() {
    return (
  <div className='flex justify-center'>
    <div className="na">

    <div className='grid grid-cols-3 gap-[50px] place-content-around'>
      <FontAwesomeIcon className='text-white' icon={faPenNib} />
      <FontAwesomeIcon className='text-white' icon={faPenNib} />
      <FontAwesomeIcon className='text-white' icon={faPenNib} />
    </div>

    <div className='grid grid-cols-3 gap-[50px] place-content-around'>
      <a href="/mobile/contact" className="text-white">contact</a>
      <a href="/" className="text-white">home</a>
      <a href="/mobile/about" className="text-white">about</a>
    </div>

{/* 
    <div className=''>
      <a href='/mobile/log-in' className='text-white'>log in</a>
      <a href='/mobile/sign-up' className='text-white'>sign up</a>
    </div> 
*/}
    
    </div>
  </div>
    );
}