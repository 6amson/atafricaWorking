'use client'

import "./header.scss";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Logo from "../../../../../assets/logoAtafrica.svg";
import Menu from "../../../../../assets/menu_icon.svg";
import useOnclickOutside from "react-cool-onclickoutside";


export default function Header() {
    const [isMenuHovered, setIsMenuHovered] = useState(false);

    const menuRef = useOnclickOutside(() => {
        setIsMenuHovered(false);
    });

    useEffect(() => {
        
    }, []);



    return (
        <main>
            <div className="header">
                <Image className="logo" src={Logo} alt="ATAfrica logo" />
                <div className="logoDiv">
                    <div className="logodivv"
                        onMouseOver={() => setIsMenuHovered(true)}
                        onClick={() => setIsMenuHovered(prevState => !prevState)}
                    >
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            </div>
            <div
                className={`header--menu--options ${isMenuHovered ? "show" : "hide"}`}
                ref={menuRef}
                style={{
                    // opacity: isMenuHovered ? 1 : 0,
                    // // height: isMenuHovered ? "auto" : 0,
                    display: isMenuHovered ? "flex" : 'none',
                    transition: "display 0.3s ease-in,"
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