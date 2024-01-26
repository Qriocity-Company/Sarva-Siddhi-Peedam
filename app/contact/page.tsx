
import Image from "next/image"
import Link from "next/link"
import header from "../../assets/contact/contact-header.png"
import map from "../../assets/contact/map.png"

import quora from "../../assets/contact/Quora.svg"
import fb  from "../../assets/footer/fb.png"
import insta from "../../assets/footer/insta.png"
import youtube from "../../assets/footer/youtube.png"
import ContactFooter from "@/components/contact-footer"

const page = () => {
  return (
    <div className="w-full font-khand  flex flex-col items-center">

        <div className="relative w-full">
            <Image src={header} alt="Contact Us" className="w-full h-[30vh]  object-cover md:h-auto"></Image>
            <h1 className="drop-shadow-lg text-white absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-center leading-[50px] md:leading-[100px] text-[48px] md:text-[96px] font-bold ">Get in  <span className="text-[#FFA63E]">Touch</span></h1>
        </div>
        <div className="flex flex-col w-[90%] items-center">

            <h2 className="my-5 md:my-10 font-[700] text-center text-[40px] md:text-[48px] ">LET&apos;S ANSWER YOUR QUERIES</h2>

            <form action="" className="w-full">

                <div className="block md:flex gap-32">
                    <div className="flex flex-col gap-y-4 w-full md:w-[50%]">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-[500] text-[20px] text-[#919191]">FIRST NAME</label>
                            <input type="text"  className="p-3 border-[1px] border-[#8E8E8E80] outline-none w-full"/>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-[500] text-[20px] text-[#919191]">MOBILE NUMBER</label>
                            <input type="text"  className="p-3 border-[1px] border-[#8E8E8E80] outline-none w-full"/>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-[500] text-[20px] text-[#919191]">EMAIL</label>
                            <input type="text"  className="p-3 border-[1px] border-[#8E8E8E80] outline-none w-full"/>
                        </div>

                    </div>
                    <div className="w-full md:w-[50%] mt-4 md:mt-0 flex flex-col gap-1">
                        <label htmlFor="" className="font-[500] text-[20px] text-[#919191]">LEAVE A MESSAGE FOR US</label>
                        <textarea className=" w-full p-3 border-[1px] border-[#8E8E8E80] outline-none h-full" placeholder="" />
                    </div>
                </div>

                <div className="mt-12 block md:flex justify-between items-center">
                    <div className="order-2">
                        <button type="submit" className="bg-[#FFA63E] text-white text-[20px] font-[500] p-3 px-10 rounded-lg flex items-center">SUBMIT</button>
                    </div>
                    <div className="block md:flex order-1 gap-8 md:mt-0 mt-8">
                        <span className="text-[30px] font-[500]">FOLLOW OUR SOCIALS</span>
                        <div className="flex gap-8 mt-4 md:mt-0">
                            <Link href="">
                                <Image src={insta} alt="Instagram" className="h-8 w-8 object-contain"></Image>
                            </Link>
                            <Link href="">
                                <Image src={fb} alt="Facebook" className="h-8 w-8 object-contain"></Image>
                            </Link>
                            <Link href="">
                                <Image src={quora} alt="Quora" className="h-8 w-8 object-contain"></Image>
                            </Link>
                            <Link href="">
                                <Image src={youtube} alt="Youtube" className="h-8 w-8 object-contain"></Image>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>

            {/* map section */}
            <div className="block md:flex  gap-5 lg:gap-10 my-24 justify-between items-center">
                <Image src={map} alt="location" className="order-2"></Image>
                <div className="order-1 mt-5 md:mt-0">
                    <h1 className="font-[700] text-[30px] leading-[42px] lg:leading-[48px] lg:text-[35px]">Sarva Siddhi Peedam</h1>
                    <p className="text-[26px] leading-[30px] lg:text-[32px] lg:leading-[42px]">Samy Nagar, Dharapuram, Tamil Nadu, Dharapuram, Tamil Nadu 638673</p>
                </div>
            </div>
        </div>

        <ContactFooter/>
    </div>
  )
}

export default page