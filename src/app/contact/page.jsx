import Contact from "@/components/Contact";
import BreadCrumb from "@/components/BreadCrumb";


export default async function ContactPage() {

    const breadCrumbData = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Contact",
            url: "/contact",
        }
    ];


    return (
        <>
            <BreadCrumb data={breadCrumbData} pageTitle="Contact" />
            <Contact />
        </>
    );
}