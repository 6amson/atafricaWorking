"use client"

import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './featureHomepage.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import feature1a from '../../../../../assets/Ft9ja--mockup.svg';
import feature1b from '../../../../../assets/ft9ja--mockup--details.svg';
import feature2b from '../../../../../assets/robo--mockup--details.svg';
import feature2a from '../../../../../assets/robo--mockup.svg';
import { useMediaQuery } from 'react-responsive';


export default function FeatureHomepage () {
    // const [slideWidth, setSlideWidth] = useState(0);
    const isMediumScreen = useMediaQuery({ query: '(max-width: 665px)' });

    const featureStartup = [
        {
          id: 1,
          image1: feature1a,
          image2: feature1b,
        },
        {
          id: 2,
          image1: feature2a,
          image2: feature2b,
        },
        {
          id: 3,
          image1: feature1a,
          image2: feature1b,
        },
      ];

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
                        featureStartup.map((item) =>
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
                        featureStartup.map((item) =>
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
