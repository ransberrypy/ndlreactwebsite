import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="footer pt-5 mt-5">
                <div className="container">
                    <div className=" row">
                        <div className="col-md-3 mb-4 ms-auto">
                            <div>
                                <h6 className="font-weight-bolder mb-4">NDL INSURANCE CONSULT</h6>
                            </div>
                            <div>
                                <ul className="d-flex flex-row ms-n3 nav">
                                    <li className="nav-item">
                                        <a className="nav-link pe-1" href="https://www.facebook.com/CreativeTim/" target="_blank">
                                            <i className="fab fa-facebook text-lg opacity-8" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link pe-1" href="https://twitter.com/creativetim" target="_blank">
                                            <i className="fab fa-twitter text-lg opacity-8" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link pe-1" href="https://dribbble.com/creativetim" target="_blank">
                                            <i className="fab fa-dribbble text-lg opacity-8" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link pe-1" href="https://github.com/creativetimofficial" target="_blank">
                                            <i className="fab fa-github text-lg opacity-8" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link pe-1" href="https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w"
                                            target="_blank">
                                            <i className="fab fa-youtube text-lg opacity-8" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6 mb-4">
                            <div>
                                <h6 className="text-sm">Company</h6>
                                <ul className="flex-column ms-n3 nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.creative-tim.com/presentation" target="_blank">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.creative-tim.com/templates/free" target="_blank">
                                            Freebies
                                        </a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link" href="https://www.creative-tim.com/templates/premium" target="_blank">
                                            Premium Tools
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.creative-tim.com/blog" target="_blank">
                                            Blog
                                        </a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6 mb-4">
                            <div>
                                <h6 className="text-sm">Resources</h6>
                                <ul className="flex-column ms-n3 nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://iradesign.io/" target="_blank">
                                            Illustrations
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.creative-tim.com/bits" target="_blank">
                                            Bits &amp; Snippets
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.creative-tim.com/affiliates/new" target="_blank">
                                            Affiliate Program
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6 mb-4">
                            <div>
                                <h6 className="text-sm">Help &amp; Support</h6>
                                <ul className="flex-column ms-n3 nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.creative-tim.com/contact-us" target="_blank">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.creative-tim.com/knowledge-center" target="_blank">
                                            Knowledge Center
                                        </a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link" href="https://services.creative-tim.com/?ref=ct-material-kit-pro-footer"
                                            target="_blank">
                                            Custom Development
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.creative-tim.com/sponsorships" target="_blank">
                                            Sponsorships
                                        </a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6 mb-4 me-auto">
                            <div>
                                <h6 className="text-sm">Legal</h6>
                                <ul className="flex-column ms-n3 nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.creative-tim.com/knowledge-center/terms-of-service/"
                                            target="_blank">
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.creative-tim.com/knowledge-center/privacy-policy/"
                                            target="_blank">
                                            Privacy Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="text-center">
                                <p className="text-white my-4 text-sm font-weight-normal">
                                    All rights reserved. Copyright ©
                                    <script>
                                        document.write(new Date().getFullYear())
                                    </script> NDLINSURANCE CONSULT </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
