
import bgImg from "@/assets/home/hero-bg.png"
import objectImg from "@/assets/home/hero-object.png"
import quote from "../assets/home/quote.svg"
import Image from "next/image"

import '@/styles/hero.css'
import { Carousel ,CarouselContent,CarouselItem} from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"


const HeroSection = () => {

  const carouselData = [
    "Remember that you are the pure consciousness, which is immortal.",
    "Your pure consciousness is covered with knowledge, past experiences, and emotions. Learn to unlearn these aspects to become free.",
    "Form or matter evolves in space, space is the dark matter where all creations happen, understand that you are also a creator",
    "A powerful being such as you is capable of instilling values of God attributes, Selfless Love, Compassion and Harmony. Find the GOD in YOU",
    "Let us all live in Sarva Ananda, as a fulfilled being in the state of Paripoornam - the way to MOKSHA",
  ];

 

  return (
    <>
    <div className="w-full relative">
        <Image src={bgImg} alt="scenery" className="w-full h-[60vh] md:h-auto object-cover" unoptimized></Image>
        <Image src={objectImg} alt="" className="absolute w-[300px] md:w-[750px] right-[-6%] md:right-[4%] bottom-0 "></Image>
        <div className="text-white w-[60%] md:w-[41%] leading-[44px] md:leading-[88px] font-khand absolute left-[5%] md:left-[10%] top-[40%] translate-y-[-50%] md:block flex flex-wrap">
            <h1 className="text-[38px] md:text-[87px] font-[600]">
              Be Blessed with the <span className="text-[#FFA63E]">Divine Experience</span>  of Eternal Wealth  
            </h1> 
            <p className="mt-2 font-[300] text-[24px] md:text-[48px]">- Swami Sarvanandhar</p>
        </div>

    </div>
    <div className="bg-[#FFF9EE] p-6 pt-14 pb-12 font-khand flex flex-col justify-center items-center gap-y-2 relative">
        <Image src={quote} alt="-" className="h-8 w-8 md:h-auto md:w-auto absolute top-5 md:top-8 left-[5%] md:left-[10%]"></Image>
        {/* <Image src={quote} alt="-" className="h-8 w-8 md:h-auto md:w-auto absolute top-5 md:top-8 left-[5%] md:left-[10%] rotate-90"></Image> */}
        <h2 className="text-center font-bold text-[30px] md:text-[60px]">MESSAGE FROM SWAMI AYYA</h2>
        
        <div className=" w-[80%]">
          <Carousel 
            opts={{
              loop: true,
            }} 
            plugins={[
              Autoplay({
                delay: 4500,
              }),]}

            >
            <CarouselContent>
              {carouselData.map((item,index)=>{
                return (
                  <CarouselItem key={index}>
                    <p className="text-center font-regular text-[22px] leading-[28px] md:leading-[50px] md:text-[45px]">
                      {item}
                    </p>
                  </CarouselItem>
                )
              })}
            </CarouselContent>

          </Carousel>
         
        </div>

    </div>

    </>
  )
}

export default HeroSection