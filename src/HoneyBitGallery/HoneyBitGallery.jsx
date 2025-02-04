import { useGSAP } from '@gsap/react';
import image1 from "../assets/images/honey-bit-gallery/gallery-1.png";
import image2 from "../assets/images/honey-bit-gallery/gallery-2.png";
import image3 from "../assets/images/honey-bit-gallery/gallery-3.png";
import person from "../assets/images/honey-bit-gallery/man.png";
import gsap from 'gsap';
import React, { useRef } from 'react';
import "./HoneyBitGallery.scss";

const HoneyBitGallery = () => {
    const ref = useRef();
    useGSAP(() => {
        // const selector = gsap.utils.selector(ref.current);
        // gsap.timeline({
        //     defaults : {
        //         duration: 1,
        //         ease: "back.inOut(0.1)",
        //     }
        // })
        //     .from(selector(".person"), {
        //         yPercent: 100,
        //         opacity: 0,
        //     })
        //     .from(selector(".gallery_img"), {
        //         xPercent: i => (3 - i) * -100,
        //         opacity: 0,
        //         stagger: {
        //             from: "end",
        //             amount: 0.1,
        //         },
        //     }, "<")
    }, { scope: ref })
    return (
        <section ref={ref} className='honey_bit_gallery_design'>
            <div className="gallery">
                <div className="gallery_img">
                    <img src={image1} alt="" />
                </div>
                <div className="gallery_img">
                    <img src={image2} alt="" />
                </div>
                <div className="gallery_img">
                    <img src={image3} alt="" />
                </div>
            </div>
            <div className="person">
                <img src={person} alt="" />
            </div>
        </section>
    )
}

export default HoneyBitGallery
