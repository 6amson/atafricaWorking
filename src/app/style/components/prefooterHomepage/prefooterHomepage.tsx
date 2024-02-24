'use client'

import './prefooterHomepage.scss';
import gsap from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';
import SplitType from 'split-type';
import { useEffect } from 'react';


export default function Prefooter() {

    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const word = new SplitType('#prefooter--text', { types: 'words' });
        console.log(word);
        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.prefooter',
                toggleActions: "restart none none reset",
                // markers: true,
                scrub: true,
                start: "90% center",
                end: "120% center",
            }
        })

        tl1.to("#prefooter--text", {
            duration: 1,
            y: 0,
            height: "fit-content",
            ease: "power4.inOut",
            opacity: 1,
            stagger: {
                amount: 1.5
            }
        }).to(".word", {
            duration: 1.5,
            y: 0,
            ease: "power4.inOut",
            skewY: -10,
            stagger: {
                amount: 0.5
            }
        }).to("button", {
            duration: 1.8,
            x: 0,
            opacity: 1,
            ease: "steeped.out",
            stagger: {
                amount: 0.5
            }
        })

    }, []);

    return (
        <div className='prefooter'>
            <p id='prefooter--text'>Partner with ATAfrica today and become a
                part of the next generation of innovations</p>
            <button>PARTNER WITH US</button>
        </div>
    )
}