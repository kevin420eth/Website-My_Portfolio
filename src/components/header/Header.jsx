import React from 'react'
import './header.css'
import {AiOutlineHome, AiOutlineTool, AiOutlinePhone, AiOutlineAppstore, AiOutlineCloseCircle} from 'react-icons/ai'
import {BsPerson, BsBriefcase} from 'react-icons/bs'
import {BiPhotoAlbum} from 'react-icons/bi'

const Header = ()=>{
    window.addEventListener('scroll', function(){
        const header = document.querySelector('.header')

        //when the scroll is higher then 200 viewport height, 
        //add the scroll-header class to <a> tag with the header tag
        if (this.scrollY >= 80){
            header.classList.add('scroll-header')
        }else{
            header.classList.remove('scroll-header')
        }
        })
    
    const [Toggle,showMenu] = React.useState(false)

    return(
        <header className='header'>
            <nav className='nav container'>
                <a href='index.html' className='nav__logo'>Kevin Mars</a>

                <div className={`nav__menu ${Toggle?'show-menu':''}`}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href='#top' className='nav__link'><AiOutlineHome className='nav__icon'/> Home</a>
                        </li>

                        <li className='nav__item'>
                            <a href='#about' className='nav__link'><BsPerson className='nav__icon'/> About</a>
                        </li>

                        <li className='nav__item'>
                            <a href='#skills' className='nav__link'><AiOutlineTool className='nav__icon'/> Skills</a>
                        </li>

                        <li className='nav__item'>
                            <a href='#services' className='nav__link'><BsBriefcase className='nav__icon'/> Servics</a>
                        </li>

                        <li className='nav__item'>
                            <a href='#qualification' className='nav__link'><BiPhotoAlbum className='nav__icon'/> Portfolio</a>
                        </li>

                        <li className='nav__item'>
                            <a href='#contact' className='nav__link'><AiOutlinePhone className='nav__icon'/> Contact</a>
                        </li>

                    </ul>
                    <i className='nav__close' onClick={()=>{
                        showMenu(false)
                    }}><AiOutlineCloseCircle /></i>
                </div>

                <div className='nav__toggle' onClick={()=>{
                    showMenu(true)
                }}><AiOutlineAppstore/></div>

            </nav>
        </header>
    )
}

export default Header