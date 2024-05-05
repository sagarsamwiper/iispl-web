import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const ExpertiesPage = () => {
    return (
        <section id="vision-mission" className="py-16 md:py-20 lg:py-5 flex flex-wrap items-center relative">
            <div className="container flex flex-wrap items-center">
                <div className="w-full lg:w-1/2">
                    <SectionTitle
                        title="Our Expertise"
                        paragraph=""
                        center={false}
                        mb="8px"
                    />
                    <div className="max-w-3xl mx-auto text-left bg-black rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Domain Expert for</h2>
                        <ul className="list-disc list-inside">
                            <li className="text-lg text-gray-400 mb-2">
                                Banking /Finance
                            </li>
                            <li className="text-lg text-gray-400 mb-2">
                                Enterprise Resource Planning
                            </li>
                            <li className="text-lg text-gray-400 mb-2">
                                Customer Relationship Management
                            </li>
                            <li className="text-lg text-gray-400 mb-2">
                                Supply Chain Management
                            </li>
                            <li className="text-lg text-gray-400 mb-2">
                                HealthCare
                            </li>
                            <li className="text-lg text-gray-400 mb-2">
                                Web Applications
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 pr-8 px-4 flex justify-center">
                    <Image
                        src="/images/imag1.JPG"
                        alt="Vision and Mission Image"
                        width={600}
                        height={600}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default ExpertiesPage;
