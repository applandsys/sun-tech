import About from "@/components/About";
import Hero from "@/components/Hero";
import BreadCrumb from "@/components/BreadCrumb";
//import {getPageWidgets} from "@/services/getPageData";

export default async function AboutPage() {
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
            name: "About Us",
            url: "/about",
        }
    ];

    return (
        <>

            <BreadCrumb data={breadCrumbData} pageTitle="About Us"/>
            <div className="mt-4">
                <About data={aboutData} />
            </div>


            {/*<Hero />*/}

        </>
    );
}