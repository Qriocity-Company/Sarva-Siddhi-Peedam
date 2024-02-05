"use client"


import DonatePopup from "@/components/donate-popup";
import Faqs from "@/components/faq";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";

import Steps from "@/components/steps";
import Testimonials from "@/components/testimonials";
import Video from 'next-video'
import agnihotram from "@/videos/agnihotram.mp4"

import { useEffect, useState } from "react";

export default function Home() {
  const [open,setOpen] = useState(false);

  useEffect(() => {
    
    const timeoutId = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => clearTimeout(timeoutId);

  }, []); 
  return (
    <div className="w-full overflow-x-hidden">
      {/* {open && <DonatePopup setOpen={setOpen} /> } */}
      <HeroSection/>
      <Steps/>
      <Testimonials/>
      <Faqs/>

      <div className="relative py-20 font-khand w-full flex flex-col items-center">

        <iframe className="rounded-md w-[90%] md:w-[80%] md:h-[70vh]"  src="https://www.youtube.com/embed/1e2yru-hDfA?si=FV4uRP4wxY6N1_O_" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>


        {/* <Image src={last} alt="agnihotram" className="md:w-[80vw]"></Image> */}
        <div className="absolute z-20 bottom-[30%] md:bottom-[25%] right-[8%] md:right-[15%]">
          <h1 className="text-[24px] md:text-[64px] leading-[32px] md:leading-[66px] font-[700] text-[#FFA63E]">Agnihotram</h1>
          <p className="text-[12px] md:text-[36px] leading-[15px] md:leading-[38px] text-white">Fire Element - Protection</p>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
