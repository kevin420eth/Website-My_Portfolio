import React from 'react'
import './footer.css'
import {AiOutlineInstagram, AiOutlineTwitter, AiOutlineGithub} from 'react-icons/ai'

const Footer = ()=>{
    const year = new Date().getFullYear()
    
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
                    <a href="https://instagram.com/celtics345209" className="footer__social-link" target='_blank' rel="noreferrer"><AiOutlineInstagram /></a>
                    <a href="https://twitter.com/KevinMarsETH" className="footer__social-link" target='_blank' rel="noreferrer"><AiOutlineTwitter /></a>
                    <a href="https://github.com/" className="footer__social-link" target='_blank' rel="noreferrer"><AiOutlineGithub /></a>
                </div>
                
                <span className='footer__copy'>© {year} Kevin Mars. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer