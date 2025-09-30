import React, { useRef } from 'react'
import "./ScGallary.scss"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ScGallary = () => {
    const scope = useRef();
    useGSAP(() => {
        const selector = gsap.utils.selector(scope.current);
    }, { scope })
    return (
        <section ref={scope} className="sc_gallery_design">

        </section>
    )
}

export default ScGallary
