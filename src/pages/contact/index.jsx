import React, { useEffect, useState } from 'react';
import Nav from "../navbar/index";
import Loader from 'react-loaders';
import useLoading from '../../Loading.jsx';
import "/src/App.scss";
import MediaQuery from 'react-responsive';

function Contact() {
  const loading = useLoading();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setFadeIn(true);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [loading]);
    return (
        <>
      <MediaQuery minWidth={1360}>
            <Nav />
        {loading ? (
          <Loader type="ball-grid-pulse" />
        ) : (
          <div className={`h-[1500px] ${fadeIn ? 'fade-in' : ''}`}>
            <p className="mt-[150px] font-light text-white text-[24px] flex justify-center">contact me on</p>
            <div className='font-normal text-white text-[72px] flex justify-center justify-items center'>
              <div className='hover:underline'>Instagram</div>&nbsp;/&nbsp;<div className='hover:underline'>Email</div>&nbsp;/&nbsp;<div className='hover:underline'>WhatsApp</div>
            </div>
          </div>
        )}
      </MediaQuery>
      <MediaQuery minWidth={1060} maxWidth={1360}>
        {loading ? (
          <Loader type="ball-grid-pulse" />
        ) : (
          <div className={`h-[1500px] ${fadeIn ? 'fade-in' : ''}`}>
            <Nav />
            <p className="mt-[150px] font-light text-white text-[24px] flex justify-center">contact me on</p>
            <p className='font-normal text-white text-[72px] flex justify-center justify-items center hover:underline'>Instagram</p>
            <p className='font-normal text-white text-[72px] flex justify-center justify-items center hover:underline'>Email</p>
            <p className='font-normal text-white text-[72px] flex justify-center justify-items center hover:underline'>WhatsApp</p>
              </div>
            )}
          </MediaQuery>
        </>
      );
    }

export default Contact;
