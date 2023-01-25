import React from "react";
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {RxDiscordLogo} from 'react-icons/rx'

const Socials=()=>{
    return(
        <div className="home__social">
            <a href="https://instagram.com/celtics345209" className="home__social-icon" target='_blank' rel="noreferrer"><AiOutlineInstagram /></a>
            <a href="https://twitter.com/KevinMarsETH" className="home__social-icon" target='_blank' rel="noreferrer"><FiTwitter /></a>
            <a href="https://discord.com" className="home__social-icon" target='_blank' rel="noreferrer"><RxDiscordLogo /></a>
        </div>
    )
}

export default Socials