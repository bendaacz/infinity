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
                    <p className="font-normal justify-center flex mt-[10vh] text-[#fffffff1] text-[55px]">Doing the hard work</p>
                    <p className="font-normal justify-center flex bg-gradient-to-r from-[#c38fff] to-[#3ca7ff] bg-clip-text text-transparent text-[55px]">since 2020</p>
                </div>
            )}
        </>
    );
}

export default About;