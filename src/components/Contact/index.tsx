import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap justify-center lg:justify-between items-stretch">
          <div className="w-full lg:w-7/12 xl:w-8/12 px-4">
            <div
              className="h-full mb-12 rounded-2xl bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-gray-400">
                Our support team will get back to you ASAP via email.
              </p>
              <p className="mb-2 text-base font-medium text-gray-400">
                Email: support@iispl.in
              </p>
              <p className="mb-2 text-base font-medium text-gray-400">
                Bengaluru Tel: 080-2319 4606
              </p>
              <p className="mb-2 text-base font-medium text-gray-400">
                Tumakuru Tel: 0816-2251851
              </p>
            </div>
          </div>
          <div className="w-full lg:w-5/12 xl:w-4/12 px-4 rounded-2xl">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
