"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill required fields");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                toast.success("Message sent successfully 🚀");

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            toast.error("Something went wrong");
        }

        setLoading(false);
    };

    return (
        <>
            <section className="contact-section section-padding fix bg-cover"
                     style={{backgroundImage: "url(assets/img/home-1/contact-bg.jpg)" }}  >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5"></div>
                        <div className="col-lg-7">
                            <form action="#" id="contact-form" className="contact-form-box">
                                <h3 className="wow fadeInUp">Make An Appointment</h3>
                                <div className="row g-4 align-items-center justify-content-center">
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="form-clt">
                                            <input type="text" name="name" id="name" placeholder="Your Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="form-clt">
                                            <input type="text" name="email" id="email2" placeholder="Email Address"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="form-clt">
                                            <input type="text" name="phone" id="phone" placeholder="Phone number"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                        <div className="form-clt">
                                            <input type="text" name="subject" id="subject" placeholder="Company name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="form-clt">
                                            <textarea name="message" id="message" placeholder="Your message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                                        <div className="contact-button">
                                            <button type="submit" className="theme-btn">
                                                Make An Appointment
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}