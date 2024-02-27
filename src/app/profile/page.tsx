import "./profile.scss"
import heropageBg from "../../../assets/heropage--profile--bg.svg";
import Image from "next/image";
import StatsHomepage from '../style/components/statsHomepage/statsHomepage';
import FeatureHomepage from "../style/components/featureHomepage/featureHomepage";
import searchIcon from "../../../assets/search--icon.svg";
import Hamma from "../../../assets/Hamma.svg";
import Ft9ja from "../../../assets/logo--ft9ja.svg";
import Robovisor from "../../../assets/Robovisor.svg";
import wealthIcon from "../../../assets/mdi_finance.svg";
import webIcon from "../../../assets/streamline_web.svg";
import mobileIcon from "../../../assets/mynaui_mobile.svg";
import blockchainIcon from "../../../assets/icon-park-outline_blockchain.svg";
import arrow from "../../../assets/ri_arrow-up-line.svg"
import Prefooter from "../style/components/prefooterHomepage/prefooterHomepage";
import Footer from "../style/components/footer/footer";



export default function Profile() {


    const startups = [
        {
            id: 1,
            image: Ft9ja,
        },
        {
            id: 2,
            image: Robovisor,
        },
        {
            id: 3,
            image: Hamma,
        },
        {
            id: 4,
            image: Robovisor,
        },
        {
            id: 5,
            image: Hamma,
        },
        {
            id: 6,
            image: Ft9ja,
        },

    ]

    return (
        <main className="profile--container">
            <div className="hero--profile--container">
                <p>Unveiling Our Trail of Success and Disruption</p>
                <p>We are a seasoned group of entrepreneurs and executives
                    with a track record of initiating numerous businesses,
                    generating millions of dollars in enterprise value.
                </p>
                <div className="heropage--bg">
                    <Image src={heropageBg} className="heropage--image" alt="heropage--background" />
                </div>
            </div>
            <StatsHomepage />
            <FeatureHomepage/>
            <div className="industry--section">
                <div className="industry--section1">
                    <div>
                        <p>Industry</p>
                        <select id="industryDropdown">
                            <option value="option1" selected>All</option>
                            <option value="option2">sugar</option>
                            <option value="option3">plum</option>
                        </select>
                    </div>
                    <div>
                        <p>Technology</p>
                        <select id="technologyDropdown">
                            <option value="option1" selected>All</option>
                            <option value="option2">pumpkin</option>
                            <option value="option3">rosewater</option>
                        </select>
                    </div>
                    <div>
                        <p>Year</p>
                        <select id="yearDropdown">
                            <option value="option1" selected>All</option>
                            <option value="option2">westlife</option>
                            <option value="option3">backstreet boys</option>
                        </select>
                    </div>
                    <div className="industry--section1--input">
                        <input placeholder="search" type='text' className='searchInput' />
                        <Image src={searchIcon} className="searchIcon" alt="searchicon" />
                    </div>
                </div>
                <div className="industry--section2">
                    {
                        startups.map((startup) => (
                            <div key={startup.id} className="industry--section2--container">
                                <Image src={startup.image} alt="startup--icon" className="startup--icon" />
                                <p className="industry--section2--para1">Next-gen prop trading platform built for accessibility.</p>
                                <div className="industry--section2--iconDiv">
                                    <div>
                                        <Image src={wealthIcon} alt="wealth--icon" />
                                        <p>Wealthtech</p>
                                    </div>
                                    <div>
                                        <Image src={blockchainIcon} alt="blockchain--icon" />
                                        <p>Blockchain</p>
                                    </div>
                                    <div>
                                        <Image src={mobileIcon} alt="mobile--icon" />
                                        <p>App</p>
                                    </div>
                                    <div>
                                        <Image src={webIcon} alt="web--icon" />
                                        <p>Web</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="industry--section2--learnmore">
                                    <p>Learn more</p>
                                    <Image src={arrow} alt='arrow pointed right' className='arrrow--icon' />
                                </div>
                            </div>
                        ))
                    }
                    {/* <div className="industry--section2--container">
                        <Image src={Hamma} alt="startup--icon" className="startup--icon" />
                        <p className="industry--section2--para1">Next-gen prop trading platform built for accessibility.</p>
                        <div className="industry--section2--iconDiv">
                            <div>
                                <Image src={wealthIcon} alt="wealth--icon" />
                                <p>Wealthtech</p>
                            </div>
                            <div>
                                <Image src={blockchainIcon} alt="blockchain--icon" />
                                <p>Blockchain</p>
                            </div>
                            <div>
                                <Image src={mobileIcon} alt="mobile--icon" />
                                <p>App</p>
                            </div>
                            <div>
                                <Image src={webIcon} alt="web--icon" />
                                <p>Web</p>
                            </div>
                        </div>
                        <hr />
                        <div className="industry--section2--learnmore">
                            <p>Learn more</p>
                            <Image src={arrow} alt='arrow pointed right' className='arrrow--icon' />
                        </div>
                    </div> */}
                </div>
                <div className="industry--section2--finalpara">
                    <p>SEE MORE</p>
                </div>
            </div>
            <Prefooter />
            <Footer />
        </main>
    )
}