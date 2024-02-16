import Image from "next/image";
import "./contact.scss";


export default function Contact() {

    const contactInfo = [
        {
            // image:,
            title: "Email the team",
            prompt: "Reach out directly to the team",
            contactdata: "atafrica@gmail.com"
        },
        {
            // image:,
            title: "Visit Us",
            prompt: "Visit our office HQ",
            contactdata: "30 Oladimeji Alo Street, Lekki Phase one, Lagos"
        },
        {
            // image:,
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
                    <div>
                        <div>
                            {/* <Image/> */}
                            <p>Email the team</p>
                        </div>
                        <p>Reach out directly to the team</p>
                        <p>atafrica@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="careers--input--container">
                <p>Let&apos;s disvuss solutions</p>
                <form>
                    
                </form>

            </div>
        </main>
    )
}