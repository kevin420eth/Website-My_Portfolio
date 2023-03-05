import React from 'react'
import './qualification.css'
import {FaUserGraduate} from 'react-icons/fa'
import {MdGrade} from 'react-icons/md'
import {SlCalender} from 'react-icons/sl'

const Qualification = ()=>{

    const [toggleState, setToggleState] = React.useState(1)
    return(
        <section className='qualification section' id='qualification'>
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'>My personel journey</span>

            <div className='qualification__container container'>

                <div className='qualification__tabs'>

                    <div className='qualification__button button--flex qualification__active' onClick={()=>{
                        setToggleState(1)
                    }}>
                        <i className='qualification-icon'><FaUserGraduate /></i> Education
                    </div>

                    <div className='qualification__button button--flex' onClick={()=>{
                        setToggleState(2)
                    }}>
                        <i className='qualification-icon'><MdGrade /></i> Experience
                    </div>
                    
                </div>

                <div className='qualification__sections'>
                    <div className={`qualification__content ${toggleState===1?'qualification__content-active':''}`}>

                        <div className='qualification__data'>

                            <div>
                                <h3 className='qualification__title'>NKNU</h3>
                                <span className='qualification__subtitle'>Mathematics</span>

                                <div className='qualification__calender'>
                                    <i><SlCalender /> 2012 - 2016</i>
                                </div>
                            </div>
                            <div>
                                    <span className='qualification__rounder'></span>
                                    <span className='qualification__line'></span>            
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>     
                            </div>

                            <div>
                                <h3 className='qualification__title'>Python Academy</h3>
                                <span className='qualification__subtitle'>Machine Learning</span>

                                <div className='qualification__calender'>
                                    <i><SlCalender /> 2020 - 2021</i>
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>

                            <div>
                                <h3 className='qualification__title'>Web Development Online Course</h3>
                                <span className='qualification__subtitle'>Javascript, React</span>

                                <div className='qualification__calender'>
                                    <i><SlCalender /> 2021 - 2022</i>
                                </div>
                                
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>            
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>     
                            </div>

                            <div>
                                <h3 className='qualification__title'>DevOps<br/> Online Course</h3>
                                <span className='qualification__subtitle'>Docker, Kubernetes</span>

                                <div className='qualification__calender'>
                                    <i><SlCalender /> 2022 - Present</i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`qualification__content ${toggleState===2?'qualification__content-active':''}`}>

                        <div className='qualification__data'>

                            <div>
                                <h3 className='qualification__title'>Baseball</h3>
                                <span className='qualification__subtitle'>Spain - Institute</span>

                                <div className='qualification__calender'>
                                    <i><SlCalender /> 2021 - Present</i>
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>            
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>     
                            </div>

                            <div>
                                <h3 className='qualification__title'>NBA</h3>
                                <span className='qualification__subtitle'>Spain - Institute</span>

                                <div className='qualification__calender'>
                                    <i><SlCalender /> 2021 - Present</i>
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Web3 Developer</h3>
                                <span className='qualification__subtitle'>Spain - Institute</span>

                                <div className='qualification__calender'>
                                    <i><SlCalender /> 2021 - 2023</i>
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>            
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>     
                            </div>

                            <div>
                                <h3 className='qualification__title'>NHL</h3>
                                <span className='qualification__subtitle'>Spain - Institute</span>

                                <div className='qualification__calender'>
                                    <i><SlCalender /> 2017 - Present</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification