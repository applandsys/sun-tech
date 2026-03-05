import About from "@/components/About";
import Hero from "@/components/Hero";
import BreadCrumb from "@/components/BreadCrumb";
//import {getPageWidgets} from "@/services/getPageData";

export default async function NewsPage() {
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
            name: "News",
            url: "/news",
        }
    ];


    return (
        <>
            <BreadCrumb data={breadCrumbData} pageTitle="News"/>
            <section className="news-section section-padding">
                <div className="container">
                    <div className="news-wrapper">
                        <div className="row g-4">
                            <div className="col-lg-8 col-12">
                                <div className="news-left-content">
                                    <div className="news-item wow fadeInUp" data-wow-delay=".2s">
                                        <div className="news-thumb">
                                            <img src="assets/img/inner/news/news-01.jpg" alt="img"/>
                                            <div className="post-date">
                                                <h4>30</h4>
                                                <p>JAN</p>
                                            </div>
                                        </div>
                                        <div className="news-content">
                                            <div className="user-box">
                                                <div className="user-item">
                                                    <i className="fa-solid fa-circle-user"></i>
                                                    John Smith
                                                </div>
                                                <span>LEARNING</span>
                                            </div>
                                            <h4><a href="news-details.html">Exploring the Intersection of Technology and
                                                Ecology</a></h4>
                                        </div>
                                    </div>
                                    <div className="news-item wow fadeInUp" data-wow-delay=".4s">
                                        <div className="news-thumb">
                                            <img src="assets/img/inner/news/news-02.jpg" alt="img"/>
                                            <div className="post-date">
                                                <h4>30</h4>
                                                <p>JAN</p>
                                            </div>
                                        </div>
                                        <div className="news-content">
                                            <div className="user-box">
                                                <div className="user-item">
                                                    <i className="fa-solid fa-circle-user"></i>
                                                    John Smith
                                                </div>
                                                <span>LEARNING</span>
                                            </div>
                                            <h4><a href="news-details.html">What to expect while installing old solar
                                                panels</a></h4>
                                        </div>
                                    </div>
                                    <div className="news-item wow fadeInUp" data-wow-delay=".6s">
                                        <div className="news-thumb">
                                            <img src="assets/img/inner/news/news-03.jpg" alt="img"/>
                                            <div className="post-date">
                                                <h4>30</h4>
                                                <p>JAN</p>
                                            </div>
                                        </div>
                                        <div className="news-content">
                                            <div className="user-box">
                                                <div className="user-item">
                                                    <i className="fa-solid fa-circle-user"></i>
                                                    John Smith
                                                </div>
                                                <span>LEARNING</span>
                                            </div>
                                            <h4><a href="news-details.html">Solar designing process from start to
                                                implementation</a></h4>
                                        </div>
                                    </div>
                                    <div className="news-item mb-0 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="news-thumb">
                                            <img src="assets/img/inner/news/news-04.jpg" alt="img"/>
                                            <div className="post-date">
                                                <h4>30</h4>
                                                <p>JAN</p>
                                            </div>
                                        </div>
                                        <div className="news-content">
                                            <div className="user-box">
                                                <div className="user-item">
                                                    <i className="fa-solid fa-circle-user"></i>
                                                    John Smith
                                                </div>
                                                <span>LEARNING</span>
                                            </div>
                                            <h4><a href="news-details.html">Solarva Advocates for Sustainable Energy
                                                Practices</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="main-sideber sticky-style">
                                    <div className="single-sideber-widget wow fadeInUp" data-wow-delay=".2s">
                                        <div className="widget-title">
                                            <h3>Search</h3>
                                        </div>
                                        <div className="search-widget">
                                            <form action="#">
                                                <input type="text" placeholder="Search blog"/>
                                                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="single-sideber-widget wow fadeInUp" data-wow-delay=".4s">
                                        <div className="widget-title">
                                            <h3>Latest News</h3>
                                        </div>
                                        <div className="recent-post-area">
                                            <div className="recent-items">
                                                <div className="recent-thumb">
                                                    <img src="assets/img/inner/news/post-1.jpg" alt="img"/>
                                                </div>
                                                <div className="recent-content">
                                                    <ul>
                                                        <li>
                                                            JANUARY 06, 2025
                                                        </li>
                                                    </ul>
                                                    <h6>
                                                        <a href="news-details.html">
                                                            Build a Strong Financial Foundation Your Business
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="recent-items">
                                                <div className="recent-thumb">
                                                    <img src="assets/img/inner/news/post-2.jpg" alt="img"/>
                                                </div>
                                                <div className="recent-content">
                                                    <ul>
                                                        <li>
                                                            JANUARY 06, 2025
                                                        </li>
                                                    </ul>
                                                    <h6>
                                                        <a href="news-details.html">
                                                            Top Investment Strategies for Growing Your Wealth
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="recent-items">
                                                <div className="recent-thumb">
                                                    <img src="assets/img/inner/news/post-3.jpg" alt="img"/>
                                                </div>
                                                <div className="recent-content">
                                                    <ul>
                                                        <li>
                                                            JANUARY 06, 2025
                                                        </li>
                                                    </ul>
                                                    <h6>
                                                        <a href="news-details.html">
                                                            5 Essential Tax Planning Tips Every Entrepreneur
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-sideber-widget wow fadeInUp" data-wow-delay=".6s">
                                        <div className="widget-title">
                                            <h3>Categories</h3>
                                        </div>
                                        <ul>
                                            <li><a href="news-details.html">Charity</a><span>(28)</span></li>
                                            <li><a href="news-details.html">Branding Design</a><span>(34)</span></li>
                                            <li><a href="news-details.html">Financial Investment</a><span>(02)</span>
                                            </li>
                                            <li><a href="news-details.html">Business</a><span>(09)</span></li>
                                            <li><a href="news-details.html">Design</a><span>(23)</span></li>
                                        </ul>
                                    </div>
                                    <div className="single-sideber-widget mb-0 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="widget-title">
                                            <h3>Tags</h3>
                                        </div>
                                        <div className="tagcloud">
                                            <a href="news-details.html">Finance</a>
                                            <a href="news-details.html">Business</a>
                                            <a href="news-details.html">Marketing</a>
                                            <a href="news-details.html">IT</a>
                                            <a href="news-details.html">Development</a>
                                            <a href="news-details.html">Strategy</a>
                                            <a href="news-details.html">Software</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="page-nav-wrap">
                            <ul>
                                <li className="active"><a className="page-numbers" href="javascript:void(0)"><i
                                    className="fa-solid fa-arrow-left"></i></a></li>
                                <li><a className="page-numbers" href="javascript:void(0)">01</a></li>
                                <li><a className="page-numbers" href="javascript:void(0)">02</a></li>
                                <li className="active"><a className="page-numbers" href="javascript:void(0)"><i
                                    className="fa-solid fa-arrow-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}