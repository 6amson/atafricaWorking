'use client'

import "./header.scss";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Logo from "../../../../../assets/logoAtafrica.svg";
import Menu from "../../../../../assets/menu_icon.svg";
import useOnclickOutside from "react-cool-onclickoutside";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useMediaQuery } from "react-responsive";


export default function Header() {
    const [isMenuHovered, setIsMenuHovered] = useState(false);
    gsap.registerPlugin(Flip);
    const isMediumScreen = useMediaQuery({ query: '(max-width: 856px)' });
    // const menuOptions = gsap.utils.toArray(".header--menu--options");

    const menuRef = useOnclickOutside(() => {
        setIsMenuHovered(false);
    });


    const handlemenuclick = (item: any) => {
        // setIsMenuHovered(!isMenuHovered);
        setIsMenuHovered(prevState => !prevState);

    }

    useEffect(() => {

    }, []);



    return (
        <main>
            <div className="header">
                <Image className="logo" src={Logo} alt="ATAfrica logo" />
                {/* <p>{isMenuHovered ? 'YES' : 'NO'}</p> */}
                <div className="logoDiv">
                    {isMediumScreen ? <div className="logodivv"
                        onClick={handlemenuclick}
                        ref={menuRef}
                    >
                        <div />
                        <div />
                        <div />
                    </div> : <div className="logodivv"
                        onMouseOver={() => setIsMenuHovered(true)}
                        onClick={handlemenuclick}
                        ref={menuRef}
                    >
                        <div />
                        <div />
                        <div />
                    </div>}
                </div>
            </div>
            <div
                className={
                    isMediumScreen && isMenuHovered ? "header--menu--optionsM" :
                        !isMediumScreen && isMenuHovered ? "header--menu--options" : 
                        isMediumScreen && !isMenuHovered ? "inactiveHeaderOptionsM" :
                        "inactiveHeaderOptions"}
                ref={menuRef}
                style={{
                    opacity: isMenuHovered ? 1 : 0,
                    display: isMenuHovered ? "flex" : 'flex',
                }}
            >
                <p>Profile</p>
                <p>Who we are</p>
                <p>Career</p>
                <p>Contact</p>
            </div>
        </main>
    )
}