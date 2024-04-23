import MobileNav from "../navbar"

export default function Contact() {
    return (
        <div className="h-[700px]">
            <MobileNav />
            <p className="mt-[55px] font-light text-white text-[20px] flex justify-center">contact me on</p>
            <a href="https://instagram.com/benedikt.audy/" target="_blank" rel="noreferrer" className='bg-gradient-to-r from-[#ffffff] to-[#00be33] bg-clip-text text-transparent font-normal text-[45px] mt-[25px] flex justify-center justify-items center hover:underline'>Instagram</a>
            <a href="mailto:admin@benediktaudy.eu" target="_blank" rel="noreferrer" className='bg-gradient-to-r from-[#ffffff] to-[#008cff] bg-clip-text text-transparent font-normal text-[45px] mt-[10px] flex justify-center justify-items center hover:underline'>Email</a>
            <a href="https://wa.me/735057531/" target="_blank" rel="noreferrer" className='bg-gradient-to-r from-[#a4d6ff] to-[#8519ff] bg-clip-text text-transparent font-normal text-[45px] mt-[10px] flex justify-center justify-items center hover:underline'>WhatsApp</a>
        </div >
    );
}