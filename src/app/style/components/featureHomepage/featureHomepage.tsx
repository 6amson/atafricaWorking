import Image from 'next/image';
import mockup1 from '../../../../../assets/Ft9ja--mockup.svg';
import mockup2 from '../../../../../assets/ft9ja--mockup--details.svg';
import './featureHomepage.scss';

export default function FeatureHomepage() {
    return (
        <div className='portfolio--section'>
            <p>PORTFOLIO</p>
            <p>Featured Startups</p>
            <div>
                <div className='ft9ja--mockup1' ><Image src={mockup1} alt='ft9ja mockup' className='ft9ja--mockup1img' /></div>
                <div className='ft9ja--mockup2'><Image src={mockup2} alt='ft9ja mockup details' className='ft9ja--mockup2img' /> </div>
            </div>
        </div>
    )
}