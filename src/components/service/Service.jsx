import React from 'react'
import './service.css'
import {AiOutlineArrowRight, AiOutlineCheckCircle, AiOutlineClose} from 'react-icons/ai'
import {HiOutlinePencilAlt} from 'react-icons/hi'


const Service = ()=>{

    const [toggleState, setToggleState]=React.useState(0)

    return(
        <section className='services section' id='services'>
            <h2 className='section__title'>Services</h2>
            <span className='section__subtitle'>What I Offer</span>

            <div className='services__container container grid'>

                <div className='services__content'>
                    <div>
                        <i className='services__icon'><HiOutlinePencilAlt /></i>
                        <h3 className='services__title'>Product <br/> Designer</h3>
                    </div>

                    <span className='services__button' onClick={()=>{
                        setToggleState(1)
                    }}>View More<i className='services__button-icon'><AiOutlineArrowRight /></i></span>

                    <div className={`services__modal ${toggleState===1?'active-modal':''}`}>
                        <div className='services__modal-content'>
                            <i className='services__modal-close' onClick={()=>{
                                setToggleState(0)
                            }}><AiOutlineClose /></i>

                            <h3 className='services__modal-title'>Product Designer</h3>
                            <p className='services__modal-description'>
                                Service with more than 3 years of experience.Providing quality work to clients and 
                                companies.
                            </p>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='services__modal-icon'><AiOutlineCheckCircle /></i>
                                    <p className='services__modal-info'>I develop the user interface.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='services__modal-icon'><AiOutlineCheckCircle /></i>
                                    <p className='services__modal-info'>Web page development.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='services__modal-icon'><AiOutlineCheckCircle /></i>
                                    <p className='services__modal-info'>I create ux element interactions.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='services__modal-icon'><AiOutlineCheckCircle /></i>
                                    <p className='services__modal-info'>I position your company brand.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='services__modal-icon'><AiOutlineCheckCircle /></i>
                                    <p className='services__modal-info'>Design and mockups of products for companies.</p>
                                </li>
                            </ul> 
                        </div>
                    </div>

                </div>
                
                <div className='services__content'>
                    <div>
                        <i className='services__icon'><HiOutlinePencilAlt /></i>
                        <h3 className='services__title'>Ui/Ux <br /> Designer</h3>
                    </div>

                    <span className='services__button' onClick={()=>{
                        setToggleState(2)}}>View More<i className='services__button-icon'><AiOutlineArrowRight /></i></span>

                    <div className={`services__modal ${toggleState===2?'active-modal':''}`}>
                        <div className='services__modal-content'>
                            <i className='services__modal-close' onClick={()=>{
                                setToggleState(0)
                            }}><AiOutlineClose /></i>

                            <h3 className='services__modal-title'>Ui/Ux Designer</h3>
                            <p className='services__modal-description'>
                                Service with more than 3 years of experience.Providing quality work to clients and 
                                companies.
                            </p>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='services__modal-icon'><AiOutlineCheckCircle /></i>
                                    <p className='services__modal-info'>I develop the user interface.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='services__modal-icon'><AiOutlineCheckCircle /></i>
                                    <p className='services__modal-info'>Web page development.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='services__modal-icon'><AiOutlineCheckCircle /></i>
                                    <p className='services__modal-info'>I create ux element interactions.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='services__modal-icon'><AiOutlineCheckCircle /></i>
                                    <p className='services__modal-info'>I position your company brand.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='services__modal-icon'><AiOutlineCheckCircle /></i>
                                    <p className='services__modal-info'>Design and mockups of products for companies.</p>
                                </li>
                            </ul> 
                        </div>
                    </div>

                </div>

                <div className='services__content'>
                    <div>
                        <i className='services__icon'><HiOutlinePencilAlt /></i>
                        <h3 className='services__title'>Visual <br /> Designer</h3>
                    </div>

                    <span className='services__button' onClick={()=>{
                        setToggleState(3)}}>View More<i className='services__button-icon'><AiOutlineArrowRight /></i></span>

                    <div className={`services__modal ${toggleState===3?'active-modal':''}`}>
                        <div className='services__modal-content'>
                            <i className='services__modal-close' onClick={()=>{
                                setToggleState(0)
                            }}><AiOutlineClose /></i>

                            <h3 className='services__modal-title'>Visual Designer</h3>
                            <p className='services__modal-description'>
                                Service with more than 3 years of experience.Providing quality work to clients and 
                                companies.
                            </p>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='services__modal-icon'><AiOutlineCheckCircle /></i>
                                    <p className='services__modal-info'>I develop the user interface.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='services__modal-icon'><AiOutlineCheckCircle /></i>
                                    <p className='services__modal-info'>Web page development.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='services__modal-icon'><AiOutlineCheckCircle /></i>
                                    <p className='services__modal-info'>I create ux element interactions.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='services__modal-icon'><AiOutlineCheckCircle /></i>
                                    <p className='services__modal-info'>I position your company brand.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='services__modal-icon'><AiOutlineCheckCircle /></i>
                                    <p className='services__modal-info'>Design and mockups of products for companies.</p>
                                </li>
                            </ul> 
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Service