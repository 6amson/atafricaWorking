"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import "./contact.scss";
import locationIcon from "../../../assets/locationIcon.svg";
import emailIcon from "../../../assets/emailIcon.svg";
import phoneIcon from "../../../assets/phoneIcon.svg";
import Footer from "../style/components/footer/footer";
import checkIcon from "../../../assets/greenCheckIcon.svg";
import closeModalIcon from "../../../assets/closeModalIcon.svg";
import React from 'react';
import Modal from 'react-modal';
import ReactModal from "react-modal";
import { useMediaQuery } from 'react-responsive';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minWidth: "800px",
        // background: '#cdcdcd',
    },
};

const customStylesM = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minWidth: "350px",
        // background: '#cdcdcd',
    },
};

export default function Contact() {
    const isMediumScreen = useMediaQuery({ query: '(max-width: 856px)' });

    const [modalIsOpen, setIsOpen] = useState(false);


    useEffect(() => {
        const root = document.getElementById('root');
        ReactModal.setAppElement(root ? root : "root");
    }, []);

    function openModal() {
        setIsOpen(true);
    }

    const handleContactSubmit = (e: any) => {
        e.preventDefault();
        openModal();
    }

    function afterOpenModal() {
        const imgModal = document.getElementById('imgModal');
        const imgModal2 = document.getElementById('imgModal2');
        const imgModaldiv2 = document.getElementById('imgModaldiv2');
        const imgModalText1 = document.getElementById('imgModalText1');
        const imgModalText2 = document.getElementById('imgModalText2');

        if (imgModal && imgModal2 && imgModaldiv2 && imgModalText1 && imgModalText2) {
            imgModal.style.marginBottom = '8px';
            imgModal.style.width = '100%';
            imgModal.style.display = 'flex';
            imgModal.style.justifyContent = 'end';
            imgModal.style.opacity = '80%';

            imgModal2.style.marginBottom = '32px';
            imgModal2.style.display = 'flex';
            imgModal2.style.opacity = '80%';

            imgModaldiv2.style.display = 'flex';
            imgModaldiv2.style.width = '100%';
            imgModaldiv2.style.flexDirection = 'column';
            imgModaldiv2.style.justifyContent = 'center';
            imgModaldiv2.style.alignItems = 'center';

            imgModalText2.classList.add(isMediumScreen ? 'defineFontType2M' : "defineFontType2");
            imgModalText1.classList.add(isMediumScreen ? 'defineFontType1M' : "defineFontType1");


        }
    }

    function closeModal() {
        const imgModalText1 = document.getElementById('imgModalText1');
        const imgModalText2 = document.getElementById('imgModalText2');


        if (imgModalText1 && imgModalText2) {

            imgModalText2.classList.remove(isMediumScreen ? 'defineFontType2' : "defineFontType2M");
            imgModalText1.classList.remove(isMediumScreen ? 'defineFontType1' : "defineFontType1M");
            
        }
        setIsOpen(false);
    }


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
        <div id="root">
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={isMediumScreen ? customStylesM : customStyles}
                contentLabel="Submission"
            >
                <div id="imgModal"><Image onClick={closeModal} src={closeModalIcon} alt="close modal icon" /></div>
                <div id="imgModaldiv2">
                    <p id="imgModalText1">Thanks for reaching out!</p>
                    <div id="imgModal2"><Image src={checkIcon} alt="check icon" /></div>
                    <p id="imgModalText2">Message sent</p>
                </div>
            </Modal>
            <div id="main">
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

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Enter your message here" rows={4} cols={50}></textarea>

                    <div id="submit--div">
                        <input onClick={handleContactSubmit} type="submit" value="SEND MESSSAGE" id="submitButton"></input>
                    </div>
                </form>

            </div>

            <Footer />
        </div>
    )
}