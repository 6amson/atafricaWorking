"use client"
import Image from "next/image";


const UploadOptions = ({ handleClick = () => { }, className = '', icon, label = '' }) => {
    return (

        <div onClick={handleClick} alt={className} className="upload--options--div">
            <Image src={icon} alt={className} className={className} />
            <p>{label}</p>
        </div>
    );
};

export default UploadOptions;