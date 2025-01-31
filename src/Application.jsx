import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Observer } from 'gsap/Observer'
import React, { useRef } from 'react'
import Banner from './Banner/Banner'
import Fruit1 from './Fruit1/Fruit1'
import Fruit2 from './Fruit2/Fruit2'
import HoneyBitGallery from './HoneyBitGallery/HoneyBitGallery'
import LittleSalad from './LittleSalad/LittleSalad'
import OpenFoodProducts from './OpenFoodProducts/OpenFoodProducts'
import OpenFoods from './OpenFoods/OpenFoods'
import OpenGallery from './OpenGallery/OpenGallery'
import Outro from './Outro/Outro'
import ProductGallery from './ProductGallery/ProductGallery'
import ScGallary from './ScGallary/ScGallary'
import SugarCrush from './SugarCrush/SugarCrush'


const Application = () => {
    const isAnimating = useRef();
    const scrolled = useRef(0);
    const panels = useRef([]);
    const { contextSafe } = useGSAP(() => {
        panels.current = gsap.utils.toArray('section');
        new Observer.create({
            wheelSpeed: -1,
            target: window,
            type: 'wheel,touch',
            onUp: () => !isAnimating.current && handleNext(),
            onDown: () => !isAnimating.current && handlePrev(),
            tolerance: 10,
        })
    })

    const handleNext = () => {
        console.log('scrolled.current: ', scrolled.current);
        if (scrolled.current < panels.current.length - 1) {
            scrolled.current++;
            animateToPanel(1);
        }
    };

    const handlePrev = () => {
        if (scrolled.current > 0) {
            scrolled.current--;
            animateToPanel(-1);
        }
    };

    const animateToPanel = ((direction) => {
        isAnimating.current = true;

        const targetPanel = panels.current[scrolled.current];
        console.log('targetPanel: ', targetPanel);
        const exitPanel = direction > 0 ? panels.current[scrolled.current - 1] : panels.current[scrolled.current + 1]


        let tl = gsap.timeline({
            onComplete: () => {
                isAnimating.current = false;
            },
        })
        // if (exitPanel === panels.current[0]) {
        //     const selector = gsap.utils.selector(exitPanel);
        //     tl.to(selector("*"), {
        //         yPercent: 100,
        //         opacity: 0,
        //         stagger: 0.01,
        //     })
        // }

        tl.to(window, {
            scrollTo: targetPanel,
            // ease: 'back(0.5)',
            ease: "back.inOut(0.1)",
            // duration: exitPanel === panels.current[1] ? 0.1 : 1,
            duration: 1,
        })


        // if (targetPanel === panels.current[0]) {
        //     let selector = gsap.utils.selector(targetPanel);
        //     tl.fromTo(selector('*'), {
        //         opacity: 0,
        //         yPercent: 100,
        //     }, {
        //         opacity: 1,
        //         yPercent: 0,
        //     })
        // }

    })
    return (
        <main className="home_page">
            <Banner />
            <ProductGallery />
            <OpenFoods />
            <OpenFoodProducts />
            <OpenGallery />
            <LittleSalad />
            <HoneyBitGallery />
            <SugarCrush />
            <Fruit1 />
            <Fruit2 />
            <ScGallary />
            <Outro />
        </main>
    )
}

export default Application
