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
import Footer from './style/components/footer/footer';
import background from "../../assets/homepage_background2.svg";
import gsap from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';
import SplitType from 'split-type';








export default function Home() {

  // const [brands, setBrands] = useState([adobe, salesforce, airbnb, google, microsoft]);
  const homepageWords: Array<string> = ['Ideas', 'Breakthroughs', 'Innovations', 'Ventures'];
  const isMediumScreen = useMediaQuery({ query: '(max-width: 856px)' });
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const char = new SplitType('.Herotext1');
    let tlTextMaster = gsap.timeline({ repeat: -1 });
    let revelation1 = document.querySelectorAll(".revelation--para1");
    let revelation2 = document.querySelectorAll(".revelation2--para");


    homepageWords.forEach((word) => {
      let tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });

      tlText.to('#animated--type--text', { duration: 2, text: word, });
      tlTextMaster.add(tlText);
    });

    revelation1.forEach((container) => {
      let tlText1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.brand--section1',
          toggleActions: "restart none none reset",
          // markers: true,
          scrub: true,
          start: "-30% center",
          end: "25% center",
        }
      });

      tlText1.set(container, { autoAlpha: 1 });
      tlText1.to(".brand--section1", {
        duration: 1,
        background: 'white',
        stagger: {
          amount: 0.05
        }
      })
        .to(container, {
          duration: 1.8,
          delay: .05,
          y: 0,
          opacity: 1,
          stagger: {
            amount: 0.05
          },

          ease: "stepped.out"
        })
    });

    revelation2.forEach((container) => {
      let tlText1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.services--section2',
          toggleActions: "restart none none reset",
          // markers: true,
          scrub: true,
          start: "-40% center",
          end: "20% center",
        }
      });

      tlText1.set(container, { autoAlpha: 1 });
      tlText1.to(container, {
        duration: 1.8,
        // delay: .05,
        y: 0,
        opacity: 1,
        stagger: {
          amount: 0.05
        },
        ease: "ease.out"
      })
    });

    if (!isMediumScreen) {

      let tlText1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.services--section2',
          toggleActions: "restart none none reset",
          // markers: true,
          scrub: true,
          start: "-40% center",
          end: "20% center",
        }
      });

      tlText1.to('.services--section2--img', {
        duration: 1.5,
        delay: .05,
        x: 0,
        rotation: 360,
        opacity: 1,
        stagger: {
          amount: 0.05
        },
        ease: "ease.out"
      })
    }


    const tl1 = gsap.timeline();
    tl1.to(".Herotext1", {
      duration: 1,
      y: 0,
      height: "fit-content",
      ease: "power4.inOut",
      opacity: 1,
      stagger: {
        amount: 0.3
      }
    }).to(".char", {
      duration: .7,
      y: 0,
      ease: "power4.inOut",
      stagger: {
        amount: 0.3
      }
    })
      .to(".Herotext2", {
        duration: 1,
        ease: "power1.out",
        opacity: 1,
        stagger: {
          amount: 0.3
        }
      })
      .to(".Herotext3", {
        duration: 1,
        delay: 1,
        opacity: 1,
        ease: "power1.out",
        skewY: 0,
        stagger: {
          amount: 0.3
        }
      })
      .to(".homepage--background", {
        duration: 1,
        opacity: 1,
        ease: "power3.out",
        stagger: {
          amount: 0.5
        }
      }, "-=2")
      .to(".brand--section1", {
        duration: 0,
        // display: "block",
      });

    const word = new SplitType('#prefooter--text', { types: 'words' });
    let prefooterTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#prefooter--text',
        toggleActions: "restart none none reset",
        // markers: true,
        scrub: true,
        start: "-70% center",
        end: "bottom center",
      }
    })

    prefooterTl.to("#prefooter--text", {
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
      ease: "stepped.out",
      stagger: {
        amount: 0.5
      }
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
          <div className='revelation1'><p className='revelation--para1 revelation--para0'>WHO WE ARE</p></div>
          <div className='revelation1'><p className='revelation--para1 revelation--para2'>A Hub for Entrepreneurial Excellence</p></div>
          <div className='revelation1'><p className='revelation--para1 revelation--para3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.</p>
          </div>
          <div className='brand--section1--div revelation1'>
            <p className='revelation--para1'>ABOUT US</p>
            <Image src={arrow} alt='arrow pointed right' className='arrrow--icon revelation--para1' />
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
          </div>
        </div>
      </div>

      <div className='services--section'>
        <div className='services--section1'>
          <div className='revelation2'><p className='revelation2--para revelation2--para1'>WHAT MAKES US UNIQUE</p></div>
          <div className='revelation2'><p className='revelation2--para revelation2--para2'>Tailored services that propel success</p></div>
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

      <div className='prefooter'>
        <p id='prefooter--text'>Partner with ATAfrica today and become a
          part of the next generation of innovations</p>
        <button>PARTNER WITH US</button>
      </div>

      <Footer />
    </main >
  )
}
