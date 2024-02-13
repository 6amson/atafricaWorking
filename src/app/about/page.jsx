import Image from "next/image";
import './about.scss';
import aboutCulture1 from "../../../assets/about--culture1.png";
import aboutCulture2 from "../../../assets/about--culture2.png";
import aboutCulture3 from "../../../assets/about--culture3.png";
import linkedinIcon from "../../../assets/linkedin--icon.svg";
import person1 from "../../../assets/person1.jpg";
import person2 from "../../../assets/person2.jpg";
import person3 from "../../../assets/person3.jpg";
import person4 from "../../../assets/person4.jpg";
import person5 from "../../../assets/person5.jpg";
import person6 from "../../../assets/person6.jpg";
import Prefooter from "../style/components/prefooterHomepage/prefooterHomepage";
import Footer from "../style/components/footer/footer";



export default function About() {


    const Culture = [
        {
            id: 1,
            image: aboutCulture1,
            title: "Innovation Hub",
            body: "Where creativity drives every data."
        },
        {
            id: 2,
            image: aboutCulture3,
            title: "Agile Mindset",
            body: "Adapting swiftly, succeeding together."
        },
        {
            id: 3,
            image: aboutCulture2,
            title: "Passion for Excellence",
            body: "Striving for the extraordinary, everyday."
        }
    ]

    const Teams = [
        {
            id: 1,
            image: person1,
            name: "Helen Bukola",
        },
        {
            id: 2,
            image: person2,
            name: "Salami Korede",
        },
        {
            id: 3,
            image: person3,
            name: "Oluwaloseyi .V.",
        },
        {
            id: 4,
            image: person4,
            name: "Damini Ogulu",
        },
        {
            id: 5,
            image: person5,
            name: "Saheed Balogun",
        },
        {
            id: 6,
            image: person6,
            name: "David Adeleke",
        },
        {
            id: 7,
            image: person2,
            name: "Daniel .K.",
        },
        {
            id: 8,
            image: person1,
            name: "John Doe",
        },
    ]

    return (
        <main>
            <div className="about--heropage">
                <p>OUR STORY</p>
                <p>A Hub for Enterpreneurial Excellence</p>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam.
                </p>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
            </div>
            <div className="about--culturepage">
                <p className="about--culturepage--para1">Our Culture</p>
                <p className="about--culturepage--para2">The ATAfrica&apos;n Culture</p>
                <div className="about--culturepage--media">
                    {
                        Culture.map((culture) => (
                            <div key={culture.id}>
                                <Image src={culture.image} className="culture--photo" alt="about--culture" />
                                <p>{culture.title}</p>
                                <p>{culture.body}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="about--teampage">
                <p className="about--teampage--para1">The team</p>
                <p className="about--teampage--para2">Meet the Leadership Team</p>
                <div className="about--teampage--display">
                    {
                        Teams.map((team) => (
                            <div key={team.id}>
                                <Image src={team.image} width='240' height='240' style={{ borderRadius: '50%', objectFit: "cover", objectPosition: "center 0%" }} />
                                <p>{team.name}</p>
                                <p>Founder & CEO, ATAfrica</p>
                                <Image src={linkedinIcon} alt="linkedin--icon" />
                            </div>
                        ))
                    }
                </div>
            </div>

            <Prefooter/>
            <Footer/>
        </main>
    )
}