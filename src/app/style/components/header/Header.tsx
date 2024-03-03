'use client'

import "./header.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Logo from "../../../../../assets/logoAtafrica.svg";
import Menu from "../../../../../assets/menu_icon.svg";
import useOnclickOutside from "react-cool-onclickoutside";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useMediaQuery } from "react-responsive";


export default function Header() {
    const router = useRouter();

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

    const handleRouteChange = (route: string) => () => {
        router.push(`/${route}`);
    };

    return (
        <main>
            <div className="header">
                <div className="logo" onClick={handleRouteChange('')}><Image src={Logo} alt="ATAfrica logo" /></div>
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
                <p  onClick={handleRouteChange('profile')}>Profile</p>
                <p onClick={handleRouteChange('about')}>Who we are</p>
                <p onClick={handleRouteChange('careers')}>Career</p>
                <p onClick={handleRouteChange('contact')}>Contact</p>
            </div>
        </main>
    )
}