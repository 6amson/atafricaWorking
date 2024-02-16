import Image from "next/image";
import "./contact.scss";
import locationIcon from "../../../assets/locationIcon.svg";
import emailIcon from "../../../assets/emailIcon.svg";
import phoneIcon from "../../../assets/phoneIcon.svg";
import Footer from "../style/components/footer/footer";




export default function Contact() {

    const contactInfo = [
        {
            id: 1,
            image: emailIcon,
            title: "Email the team",
            prompt: "Reach out directly to the team",
            contactdata: "atafrica@gmail.com"
        },
        {
            id: 2,
            image: locationIcon,
            title: "Visit Us",
            prompt: "Visit our office HQ",
            contactdata: "30 Oladimeji Alo Street, Lekki Phase one, Lagos"
        },
        {
            id: 3,
            image: phoneIcon,
            title: "Phone",
            prompt: "Mon-Fri: 8am - 5pm",
            contactdata: "+(234) 810- 234-6789"
        },
    ]

    return (
        <main>
            <div className="main">
                <div className="main--sub1">
                    <p>Get in touch!</p>
                    <p>We&apos;d love to hear from you. Our team will reach out ASAP!</p>
                </div>
                <div className="main--sub2">
                    {
                        contactInfo.map((contact) => (
                            <div className="main--sub2--div" key={contact.id}>
                                <div>
                                    <Image src={contact.image} alt={contact.image} />
                                    <p>{contact.title}</p>
                                </div>
                                <p className="main--sub2--para1">{contact.prompt}</p>
                                <p className="main--sub2--para2">{contact.contactdata}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="careers--input--container">
                <p>Let&apos;s discuss solutions</p>
                <form>
                    <div className="careers--input--container--div1 careers--input--container--div">

                        <div>
                            <label htmlFor="firstname">First name:</label>
                            <input type="text" id="firstname" name="firstname" required />
                        </div>

                        <div>
                            <label htmlFor="lastname">Last name:</label>
                            <input type="text" id="lastnamename" name="lastname" required />
                        </div>
                    </div>

                    <div className="careers--input--container--div2 careers--input--container--div">
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        <div>
                            <label htmlFor="phonenumber">Phone Number:</label>
                            <input type="text" id="phonenumber" name="phonenumber" required />
                        </div>
                    </div>

                    <label htmlFor="message">Name:</label>
                    <textarea id="message" name="message" placeholder="Enter your message here" rows={4} cols={50}></textarea>

                    <div id="submit--div">
                        <input type="submit" value="SEND MESSSAGE" id="submitButton"></input>
                    </div>
                </form>

            </div>

            <Footer/>
        </main >
    )
}