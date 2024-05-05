"use client";

import Image from "next/image";

import SectionTitle from "../Common/SectionTitle";


const StreanthPage = () => {
  return (
    <section className="z-10 py-16 md:py-20 lg:py-28">
      <div className="container flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 pr-8">
          <Image
            src="/images/streanght.jpg"
            alt="Vision and Mission Image"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <SectionTitle
            title="Our Service Strength"
            paragraph=""
            center={false}
            mb="8px"
          />
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full md:w-full px-4 mt-4 md:mt-0">
              <div className="text-white">
                <p className="mb-4 ml-8 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-1xl">Service from IISPL gives your organization the power to:</p>
                <ul className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed" style={{ listStyle: 'none', paddingLeft: '1em' }}>
                  <li style={{ position: 'relative' }}>• To deliver superior service and support</li>
                  <li style={{ position: 'relative' }}>• Improve the outcome of every customer interaction.</li>
                  <li style={{ position: 'relative' }}>• Service Suite is powered by intelligent technology that is unmatched in the industry.</li>
                  <li style={{ position: 'relative' }}>• At the heart of our solution is out patented, self-learning, self-maintaining and self-organizing technology</li>
                  <li style={{ position: 'relative' }}>• The solution is designed with one goal in mind; The customer's success. </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreanthPage;
