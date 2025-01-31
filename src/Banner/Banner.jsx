import React, { useRef } from 'react'
import bread from "../assets/images/bread.png";
import zerotransfat from "../assets/images/zero-trans-fat.png";
import zerohumantouch from "../assets/images/zero-human-touch.png";
import madewithcare from "../assets/images/made-with-care.png";
import "./Banner.scss";
import { Container } from 'react-bootstrap';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import CustomWiggle from 'gsap-trial/CustomWiggle'

const Banner = () => {
    const ref = useRef();
    useGSAP(() => {
        const selector = gsap.utils.selector(ref.current);
        gsap.timeline()
            .from(selector(".bread"), {
                y: 100,
                ease: "back.inOut",
                duration: 1,
                opacity: 0,
                scale: 0.8,
                rotate: 10,
            })
            .from(selector(".box"), {
                scale: 0,
                ease: "back.inOut",
                duration: 1,
                opacity: 0,
                rotate: 10,
                stagger: 0.1,
            }, "<+=0.1")

            .fromTo(selector(".box img"), {
                rotate: -10,
                xPercent: -5,
            }, {
                yoyo: true,
                xPercent: 5,
                rotate: 10,
                repeat: -1,
                yoyoEase: "ease.inOut",
                duration: 3,
            })
            .fromTo(selector(".bread img"), {
                rotate: -2,
            }, {
                yoyo: true,
                rotate: 2,
                repeat: -1,
                yoyoEase: "ease.inOut",
                duration: 5,
            }, "<");
    }, { scope: ref })
    return (
        <section ref={ref} className="banner_design">
            <Container>
                <div className="banner_in">
                    <div className="banner_box">
                        <div className="box box_1"><img src={zerotransfat} alt="" /></div>
                        <div className="box box_2"><img src={zerohumantouch} alt="" /></div>
                        <div className="box box_3"><img src={madewithcare} alt="" /></div>
                        <div className="bread">
                            <img src={bread} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Banner
