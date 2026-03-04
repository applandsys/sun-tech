import {getPageWidgets} from "@/services/getPageData";
import Contact from "@/components/Contact";

export default async function ContactPage() {
    const getWidget = await getPageWidgets('about');
    const aboutData = {
        widgets: getWidget
    }
    return (
        <>
            <Contact data={aboutData} />
        </>
    );
}