import About from "@/components/About";
import Hero from "@/components/Hero";
//import {getPageWidgets} from "@/services/getPageData";

export default async function FaqPage() {
    // const getWidget = await getPageWidgets('about');
    // const aboutData = {
    //     widgets: getWidget
    // }
    const aboutData = [];

    return (
        <>
            <div className="mt-5" style={{marginTop: '100px' , paddingTop: '100px'}}>
                <h1>Faq Goes Here </h1>
            </div>
        </>
    );
}