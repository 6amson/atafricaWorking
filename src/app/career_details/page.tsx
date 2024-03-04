"use client"

import Footer from "../style/components/footer/footer"
import { useState, useEffect, useRef } from "react";
import "./career_details.scss"
import fileupload from "../../../assets/fileuploadIcon.svg";
import googledriveupload from "../../../assets/googledriveuploadIcon.svg";
import manualupload from "../../../assets/manualuploadIcon.svg";
import checkIcon from "../../../assets/greenCheckIcon.svg";
import closeModalIcon from "../../../assets/closeModalIcon.svg";
import filenameIcon from "../../../assets/filenameIcon.svg";
import Image from "next/image";
import UploadOptions from "./uploadOptions";
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ReactModal from "react-modal";
import { useMediaQuery } from 'react-responsive';

const closeIconStyles = {
    cursor: 'pointer',
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minWidth: "800px",
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
    },
};

export default function CareersDetails() {

    const isMediumScreen = useMediaQuery({ query: '(max-width: 856px)' });
    const [modalIsOpen, setIsOpen] = useState(false);
    const [fileName, setFileName] = useState('');
    const [fileName2, setFileName2] = useState('');
    const [inputState, setInputState] = useState(false);
    const [inputState2, setInputState2] = useState(false);
    const [inputLoaderState, setInputLoaderState] = useState(false);
    const [inputLoaderState2, setInputLoaderState2] = useState(false);
    const [inputTextareaState, setTextareaState] = useState(false);
    const [resumeLocal, setResumeLocal] = useState({});
    const [coverLetterLocal, setCoverLetterLocal] = useState({});


    const fileLoader2 = document.getElementById(".loader--div2");


    useEffect(() => {
        const root = document.getElementById('root');
        ReactModal.setAppElement(root ? root : "root");

    }, []);

    function openModal(e: any) {
        e.preventDefault();
        setIsOpen(true);
    }

    function afterOpenModal() {
        const imgModal = document.getElementById('imgModal');
        const imgModal2 = document.getElementById('imgModal2');
        const imgModaldiv2 = document.getElementById('imgModaldiv2');

        if (imgModal && imgModal2 && imgModaldiv2) {
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
            imgModaldiv2.classList.add('defineFontType2');


        }
    }

    function closeModal() {
        setIsOpen(false);
    }

    const placeholderfxn = () => {
        return
    }

    const handleLocalFile = (event: any) => {
        const file = event.target.files[0];
        setInputLoaderState(true);
        setInputState(true);
       
    
        setTimeout(() => {
            setInputLoaderState(false);
            if (file) {
                const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'text/rtf'];

                if (allowedTypes.includes(file.type)) {
                    setResumeLocal(file);
                    setFileName(file.name);
                } else {
                    alert('Please select a PDF, DOC, DOCX, TXT, or RTF file.');
                    event.target.value = null;
                    setResumeLocal({});
                }
            }
        }, 2000);

        // alert('local file upload')
    }

    const handleLocalFile2 = (event: any) => {
        const file = event.target.files[0];
        setInputLoaderState2(true);
        setInputState2(true);


        setTimeout(() => {
            setInputLoaderState2(false);
            if (file) {
                const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'text/rtf'];

                if (allowedTypes.includes(file.type)) {
                    setCoverLetterLocal(file);
                    setFileName2(file.name);
                } else {
                    alert('Please select a PDF, DOC, DOCX, TXT, or RTF file.');
                    event.target.value = null;
                    setCoverLetterLocal({});
                }
            }
        }, 2000);

        // alert('local file upload')
    }

    const handleGoogleDrive = () => {
        alert('google drive upload')
    }

    const handleManualEntry = () => {
        // alert('manual upload')
        // setInputLoaderState2(false);
        setTextareaState(true)
        setInputState2(true);
    }

    const closeFileUpload = () => {
        setInputState(false)
        setInputLoaderState(false)
    }

    const closeFileUpload2 = () => {
        setInputState2(false)
        setInputLoaderState2(false)
        setTextareaState(false)
    }



    const resumeUploadOptions = [
        {
            id: 1,
            label: 'Attach File',
            icon: fileupload,
            class: "localfileupload",
            handleClick: placeholderfxn,
        },
        {
            id: 2,
            label: 'Google Drive',
            icon: googledriveupload,
            class: "googledriveupload",
            handleClick: handleGoogleDrive,
        },
        {
            id: 3,
            label: 'Enter Manually',
            icon: manualupload,
            class: "manualfileupload",
            handleClick: handleManualEntry,
        },
    ];

    return (
        <main id="root">
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={isMediumScreen ? customStylesM : customStyles}
                contentLabel="Example Modal"
            >
                <div id="imgModal"><Image style={closeIconStyles} onClick={closeModal} src={closeModalIcon} alt="close modal icon" /></div>
                <div id="imgModaldiv2">
                    <div id="imgModal2"><Image src={checkIcon} alt="check icon" /></div>
                    <p>Application submitted</p>
                </div>
            </Modal>
            <div className="container">
                <p className="job--title">Product Manager - FT9JA</p>

                <div className="job--container1">
                    <p className="job--details">
                        We are seeking an experienced Product Manager accusantium doloremque
                        laudantium, totam rem aperiam.Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam...
                    </p>
                    <div className="job--desc1">
                        <p>What we are looking for:</p>
                        <p>
                            Accusantium doloremque laudantium, totam rem aperiam.
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam rem aperiam
                        </p>
                        <ul>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>

                    </div>
                    <div className="job--desc2">
                        <p>Experience needed:</p>
                        <p>
                            Accusantium doloremque laudantium, totam rem aperiam.
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam rem aperiam
                        </p>
                        <ul>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>

                    </div>
                    <div className="job--desc3">
                        <p>Benefits:</p>
                        <p>
                            Accusantium doloremque laudantium, totam rem aperiam.
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam rem aperiam
                        </p>
                        <ul>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>

                    </div>

                </div>

                <div className="job--container2">
                    <div>
                        <p>Job title</p>
                        <p>Product Manager - FT9JA</p>
                    </div>
                    <div>
                        <p>Category</p>
                        <p>Product</p>
                    </div>
                    <div>
                        <p>Location</p>
                        <p>Lagos, Nigeria</p>
                    </div>
                    <div>
                        <p>Date posted</p>
                        <p>22nd January, 2024</p>
                    </div>
                    <button>Apply Now</button>
                </div>

                <div className="application--container">
                    <p className="application--container--text">
                        Apply for this job
                    </p>
                    <form>
                        <div className="application--input--container--div1 application--input--container--div">

                            <div>
                                <label htmlFor="firstname">First name<span>*</span>:</label>
                                <input type="text" id="firstname" name="firstname" required />
                            </div>

                            <div>
                                <label htmlFor="lastname">Last name<span>*</span>:</label>
                                <input type="text" id="lastnamename" name="lastname" required />
                            </div>
                        </div>

                        <div className="application--input--container--div2 application--input--container--div">
                            <div>
                                <label htmlFor="email">Email<span>*</span>:</label>
                                <input type="email" id="email" name="email" required />
                            </div>

                            <div>
                                <label htmlFor="phonenumber">Phone Number<span>*</span>:</label>
                                <input type="text" id="phonenumber" name="phonenumber" required />
                            </div>
                        </div>

                        <div className="resume--upload--div">
                            <div className="resume--upload--cont">
                                <p className="resume--upload--cont--text1">Resume<span>*</span></p>
                                <div className="resume--upload--action--div">
                                    {!inputState ? resumeUploadOptions.slice(0, 2).map((resumeUploadOption) => (
                                        <div className="resume--upload--action--divv" key={resumeUploadOption.id}>
                                            {resumeUploadOption.class == "localfileupload" ? (
                                                <div className="upload--options--div">
                                                    <input type="file" onChange={(event) => handleLocalFile(event)} className="upload--options--localfile" />
                                                    <Image src={resumeUploadOption.icon} alt={resumeUploadOption.class} className={resumeUploadOption.class} />
                                                    <p>{resumeUploadOption.label}</p>
                                                </div>
                                            )
                                                :
                                                (<UploadOptions
                                                    handleClick={resumeUploadOption.handleClick}
                                                    className={resumeUploadOption.class}
                                                    icon={resumeUploadOption.icon}
                                                    label={resumeUploadOption.label}
                                                />)}
                                        </div>
                                    )) : inputLoaderState ?
                                        <div className="outer--loader--div">
                                            <div className="inner--loader--div">
                                                <div className="loader--div" id="loader--div1"></div>
                                            </div>
                                            <div id="loader--closer"><Image id="loader--closer--icon" onClick={closeFileUpload} width={20} height={20} src={closeModalIcon} alt="close fileupload icon" /></div>
                                        </div> :
                                        <div className="filename--div">
                                            <div><Image id="loader--closer--icon" width={20} height={20} src={filenameIcon} alt="file icon" /></div>
                                            <p>{fileName}</p>
                                            <div id="loader--closer"><Image id="loader--closer--icon" onClick={closeFileUpload} width={20} height={20} src={closeModalIcon} alt="close fileupload icon" /></div>
                                        </div>}
                                </div>

                                <p className="resume--upload--cont--text11">(File type: pdf, doc, docx, txt, rtf)</p>
                            </div>
                            <div className="resume--upload--cont">
                                <p className="resume--upload--cont--text1">Cover letter</p>
                                <div className="resume--upload--action--div">
                                    {!inputState2 ? resumeUploadOptions.map((resumeUploadOption) => (
                                        <div className="resume--upload--action--divv" key={resumeUploadOption.id}>
                                            {resumeUploadOption.class == "localfileupload" ? (
                                                <div className="upload--options--div">
                                                    <input type="file" onChange={(event) => handleLocalFile2(event)} className="upload--options--localfile" />
                                                    <Image src={resumeUploadOption.icon} alt={resumeUploadOption.class} className={resumeUploadOption.class} />
                                                    <p>{resumeUploadOption.label}</p>
                                                </div>
                                            )
                                                :
                                                (<UploadOptions
                                                    handleClick={resumeUploadOption.handleClick}
                                                    className={resumeUploadOption.class}
                                                    icon={resumeUploadOption.icon}
                                                    label={resumeUploadOption.label}
                                                />)}
                                        </div>
                                    )) : !inputLoaderState2 && inputTextareaState ?
                                        <textarea id="message" name="message" rows={4} cols={50}></textarea>
                                        : inputLoaderState2 ?
                                            <div className="outer--loader--div">
                                                <div className="inner--loader--div">
                                                    <div className="loader--div loader--div2"></div>
                                                </div>
                                                <div id="loader--closer"><Image id="loader--closer--icon" onClick={closeFileUpload2} width={20} height={20} src={closeModalIcon} alt="close fileupload icon" /></div>
                                            </div> :
                                            <div className="filename--div">
                                                <div><Image id="loader--closer--icon" width={20} height={20} src={filenameIcon} alt="file icon" /></div>
                                                <p>{fileName2}</p>
                                                <div id="loader--closer"><Image id="loader--closer--icon" onClick={closeFileUpload2} width={20} height={20} src={closeModalIcon} alt="close fileupload icon" /></div>
                                            </div>}
                                </div>
                                <p className="resume--upload--cont--text11">(File type: pdf, doc, docx, txt, rtf)</p>
                            </div>
                            <div>

                            </div>
                        </div>

                        <label htmlFor="message">Additional information:</label>
                        <p className="resume--upload--cont--text2">Please share any other information that you would like us to know that can help add context to your application</p>
                        <textarea id="message" name="message" rows={4} cols={50}></textarea>

                        <div id="submit--div">
                            <input onClick={openModal} type="submit" value="SUBMIT APPLICATION" id="submitButton"></input>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    )
}