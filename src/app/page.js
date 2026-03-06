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
import ContactForm from "@/components/Contact";
import News from "@/components/News";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import FooterTwo from "@/components/FooterTwo";

export default function Home() {
    return (
        <>
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
            <ContactForm />
            <News />
            <Cta />

        </>
    );
}