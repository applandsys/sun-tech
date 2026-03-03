import Hero from "@/components/Hero";
import Brand from "@/components/Brand";
import About from "@/components/About";
import Services from "@/components/Services";
import ChooseUs from "@/components/ChooseUs";
import Video from "@/components/Video";
import Team from "@/components/Team";
import Offer from "@/components/Offer";
import Project from "@/components/Project";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import News from "@/components/News";
import Cta from "@/components/Cta";

export default function Home() {
    return (
        <>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Hero />
                    <Brand />
                    <About />
                    <Services />
                    <ChooseUs />
                    <Video />
                    <Team />
                    <Offer />
                    <Project />
                    <Testimonial />
                    <Contact />
                    <News />
                    <Cta />
                </div>
            </div>
        </>
    );
}