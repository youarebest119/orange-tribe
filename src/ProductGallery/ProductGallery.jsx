import React, { useRef } from 'react'
import madewithcare from "../assets/images/made-with-care.png"
import notransfat from "../assets/images/zero-trans-fat.png"
import "./ProductGallery.scss";
import product1 from "../assets/images/product-gallery/100-Atta-Bread-1-350x506.png";
import product2 from "../assets/images/product-gallery/Multigrain-Bread-1.png";
import product3 from "../assets/images/product-gallery/Sandwich-White-Bread-1.png";
import product4 from "../assets/images/product-gallery/Brown-Bread-1-350x506.png";
import product5 from "../assets/images/product-gallery/Pure-Makkhan-Bread-1-350x506.png";;
import { Container } from 'react-bootstrap';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function getValue(key) {
    const values = {
        1: 200,
        2: 100,
        3: 0,
        4: -100,
        5: -200
    };
    return values[key] ?? null; // Returns null if the key is not found
}


const ProductGallery = () => {
    const scope = useRef();
    // useGSAP(() => {
    //     const selector = gsap.utils.selector(scope.current);

    //     gsap.timeline({
    //         defaults: {
    //             duration: 1,
    //         }
    //     })
    //         .from(selector(".gallery_item:nth-child(3)"), {
    //             y: 100,
    //             opacity: 0,
    //             duration: 0.5,
    //         })
    //         .from(selector(".design_in"), {
    //             scale: 0.8,
    //         })
    //         .from(selector(".gallery_item:not(:nth-child(3))"), {
    //             opacity: 0,
    //             duration: 0.4,
    //         }, "<")
    //         .from(selector(".gallery_item"), {
    //             xPercent: i => getValue(i + 1),
    //         }, "<")
    //         .from(selector(".gallery_item:first-child .badge_img"), {
    //             y: -100,
    //         }, "<")
    //         .from(selector(".gallery_item:last-child .badge_img"), {
    //             y: 100,
    //         }, "<")
    // }, { scope })
    return (
        <section ref={scope} className="product_gallery_design">
            <Container>
                <div className="design_in">
                    <div className="gallery">
                        <div className="gallery_item">
                            <img src={notransfat} alt="" className="badge_img" />
                            <img src={product1} alt="" className="product_img" />
                        </div>
                        <div className="gallery_item">
                            <img src={product2} alt="" className="product_img" />
                        </div>
                        <div className="gallery_item">
                            <img src={product3} alt="" className="product_img" />
                        </div>
                        <div className="gallery_item">
                            <img src={product4} alt="" className="product_img" />
                        </div>
                        <div className="gallery_item">
                            <img src={madewithcare} alt="" className="badge_img" />
                            <img src={product5} alt="" className="product_img" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ProductGallery
