import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import CustomWiggle from 'gsap-trial/CustomWiggle';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import SplitText from 'gsap-trial/SplitText';
import { Observer } from 'gsap/Observer';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import { Toaster } from 'react-hot-toast';
import Application from './Application';
import Intro from './Intro/Intro';
import { useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer, CustomWiggle, SplitText, ScrollSmoother, TextPlugin);
function App() {

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
                <Application />
            }
            <Toaster />
        </>
    )
}

export default App
