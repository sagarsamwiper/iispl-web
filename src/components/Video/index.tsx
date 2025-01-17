"use client";

import Image from "next/image";

import SectionTitle from "../Common/SectionTitle";


const Video = () => {
  return (
    <section className="z-10 py-16 md:py-20 lg:py-28">
      <div className="container flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 pr-8">
          <Image
            src="/images/coner.JPG"
            alt="Vision and Mission Image"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <SectionTitle
            title="OUR TEAM"
            paragraph=""
            center={false}
            mb="8px"
          />
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full md:w-full px-4 mt-4 md:mt-0">
              <div className="text-white">
                <p className="mb-4 ml-8 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-1xl">Well trained and expertised teams from different locations:</p>
                <ul className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed" style={{ listStyle: 'none', paddingLeft: '1em' }}>
                  <li style={{ position: 'relative' }}>• Bengaluru Team</li>
                  <li style={{ position: 'relative' }}>• Tumkur Team</li>
                  <li style={{ position: 'relative' }}>• Bagalkot Team</li>
                  <li style={{ position: 'relative' }}>• Davanagere Team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
