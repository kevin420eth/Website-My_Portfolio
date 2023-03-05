import React from "react"
import { SlBadge } from 'react-icons/sl'

const Blockchain = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Blockchain</h3>

            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">

                        <i className="badge-icon"><SlBadge /></i>

                        <div className="">
                            <h3 className="skills__name">Solidity</h3>
                            <span className="skills__level">Advanced</span>
                        </div>

                    </div>

                    <div className="skills__data">

                        <i className="badge-icon"><SlBadge /></i>

                        <div className="">
                            <h3 className="skills__name">Truffle</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>

                    </div>

                    <div className="skills__data">

                        <i className="badge-icon"><SlBadge /></i>

                        <div className="">
                            <h3 className="skills__name">Web3.js</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">

                        <i className="badge-icon"><SlBadge /></i>

                        <div className="">
                            <h3 className="skills__name">Ethers.js</h3>
                            <span className="skills__level">Advanced</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blockchain