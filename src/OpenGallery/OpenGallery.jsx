import React, { useRef } from 'react'
import food1 from "../assets/images/open-gallery/food-1.png"
import food2 from "../assets/images/open-gallery/food-2.png"
import food3 from "../assets/images/open-gallery/food-3.png"
import food4 from "../assets/images/open-gallery/food-4.png"
import food5 from "../assets/images/open-gallery/food-5.png"
import food6 from "../assets/images/open-gallery/food-6.png"
import food7 from "../assets/images/open-gallery/food-7.png"
import "./OpenGallery.scss"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

const OpenGallery = () => {
    const scope = useRef();
    // useGSAP(() => {
    //     const selector = gsap.utils.selector(scope.current);
    //     gsap
    //         .timeline()
    //         .from(selector(".design_col"), {
    //             yPercent: -10,
    //             duration: 2,
    //             stagger: 0.2,
    //             opacity: 0,
    //         })
    //         .to(selector(".design_in"), {
    //             transform: "none"
    //         })
    //         .to(selector(".design_row"), {
    //             y: "-25vh"
    //         }, "<")
    //         .to(selector(".gallery_img:not(.main_gallery_img)"), {
    //             opacity: 0,
    //         })
    //         .to(selector(".main_gallery_img"), {
    //             scale: 1.4
    //         }, "<")
    // }, { scope })
    return (
        <section ref={scope} className='open_gallery_design'>
            <div className="design_in">
                <div className="design_row">
                    <div className="design_col">
                        <div className="gallery_img">
                            <img src={food1} alt="" />
                        </div>
                        <div className="gallery_img">
                            <img src={food2} alt="" />
                        </div>
                        <div className="gallery_img">
                            <img src={food3} alt="" />
                        </div>
                        <div className="gallery_img">
                            <img src={food4} alt="" />
                        </div>
                        <div className="gallery_img">
                            <img src={food5} alt="" />
                        </div>
                        <div className="gallery_img">
                            <img src={food6} alt="" />
                        </div>
                    </div>
                    <div className="design_col">
                        <div className="gallery_img">
                            <img src={food4} alt="" />
                        </div>
                        <div className="gallery_img main_gallery_img">
                            <img src={food5} alt="" />
                        </div>
                        <div className="gallery_img">
                            <img src={food6} alt="" />
                        </div>
                        <div className="gallery_img">
                            <img src={food1} alt="" />
                        </div>
                        <div className="gallery_img">
                            <img src={food2} alt="" />
                        </div>
                        <div className="gallery_img">
                            <img src={food3} alt="" />
                        </div>
                    </div>
                    <div className="design_col">
                        <div className="gallery_img">
                            <img src={food7} alt="" />
                        </div>
                        <div className="gallery_img">
                            <img src={food2} alt="" />
                        </div>
                        <div className="gallery_img">
                            <img src={food3} alt="" />
                        </div>
                        <div className="gallery_img">
                            <img src={food5} alt="" />
                        </div>
                        <div className="gallery_img">
                            <img src={food6} alt="" />
                        </div>
                        <div className="gallery_img">
                            <img src={food7} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OpenGallery
