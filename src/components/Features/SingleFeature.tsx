import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary bg-opacity-10 text-primary dark:bg-opacity-20 dark:text-primary border-2 border-primary dark:border-primary">
        {icon}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black dark:text-white">{title}</div>
        <p className="text-base text-gray-700 dark:text-gray-300">{paragraph}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
