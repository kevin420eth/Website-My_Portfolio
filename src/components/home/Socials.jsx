import React from "react";
import {AiOutlineInstagram, AiOutlineFacebook, } from 'react-icons/ai'
import {RxDiscordLogo} from 'react-icons/rx'

const Socials=()=>{
    return(
        <div className="home__social">
            <a href="https://instagram.com" className="home__social-icon" target='_blank' rel="noreferrer"><AiOutlineInstagram /></a>
            <a href="https://twitter.com" className="home__social-icon" target='_blank' rel="noreferrer"><AiOutlineFacebook /></a>
            <a href="https://discord.com" className="home__social-icon" target='_blank' rel="noreferrer"><RxDiscordLogo /></a>
        </div>
    )
}

export default Socials