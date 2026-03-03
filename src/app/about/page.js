import About from "@/components/About";
import Hero from "@/components/Hero";
import Brand from "@/components/Brand";
import HeroCommon from "@/components/HeroCommon";

export default function AboutPage() {
    return (
        <>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <HeroCommon />
                   <About/>
                </div>
            </div>
        </>
    );
}