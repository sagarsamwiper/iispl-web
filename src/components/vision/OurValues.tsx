import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const OurValuesPage = () => {
    return (
        <section id="our-values" className="py-5 md:py-5 lg:py-5 flex flex-wrap items-center relative">
            <div className="container">
                <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2 pr-8">
                            <SectionTitle
                                title="Our Values"
                                paragraph=""
                                center={false}
                                mb="8"
                            />
                            <div className="max-w-3xl mx-auto text-left">
                                <div className="bg-black rounded-lg shadow-lg p-6">
                                    <ul className="list-disc list-inside">
                                        <li className="text-lg text-gray-400 mb-4">
                                            <span className="font-bold">Growth:</span> Through excellence in service.
                                        </li>
                                        <li className="text-lg text-gray-400 mb-4">
                                            <span className="font-bold">Continuous Improvement:</span> By continuous learning & self-improvement and cultivate innovation and creativity.
                                        </li>
                                        <li className="text-lg text-gray-400 mb-4">
                                            <span className="font-bold">Client Focus:</span> Our clients and vendors are partners in our success.
                                        </li>
                                        <li className="text-lg text-gray-400 mb-4">
                                            <span className="font-bold">Professionalism:</span> We adopt a professional attitude in all of our transactions with clients & vendors.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 flex justify-center">
                            <Image
                                src="/images/home.JPG"
                                alt="Our Values Image"
                                width={600}
                                height={400}
                                className="rounded-lg"
                            />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurValuesPage;
