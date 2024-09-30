import React, { useState, useContext } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom'
import { ToastContext } from '../utils/ToastContext';

export default function Home() {
    const toast = useContext(ToastContext);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        insuranceType: '',
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        // Replace these with your own EmailJS details
        const serviceID = 'your_service_id';
        const templateID = 'your_template_id';
        const userID = 'your_user_id';

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Email sent successfully!', life: 3000 });
            }, (err) => {
                console.error('FAILED...', err);
                toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to send email.', life: 3000 });
            });
    };


    return (
        <>
            <section id="hero" className="hero section">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center aos-init aos-animate"
                            data-aos="zoom-out">
                            <h1 className="">Better Solutions For Your Business</h1>
                            <p className="">We are team of talented designers making websites with Bootstrap</p>
                            {/* <div className="d-flex">
                                <a href="#about" className="btn-get-started">Get Started</a>
                                <a href="#about" className="btn-get-started ms-5">Get Started</a>

                            </div> */}
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-out"
                            data-aos-delay="200">
                            <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="services services-area in-section section-padding-lg bg-shape">
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center">
                                <h6>BEST SERVICES FOR YOU</h6>
                                <h2>What We Provide</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" >
                            <div className="in-service mt-30">
                                <span className="in-service-icon">
                                    <i></i>
                                </span>
                                <h5><a href="services-details.html">dadda</a></h5>
                                <p>dadadada</p>
                                <span className="in-service-transparenticon">
                                    <i className="flaticon-life-insurence"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* inquiry */}

            <div className="about-area in-section section-padding-top-lg bg-white">
                <div className="container p-5">
                    <div className="row gx-0">
                        <div className="col-xl-6 col-lg-12">
                            <div className="about-content heightmatch lheight">
                                <h6>ABOUT US </h6>
                                <h2>Something about us</h2>
                                <h4>We are leading international Insurance service
                                    provider to make your happy life .</h4>
                                <ul className="ul-style-1">
                                    <li>Lorem ipsum dolor sit amet, ciit in voluptate velit esse cillum.</li>
                                    <li>Tempor at. Duis aute irure dolor in reprehenderit in voluptate veldolou fugiat nulla paria
                                        turat.</li>
                                    <li>Omnis iste natus error sit voluptatem accusantium doloremque laudantiuquae ab illo inventore
                                        veritatis et
                                        quasi dolorem.</li>
                                    <li>Do eiusmod tempor incididunt ut labore et dolore masit amet.</li>
                                </ul>
                                <Link to="about" className="btn btn-outline-primary">ABOUT US</Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="heightmatch lheight">
                                <div className="in-videobox" data-bgimage="assets/videbox-image.jpg">
                                    <img src="assets/videbox-image.jpg" alt="man with umbrella" />
                                    <a href="#" data-video-id="136709781" data-channel="vimeo"
                                        className="in-videobutton in-videobox-button"><i className="zmdi zmdi-play"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="counterbox heightmatch counterboxbg" data-bgimage="assets/counterbox-bg.jpg" data-secondary-overlay="9">
                                <div className="counterbox-inner">
                                    <div className="counterbox-block">
                                        <div className="counterbox-blockinner">
                                            <h2><span className="counter">95</span>%</h2>
                                            <h6>Satisfaction</h6>
                                        </div>
                                    </div>
                                    <div className="counterbox-block">
                                        <div className="counterbox-blockinner">
                                            <h2><span className="counter">4000</span></h2>
                                            <h6>New Client</h6>
                                        </div>
                                    </div>
                                    <div className="counterbox-block">
                                        <div className="counterbox-blockinner">
                                            <h2><span className="counter">95</span>%</h2>
                                            <h6>Satisfaction</h6>
                                        </div>
                                    </div>
                                    <div className="counterbox-block">
                                        <div className="counterbox-blockinner">
                                            <h2><span className="counter">980</span></h2>
                                            <h6>New Project</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="insurencebox heightmatch sheight">
                                <h4>Request a free call back</h4>
                                <h2 className="mb-5">Have a business to protect?</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        {/* <!-- <label for="Select" className="form-label">Products</label> --> */}
                                        <select id="Select"
                                            value={formData.insuranceType}
                                            onChange={handleChange}
                                            required
                                            className="form-select" name="insuranceType"
                                        >
                                            <option value="">Select Insurance Type</option>

                                            <option value="life">Life Insurance</option>
                                            <option value="home">Home Insurance</option>
                                            <option value="travel">Travel Insurance</option>
                                            <option value="business">Business Insurance</option>
                                            <option value="car">Car Insurance</option>
                                            <option value="auto">Auto Insurance</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control"
                                            placeholder="Name" name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control"
                                            placeholder="Email" name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required

                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control"
                                            placeholder="Phone" name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button type='submit' className="btn btn-outline-primary">SUBMIT</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
