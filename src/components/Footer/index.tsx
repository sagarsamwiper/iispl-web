"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* Add your footer content here */}
          </div>
        </div>
        <div className="text-center py-6 text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; Copyright 2017-2020 IISPL. Designed & Maintained by Ahobala Lifetech - All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
