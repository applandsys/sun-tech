import About from "@/components/About";
import {getPageWidgets} from "@/services/getPageData";

export default async function AboutPage() {
    const getWidget = await getPageWidgets('about');
    const aboutData = {
        widgets: getWidget
    }
    return (
        <>
            <About data={aboutData} />
        </>
    );
}