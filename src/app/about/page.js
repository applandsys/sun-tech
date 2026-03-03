import About from "@/components/About";
import HeroCommon from "@/components/HeroCommon";
import {getPageWidgets} from "@/services/getPageData";

export default async function AboutPage() {
    const getWidget = await getPageWidgets('about');
    const aboutData = {
        widgets: getWidget
    }
    return (
        <>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <HeroCommon />
                    <About data={aboutData} />
                </div>
            </div>
        </>
    );
}