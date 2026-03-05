import About from "@/components/About";
import Hero from "@/components/Hero";
import BreadCrumb from "@/components/BreadCrumb";
//import {getPageWidgets} from "@/services/getPageData";

export default async function FaqPage() {
    // const getWidget = await getPageWidgets('about');
    // const aboutData = {
    //     widgets: getWidget
    // }
    const aboutData = [];

    const breadCrumbData = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Faq",
            url: "/faq",
        }
    ];


    return (
        <>
            <BreadCrumb data={breadCrumbData} pageTitle="FAQ"/>
            <section className="faq-section-444 section-padding fix">
                <div className="container container-2">
                    <div className="section-title-area">
                        <div className="section-title">
                            <h6 className="sub-title wow fadeInUp"><img src="assets/img/sub-title-1.svg" alt="img"/>OUR
                                FAQ’S</h6>
                            <h2 className="text-anim">Our Common Frequently <br/> Asked Questions</h2>
                        </div>
                        <a href="contact.html" className="theme-btn wow fadeInUp" data-wow-delay=".2s">
                            Contact Us
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </a>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-5">
                            <div className="faq-left-items-style-4">
                                <ul>
                                    <li className="wow fadeInUp" data-wow-delay=".3s">
                                        <div className="icon">
                                            <img src="assets/img/inner/faq-01.svg" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <h5>Contact us:</h5>
                                            <p><a href="tel:+483939993900">Call Consulting: +483 9399 939 00</a></p>
                                            <p><a href="mailto:helloEcoly@gmail.com">Send Email:
                                                helloEcoly@gmail.com</a></p>
                                        </div>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay=".5s">
                                        <div className="icon">
                                            <img src="assets/img/inner/faq-02.svg" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <h5>Our Location:</h5>
                                            <p>2220 Plymouth Rd #302, Hopkins, New <br/> York Minnesota(MN), 55305</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="faq-right-items-style-4">
                                <div className="faq-accordion">
                                    <div className="accordion" id="accordion">
                                        <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".2s">
                                            <h5 className="accordion-header">
                                                <button className="accordion-button collapsed color-2" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#faq3" aria-expanded="false"
                                                        aria-controls="faq3">
                                                    What warranties do I have for installation?
                                                </button>
                                            </h5>
                                            <div id="faq3" className="accordion-collapse collapse"
                                                 data-bs-parent="#accordion">
                                                <div className="accordion-body">
                                                    Lorem Ipsum is simply dummy text of the printing and industry. been
                                                    the industry,s standard dummy text ever since the printer took
                                                    galley scrambled it to make a type specimen book.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".4s">
                                            <h5 className="accordion-header">
                                                <button className="accordion-button collapsed color-2" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#faq4" aria-expanded="false"
                                                        aria-controls="faq4">
                                                    What is included in your services?
                                                </button>
                                            </h5>
                                            <div id="faq4" className="accordion-collapse collapse"
                                                 data-bs-parent="#accordion">
                                                <div className="accordion-body">
                                                    Lorem Ipsum is simply dummy text of the printing and industry. been
                                                    the industry,s standard dummy text ever since the printer took
                                                    galley scrambled it to make a type specimen book.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".6s">
                                            <h5 className="accordion-header">
                                                <button className="accordion-button collapsed color-2" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#faq5" aria-expanded="false"
                                                        aria-controls="faq5">
                                                    Understanding Their Role in Your System?
                                                </button>
                                            </h5>
                                            <div id="faq5" className="accordion-collapse collapse"
                                                 data-bs-parent="#accordion">
                                                <div className="accordion-body">
                                                    Lorem Ipsum is simply dummy text of the printing and industry. been
                                                    the industry,s standard dummy text ever since the printer took
                                                    galley scrambled it to make a type specimen book.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".8s">
                                            <h5 className="accordion-header">
                                                <button className="accordion-button collapsed color-2" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#faq6" aria-expanded="false"
                                                        aria-controls="faq6">
                                                    Educating for a Sustainable Future?
                                                </button>
                                            </h5>
                                            <div id="faq6" className="accordion-collapse collapse"
                                                 data-bs-parent="#accordion">
                                                <div className="accordion-body">
                                                    Lorem Ipsum is simply dummy text of the printing and industry. been
                                                    the industry,s standard dummy text ever since the printer took
                                                    galley scrambled it to make a type specimen book.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".9s">
                                            <h5 className="accordion-header">
                                                <button className="accordion-button color-2" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#faq7" aria-expanded="true"
                                                        aria-controls="faq7">
                                                    Solar Panel Installation: What to Expect?
                                                </button>
                                            </h5>
                                            <div id="faq7" className="accordion-collapse collapse show"
                                                 data-bs-parent="#accordion">
                                                <div className="accordion-body">
                                                    Lorem Ipsum is simply dummy text of the printing and industry. been
                                                    the industry,s standard dummy text ever since the printer took
                                                    galley scrambled it to make a type specimen book.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}