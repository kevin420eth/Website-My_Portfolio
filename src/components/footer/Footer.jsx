import React from 'react'
import './footer.css'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className='footer'>
            <div className='footer__container container'>
                <h1 className='footer__title'>Kevin Mars</h1>

                <ul className='footer__list'>
                    <li>
                        <a href='#about' className='footer__link'>About</a>
                    </li>

                    <li>
                        <a href='#skills' className='footer__link'>Skills</a>
                    </li>

                    <li>
                        <a href='#services' className='footer__link'>Services</a>
                    </li>

                    <li>
                        <a href='#qualification' className='footer__link'>Qualification</a>
                    </li>

                    <li>
                        <a href='#contact' className='footer__link'>Contact</a>
                    </li>
                </ul>

                <div className='footer__social'>
                    <a href="https://github.com/kevin420eth" className="footer__social-link" target='_blank' rel="noreferrer"><AiOutlineGithub /></a>
                    <a href="https://twitter.com/KevinMarsETH" className="footer__social-link" target='_blank' rel="noreferrer"><AiOutlineTwitter /></a>
                    <a href="https://instagram.com/celtics345209" className="footer__social-link" target='_blank' rel="noreferrer"><AiOutlineInstagram /></a>
                </div>

                <span className='footer__copy'>© {year} Kevin Mars. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer