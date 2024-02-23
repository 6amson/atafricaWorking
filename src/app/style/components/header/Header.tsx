'use client'

import "./header.scss";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Logo from "../../../../../assets/logoAtafrica.svg";
import Menu from "../../../../../assets/menu_icon.svg";
import useOnclickOutside from "react-cool-onclickoutside";
import gsap from "gsap";
import { Flip } from "gsap/Flip";


export default function Header() {
    const [isMenuHovered, setIsMenuHovered] = useState(false);
    gsap.registerPlugin(Flip);
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
                    <div className="logodivv"
                        onMouseOver={() => setIsMenuHovered(true)}
                        onClick={handlemenuclick}
                        ref={menuRef}
                    >
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            </div>
            <div
                className={isMenuHovered ? "header--menu--options" : "inactiveHeaderOptions"}
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