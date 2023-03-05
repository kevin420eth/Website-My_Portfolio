import React from "react"
import { SlBadge } from 'react-icons/sl'

const Others = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Others</h3>

            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">

                        <i className="badge-icon"><SlBadge /></i>

                        <div className="">
                            <h3 className="skills__name">Figma</h3>
                            <span className="skills__level">Basic</span>
                        </div>

                    </div>

                    <div className="skills__data">

                        <i className="badge-icon"><SlBadge /></i>

                        <div className="">
                            <h3 className="skills__name">Photoshop</h3>
                            <span className="skills__level">Advanced</span>
                        </div>

                    </div>

                    <div className="skills__data">

                        <i className="badge-icon"><SlBadge /></i>

                        <div className="">
                            <h3 className="skills__name">Premiere Pro</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">

                        <i className="badge-icon"><SlBadge /></i>

                        <div className="">
                            <h3 className="skills__name">After Effects</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>

                    </div>

                    <div className="skills__data">

                        <i className="badge-icon"><SlBadge /></i>

                        <div className="">
                            <h3 className="skills__name">Google Ads</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>

                    </div>
                    <div className="skills__data">

                        <i className="badge-icon"><SlBadge /></i>

                        <div className="">
                            <h3 className="skills__name">FB Ads</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Others