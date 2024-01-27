import Image from "next/image"

import aboutFirst from "@/assets/about/about-first.png"
import aboutSecond from "@/assets/about/about-second.png"
import divider from "@/assets/footer/footer-border.png"

import AboutSwami from "@/components/about-swami"
import AboutTemple from "@/components/about-temple"
import Footer from "@/components/footer"

const aboutContent={
    meditationPractice : [
        {
          content: "Swami Sarvanandar has pioneered Sarva Siddhi Sankalpa Dhyanam, an ancient and simple meditation practice using the Sankalpa Mahamudra. A unique method to heal body, mind and soul."
        },
        {
          content: "This practice of meditation involves four steps: Receiving, Saving, Sharing, and Blessing."
        },
        {
          content: "The process of tapping universal energy, saving for our own healing and growth, sharing for the benefit of others, and Blessing with a true intention and resolve, our path to find DIVINITY IN US and SELFLESS LOVE."
        },
        {
          content: 'Swami Aiyya says “All of us are embodiments of love and we are all divine reflections of God, LET ME GUIDE YOU and help you find your TRUE SELF.'
        }
    ],
    trustInformation : [
        {
          content: "Sarva Siddhi Peedam Trust came into effect in the year 2023. Purpose of the Trust is to share this simple technique of SSSD to one and all."
        },
        {
          content: "Swami Aiyya has graciously agreed to share this technique that he has been experimenting with for the past two decades and this method would help us live life to the fullest."
        },
        {
          content: "A Life of harmony and balance"
        },
        {
          content: "A Life devoid of hatred and jealousy"
        },
        {
          content: "A Life filled with Sarva Ananda"
        },
        {
          content: "A Life overflowing with Divine Love…..day to day and always with the blessing of the Divine Mother."
        }
      ]
}

const page = () => {
  return (
    <div className="w-full overflow-x-hidden font-khand flex flex-col items-center">
        
        <h1 className="my-10 md:my-20 text-center leading-[72px] text-[60px] md:text-[68px] font-bold ">About <span className="text-[#FFA63E]">Us </span></h1>

        
        <div className="w-[90%] my-6 md:my-20 block md:flex items-center justify-between"> 
            <div className="order-2 md:w-[45%] w-full flex justify-center md:justify-end">
                <Image src={aboutFirst} alt="img" unoptimized className=""></Image>
            </div>
            <div className="order-1 md:w-[45%] w-full mt-8 md:mt-0">
                <div>
                    <h1 className="text-[#FFA63E] font-[700] text-[48px] leading-[51px]">Sarva Siddhi Sankalpa</h1>
                    <h1 className="text-black font-[700] text-[48px] leading-[51px]">Dhyanam (SSSD)</h1>
                </div>

                <div className="mt-10">
                    {aboutContent.meditationPractice.map((para)=>(
                        <p className="text-[20px] leading-[26.6px] mb-6">
                            {para.content}
                        </p>
                    ))}
                </div>
            </div>
        </div>

        <div className="w-[90%] my-6 md:my-10 block md:flex items-center justify-between">
            <div className="order-2 md:w-[45%] w-full flex justify-center md:justify-end">
                <Image src={aboutSecond} alt="img" unoptimized className=""></Image>
            </div>
            <div className="order-1 md:w-[45%] w-full mt-8 md:mt-0">
                <div>
                    <h1 className="text-black font-[700] text-[48px] leading-[51px]">Sarva Siddhi</h1>
                    <h1 className="text-[#FFA63E] font-[700] text-[48px] leading-[51px]">Dhyanam (SSSD)</h1>
                </div>

                <div className="mt-8">
                    {aboutContent.trustInformation.map((para)=>(
                        <p className="text-[20px] leading-[26.6px] mb-5">
                            {para.content}
                        </p>
                    ))}
                </div>
            </div>
        </div>
        <AboutSwami/>

        <div className="w-full mt-20">
            <Image src={divider} alt="" className="w-full" unoptimized></Image>
        </div>

        <AboutTemple/>
        <Footer/>
    </div>  
  )
}

export default page