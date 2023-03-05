import React from "react";
import { FiInstagram, FiTwitter, FiGithub } from 'react-icons/fi'

const Socials = () => {
    return (
        <div className="home__social">
            <a href="https://github.com/" className="home__social-icon" target='_blank' rel="noreferrer"><FiGithub /></a>
            <a href="https://twitter.com/KevinMarsETH" className="home__social-icon" target='_blank' rel="noreferrer"><FiTwitter /></a>
            <a href="https://instagram.com/celtics345209" className="home__social-icon" target='_blank' rel="noreferrer"><FiInstagram /></a>
        </div>
    )
}

export default Socials