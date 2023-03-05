import React from 'react'
import './skill.css'
import Frontend from './Frontend'
import Backend from './Backend'
import Blockchain from './Blockchain'
import Others from './Others'


const Skill = ()=>{
    return(
        <section className='skills section' id='skills'>
            <h2 className='section__title'>Skills</h2>
            <span className='section__subtitle'>My skill set</span>

            <div className='skills__container container grid'>
                <Frontend />
                <Backend />
                <Blockchain />
                <Others />
            </div>
        </section>
    )
}

export default Skill