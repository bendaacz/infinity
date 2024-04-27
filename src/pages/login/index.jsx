import Nav from "../navbar/index"
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import useLoading from '../../Loading.jsx';
import "/src/App.scss";
import Typewriter from "typewriter-effect";

function SignIn() {
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
            {loading ? (
                <Loader type="ball-grid-pulse" />
            ) : (
                <div className={`h-screen flex ${fadeIn ? 'fade-in' : ''}`}>
                    <div className="w-2/3 h-full bg-[#7cc4ff]">
                        <div className="bg-[#7cc4ff] text-white flex justify-center mt-[40vh] text-[40px] font-inter">
                            <Typewriter
                                options={{
                                    strings: ["Need more?", "Not enough?", "Have concerns?", "Tight on budget?"],
                                    autoStart: true,
                                    pauseFor: 500,
                                    loop: true,
                                }}
                            />
                        </div>
                    </div>
                    <div className="w-1/3 h-full bg-[#bf87ff]">
                        <p className="flex justify-center mt-[10vh] text-[50px] font-light bg-[#bf87ff]">log in</p>
                    </div>
                </div>
            )}
        </>
    );
}
export default SignIn;