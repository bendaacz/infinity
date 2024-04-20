import Nav from "../navbar/index"

import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import useLoading from '../../Loading.jsx';
import "/src/App.scss";

function About() {
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
            <Nav />
            {loading ? (
                <Loader type="ball-grid-pulse" />
            ) : (
                <div className={`h-[1500px] ${fadeIn ? 'fade-in' : ''}`}>
                    <p className="font-light text-white text-[24px]">about</p>
                </div>
            )}
        </>
    );
}

export default About;