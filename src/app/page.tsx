import Image from 'next/image'
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
import mockup1 from '../../assets/Ft9ja--mockup.svg';
import mockup2 from '../../assets/ft9ja--mockup--details.svg';
import insta from '../../assets/insta--icon.svg';
import twitter from '../../assets/twitter--icon.svg';
import facebook from '../../assets/facebook--icon.svg';





export default function Home() {

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
          <h1>Next-Gen <span>Innovations</span> Forged Here</h1>
          <p>Step into the future with ATAfrica, where next-gen
            ideas meet boundless possibilities. Join us on the
            entrepreneurial journey of a lifetime, shaping tomorrow&apos;s
            success stories, one innovation at a time.
            Welcome to the next era of creativity and collaboration!</p>
          <div>
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
            <Image src={adobe} alt='adobe svg' className='adobe brand' />
            <Image src={salesforce} alt='saleforce svg' className='salesforce brand' />
            <Image src={airbnb} alt='airbnb svg' className='airbnb brand' />
            <Image src={google} alt='google' className='google brand' />
            <Image src={microsoft} alt='microsoft' className='microsoft brand' />
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

      <div className='portfolio--section'>
        <p>PORTFOLIO</p>
        <p>Featured Startups</p>
        <div>
          <div className='ft9ja--mockup1' ><Image src={mockup1} alt='ft9ja mockup' className='ft9ja--mockup1img' /></div>
          <div className='ft9ja--mockup2'><Image src={mockup2} alt='ft9ja mockup details' className='ft9ja--mockup2img' /> </div>
        </div>
      </div>

      <div className='stats--section'>
        <div>
          <p>$700m+</p>
          <hr />
          <p>Funding raised</p>
        </div>
        <div>
          <p>32</p>
          <hr />
          <p>Successful exits</p>
        </div>
        <div>
          <p>56</p>
          <hr />
          <p>Jobs created</p>
        </div>
      </div>

      <div className='prefooter'>
        <p>Partner with ATAfrica today and become a
          part of the next generation of innovations</p>
        <button>PARTNER WITH US</button>
      </div>

      <footer className='footer'>
        <div className='footer--div1'>
          <p>Get our newsletters</p>
          <p>Subscribe to get curated newsletters and insights</p>
          <input placeholder="Email address" type='text' className='email' />
          <div className='subscribe'>
            <p>Subscribe</p>
            <Image src={arrow} alt='arrow pointed right' className='arrrow--icon' />
          </div>
        </div>
        <hr/>
        <div className='footer--div2'>
          <p>who we are</p>
          <p>Portfolio</p>
          <p>Career</p>
          <p>Contact</p>
        </div>
        <hr/>
        <div className='footer--div3'>
          <p>&copy; Asokoro Technologies Limited, all rights reserved</p>
          <p>Office Address:30 Oladimeji Alo Street, Lekki Phase one, Lagos</p>
          <p>Company email: atafrica@yahoo.com</p>
          <p>Company number: 081055885569</p>
          <div className='footer--div4'>
            <p>Privacy Policy</p>
            <div>
            <Image src={insta} alt='instagram' className='insta' />
            <Image src={twitter} alt='twitter icon' className='twitter' />
            <Image src={facebook} alt='facebook icon' className='facebook' />
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
