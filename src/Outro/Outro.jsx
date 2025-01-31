import React, { useRef } from 'react'
import "./Outro.scss"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Outro = () => {
    const scope = useRef();
    useGSAP(() => {
        const selector = gsap.utils.selector(scope.current);
    }, { scope })
    return (
        <section ref={scope} className="outro_design">

        </section>
    )
}

export default Outro
