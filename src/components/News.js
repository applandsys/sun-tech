"use client";

export default function News() {
    return (
        <section className="news-section section-padding fix">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="sub-title wow fadeInUp"><img src="assets/img/sub-title-1.svg" alt="img"/>OUR BLOG &
                        NEWS</h6>
                    <h2 className="text-anim">Latest News & Blog</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="news-box-items-style-1">
                            <div className="news-thumb">
                                <img src="assets/img/home-1/news/news-01.jpg" alt="img"/>
                                <span className="date-items"><i
                                    className="fa-regular fa-calendar"></i>09 May, 2025</span>
                            </div>
                            <div className="news-content">
                                <div className="user-box">
                                    <div className="user-item">
                                        <i className="fa-solid fa-circle-user"></i>
                                        John Smith
                                    </div>
                                    <span>LEARNING</span>
                                </div>
                                <h4><a href="news-details.html">Solar designing process from start implementation</a>
                                </h4>
                                <p>Ways every day, so that all of us can be part of the changing energy system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="news-box-items-style-1">
                            <div className="news-thumb">
                                <img src="assets/img/home-1/news/news-02.jpg" alt="img"/>
                                <span className="date-items"><i
                                    className="fa-regular fa-calendar"></i>09 May, 2025</span>
                            </div>
                            <div className="news-content">
                                <div className="user-box">
                                    <div className="user-item">
                                        <i className="fa-solid fa-circle-user"></i>
                                        John Smith
                                    </div>
                                    <span>LEARNING</span>
                                </div>
                                <h4><a href="news-details.html">Solar Design Journey: From Concept to Completion</a>
                                </h4>
                                <p>Ways every day, so that all of us can be part of the changing energy system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="news-box-items-style-1">
                            <div className="news-thumb">
                                <img src="assets/img/home-1/news/news-03.jpg" alt="img"/>
                                <span className="date-items"><i
                                    className="fa-regular fa-calendar"></i>09 May, 2025</span>
                            </div>
                            <div className="news-content">
                                <div className="user-box">
                                    <div className="user-item">
                                        <i className="fa-solid fa-circle-user"></i>
                                        John Smith
                                    </div>
                                    <span>LEARNING</span>
                                </div>
                                <h4><a href="news-details.html">Impact of Solar Energy on Reducing Carbon</a></h4>
                                <p>Ways every day, so that all of us can be part of the changing energy system.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}