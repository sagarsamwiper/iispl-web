import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const SolutionPage = () => {
    return (
        <section id="vision-mission" className="py-16 md:py-20 lg:py-5 flex flex-wrap items-center relative">
            <div className="container flex flex-wrap items-center">
                <div className="w-full lg:w-1/2">
                    <SectionTitle
                        title="Our Solutions"
                        paragraph=""
                        center={false}
                        mb="8px"
                    />
                    <div className="max-w-3xl mx-auto text-left bg-black rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">IISPL offers Advanced Banking Technology</h2>
                        <ul className="list-disc list-inside">
                            <li className="text-lg text-gray-400 mb-2">
                                CORE BANKING Solution and TBA
                            </li>
                            <li className="text-lg text-gray-400 mb-2">
                                Host to Host RTGS/NEFT facilityng
                            </li>
                            {/* <li className="text-lg text-gray-700 mb-2">
                                Interbank Ownership/Sponsorship based ATM facility with RUPAY enabled E-commerce
                            </li> */}
                            <li className="text-lg text-gray-400 mb-2">
                                Internet Banking with Non-financial Transactions
                            </li>
                            <li className="text-lg text-gray-400 mb-2">
                                SMS Banking – Alerts, Enquiries, Intimations etc.,
                            </li>
                            <li className="text-lg text-gray-400 mb-2">
                                IMPS - Immediate Payment System
                            </li>
                            <li className="text-lg text-gray-400 mb-2">
                                CTS - Host to Host Interfacing/Offline
                            </li>
                            <li className="text-lg text-gray-400 mb-2">
                                Mobile Banking / Missed call Banking
                            </li>
                            <li className="text-lg text-gray-400 mb-2">
                                CKYC, CIR, Social Security Scheme Integration
                            </li>
                            <li className="text-lg text-gray-400 mb-2">
                                UPI Interface for online payments
                            </li>
                            <li className="text-lg text-gray-400 mb-2">
                                E-Lobby (ATM, Cash Deposit, Pass Book Printing)
                            </li>
                            {/* <li className="text-lg text-gray-700 mb-2">
                                DBTL - Direct Benefit Transfer of LPG to Bank Accounts
                            </li>
                            <li className="text-lg text-gray-700 mb-2">
                                APBS – Aadhaar Payment Bridge System
                            </li>
                            <li className="text-lg text-gray-700 mb-2">
                                ACH – Debit and Credit
                            </li>
                            <li className="text-lg text-gray-700 mb-2">
                                Debit Mandate System Host to Host
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 pr-8 px-4 flex justify-center">
                    <Image
                        src="/images/solution.png"
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

export default SolutionPage;
