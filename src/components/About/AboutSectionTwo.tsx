import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28" style={{ position: "relative" }}>
      <Image
        src="/images/wp4316561.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="container relative z-10">
        <div className="grid gap-8">

          <div className="max-w-[470px] grid gap-6 justify-self-end">
            <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-primary">
              <h3 className="mb-2 text-2xl font-bold text-primary">
                Customer Master with C-KYC Integration
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                Elevate customer onboarding with our Customer Master solution seamlessly integrated with C-KYC, ensuring efficient and compliant processes. Streamline data management, enhance security, and deliver a frictionless experience for both customers and institutions.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-primary">
              <h3 className="mb-2 text-2xl font-bold text-primary">
                Loans and Advances, Overdrafts
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                Unlock financial opportunities with our flexible Loans and Advances, including convenient Overdraft options, tailored to meet your evolving needs. Empowering you to achieve your goals with ease and flexibility.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-primary">
              <h3 className="mb-2 text-2xl font-bold text-primary">
                Deposits – Fixed Deposits with Auto Renewals
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                Secure your savings and enjoy peace of mind with our Fixed Deposits featuring automatic renewals, ensuring continuous growth and convenience for your financial goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
