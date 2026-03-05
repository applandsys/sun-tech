import React from 'react';
import Link from "next/link";

const BreadCrumb = ({ data, pageTitle }) => {
    return (
        <section
            className="breadcrumb-wrapper bg-cover fix"
            style={{ backgroundImage: "url('/assets/img/inner/breadcrumb-image.jpg')" }}
        >
            <div className="container">
                <div className="page-heading">
                    <ul className="breadcrumb-list">
                        {data?.map((item, index) => (
                            <li key={index}>
                                <Link href={item.url}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <h1 className="breadcrumb-title">{pageTitle}</h1>
                </div>
            </div>
        </section>
    );
};

export default BreadCrumb;