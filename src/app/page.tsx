import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import OurValuesPage from "@/components/vision/OurValues";
import VisionMissionPage from "@/components/vision/VisionMission";
import ExpertiesPage from "@/components/vision/experties";
import SolutionPage from "@/components/vision/oursolution";
import StreanthPage from "@/components/vision/serviceStreanth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <VisionMissionPage/>
      <OurValuesPage/>
      <Video />
      <ExpertiesPage/>
      <StreanthPage/>
      <SolutionPage/>
      <Features />
      {/* <Brands /> */}
      <AboutSectionTwo />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
