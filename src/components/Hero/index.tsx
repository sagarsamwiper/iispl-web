import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{ position: "relative" }}
      >
        <Image
          src="/images/banking.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="container relative z-10">
          <div className="mx-auto max-w-[800px] text-center">
            <h1 className="mb-5 text-3xl font-bold font-serif leading-tight text-black dark:text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              INTELLECTUAL INFO SOLUTIONS Pvt Ltd (IISPL)
            </h1>
            <p className="mb-12 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
              Empowering Business through Innovative IT
              <br />
              An ISO 9001:2015, ISO/IEC 27001:2013 Certified Company
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
