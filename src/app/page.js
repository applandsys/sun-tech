import Hero from "@/components/Hero";
import Brand from "@/components/Brand";
import About from "@/components/About";
import Services from "@/components/Services";
import ChooseUs from "@/components/ChooseUs";
import Video from "@/components/Video";
import TeamSection from "@/components/TeamSection";
import Offer from "@/components/Offer";
import Project from "@/components/Project";
import Testimonial from "@/components/Testimonial";

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
                    <TeamSection />
                    <Offer />
                    <Project />
                    <Testimonial />
                    {/*<Contact />*/}
                    {/*<News />*/}
                    {/*<Cta />*/}
                </div>
            </div>
        </>
    );
}