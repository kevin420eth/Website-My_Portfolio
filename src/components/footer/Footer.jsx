import React from 'react'
import './footer.css'
import {AiOutlineInstagram, AiOutlineFacebook, } from 'react-icons/ai'
import {RxDiscordLogo} from 'react-icons/rx'

const Footer = ()=>{
    return(
        <footer className='footer'>
            <div className='footer__container container'>
                <h1 className='footer__title'>Kevin Mars</h1>

                <ul className='footer__list'>
                    <li>
                        <a href='#about' className='footer__link'>About</a>
                    </li>

                    <li>
                        <a href='#projects' className='footer__link'>Projects</a>
                    </li>

                    <li>
                        <a href='#testimonial' className='footer__link'>Testimonials</a>
                    </li>
                </ul>

                <div className='footer__social'>
                    <a href="https://instagram.com" className="footer__social-link" target='_blank' rel="noreferrer"><AiOutlineInstagram /></a>
                    <a href="https://twitter.com" className="footer__social-link" target='_blank' rel="noreferrer"><AiOutlineFacebook /></a>
                    <a href="https://discord.com" className="footer__social-link" target='_blank' rel="noreferrer"><RxDiscordLogo /></a>
                </div>

                <span className='footer__copy'>Kevin Mars. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer