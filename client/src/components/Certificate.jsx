import React from 'react'
import "../styles/Certificate.css"
import CertificateBtns from '../pages/CertificateBtns'
import CertificateImg from"../../public/images/certificate.jpeg"

export default function Certificate() {
    return (<div id="certificate" className="d-flex flex-lg-row flex-column w-75 justify-content-center align-items-center" >
        <div className="left-section p-lg-5 p-3 text-center">
            <img src={CertificateImg} alt="Certificate" loading="lazy"
                className="img-fluid"
            />
        </div>

        <div className="right-section  w-100 d-flex flex-column justify-content-evenly align-items-center ">
            <CertificateBtns />
        </div>
    </div>

    )
}