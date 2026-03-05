import About from "@/components/About";
import Hero from "@/components/Hero";
//import {getPageWidgets} from "@/services/getPageData";

export default async function OurTeamPage() {
    // const getWidget = await getPageWidgets('about');
    // const aboutData = {
    //     widgets: getWidget
    // }
    const aboutData = [];

    return (
        <>
            <div className="mt-5" style={{marginTop: '100px', paddingTop: '100px'}}>
                <section className="breadcrumb-wrapper bg-cover fix"
                         style={{backgroundImage: "url(assets/img/inner/breadcrumb-image.jpg)" }}>
                    <div className="container">
                        <div className="page-heading">
                            <ul className="breadcrumb-list">
                                <li>Home</li>
                                <li>//</li>
                                <li>Our Team</li>
                            </ul>
                            <h1 className="breadcrumb-title">Our Team</h1>
                        </div>
                    </div>
                </section>

                <section className="team-section-inner section-padding fix">
                    <div className="row g-4">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
                            <div className="team-box-items-style-1 mt-0">
                                <div className="thumb">
                                    <img src="assets/img/home-1/team/team-01.jpg" alt="img"/>
                                </div>
                                <div className="content">
                                    <h3><a href="team-details.html">David Taylor</a></h3>
                                    <p>Solar Energy Engineer</p>
                                    <div className="bottom-items">
                                        <div className="social-icon d-flex">
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                        </div>
                                        <a href="team-details.html" className="theme-btn">
                                            View Profile
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-box-items-style-1 mt-0">
                                <div className="thumb">
                                    <img src="assets/img/home-1/team/team-02.jpg" alt="img"/>
                                </div>
                                <div className="content">
                                    <h3><a href="team-details.html">John Smith</a></h3>
                                    <p>Solar Energy Engineer</p>
                                    <div className="bottom-items">
                                        <div className="social-icon d-flex">
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                        </div>
                                        <a href="team-details.html" className="theme-btn">
                                            View Profile
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="team-box-items-style-1 mt-0">
                                <div className="thumb">
                                    <img src="assets/img/home-1/team/team-03.jpg" alt="img"/>
                                </div>
                                <div className="content">
                                    <h3><a href="team-details.html">William John</a></h3>
                                    <p>Solar Energy Engineer</p>
                                    <div className="bottom-items">
                                        <div className="social-icon d-flex">
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                        </div>
                                        <a href="team-details.html" className="theme-btn">
                                            View Profile
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="team-box-items-style-1 mt-0">
                                <div className="thumb">
                                    <img src="assets/img/home-1/team/team-04.jpg" alt="img"/>
                                </div>
                                <div className="content">
                                    <h3><a href="team-details.html">Shophia Taylor</a></h3>
                                    <p>Solar Energy Engineer</p>
                                    <div className="bottom-items">
                                        <div className="social-icon d-flex">
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                        </div>
                                        <a href="team-details.html" className="theme-btn">
                                            View Profile
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="team-box-items-style-1 mt-0">
                                <div className="thumb">
                                    <img src="assets/img/inner/team/team-02.jpg" alt="img"/>
                                </div>
                                <div className="content">
                                    <h3><a href="team-details.html">David William</a></h3>
                                    <p>Solar Energy Engineer</p>
                                    <div className="bottom-items">
                                        <div className="social-icon d-flex">
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                        </div>
                                        <a href="team-details.html" className="theme-btn">
                                            View Profile
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                            <div className="team-box-items-style-1 mt-0">
                                <div className="thumb">
                                    <img src="assets/img/inner/team/team-03.jpg" alt="img"/>
                                </div>
                                <div className="content">
                                    <h3><a href="team-details.html">Jeson Michel</a></h3>
                                    <p>Solar Energy Engineer</p>
                                    <div className="bottom-items">
                                        <div className="social-icon d-flex">
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                        </div>
                                        <a href="team-details.html" className="theme-btn">
                                            View Profile
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-nav-wrap text-center">
                        <ul>
                            <li className="active"><a className="page-numbers" href="javascript:void(0)"><i
                                className="fa-solid fa-arrow-left"></i></a></li>
                            <li><a className="page-numbers" href="javascript:void(0)">01</a></li>
                            <li><a className="page-numbers" href="javascript:void(0)">02</a></li>
                            <li className="active"><a className="page-numbers" href="javascript:void(0)"><i
                                className="fa-solid fa-arrow-right"></i></a></li>
                        </ul>
                    </div>
                </section>

            </div>
        </>
    );
}