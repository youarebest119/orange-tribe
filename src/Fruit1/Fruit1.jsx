import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import main from "../assets/images/fruit-1/image 1316.png";
import img1 from "../assets/images/fruit-1/image 1317.png";
import img2 from "../assets/images/fruit-1/image 1318.png";
import img3 from "../assets/images/fruit-1/image 1319.png";
import img4 from "../assets/images/fruit-1/image 1320.png";
import img5 from "../assets/images/fruit-1/image 1321.png";
import img6 from "../assets/images/fruit-1/image 1322.png";
import img7 from "../assets/images/fruit-1/image 1323.png";
import img8 from "../assets/images/fruit-1/image 1324.png";
import img9 from "../assets/images/fruit-1/image 1325.png";
import img10 from "../assets/images/fruit-1/image 1326.png";
import img11 from "../assets/images/fruit-1/image 1327.png";
import img12 from "../assets/images/fruit-1/image 1328.png";
import img13 from "../assets/images/fruit-1/image 1329.png";
import "./Fruit1.scss";

const Fruit1 = () => {
    const scope = useRef();
    useGSAP(() => {
        // const selector = gsap.utils.selector(scope.current);

        // gsap.timeline()
            // .from(selector(".main_img"), {
            //     scale: 0,
            //     opacity: 0,
            //     duration: 1,
            //     ease: "back.inOut",
            // })
            // .from(selector(".float_img"), {
            //     top: "50%",
            //     left: "50%",
            //     opacity: 0,
            //     duration: 1,
            //     stagger: 0.01,
            // })
            // .fromTo(selector(".float_img img"), {
            //     x: -10,
            // }, {
            //     x: 10,
            //     repeat: -1,
            //     yoyo: true,
            //     duration: 5,
            //     stagger: {
            //         from: "random",
            //         amount: 0.1,
            //     }
            // })

    }, { scope })
    return (
        <section ref={scope} className="fruit1_design">
            <Container>
                <div className="design_in">
                    <div className="main_img">
                        <img src={main} alt="" />
                    </div>
                    <div className="float_img img1">
                        <img src={img1} alt="" />
                    </div>
                    <div className="float_img img2">
                        <img src={img2} alt="" />
                    </div>
                    <div className="float_img img3">
                        <img src={img3} alt="" />
                    </div>
                    <div className="float_img img4">
                        <img src={img4} alt="" />
                    </div>
                    <div className="float_img img5">
                        <img src={img5} alt="" />
                    </div>
                    <div className="float_img img6">
                        <img src={img6} alt="" />
                    </div>
                    <div className="float_img img7">
                        <img src={img7} alt="" />
                    </div>
                    <div className="float_img img8">
                        <img src={img8} alt="" />
                    </div>
                    <div className="float_img img9">
                        <img src={img9} alt="" />
                    </div>
                    <div className="float_img img10">
                        <img src={img10} alt="" />
                    </div>
                    <div className="float_img img11">
                        <img src={img11} alt="" />
                    </div>
                    <div className="float_img img12">
                        <img src={img12} alt="" />
                    </div>
                    <div className="float_img img13">
                        <img src={img13} alt="" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Fruit1
