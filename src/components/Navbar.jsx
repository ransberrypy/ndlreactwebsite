import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <div className="container">
                        <div className="mininav">
                            <div className="p-2 contact">
                                <i className="fa-solid fa-phone"></i>
                                <span className="ms-2">Phone: </span> <a href="tel:">054720548554</a> |
                                <i className="fa-regular fa-envelope"></i>
                                <span className="ms-2">Email: info@ndlinsurance.com </span><a
                                    href="mailto:info@ndlinsurance.com"></a>
                            </div>

                            <div className="p-2 get-a-quote">
                                <Link to="">GET A QUOTE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <a className="navbar-brand" >
                        <img src="assets/ndl_logo.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link " aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link"  >About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/services' className="nav-link">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='claims-report' className="nav-link">ClaimsReport</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
