import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-black to-gray-900" style={{ position: "relative" }}>
      {/* <Image
          src="/images/image2.JPG"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        /> */}
        <div className="container relative z-10">
          <SectionTitle
            title="VALUE ADDED SERVICES"
            paragraph="Empowering your banking experience with innovative Value Added Services."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
