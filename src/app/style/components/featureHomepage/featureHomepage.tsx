"use client"

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import mockup1 from '../../../../../assets/Ft9ja--mockup.svg';
import mockup2 from '../../../../../assets/ft9ja--mockup--details.svg';
import './featureHomepage.scss';

export default function FeatureHomepage() {
    const [slideWidth, setSlidewidth] = useState(0);

    const porfolio1 = useRef(null);
    const porfolio2 = useRef(null);
    const porfolio3 = useRef(null);
    // const slideContainer = useRef(null);

    useEffect(() => {
        const slide = document.querySelector(".slide");
        const slideContainer = document.querySelector(".portfolio--section--div");

        setInterval(() => {
            let finalWidth: number;

            if (slide && slideContainer) {
                const slideClientW = slide.clientWidth;
                finalWidth = slideContainer.scrollLeft = slideWidth + slideClientW;
                setSlidewidth(finalWidth);
                console.log(slideWidth, finalWidth);
            }

          

        }, 1000)
    }, []);


    return (
        <div className='portfolio--section'>
            <p>PORTFOLIO</p>
            <p>Featured Startups</p>
            <div className='portfolio--section--div'>
                <div ref={porfolio1} className='slide'>
                    <div className='ft9ja--mockup1' ><Image src={mockup1} alt='ft9ja mockup' className='ft9ja--mockup1img' /></div>
                    <div className='ft9ja--mockup2'><Image src={mockup2} alt='ft9ja mockup details' className='ft9ja--mockup2img' /> </div>
                </div>
                <div ref={porfolio2} className='slide'>
                    <div className='ft9ja--mockup1' ><Image src={mockup1} alt='ft9ja mockup' className='ft9ja--mockup1img' /></div>
                    <div className='ft9ja--mockup2'><Image src={mockup2} alt='ft9ja mockup details' className='ft9ja--mockup2img' /> </div>
                </div>
                <div ref={porfolio3} className='slide'>
                    <div className='ft9ja--mockup1' ><Image src={mockup1} alt='ft9ja mockup' className='ft9ja--mockup1img' /></div>
                    <div className='ft9ja--mockup2'><Image src={mockup2} alt='ft9ja mockup details' className='ft9ja--mockup2img' /> </div>
                </div>
            </div>
        </div>
    )
}