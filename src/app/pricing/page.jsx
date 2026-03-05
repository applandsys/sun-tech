import About from "@/components/About";
import Hero from "@/components/Hero";
import BreadCrumb from "@/components/BreadCrumb";
//import {getPageWidgets} from "@/services/getPageData";

export default async function PricingPage() {
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
            name: "Pricing",
            url: "/pricing",
        }
    ];


    return (
        <>
            <BreadCrumb data={breadCrumbData} pageTitle="Pricing"/>
            <section className="pricing-section fix section-padding">
                <div className="container container-2">
                    <div className="section-title text-center">
                        <h6 className="sub-title color-2 wow fadeInUp"><img src="assets/img/sub-title-3.svg" alt="img"/>OUR
                            PRICING</h6>
                        <h2 className="text-anim">Our Reasonable Pricing Plan</h2>
                        <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
                            The as Suscipit tristique nam enim mauris consectetur as platea. The Cras aliquet accumsan.
                            Egestas ut <br/> eget egestas as ultrices diam. Sem fusce pretium ultrices that mauris
                            magni.
                        </p>
                    </div>
                    <div className="pricing-toggle-wrapper text-center">
                        <span className="toggle-label monthly-label active">Monthly</span>
                        <label className="switch">
                            <input type="checkbox" id="pricing-toggle"/>
                            <span className="slider"></span>
                        </label>
                        <span className="toggle-label yearly-label">Yearly</span>
                    </div>
                    <div className="row pricing-row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="pricing-box-items">
                                <div className="pricing-header">
                                    <h3>Basic Plan</h3>
                                    <h2 className="price" data-monthly="99" data-yearly="199">$99<sub>/ per mon</sub>
                                    </h2>
                                </div>
                                <p>We are experienced in bringing as your adventures to their journey.</p>
                                <a href="contact.html" className="theme-btn">
                                    Get Started Now <i className="fa-solid fa-arrow-up-right"></i>
                                </a>
                                <h4>What’s Included</h4>
                                <ul className="pricing-list">
                                    <li><i className="fa-light fa-check"></i> Standard Feature</li>
                                    <li><i className="fa-light fa-check"></i> Dashboard Access</li>
                                    <li><i className="fa-light fa-check"></i> Unlimited pages for sitemap</li>
                                    <li><i className="fa-light fa-check"></i> 100% Satisfaction Guarantee</li>
                                    <li><i className="fa-light fa-check"></i> Lifetime free support</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="pricing-box-items active">
                                <div className="pricing-header">
                                    <h3>Standard Plan</h3>
                                    <h2 className="price" data-monthly="299" data-yearly="399">$299<sub>/ per mon</sub>
                                    </h2>
                                </div>
                                <p>We are experienced in bringing as your adventures to their journey.</p>
                                <a href="contact.html" className="theme-btn">
                                    Get Started Now <i className="fa-solid fa-arrow-up-right"></i>
                                </a>
                                <h4>What’s Included</h4>
                                <ul className="pricing-list">
                                    <li><i className="fa-light fa-check"></i> Standard Feature</li>
                                    <li><i className="fa-light fa-check"></i> Dashboard Access</li>
                                    <li><i className="fa-light fa-check"></i> Unlimited pages for sitemap</li>
                                    <li><i className="fa-light fa-check"></i> 100% Satisfaction Guarantee</li>
                                    <li><i className="fa-light fa-check"></i> Lifetime free support</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="pricing-box-items">
                                <div className="pricing-header">
                                    <h3>Premium Plan</h3>
                                    <h2 className="price" data-monthly="599" data-yearly="699">$599<sub>/ per mon</sub>
                                    </h2>
                                </div>
                                <p>We are experienced in bringing as your adventures to their journey.</p>
                                <a href="contact.html" className="theme-btn">
                                    Get Started Now <i className="fa-solid fa-arrow-up-right"></i>
                                </a>
                                <h4>What’s Included</h4>
                                <ul className="pricing-list">
                                    <li><i className="fa-light fa-check"></i> Standard Feature</li>
                                    <li><i className="fa-light fa-check"></i> Dashboard Access</li>
                                    <li><i className="fa-light fa-check"></i> Unlimited pages for sitemap</li>
                                    <li><i className="fa-light fa-check"></i> 100% Satisfaction Guarantee</li>
                                    <li><i className="fa-light fa-check"></i> Lifetime free support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}