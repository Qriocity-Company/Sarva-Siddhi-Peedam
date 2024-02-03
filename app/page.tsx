import Faqs from "@/components/faq";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Steps from "@/components/steps";
import Testimonials from "@/components/testimonials";
import Video from 'next-video';
import Image from "next/image";
// import last from "../videos/agnihotram.mp4"
import last from "../assets/home/last.png"

export default function Home() {
  console.log("video asset : ",last);
  // const videoUrl = last.src;

  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection/>
      <Steps/>
      <Testimonials/>
      <Faqs/>

      <div className="relative py-20 font-khand w-full flex flex-col items-center">

        <Image src={last} alt="agnihotram" className="md:w-[80vw]"></Image>
        <div className="absolute z-20 bottom-[30%] md:bottom-[25%] right-[8%] md:right-[15%]">
          <h1 className="text-[28px] md:text-[64px] leading-[36px] md:leading-[66px] font-[700] text-[#FFA63E]">Agnihotram</h1>
          <p className="text-[14px] md:text-[36px] leading-[22px] md:leading-[38px] text-white">Fire Element - Protection</p>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
