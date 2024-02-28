'use client'

import Image from "next/image";
import './about.scss';
import { useEffect } from "react";
// import aboutCulture1 from "../../../assets/about--culture1.png";
// import aboutCulture2 from "../../../assets/about--culture2.png";
// import aboutCulture3 from "../../../assets/about--culture3.png";
import aboutCulture4 from "../../../assets/aboutculture4.png";
import aboutCulture5 from "../../../assets/aboutculture5.png";
import aboutCulture6 from "../../../assets/aboutculture6.png";
import linkedinIcon from "../../../assets/linkedin--icon.svg";
import person1 from "../../../assets/person1.jpg";
import person2 from "../../../assets/person2.jpg";
import person3 from "../../../assets/person3.jpg";
import person4 from "../../../assets/person4.jpg";
import person5 from "../../../assets/person5.jpg";
import person6 from "../../../assets/person6.jpg";
import Prefooter from "../style/components/prefooterHomepage/prefooterHomepage";
import Footer from "../style/components/footer/footer";
import { useMediaQuery } from 'react-responsive';



export default function About() {
    const isLargeScreen = useMediaQuery({ query: '(min-width: 1452px)' });


    useEffect(() => {
        let cultureMediaDiv = document.querySelectorAll(".culture--media--div");
        let culturePhotoDiv = document.querySelectorAll(".culture--photo--div");
        let cultureMainDiv = document.querySelector(".about--culturepage--media");


        if (isLargeScreen) {
            cultureMediaDiv.forEach((culturemediadiv) => {
                culturemediadiv.addEventListener("mouseenter", () => {
                    culturemediadiv.childNodes[0].style.transition = "height .5s";
                    culturemediadiv.style.transition = "display .5s"

                    console.log(isLargeScreen)

                    setTimeout(() => {
                        culturemediadiv.childNodes[0].style.height = '400px';
                        cultureMainDiv.style.flexWrap = "nowrap";
                    }, 100);

                    //for elements in the nodes without the mouse event 
                    cultureMediaDiv.forEach((element) => {
                        if (element !== culturemediadiv) {
                            element.childNodes[0].style.width = '240px';
                            element.childNodes[0].style.transition = 'width .5s';

                            setTimeout(() => {
                                element.childNodes[0].style.transition = 'width .5s';
                            }, 100);
                        }
                    });

                });

                culturemediadiv.addEventListener("mouseleave", () => {

                    culturemediadiv.childNodes[0].style.transition = "height .5s";
                    culturemediadiv.style.transition = "display .5s";

                    setTimeout(() => {
                        culturemediadiv.childNodes[0].style.height = '241px';
                        cultureMainDiv.style.flexWrap = "wrap";
                    }, 100);

                    //for elements in the nodes without the mouse event 
                    cultureMediaDiv.forEach((element) => {
                        if (element !== culturemediadiv) {
                            element.style.transition = 'width .5s';

                            setTimeout(() => {
                                element.childNodes[0].style.width = '400px';
                            }, 100);
                        }
                    });
                });

            })
        }
    }, [isLargeScreen])




    const Culture = [
        {
            id: 1,
            image: aboutCulture4,
            title: "Innovation Hub",
            body: "Where creativity drives every data."
        },
        {
            id: 2,
            image: aboutCulture5,
            title: "Agile Mindset",
            body: "Adapting swiftly, succeeding together."
        },
        {
            id: 3,
            image: aboutCulture6,
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
                            <div className="culture--media--div" key={culture.id}>
                                <div className="culture--photo--div"><Image src={culture.image} style={{ objectFit: "cover", objectPosition: "center 0%" }} className="culture--photo" alt="about--culture" /></div>
                                <div>
                                    <p>{culture.title}</p>
                                    <p>{culture.body}</p>
                                </div>
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
                                <Image src={team.image} className="team--photos" alt="team photos" width='240' height='240' style={{ borderRadius: '50%', objectFit: "cover", objectPosition: "center 0%" }} />
                                <p>{team.name}</p>
                                <p>Founder & CEO, ATAfrica</p>
                                <Image src={linkedinIcon} alt="linkedin--icon" />
                            </div>
                        ))
                    }
                </div>
            </div>

            <Prefooter />
            <Footer />
        </main>
    )
}