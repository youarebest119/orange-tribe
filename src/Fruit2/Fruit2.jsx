import React, { useRef } from 'react'
import "./Fruit2.scss"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Fruit2 = () => {
    const scope = useRef();
    useGSAP(() => {
        const selector = gsap.utils.selector(scope.current);
    }, { scope })
    return (
        <section ref={scope} className="fruit2_design">

        </section>
    )
}

export default Fruit2
