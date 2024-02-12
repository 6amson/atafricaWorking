import Image from 'next/image';
import insta from '../../../../../assets/insta--icon.svg';
import twitter from '../../../../../assets/twitter--icon.svg';
import facebook from '../../../../../assets/facebook--icon.svg';
import arrow from '../../../../../assets/ri_arrow-up-line.svg';
import './footer.scss';


export default function Footer() {
    return (
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
            <hr />
            <div className='footer--div2'>
                <p>who we are</p>
                <p>Portfolio</p>
                <p>Career</p>
                <p>Contact</p>
            </div>
            <hr />
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
    )
}