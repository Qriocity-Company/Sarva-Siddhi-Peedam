import Image from "next/image"
import borderImg from "@/assets/footer/footer-border.png"
import footerLogo from "@/assets/footer/footer-logo.png"
import call from "@/assets/footer/call.svg"
import location from "@/assets/footer/location.svg"



import Link from "next/link"
import { Globe2 } from "lucide-react"
const ContactFooter = () => {
  return (
    <div className="w-full flex flex-col items-center font-khand">
        <Image src={borderImg} alt="-" unoptimized className="w-full"></Image>
        <div className="py-10 md:py-12 w-[90%]">
            <div className="grid gap-y-4 grid-cols-1 md:row-cols-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-5">
                <div className="col-span-1 lg:col-span-2">
                    <Image src={footerLogo} alt="Sarva Sidhhi Peedam"></Image>
                    <p className="w-[90%] md:w-[80%] mt-3 md:mt-6 font-[500] leading-[28px] text-[18px] pl-0 md:pl-2">Swami Sarvanandhar has pioneered Sarva Siddhi Sankalpa Dhyanam, an ancient and simple meditation practise using the Sankalpa Mahamudra.</p>
                </div>
                <div className="mt-4 md:ml-8 col-span-1 lg:col-span-2">
                    <h2 className="font-[600] text-[36px]">Get in Touch</h2>
                    <div className="mt-2 md:mt-6 font-[500] leading-[28px] text-[18px] flex flex-col gap-6">
                        <div className="flex gap-6">
                            <Image src={location} alt="gmail"></Image>
                            <p>sarvasiddhipeedam@gmail.com</p>
                        </div>  
                        <div className="flex gap-6">
                            <Image src={call} alt="phone"></Image>
                            <p>(+91)-98863 67610 / (+91) - 90037 10199</p>
                        </div> 
                        <div className="flex gap-5 items-center">
                            <Globe2 className="h-8 w-8 text-[#FFA63E]"></Globe2>
                            <a href="https://chat.whatsapp.com/EGDK3HYAL5g3REz8e6pANI " target="_blank">Click To join our Community</a>
                        </div>   
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="font-[600] text-[36px]">Explore</h2>
                    <div className="mt-2 md:mt-6 font-[500] leading-[28px] text-[18px] flex flex-col gap-6">
                        <div className="flex items-center gap-16 lg:gap-0  lg:justify-between">
                            <Link href="/about">About Us</Link>
                            <Link href="/about">Programs</Link>
                        </div>  
                        <div className="flex items-center  gap-16 lg:gap-0  lg:justify-between">
                            <Link href="/about">Contact Us</Link>
                            <Link href="/about">Event Calender</Link>
                        </div>  
                         
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center mt-12 lg:mt-6">
                
                <div className="mt-12 md:mt-12 text-center md:text-justify text-[#646464] text-[13px] font-[400]">
                © 2024 - Sarva Sidhdhi Peedam All Right Reserved
                </div>

            </div>
        </div>
    </div>
  )
}

export default ContactFooter