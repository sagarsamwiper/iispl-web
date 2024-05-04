"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="OUR TEAM"
          paragraph="We're here, ready and eager to assist you with all your financial needs. Reach out to us for personalized support and expert guidance every step of the way."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap items-center">
          {/* Image on the left */}
          <div className="w-full md:w-1/2 px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/coner.JPG" alt="video image" fill />
              </div>
            </div>
          </div>

          {/* Content on the right */}
          <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0">
            <div className="text-white">
              <p className="mb-4 ml-8 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Well trained and expertised teams from different locations:</p>
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

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
