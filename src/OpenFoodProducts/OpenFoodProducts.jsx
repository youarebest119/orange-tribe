import { useGSAP } from '@gsap/react'
import left from "../assets/images/open-food-products/left-leaf.png"
import right from "../assets/images/open-food-products/right-leaf.png";
import gsap from 'gsap'
import React, { useRef } from 'react'
import "./OpenFoodProducts.scss"
import product from "../assets/images/open-food-products/product.png";
import { Container } from 'react-bootstrap';
import SplitText from 'gsap/SplitText';

const OpenFoodProducts = () => {
    const scope = useRef();
    useGSAP(() => {
        // const selector = gsap.utils.selector(scope.current);
        // new SplitText(selector("h3"), { type: "words, lines", linesClass: "l" })

        // gsap.timeline({
        //     defaults: {
        //         duration: 0.6,
        //         ease: "ease.inOut",
        //     },
        // })
        //     .from(selector("h3"), {
        //         opacity: 0,
        //     })
        //     .from(selector("img"), {
        //         opacity: 0,
        //     })
        //     .from(selector(".product_card:nth-child(2)"), {
        //         xPercent: 50,
        //         yPercent: 50,
        //         duration: 0.5,
        //     }, "<")
        //     .to(selector(".product_card:nth-child(2)"), {
        //         scale: 1.5,
        //     }, "<")
        //     .to(selector(".product_card:nth-child(2)"), {
        //         scale: 1,
        //     })
        //     .from(selector(".of_in"), {
        //         "--shadow-opacity": 0,
        //     }, "<")
        //     .addLabel("leaf2")
        //     .from(selector(".of_in"), {
        //         "--first-card-position": 0,
        //         "--last-card-position": 0,
        //         "--card-opactiy": 0,
        //     }, "leaf2")
        //     .from(selector(".left"), {
        //         yPercent: 100,
        //         xPercent: -100,
        //     }, "leaf2")
        //     .from(selector(".right"), {
        //         yPercent: -100,
        //         xPercent: 100,
        //     }, "leaf2")
        
    }, { scope })
    return (
        <section ref={scope} className="of_products_design">
            <div className="left">
                <img src={left} alt="" />
            </div>
            <div className="right">
                <img src={right} alt="" />
            </div>
            <Container>
                <div className="of_in">
                    <div className="product_card">
                        <img src={product} alt="" />
                        <h3>OPEN <br /> FOODS</h3>
                    </div>
                    <div className="product_card">
                        <img src={product} alt="" />
                        <h3>OPEN <br /> FOODS</h3>
                    </div>
                    <div className="product_card">
                        <img src={product} alt="" />
                        <h3>OPEN <br /> FOODS</h3>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default OpenFoodProducts
