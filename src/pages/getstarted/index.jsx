import Nav from "../navbar/index"
import Draggable from 'react-draggable';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import useLoading from '../../Loading.jsx';
import "/src/App.scss";

function GetStarted() {
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
                    <p className="font-light text-white text-[24px]">get started</p>
                    <div className="">
                        <Draggable axis="x">
                            <div className="flex">
                                <div className="flex max-w-sm ml-[50px] h-[450px] border">
                                    <div className="flex h-full flex-col text-center justify-center text-pretty">
                                        <h5 className="flex text-normal text-white font-normal mb-[20px] ml-[30px] mr-[30px]">Noteworthy technology acquisitions 2021</h5><p className="font-normal text-gray-700 ml-[30px] mr-[30px]">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                </div>
                            </div>
                        </Draggable>
                    </div>
                </div >
            )
            }
        </>
    );
}

export default GetStarted;