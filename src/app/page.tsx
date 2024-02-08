import Image from 'next/image'
import './page.scss'
import arrow from '../../assets/ri_arrow-up-line.svg';
import adobe from '../../assets/adobe.svg';
import salesforce from '../../assets/salesforce.svg';
import airbnb from '../../assets/airbnb.svg';
import google from '../../assets/google.svg';
import microsoft from '../../assets/microsoft.svg';


export default function Home() {
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
          <div className='partneSection--text'>
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
          <div className='partneSection--text'>
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
    </main>
  )
}
