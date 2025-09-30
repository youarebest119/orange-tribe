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
import ProductGallery, { getValue } from './ProductGallery/ProductGallery'
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

    const getDuration = panel => {
        // exitPanel === panels.current[0] ? 0.1 : 1,
        if (
            panel === panels.current[0] ||
            panel === panels.current[1] ||
            panel === panels.current[3]
        ) {
            return 0.1;
        } else if (panel === panels.current[2]) {
            return 0;
        }
        return 1;
    }

    const animateToPanel = ((direction) => {
        isAnimating.current = true;

        const targetPanel = panels.current[scrolled.current];

        const exitPanel = direction > 0 ? panels.current[scrolled.current - 1] : panels.current[scrolled.current + 1]


        let tl = gsap.timeline({
            onComplete: () => {
                console.log("completed")
                isAnimating.current = false;
            },
        })
        const exitPanelSelector = gsap.utils.selector(exitPanel);
        if (exitPanel === panels.current[0]) {
            tl.to(exitPanelSelector(".banner_in"), {
                opacity: 0,
            })
        }
        if (exitPanel === panels.current[1]) {
            tl.to(exitPanelSelector(".gallery"), {
                opacity: 0,
                ease: "back.inOut",
                scale: 0.5,
            })
        }
        if (exitPanel === panels.current[2]) {
            tl
                .to(exitPanelSelector(".leaf"), {
                    opacity: 0,
                    stagger: 0.01,
                })
                .to(exitPanelSelector("h2 .w"), {
                    opacity: 0,
                    duration: 0,
                    ease: "none",
                })
        }
        if (exitPanel === panels.current[3]) {
            tl
                .to(exitPanel, {
                    "--before": 0,
                    duration: 0.4,
                })
                .to(exitPanelSelector(".left"), {
                    xPercent: -100,
                    yPercent: 100,
                    opacity: 0,
                    duration: 0.4,
                }, "<")
                .to(exitPanelSelector(".right"), {
                    xPercent: 100,
                    yPercent: -100,
                    opacity: 0,
                    duration: 0.4,
                }, "<")
                .to(exitPanelSelector(".of_in"), {
                    opacity: 0,
                    duration: 0.4,
                    scale: 0.8,
                })
        }

        if (exitPanel === panels.current[4]) {
            tl
                .to(exitPanelSelector(".main_gallery_img"), {
                    scale: 0,
                    ease: "back.inOut",
                })
        }
        tl.to(window, {
            scrollTo: targetPanel,
            // ease: 'back(0.5)',
            ease: "back.inOut(0.1)",
            duration: getDuration(exitPanel),
            // duration: 1,
        })


        let selector = gsap.utils.selector(targetPanel);
        if (targetPanel === panels.current[0]) {
            tl
                .to(selector(".banner_in"), {
                    opacity: 1,
                    duration: 0.1,
                })
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

            // .fromTo(selector(".box img"), {
            //     rotate: -10,
            //     xPercent: -5,
            // }, {
            //     yoyo: true,
            //     xPercent: 5,
            //     rotate: 10,
            //     repeat: -1,
            //     yoyoEase: "ease.inOut",
            //     duration: 3,
            // })
            // .fromTo(selector(".bread img"), {
            //     rotate: -2,
            // }, {
            //     yoyo: true,
            //     rotate: 2,
            //     repeat: -1,
            //     yoyoEase: "ease.inOut",
            //     duration: 5,
            // }, "<");
        }
        else if (targetPanel === panels.current[1]) {
            tl
                .to(selector(".gallery"), {
                    opacity: 1,
                    scale: 1,
                    duration: 0.1,
                })
                .from(selector(".gallery_item:nth-child(3)"), {
                    y: 100,
                    opacity: 0,
                    duration: 0.5,
                })
                .from(selector(".design_in"), {
                    scale: 0.8,
                    duration: 1,
                })
                .from(selector(".gallery_item:not(:nth-child(3))"), {
                    opacity: 0,
                    duration: 0.4,
                }, "<")
                .from(selector(".gallery_item"), {
                    xPercent: i => getValue(i + 1),
                    duration: 1,
                }, "<")
                .from(selector(".gallery_item:first-child .badge_img"), {
                    y: -100,
                    duration: 1,
                }, "<")
                .from(selector(".gallery_item:last-child .badge_img"), {
                    y: 100,
                    duration: 1,
                }, "<")
        }
        else if (targetPanel === panels.current[2]) {
            tl
                .to(selector(".leaf"), {
                    opacity: 1,
                    duration: 0.1,
                })
                .fromTo(selector("h2 .w"), {
                    opacity: 0,
                    yPercent: 100,
                }, {
                    opacity: 1,
                    yPercent: 0,
                    duration: 0.5,
                    ease: "ease.inOut",
                })
                .addLabel("leaf")
                .to(selector("h2"), {
                    scale: 1,
                    duration: 0.8,
                    ease: "ease.inOut",
                }, "leaf")
                .from(selector(".top_left"), {
                    yPercent: -100,
                    xPercent: -100,
                    duration: 0.8,
                    ease: "ease.inOut",
                }, "leaf")
                .from(selector(".top_center"), {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "ease.inOut",
                }, "leaf")
                .from(selector(".top_right"), {
                    yPercent: -100,
                    xPercent: 100,
                    duration: 0.8,
                    ease: "ease.inOut",
                }, "leaf")
                .from(selector(".bottom_left"), {
                    yPercent: 100,
                    xPercent: -100,
                    duration: 0.8,
                    ease: "ease.inOut",
                }, "leaf")
                .from(selector(".bottom_right"), {
                    yPercent: 100,
                    xPercent: 100,
                    duration: 0.8,
                    ease: "ease.inOut",
                }, "leaf")
        }
        else if (targetPanel === panels.current[3]) {
            tl
                .to(selector(".of_in"), {
                    opacity: 1,
                    scale: 1,
                    duration: 0,
                })
                .fromTo(targetPanel, {
                    // backgroundColor: "transparent",
                    "--before": 0,
                    // ease: "none",
                }, {
                    "--before": 1,
                    duration: 0.6,
                })
                .fromTo(selector("h3"), {
                    opacity: 0,
                    // scale: 2,
                }, {
                    opacity: 1,
                    duration: 0,
                    ease: "none",
                    // scale: 1,
                }, "<")
                .from(selector("img"), {
                    opacity: 0,
                    duration: 0.6,
                    ease: "ease.inOut",
                }, "+=0.4")
                .from(selector(".product_card:nth-child(2)"), {
                    xPercent: 50,
                    yPercent: 50,
                    duration: 0.5,
                    ease: "ease.inOut",
                    scale: 2,
                }, "<")
                .to(selector(".product_card:nth-child(2)"), {
                    scale: 1.5,
                    duration: 0.6,
                    ease: "ease.inOut",
                }, "<")
                .addLabel("leaf2")
                .to(selector(".product_card:nth-child(2)"), {
                    scale: 1,
                    duration: 0.6,
                    ease: "ease.inOut",
                })
                .from(selector(".of_in"), {
                    "--shadow-opacity": 0,
                    duration: 0.6,
                    ease: "ease.inOut",
                }, "<")
                .from(selector(".of_in"), {
                    "--first-card-position": 0,
                    "--last-card-position": 0,
                    "--card-opactiy": 0,
                    duration: 0.6,
                    ease: "ease.inOut",
                }, "leaf2")
                .fromTo(selector(".left"), {
                    yPercent: 100,
                    xPercent: -100,
                    opacity: 0,
                }, {
                    yPercent: 0,
                    opacity: 1,
                    xPercent: 0,
                    duration: 0.6,
                    ease: "ease.inOut",
                }, "leaf2")
                .fromTo(selector(".right"), {
                    yPercent: -100,
                    xPercent: 100,
                    duration: 0.6,
                    ease: "ease.inOut",
                }, {
                    opacity: 1,
                    xPercent: 0,
                    yPercent: 0,
                    duration: 0.6,
                    ease: "ease.inOut",
                }, "leaf2")
        }
        else if (targetPanel === panels.current[4]) {
            tl
                // .to(targetPanel, {
                //     "--before": 1,
                // })
                .from(selector(".design_col"), {
                    yPercent: -10,
                    duration: 2,
                    stagger: 0.2,
                    opacity: 0,
                }, "<")
                .to(selector(".design_in"), {
                    transform: "none"
                })
                .to(selector(".design_row"), {
                    y: "-25vh"
                }, "<")
                .to(selector(".gallery_img:not(.main_gallery_img)"), {
                    opacity: 0,
                })
                .to(selector(".main_gallery_img"), {
                    scale: 1.4
                }, "<")
        }
        else if (targetPanel === panels.current[5]) {
            tl
                .addLabel("leaf3")
                .from(selector("h2 .w"), {
                    yPercent: 100,
                    opacity: 0,
                    duration: 1,
                    ease: "back.inOut",
                    stagger: 0.1,
                })
                .from(selector(".topleft"), {
                    yPercent: -100,
                    xPercent: -100,
                    duration: 1,
                    ease: "back.inOut",
                }, "leaf3")
                .from(selector(".topright"), {
                    yPercent: -100,
                    xPercent: 100,
                    duration: 1,
                    ease: "back.inOut",
                }, "leaf3")
                .from(selector(".bottomleft"), {
                    yPercent: 100,
                    xPercent: -100,
                    duration: 1,
                    ease: "back.inOut",
                }, "leaf3")
                .from(selector(".bottomright"), {
                    yPercent: 100,
                    xPercent: 100,
                    duration: 1,
                    ease: "back.inOut",
                }, "leaf3")
        }
        else if (targetPanel === panels.current[6]) {
            tl.from(selector(".person"), {
                yPercent: 100,
                opacity: 0,
                duration: 1,
                ease: "back.inOut(0.1)",
            })
                .from(selector(".gallery_img"), {
                    xPercent: i => (3 - i) * -100,
                    opacity: 0,
                    duration: 1,
                    ease: "back.inOut(0.1)",
                    stagger: {
                        from: "end",
                        amount: 0.1,
                    },
                }, "<")
        }
        else if (targetPanel === panels.current[7]) {
            tl.from(selector(".layer"), {
                "--scale": 0,
                ease: "power3.out",
                duration: 1,
                stagger: {
                    amount: 0.4,
                }
            })
                .from(selector("#sugar-crush path"), {
                    ease: "back.inOut",
                    scale: 0,
                    opacity: 0,
                    duration: 1.2,
                    stagger: {
                        amount: 0.4,
                    }
                }, ">-=1.3")
                .from(selector("#scoop-of-happiness path"), {
                    display: "none",
                    duration: 1,
                    stagger: {
                        amount: 0.6,
                    }
                }, ">")
        }
        else if (targetPanel === panels.current[8]) {
            tl
                .from(selector(".main_img"), {
                    scale: 0,
                    opacity: 0,
                    duration: 1,
                    ease: "back.inOut",
                })
                .from(selector(".float_img"), {
                    top: "50%",
                    left: "50%",
                    opacity: 0,
                    duration: 1,
                    stagger: 0.01,
                })
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
        }
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
            {/* <Fruit2 /> */}
            {/* <ScGallary />
            <Outro /> */}
        </main>
    )
}

export default Application
