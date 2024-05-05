import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  const TableHeader = ({ text }) => (
    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
      {text}
    </th>
  );

  const TableRow = ({ slNo, financialYear, formNo, index }) => (
    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{slNo}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{financialYear}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{formNo}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href={`/pdf/${formNo}.pdf`} target="_blank" className="text-indigo-600 hover:text-indigo-900">
          Open
        </a>
      </td>
    </tr>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 relative bg-gradient-to-t from-black to-gray-900">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="About Us"
                paragraph=""
                mb="44px"
              />
              <SectionTitle
                title="Intellectual Info Solutions Pvt Ltd (IISPL)"
                paragraph="Here we redefine banking with cutting-edge Value Added Services tailored to elevate your financial journey. Discover a seamless blend of convenience, innovation, and personalized solutions designed to enrich your banking experience. Join us and unlock a new era of banking excellence."
                mb="44px"
              />
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <TableHeader text="Sl No" />
                      <TableHeader text="Financial Year" />
                      <TableHeader text="Form No" />
                      <TableHeader text="Open" />
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow slNo="1" financialYear="2019-2020" formNo="FORM NO. MGT-7." index={0} />
                    <TableRow slNo="2" financialYear="2020-2021" formNo="FORM NO. MGT-7" index={1} />
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 flex justify-center">
              <img
                src="/images/image3.JPG"
                alt="Right Image"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
