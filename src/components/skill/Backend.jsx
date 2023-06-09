import React from "react";
import { SlBadge } from 'react-icons/sl'

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend</h3>

            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">

                        <i className="badge-icon"><SlBadge /></i>

                        <div className="">
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">Advanced</span>
                        </div>

                    </div>

                    <div className="skills__data">

                        <i className="badge-icon"><SlBadge /></i>

                        <div className="">
                            <h3 className="skills__name">Node Js</h3>
                            <span className="skills__level">Advanced</span>
                        </div>

                    </div>

                    <div className="skills__data">

                        <i className="badge-icon"><SlBadge /></i>

                        <div className="">
                            <h3 className="skills__name">Mongodb</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>

                    </div>

                </div>

                <div className="skills__group">

                    <div className="skills__data">

                        <i className="badge-icon"><SlBadge /></i>

                        <div className="">
                            <h3 className="skills__name">MySQL</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>

                    </div>



                    <div className="skills__data">

                        <i className="badge-icon"><SlBadge /></i>

                        <div className="">
                            <h3 className="skills__name">AWS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>

                    </div>

                    <div className="skills__data">

                        <i className="badge-icon"><SlBadge /></i>

                        <div className="">
                            <h3 className="skills__name">Heroku</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Backend