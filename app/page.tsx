import Faqs from "@/components/faq";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Steps from "@/components/steps";
import Testimonials from "@/components/testimonials";
import Image from "next/image";

import last from "../assets/home/home-last-img.png"

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection/>
      <Steps/>
      <Testimonials/>
      <Faqs/>

      <div className="relative py-20 font-khand w-full flex flex-col items-center">

        <Image src={last} alt="img" className="w-[90%] md:w-auto"></Image>
        <div className="absolute z-20 bottom-[30%] md:bottom-[25%] right-[8%] md:right-[15%]">
          <h1 className="text-[28px] md:text-[64px] leading-[36px] md:leading-[66px] font-[700] text-[#FFA63E]">Agnihotram</h1>
          <p className="text-[14px] md:text-[36px] leading-[22px] md:leading-[38px] text-white">Fire Element - Protection</p>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
