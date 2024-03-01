"use client"
import Image from "next/image";


const UploadOptions = ({ handleClick = () => { }, className = '', icon, label = '', id }) => {
    return (
        <div onClick={handleClick} className={className} key={id}>
            <Image src={icon} alt={className} className={className} />
            <p>{label}</p>
        </div>
    );
};

export default UploadOptions;