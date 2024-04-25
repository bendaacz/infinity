import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="flex justify-between items-center select-none mt-[40px] whitespace-nowrap">
      <div className="flex gap-4">
        <Link className='text-base font-light text-sky-400 mr-[36px] ml-[5rem]' to="/contact">contact</Link>
        <Link className='text-base font-light text-white mr-[36px]' to="/about">about</Link>
        <Link className="text-base font-light text-white" to="/">home</Link>
      </div>
      <div className="flex gap-[32px] w-37"></div>
      <div className="flex gap-4">
        <Link className="text-base text-[#bf87ff] font-light flex justify-end float-right mr-[36px]" to="/sign-up">sign up</Link>
        <Link className="text-base text-white font-light flex justify-end mr-[5rem]" to="/log-in">log in</Link>
      </div>
    </div>
  );
}

export default Navbar;