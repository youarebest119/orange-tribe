import React, { useRef, useState } from 'react'
import Intro from './Intro/Intro'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Observer } from 'gsap/Observer'
import SplitText from 'gsap-trial/SplitText'
import ScrollSmoother from 'gsap-trial/ScrollSmoother'
import TextPlugin from 'gsap/TextPlugin'
import Banner from './Banner/Banner'
import CustomWiggle from 'gsap-trial/CustomWiggle'
import { useGSAP } from '@gsap/react'


gsap.registerPlugin(ScrollTrigger, Observer, CustomWiggle, SplitText, ScrollSmoother, TextPlugin);
const Application = () => {
    const [completed, setCompleted] = useState(false);
    const [count, setCount] = useState(0);
    const tl = useRef();
    useGSAP(() => {
        tl.current = gsap.timeline({
            onStart: () => {
                setCompleted(false);
            },
            onComplete: () => {
                setCompleted(true);
                setCount(prev => prev + 1);
            }
        });
    }, [])
    return (
        <>
            <Intro tl={tl} />
            {
                completed && count === 3 &&
                <>
                    <Banner />
                </>
            }
        </>
    )
}

export default Application
