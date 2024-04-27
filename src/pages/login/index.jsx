import Nav from "../navbar/index"
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import useLoading from '../../Loading.jsx';
import "/src/App.scss";

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

    const quotes = [
        "How's your day so far?",
        "Hello again! We've missed you.",
        "Forgot something?",
        "Your return is our delight.",
        "Back for more? We're thrilled!",
        "Back in the fold. Let's create magic!",
    ];

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setCurrentQuoteIndex(randomIndex);
        }, 100000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            {loading ? (
                <Loader type="ball-grid-pulse" />
            ) : (
                <div className={`h-screen flex ${fadeIn ? 'fade-in' : ''}`}>
                    <div className="w-2/3 h-full bg-[#7cc4ff]">
                        <h1 className="bg-[#7cc4ff] text-[#333333] flex justify-center mt-[40vh] text-[40px] font-inter">{quotes[currentQuoteIndex]}</h1>
                    </div>
                    <div className="w-1/3 h-full bg-[#bf87ff]">
                        <p className="flex justify-center mt-[10vh] text-[50px] font-normal bg-[#bf87ff]">log in</p>
                        <div className="flex flex-row bg-[#bf87ff] items-center content-center justify-center text-center">
                            <input className="flex text-center placeholder:text-[#484848] mt-[10vh] text-[30px] font-normal bg-[#bf87ff] border" placeholder="username" name="phone" type="username"></input>
                            <button className="flex text-center" type="submit">submit</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
export default SignIn;