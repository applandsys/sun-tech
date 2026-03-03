"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
    };

    return (
        <section className="contact-section">
            {/* Background Image with Overlay */}
            <div className="contact-bg-wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Column - Empty with background visible */}
                        <div className="col-lg-5"></div>

                        {/* Right Column with Form */}
                        <div className="col-lg-7">
                            <div className="contact-form-box">
                                <h3 className="text-anim">Make An Appointment</h3>

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        {/* Name */}
                                        <div className="col-md-6">
                                            <div className="form-clt">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="col-md-6">
                                            <div className="form-clt">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="col-md-6">
                                            <div className="form-clt">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Phone Number"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Company */}
                                        <div className="col-md-6">
                                            <div className="form-clt">
                                                <input
                                                    type="text"
                                                    name="company"
                                                    placeholder="Company Name"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        {/* Message - Full width */}
                                        <div className="col-md-12">
                                            <div className="form-clt">
                                                <textarea
                                                    name="message"
                                                    rows="5"
                                                    placeholder="Your Message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="col-md-12">
                                            <button
                                                type="submit"
                                                className="theme-btn"
                                            >
                                                Make An Appointment
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}