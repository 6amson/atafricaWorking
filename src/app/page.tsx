'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';
import './page.scss'
import arrow from '../../assets/ri_arrow-up-line.svg';
import adobe from '../../assets/adobe.svg';
import salesforce from '../../assets/salesforce.svg';
import airbnb from '../../assets/airbnb.svg';
import google from '../../assets/google.svg';
import microsoft from '../../assets/microsoft.svg';
import serviceLogo1 from '../../assets/services_logo1.svg';
import serviceLogo2 from '../../assets/services_logo2.svg';
import serviceLogo3 from '../../assets/services_logo3.svg';
import FeatureHomepage from './style/components/featureHomepage/featureHomepage';
import StatsHomepage from './style/components/statsHomepage/statsHomepage';
import Prefooter from './style/components/prefooterHomepage/prefooterHomepage';
import Footer from './style/components/footer/footer';
import background from "../../assets/homepage_background2.svg";
import gsap from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';





export default function Home() {

  // const [brands, setBrands] = useState([adobe, salesforce, airbnb, google, microsoft]);
  const homepageWords: Array<string> = ['Ideas', 'Breakthroughs', 'Innovations', 'Ventures'];
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    let tlTextMaster = gsap.timeline({ repeat: -1 });

    homepageWords.forEach((word) => {
      let tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });

      tlText.to('#animated--type--text', { duration: 2, text: word });
      tlTextMaster.add(tlText);
    });

    const tl1 = gsap.timeline();

    tl1.to(".Herotext1", {
      duration: 1,
      y: 0,
      height: "fit-content",
      ease: "power4.inOut",
      opacity: 1,
      skewY: 0,
      stagger: {
        amount: 0.3
      }
    })
      .to(".Herotext2", {
        duration: 1,
        // delay: 1,
        // x: 0,
        // width: "100%",
        ease: "power1.out",
        // skewY: 0,
        opacity: 1,
        stagger: {
          amount: 0.3
        }
      })
      .to(".Herotext3", {
        duration: 1,
        delay: 1,
        y: 0,
        height: "fit-content",
        ease: "power1.out",
        skewY: 0,
        stagger: {
          amount: 0.3
        }
      })
      .to(".homepage--background", {
        duration: 1,
        x: 0,
        width: "100vw",
        ease: "power1.out",
        stagger: {
          amount: 0.3
        }
      }, "-=2")
      .to(".brand--section1", {
        duration: 0,
        display: "block",
      })


    gsap.to('.brand--section1', {
      opacity: 1,
      duration: 1,
      ease: 'easeIn',
      // x: 200,
      // scale: 1.5,
      // rotation: 360,
      scrollTrigger: {
        trigger: '.brand--section1',
        start: "top center",
        // end: "bottom center",
        // scrub: true,
        // markers: true,
      },
    })


  }, [])

  const services = [
    {
      id: 1,
      image: serviceLogo1,
      title: "Ideation & Validation",
      body: "Shape your startup ideas with expert guidance and check their potential in the market."
    },
    {
      id: 2,
      image: serviceLogo2,
      title: "Business Support",
      body: "Get advice, workspace, funding, and partnerships for your business growth."
    },
    {
      id: 3,
      image: serviceLogo3,
      title: "Brand & Growth Strategy",
      body: "Build a strong brand, run effective campaigns, stay compliant, and plan for long-term success."
    }
  ]

  return (
    <main className="container">
      <div className="main">
        <div className='main--subcontainer'>
          <Image src={background} alt='background image' className='homepage--background' />
          <h1 className='Herotext1'>Next-Gen <span id='animated--type--text'></span> Forged Here</h1>
          <p className='Herotext2'>Step into the future with ATAfrica, where next-gen
            ideas meet boundless possibilities. Join us on the
            entrepreneurial journey of a lifetime, shaping tomorrow&apos;s
            success stories, one innovation at a time.
            Welcome to the next era of creativity and collaboration!</p>
          <div className='Herotext3'>
            <p>PARTNER WITH US</p>
            <Image src={arrow} alt='arrow pointed right' className='arrrow--icon' />
          </div>
        </div>
      </div>

      <div className='brand--section'>
        <div className='brand--section1'>
          <p>WHO WE ARE</p>
          <p>A Hub for Entrepreneurial Excellence</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.</p>
          <div>
            <p>ABOUT US</p>
            <Image src={arrow} alt='arrow pointed right' className='arrrow--icon' />
          </div>
        </div>
        <div className='brand--section2'>
          <p>OUR PARTNERS</p>
          <div>
            <div className='primary--brandsection'>
              <Image src={adobe} alt='adobe svg' className='adobe brand' />
              <Image src={salesforce} alt='saleforce svg' className='salesforce brand' />
              <Image src={airbnb} alt='airbnb svg' className='airbnb brand' />
              <Image src={google} alt='google' className='google brand' />
              <Image src={microsoft} alt='microsoft' className='microsoft brand' />
            </div>

            {/* <div className='secondary--brandsection'>
              <Image src={adobe} alt='adobe svg' className='adobe brand' />
              <Image src={salesforce} alt='saleforce svg' className='salesforce brand' />
              <Image src={airbnb} alt='airbnb svg' className='airbnb brand' />
              <Image src={google} alt='google' className='google brand' />
              <Image src={microsoft} alt='microsoft' className='microsoft brand' />
            </div> */}
          </div>
        </div>
      </div>

      <div className='services--section'>
        <div className='services--section1'>
          <p>WHAT MAKES US UNIQUE</p>
          <p>Tailored services that propel success</p>
        </div>

        <div className='services--section2'>
          {
            services.map((service) => (
              <div key={service.id}>
                <Image src={service.image} alt={service.title} className='services--section2--img' />
                <p className='services--section2--para1'>{service.title}</p>
                <hr />
                <p className='services--section2--para2'>
                  {service.body}
                </p>
                <div>
                  <p>LEARN MORE</p>
                  <Image src={arrow} alt='arrow pointed right' className='arrrow--icon' />
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <FeatureHomepage />

      <StatsHomepage />

      <Prefooter />

      <Footer />
    </main>
  )
}
