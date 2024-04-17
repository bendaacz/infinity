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
          <MediaQuery minWidth={1060}>
            <Nav />
        {loading ? (
          <Loader type="ball-grid-pulse" />
        ) : (
          <div className={`h-[1500px] ${fadeIn ? 'fade-in' : ''}`}>
                <p className="text-base text-white">contact</p>
              </div>
            )}
          </MediaQuery>
        </>
      );
    }

export default Contact;
