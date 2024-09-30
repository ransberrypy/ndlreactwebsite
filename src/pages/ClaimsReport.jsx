import React, { useState, useContext } from 'react'
import emailjs from 'emailjs-com';
import { ToastContext } from '../utils/ToastContext';


export default function ClaimsReport() {
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

        const serviceID = 'your_service_id';
        const templateID = 'your_template_id';
        const userID = 'your_user_id';

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Email sent successfully!', life: 3000 });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    insuranceType: '',
                });
            }, (err) => {
                toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to send email.', life: 3000 });
            });
    };

    return (
        <div className='container'>
            <h4>Report a claim</h4>
            <p>Please use the form below to submit claims online. We will get back to you as soon as possible.</p>

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
    )
}
