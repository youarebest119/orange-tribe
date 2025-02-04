import React, { useRef } from 'react'
import "./LittleSalad.scss";
import topleft from "../assets/images/little-salad/top-left.png";
import topright from "../assets/images/little-salad/top-right.png";
import bottomleft from "../assets/images/little-salad/bottom-left.png";
import bottomright from "../assets/images/little-salad/bottom-right.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap-trial/SplitText';

const LittleSalad = () => {
    const scope = useRef();
    useGSAP(() => {
        const selector = gsap.utils.selector(scope.current);
        const title = new SplitText(selector("h2"), { linesClass: "l",wordsClass: "w", type: "words, lines" })
        // gsap.timeline()
        //     .addLabel("leaf3")
        //     .from(title.words, {
        //         yPercent: 100,
        //         opacity: 0,
        //         duration: 1,
        //         ease: "back.inOut",
        //         stagger: 0.1,
        //     })
        //     .from(selector(".topleft"), {
        //         yPercent: -100,
        //         xPercent: -100,
        //         duration: 1,
        //         ease: "back.inOut",
        //     }, "leaf3")
        //     .from(selector(".topright"), {
        //         yPercent: -100,
        //         xPercent: 100,
        //         duration: 1,
        //         ease: "back.inOut",
        //     }, "leaf3")
        //     .from(selector(".bottomleft"), {
        //         yPercent: 100,
        //         xPercent: -100,
        //         duration: 1,
        //         ease: "back.inOut",
        //     }, "leaf3")
        //     .from(selector(".bottomright"), {
        //         yPercent: 100,
        //         xPercent: 100,
        //         duration: 1,
        //         ease: "back.inOut",
        //     }, "leaf3")
    }, { scope })
    return (
        <section ref={scope} className="little_salad_design">
            <div className="topleft">
                <img src={topleft} alt="" />
            </div>
            <div className="topright">
                <img src={topright} alt="" />
            </div>
            <div className="bottomleft">
                <img src={bottomleft} alt="" />
            </div>
            <div className="bottomright">
                <img src={bottomright} alt="" />
            </div>
            <h2> Little Salad, <br /> Big Wins </h2>
        </section>
    )
}

export default LittleSalad
