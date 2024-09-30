import React from 'react';

export default function Footer() {
    return (
        <footer className="footer pt-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-4 ms-auto">
                        <h6 className="font-weight-bolder mb-4">NDL INSURANCE CONSULT</h6>
                        <ul className="d-flex flex-row nav">
                            <li className="nav-item">
                                <a className="nav-link pe-1" href="https://www.facebook.com/CreativeTim/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook text-lg opacity-8" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pe-1" href="https://twitter.com/creativetim" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter text-lg opacity-8" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pe-1" href="https://dribbble.com/creativetim" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-dribbble text-lg opacity-8" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pe-1" href="https://github.com/creativetimofficial" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github text-lg opacity-8" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pe-1" href="https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-youtube text-lg opacity-8" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-2 col-sm-6 mb-4">
                        <h6 className="text-sm">Company</h6>
                        <ul className="flex-column nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#" target="_blank">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" target="_blank">Freebies</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-2 col-sm-6 mb-4">
                        <h6 className="text-sm">Resources</h6>
                        <ul className="flex-column nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#" target="_blank">Illustrations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" target="_blank">Bits & Snippets</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" target="_blank">Affiliate Program</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-2 col-sm-6 mb-4">
                        <h6 className="text-sm">Help & Support</h6>
                        <ul className="flex-column nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#" target="_blank">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" target="_blank">Knowledge Center</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-2 col-sm-6 mb-4 me-auto">
                        <h6 className="text-sm">Legal</h6>
                        <ul className="flex-column nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#" target="_blank">Terms & Conditions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" target="_blank">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 text-center">
                        <p className="text-white my-4 text-sm font-weight-normal">
                            All rights reserved. Copyright &copy; {new Date().getFullYear()} NDL INSURANCE CONSULT
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
