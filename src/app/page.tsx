import Image from 'next/image'
import './page.scss'
import arrow from '../../assets/ri_arrow-up-line.svg';

export default function Home() {
  return (
    <main className="container">
      <div className="main">
        <div className='main--subcontainer'>
          <h1>Next-Gen <span>Innovations</span> Forged Here</h1>
          <p>Step into the future with ATAfrica – where next-gen ideas meet boundless possibilities. Join us on the entrepreneurial journey of a lifetime, shaping tomorrow's success stories, one innovation at a time. Welcome to the next era of creativity and collaboration!</p>
          <div>
            <p>PARTNER WITH US</p>
            <Image src={arrow} alt='arrow pointed right' />
          </div>
        </div>
      </div>

      <div className='brand--section'>
        <div className='brand--section1'>

        </div>
        <div>

        </div>
      </div>
    </main>
  )
}
