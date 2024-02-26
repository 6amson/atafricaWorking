"use client"

import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import mockup1 from '../../../../../assets/Ft9ja--mockup.svg';
import mockup2 from '../../../../../assets/ft9ja--mockup--details.svg';
import './featureHomepage.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import feature1a from '../../../../../assets/Ft9ja--mockup.svg';
import feature1b from '../../../../../assets/ft9ja--mockup--details.svg';
import { useMediaQuery } from 'react-responsive';


interface Item {
    items: Array<{
        id: number;
        image1: any;
        image2: any;
    }>
}


export default function FeatureHomepage(items: Item) {
    const [slideWidth, setSlideWidth] = useState(0);
    const isMediumScreen = useMediaQuery({ query: '(max-width: 665px)' });


    const sliderSettings = {
        centerPadding: '30px',
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };




    return (
        <div className='portfolio--section'>
            <p>PORTFOLIO</p>
            <p>Featured Startups</p>
            {isMediumScreen ?
                <div>
                    {
                        items.items.map((item) =>
                            <div key={item.id} className='slide'>
                                <div className='ft9ja--mockup1' ><Image src={item.image1} alt='ft9ja mockup' className='ft9ja--mockup1img' /></div>
                                <div className='ft9ja--mockup2'><Image src={item.image2} alt='ft9ja mockup details' className='ft9ja--mockup2img' /> </div>
                            </div>
                        )
                    }
                </div>
                :
                <Slider {...sliderSettings} className='portfolio--section--div slick_carousel'>
                    {
                        items.items.map((item) =>
                            <div key={item.id} className='slide'>
                                <div className='ft9ja--mockup1' ><Image src={item.image1} alt='ft9ja mockup' className='ft9ja--mockup1img' /></div>
                                <div className='ft9ja--mockup2'><Image src={item.image2} alt='ft9ja mockup details' className='ft9ja--mockup2img' /> </div>
                            </div>
                        )
                    }
                </Slider >
            }
        </div >
    )
}
