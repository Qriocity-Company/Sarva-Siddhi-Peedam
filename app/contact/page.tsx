"use client"
import Image from "next/image"
import Link from "next/link"
import header from "../../assets/contact/contact-header.png"
import map from "../../assets/contact/map.png"

import quora from "../../assets/contact/Quora.svg"
import fb  from "../../assets/footer/fb.png"
import insta from "../../assets/footer/insta.png"
import youtube from "../../assets/footer/youtube.png"
import ContactFooter from "@/components/contact-footer"
import { useState } from "react"

const page = () => {
    
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        message: "",
      });
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if(formData.number.length!=10){
            return;
        }
        try {
          const response = await fetch("/api/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log("Email sent successfully");
            // You can add further logic here for success
          } else {
            console.error("Error sending email");
            // You can add further logic here for error handling
          }
          setFormData({
            name: "",
            number: "",
            email: "",
            message: "",
          });
        } catch (error) {
          console.error("Error:", error);
          // You can add further logic here for error handling
        }
      };
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

  return (
    <div className="w-full font-khand  flex flex-col items-center">

        <div className="relative w-full">
            <Image src={header} alt="Contact Us" className="w-full h-[30vh]  object-cover md:h-auto"></Image>
            <h1 className="drop-shadow-lg text-white absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-center leading-[50px] md:leading-[100px] text-[48px] md:text-[96px] font-bold ">Get in  <span className="text-[#FFA63E]">Touch</span></h1>
        </div>
        <div className="flex flex-col w-[90%] items-center">

            <h2 className="my-5 md:my-10 font-[700] text-center text-[40px] md:text-[48px] ">LET&apos;S ANSWER YOUR QUERIES</h2>

            <form onSubmit={(e)=>handleSubmit(e)} className="w-full">

                <div className="block md:flex gap-32">
                    <div className="flex flex-col gap-y-4 w-full md:w-[50%]">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-[500] text-[20px] text-[#919191]">FIRST NAME</label>
                            <input type="text" name="name" onChange={(e)=>handleChange(e)} className="p-3 border-[1px] border-[#8E8E8E80] outline-none w-full" required/>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-[500] text-[20px] text-[#919191]">MOBILE NUMBER</label>
                            <input required type="number" name="number" onChange={(e)=>handleChange(e)}  className="p-3 border-[1px] border-[#8E8E8E80] outline-none w-full"/>
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="font-[500] text-[20px] text-[#919191]">EMAIL</label>
                            <input required type="text" name="email" onChange={(e)=>handleChange(e)} className="p-3 border-[1px] border-[#8E8E8E80] outline-none w-full"/>
                        </div>

                    </div>
                    <div className="w-full md:w-[50%] mt-4 md:mt-0 flex flex-col gap-1">
                        <label htmlFor="" className="font-[500] text-[20px] text-[#919191]">LEAVE A MESSAGE FOR US</label>
                        <textarea required name="message" onChange={(e)=>handleChange(e)} className=" w-full p-3 border-[1px] border-[#8E8E8E80] outline-none h-full" placeholder="" />
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
                {/* <Image onClick={openGoogleMap} src={map} alt="location" className="order-2"></Image> */}
                <iframe className="order-2 rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.896708009696!2d77.5574706!3d10.742443699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9bfe3744d4f1d%3A0x607fdcd7f6639d9a!2ssri%20pratyangira%20devi%20velvi%20peedam!5e0!3m2!1sen!2sin!4v1707076635809!5m2!1sen!2sin" width="600" height="450" loading="lazy" ></iframe>
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