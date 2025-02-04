import React, { useRef } from 'react'
import topleft from "../assets/images/open-foods/top-left-leaf.png"
import topcenter from "../assets/images/open-foods/top-center-leaf.png"
import topright from "../assets/images/open-foods/top-right-leaf.png"
import bottomleft from "../assets/images/open-foods/bottom-left-leaf.png"
import bottomright from "../assets/images/open-foods/bottom-right-leaf.png"
import "./OpenFoods.scss";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import SplitText from 'gsap-trial/SplitText'

const OpenFoods = () => {
    const scope = useRef();
    useGSAP(() => {
        const selector = gsap.utils.selector(scope.current);
        let title = new SplitText(selector("h2"), { type: "words, lines", wordsClass: "w", linesClass: "l" })
        // gsap.timeline({
        //     defaults: {
        //         duration: 0.8,
        //         ease: "ease.inOut",
        //     }
        // })
        //     .from(title.words, {
        //         opacity: 0,
        //         yPercent: 100,
        //         duration: 0.5,
        //     })
        //     .addLabel("leaf")
        //     .to(selector("h2"), {
        //         scale: 1,
        //     }, "leaf")
        //     .from(selector(".top_left"), {
        //         yPercent: -100,
        //         xPercent: -100,
        //     }, "leaf")
        //     .from(selector(".top_center"), {
        //         yPercent: -100,
        //     }, "leaf")
        //     .from(selector(".top_right"), {
        //         yPercent: -100,
        //         xPercent: 100,
        //     }, "leaf")
        //     .from(selector(".bottom_left"), {
        //         yPercent: 100,
        //         xPercent: -100,
        //     }, "leaf")
        //     .from(selector(".bottom_right"), {
        //         yPercent: 100,
        //         xPercent: 100,
        //     }, "leaf")
    }, { scope })
    return (
        <section ref={scope} className="open_foods_design">
            <div className="open_foods_in">
                <div className='leaf top_left' >
                    <img src={topleft} alt="" />
                </div>
                <div className='leaf top_center' >
                    <img src={topcenter} alt="" />
                </div>
                <div className='leaf top_right' >
                    <img src={topright} alt="" />
                </div>
                <div className="leaf bottom_left" >
                    <img src={bottomleft} alt="" />
                </div>
                <div className="leaf bottom_right" >
                    <img src={bottomright} alt="" />
                </div>
                <div className="logo">
                    <h2>
                        OPEN
                        <br />
                        FOODS
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default OpenFoods
