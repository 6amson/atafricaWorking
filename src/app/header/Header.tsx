import "./header.scss"
import Image from "next/image"
import Logo from "../../../assets/logoAtafrica.svg"
import Menu from "../../../assets/menu_icon.svg"


export default function Header() {
    return (
        <div className="header">
            <Image className="logo" src={Logo} alt="ATAfrica logo"/>
            <Image className="menu" src={Menu} alt="menu logo" />
            <div></div>
        </div>
    )
}