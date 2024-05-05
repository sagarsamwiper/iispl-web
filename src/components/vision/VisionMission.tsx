"use client"
import React, { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const VisionMissionPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="vision-mission" className="py-16 md:py-20 lg:py-28">
      <div className="container flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 pr-8">
          <div
            className={`relative overflow-hidden ${
              isHovered ? "rounded-lg" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src="/images/details.JPG"
              alt="Vision and Mission Image"
              width={600}
              height={600}
              className={`transition-transform duration-300 ${
                isHovered ? "scale-110" : "scale-100"
              } rounded-lg`}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <SectionTitle
            title="Our Vision and Mission"
            paragraph=""
            center={false}
            mb="8"
          />
          <div className="max-w-3xl mx-auto text-left bg-black rounded-lg shadow-lg">
            <ul className="list-disc list-inside">
              <li className="text-lg text-gray-400 mb-2">
                To excel in the areas of Information infrastructure Services.
              </li>
              <li className="text-lg text-gray-400 mb-2">
                To be a leading center of excellence in the provision of
                cost-effective and integrated solutions.
              </li>
              <li className="text-lg text-gray-400 mb-2">
                To provide full-fledged IT solutions/products with the best
                support and services to our clients in the Finance and Banking
                Domain to enhance business growth and revenue of our clients, by
                leveraging cutting-edge technologies and modern trends in the
                Fin-Tech industry.
              </li>
              <li className="text-lg text-gray-400 mb-2">
                To be a leading provider of advanced Core Banking Solution (CBS)
                Software to Co-operative Banks, Credit Co-operative societies,
                Souharda Sahakari, by using the recent innovations in the areas
                of IT, Internet-of-Things (IOT), ITES, Internet, and Mobile
                Technologies.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionPage;
