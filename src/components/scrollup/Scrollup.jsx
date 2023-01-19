import React from 'react'
import './scrollup.css'
import {BsArrowUpCircle} from 'react-icons/bs'

const Scrollup = ()=>{
    window.addEventListener('scroll', function(){
        const scrollUp = document.querySelector('.scrollup')

        //when the scroll is higher then 560 viewport height, 
        //add the show-scroll class to <a> tag with the scroll-top class
        if (this.scrollY >= 560){
            scrollUp.classList.add('show-scroll')
        }else{
            scrollUp.classList.remove('show-scroll')
        }
        })
        
    return(
        <a href='#top' className='scrollup'>
            <i className='scrollup-icon'><BsArrowUpCircle /></i>
        </a>
    )
}

export default Scrollup