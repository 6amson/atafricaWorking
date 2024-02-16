import Image from "next/image";
import "./careers.scss";
import arrow from '../../../assets/ri_arrow-up-line.svg';
import arrow2 from '../../../assets/ri_arrow-up-line2.svg';
import careerbg from '../../../assets/career--homepage--bg.png'
import careerbg2 from '../../../assets/career--homepage--bg2.png';
import searchIcon from "../../../assets/search--icon.svg";
import Footer from "../style/components/footer/footer";








export default function Careers() {

    const openRoles = [
        {
            id: 1,
            position: "Product Manager",
            company: "FT9JA",
            location: 'Lagos, Nigeria',
            type: "On-site",
            body: "Accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatisunde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam..."
        },
        {
            id: 2,
            position: "Fullstack Developer",
            company: "FT9JA",
            location: 'Lagos, Nigeria',
            type: "Remote",
            body: "Accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatisunde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam..."
        },
        {
            id: 3,
            position: "Product Manager",
            company: "ROBOADVISOR",
            location: 'PH, Nigeria',
            type: "Remote",
            body: "Accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatisunde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam..."
        },
        {
            id: 4,
            position: "Product Manager",
            company: "Hammot",
            location: 'Lagos, Nigeria',
            type: "Hybrid",
            body: "Accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatisunde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam..."
        },
        {
            id: 5,
            position: "Product Manager",
            company: "FT9JA",
            location: 'Lagos, Nigeria',
            type: "Remote",
            body: "Accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatisunde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam..."
        },
        {
            id: 6,
            position: "Techinal Lead",
            company: "FT9JA",
            location: 'Abuja, Nigeria',
            type: "On-site",
            body: "Accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatisunde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam..."
        },
        {
            id: 7,
            position: "Product Manager",
            company: "Hammot",
            location: 'Abuja, Nigeria',
            type: "Hybrid",
            body: "Accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatisunde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam..."
        },

    ]

    return (
        <main>
            <div className="main">
                <div className="homepage--text">
                    <p>Shape Tomorrow's Success with ATAfrica</p>
                    <p>Discover Opportunities That Propel Your Career Forward</p>
                    <div>
                        <p>EXPLORE OPEN ROLES </p>
                        <Image src={arrow} alt='arrow pointed right' className='arrrow--icon' />
                    </div>
                </div>
                <div className="homepage--background">
                    <Image className="homepage--background--img" src={careerbg} alt="careers homepage backgroound" />
                    <Image className="homepage--background--img2" src={careerbg2} alt="careers homepage backgroound--mobile" />
                </div>
            </div>

            <div className="open--position--header">
                <p className="open--position--header--para">Open Positions</p>
                <div className="open--position--header--div1">
                    <div className="open--position--header--div1--input">
                        <input placeholder="search with a keyword" type='text' className='searchInput' />
                        <Image src={searchIcon} className="searchIcon" alt="searchicon" />
                    </div>
                    <div className="open--position--header--div1--dropdown">
                        <p>Department</p>
                        <select id="DepartmentDropdown">
                            <option value="option1" selected>All</option>
                            <option value="option2">westlife</option>
                            <option value="option3">backstreet boys</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="open--positions">
                {
                    openRoles.map((openRole) => (
                        <div  key={openRole.id} className="open--positions--container">
                            <div className="open--positions--title">
                                <p>{openRole.position} -<span>{openRole.company}</span></p>
                                <Image src={arrow2} alt='arrow pointed right' className='arrrow--icon--careers' />
                            </div>
                            <div className="open--positions--location">
                                <p>{openRole.location}</p>
                                <p>{openRole.type}</p>
                            </div>
                            <div className="open--positions--body">{openRole.body}</div>
                            <div className='arrrow--icon--careers2--div' ><Image src={arrow2} alt='arrow pointed right' className='arrrow--icon--careers2' /></div>
                        </div>
                    ))
                }
                {/* <div className="open--positions--container">
                    <div className="open--positions--title">
                        <p>Product Manager -<span>FT9JA</span></p>
                        <Image src={arrow2} alt='arrow pointed right' className='arrrow--icon--careers' />
                    </div>
                    <div className="open--positions--location">
                        <p>Lagos, Nigeria</p>
                        <p>Remote</p>
                    </div>
                    <div className="open--positions--body">
                        Accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatis
                        unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam...
                    </div>
                    <div className='arrrow--icon--careers2--div' ><Image src={arrow2} alt='arrow pointed right' className='arrrow--icon--careers2' /></div>
                </div> */}
                <div className="open--positions--button">
                    <button>SEE MORE</button>
                </div>
            </div>
            <Footer />
        </main >
    )
}