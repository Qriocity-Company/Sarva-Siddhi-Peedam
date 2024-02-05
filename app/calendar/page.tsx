"use client"

import Image from "next/image"
import headerImg from "@/assets/calendar/calendar-header.png"


import borderImg from "@/assets/footer/footer-border.png"
import PastProgrammes from "@/components/past-programmes"
import Footer from "@/components/footer"
import { useState } from "react"
import DonatePopup from "@/components/donate-popup"


const CalendarHeader = ()=>{
    const [open,setOpen] = useState(false)

    return (
        <div className="w-full text-white font-khand relative">
            <Image src={headerImg} alt="img" className="h-[40vh] md:h-auto w-full object-cover"></Image>

            <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[80%] md:w-[50%] flex flex-col gap-y-4 md:gap-y-6">
                <h1 className="text-[30px] leading-[35px] md:text-[76px] md:leading-[82px] font-[700]">Maha Shivratri Celebrations</h1>
                <p className="text-[15px] leading-[18px] md:text-[27px] md:leading-[37px] font-[500]">March 8th @Dharapuram between 4PM-4AM</p>
                <button className="w-fit text-white font-[700] text-[14px] md:text-[18px] leading-[25px] bg-[#371D15] px-6 md:px-10 py-2 md:py-3 rounded-md border-none " onClick={()=>setOpen(true)}>Register Now</button>
            </div>
            {open && <DonatePopup setOpen={setOpen}/>}
        </div>
    )
}

const timeline_data_1 = [
    {
        date:"Feb 9th",
        content:"Amavasya Celebrations Mantra Chanting & Homa Live telecast"
    },
    {
        date:"Feb 17th",
        content:"Chakra Healing, Bangalore"
    },
    {
        date:"Feb 18th",
        content:"Sessions for Kids, Bangalore"
    },
    {
        date:"Feb 16th & 23rd",
        content:"Satsang from 4pm to 6pm"
    },
    {
        date:"Feb 24th",
        content:"Poornima Celebrations with Satsang"
    },
]
const timeline_data_2 = [
    {
        date:"March 1st to 7th ",
        content:"Mahashivratri Classes"
    },
    {
        date:"March 8th",
        content:"Mahashivratri Celebrations"
    },
    {
        date:"March 15th & 22nd",
        content:"Satsang from 4pm to 6pm"
    },
    {
        date:"March 24th",
        content:"Poornima Celebrations with Satsang"
    },
    {
        date:"March 29th to 31st",
        content:"Stage 2 and 3 Thiruvanamalai Retreat"
    },
   
]
interface TimelineProps {
    data:
        {
            date:string,
            content:string
        }[]
    
}
const TimeLine = ({data}:TimelineProps)=>{
    return (
        <div className="w-full font-khand relative flex flex-col items-center text-black my-16">

            <div className="flex justify-center md:justify-normal md:flex-col w-[90%] items-center gap-y-6">

                <div className="flex flex-col md:hidden items-center h-full">
                    <div className="h-5  w-5 bg-black border-none rounded-full"></div>
                    <div className={`w-1 h-[70px] bg-black`}></div>
                    {
                        Array.from({ length: 5 }).map((_,index)=>{
                            return(
                                <div key={index} className={`h-full flex flex-col items-center `}>
                                    <div  className="rounded-full border-[3px] border-black p-2">
                                        <div className="h-6 w-6 bg-[#FFA63E] border-none rounded-full">

                                        </div>
                                    </div>
                                    <div className={`w-1 ${index===4?'h-[70px]':'h-[100px]'} bg-black`}>

                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="h-5  w-5 bg-black border-none rounded-full"></div>
                </div>
                <div className="hidden md:flex items-center w-full">

                    <div className="h-5  w-24 bg-black border-none rounded-full">
                    </div>
                    <div className="h-1 bg-black w-[34%]"></div>
                    {
                        Array.from({ length: 5 }).map((_,index)=>{
                            return(
                                <div key={index} className={` flex  items-center ${index===4?'w-[49.8%]':'w-full'}`}>
                                    <div  className="rounded-full border-[3px] border-black p-2">
                                        <div className="h-6 w-6 bg-[#FFA63E] border-none rounded-full">

                                        </div>
                                    </div>
                                    <div className={`h-1 bg-black w-full  `}>

                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="h-5 w-24 bg-black border-none rounded-full">
                    </div>
                    
                </div>

                <div className="flex flex-col md:flex-row w-[60%] md:w-[100%] gap-y-20 md:gap-y-0 gap-x-4">
                    {data.map((event,index)=>{
                        return (
                            <div key={index} className=" flex gap-y-1 md:gap-y-4 flex-col items-center text-[16px] md:text-[20px] leading-[26px] w-full">
                                <h2 className="font-[700]">{event.date}</h2>
                                <p className="text-center w-[70%]">{event.content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

const February = ()=>{

    const [open,setOpen] = useState(false)

    return (
        <div className="w-full font-khand relative flex flex-col items-center text-black">

           <h1 className="my-8 md:my-12 font-[700] leading-[26px] text-[24px] md:text-[48px] md:leading-[51px] text-center">February</h1> 

            <div className="w-[80%] flex flex-col items-center gap-y-6">
                <div className="w-full bg-[#F5F2ED] border-2 border-black shadow-[2px_4px_0px_#000000] px-4 py-4 flex flex-col items-center justify-center rounded-lg gap-y-4">
                    <h2 className="text-[#FFA63E] font-[700] leading-[26px] text-[24px] md:text-[32px] md:leading-[38px] text-center">STAGE 1 : SANKALPA MUDRA INITIATION </h2>
                    <p className="font-semibold text-[18px] leading-[24px] md:text-[22px] md:leading-[29px]">
                     Topic:  UNDERSTANDING Maha Mudra
                    </p>
                    <p className="font-semibold text-[18px] leading-[24px] md:text-[22px] md:leading-[29px]">
                    Upcoming Class Dates - Feb 10th & 11th 
                    </p>
                    <p className="font-semibold text-[18px] leading-[24px] md:text-[22px] md:leading-[29px]">
                    Mode : Online (Zoom)
                    </p>
                  
                </div>
                {/* <div className="w-full bg-[#F5F2ED] border-2 border-black shadow-[2px_4px_0px_#000000] px-4 py-4 flex items-center justify-center rounded-lg">
                    <p className="text-[18px] leading-[24px] md:text-[22px] md:leading-[29px]">
                    February Every weekends Sat and Sun Zoom class Stage 1 between 5pm - 7pm.
                    </p>
                </div> */}
            </div>
            <button className="w-fit font-[700] mt-8 text-[22px] leading-[29px] bg-[#FFA63E] px-12 py-3 flex items-center rounded-md border-none hover:bg-[#ff9114] text-white" onClick={()=>setOpen(true)}>Book Your Slots Now</button>

            <TimeLine data={timeline_data_1}/>
            {open && <DonatePopup setOpen={setOpen}/>}
        </div>
    )
}
const MarchApril = ()=>{


    const marchContent = [
        { title: "Date", content: "1st March to 8th March" },
        { title: "Location", content: "Dharapuram" },
        { title: "Languages", content: "Tamil, English & Hindi" },
        { title: "Day 1", content: "Sarva Siddhi Sankalpa Dhyanam" },
        { title: "Day 2", content: "Siva Chakra Dhyana" },
        { title: "Day 3", content: "Siva Mantra Chanting" },
        { title: "Day 4", content: "Siva Yoga State" },
        { title: "Day 5", content: "Siva Deepam - Cosmic Dance" },
        { title: "Day 6", content: "Siva Gyanam" },
        { title: "Day 7", content: "Siva Lingam Dhyanam" },
        
      ];
    const ShivratriContent = [
        { title:"", content:"Program Schedule"},
        { title: "4pm-6pm -", content: "Inauguration" },
        // { title: "", content: "Book release on Shiva yatrai written by Swami Sarvanandar" },
        { title: "6pm-8pm -", content: "Homam and vibhuti abhishekam and panchasharam chanting." },
        { title: "8pm-9pm -", content: "Dinner" },
        { title: "9pm-11pm -", content: "Dasapashanam lingam, paal abhishekam" },
        { title: "11pm-2am -", content: "Shiva vadhyam and Cosmic dance" },
        { title: "2am-4am -", content: "Concluding with satsang and Shiva dhyanam" },
    ];
      

    const [open,setOpen] = useState(false)
    return (
        <div className="w-full font-khand relative flex flex-col items-center text-black">

            <h1 className="my-8 md:my-12 font-[700] leading-[26px] text-[24px] md:text-[48px] md:leading-[51px] text-center">March</h1> 

            <div className="w-[90%] md:w-[80%] bg-[#F5F2ED] border-2 border-black shadow-[2px_4px_0px_#000000] px-4 py-6 block md:flex  justify-around rounded-lg  ">

                <div className="flex flex-col md:w-[40%] w-full gap-y-4 md:px-12">
                    <h2 className="text-[#FFA63E] font-[700] leading-[26px] text-[24px] md:text-[32px] md:leading-[38px] ">Mahashivratri Event Agenda</h2>

                    {
                        marchContent.map((item,index)=>{
                            return (
                                <div className="flex gap-2" key={index}>
                                    <span className="font-semibold text-[18px] leading-[24px] md:text-[22px] md:leading-[29px] text-[#FFA63E]">{item.title} -</span>
                                    <p key={index} className="font-semibold text-[18px] leading-[24px] md:text-[22px] md:leading-[29px]">
                                    {item.content}
                                    </p>
                                </div>

                            )
                        })
                    }
                </div>
                <div className="mt-8 md:mt-0 flex  flex-col md:w-[50%] w-full gap-y-4 md:text-center text-left">
                    <h2 className="text-[#FFA63E] font-[700] leading-[26px] text-[24px] md:text-[32px] md:leading-[38px] text-left md:text-center">Main Event Day 8- Siva Padhathil Mahashivratri - Mahashivratri celebrations </h2>

                    {
                        ShivratriContent.map((item,index)=>{
                            return (
                                <div className="flex gap-2" key={index}>
                                    <span className="font-semibold text-[18px] leading-[24px] md:text-[22px] md:leading-[29px] text-[#FFA63E] w-fit text-nowrap md:w-auto">{item.title} </span>
                                    <p key={index} className="font-semibold text-[18px] leading-[24px] md:text-[22px] md:leading-[29px]">
                                    {item.content}
                                    </p>
                                </div>

                            )
                        })
                    }
                </div>
                
            </div>
            
            <button className="w-fit mt-8 font-[700] text-[22px] leading-[29px] bg-[#FFA63E] px-12 py-3 flex items-center rounded-md border-none hover:bg-[#ff9114] text-white" onClick={()=>setOpen(true)}>Register Now</button>

            <TimeLine data={timeline_data_2}/>


            {open && <DonatePopup setOpen={setOpen}/>}
        </div>
    )
}

const pujaData=[
    {
        title:"Sri Chakra and Maha Meru Worship:",
        content:"For healing and transformation within and without",
    },
    {
        title:"Prathyangira Devi Homam:",
        content:"For release from negative effects and obstacles in life",
    },
    {
        title:"Special Occasions Puja/ Homam:",
        content:"Birthdays and Anniversaries, for general well being",
    },
    {
        title:"Sankalpa Puja:",
        content:"For specific life threating issues",
    },
]
const PujaDetails = ()=>{
    const [open,setOpen] = useState(false)
    return (
        <div className="w-full font-khand  flex flex-col items-center mb-10">

            <h1 className="my-8 md:my-12 font-[700] leading-[26px] text-[24px] md:text-[48px] md:leading-[51px] text-center">Puja Details</h1> 

            <div className="w-[90%]">

                {pujaData.map((element,index)=>{
                    return(
                        <div key={index} className="mb-6 w-full bg-[#F5F2ED] border-2 border-black shadow-[2px_4px_0px_#000000] px-4 py-4 md:flex-row flex-col flex md:items-center justify-between rounded-lg text-[16px] leading-[22px] gap-y-3 md:text-[22px] md:leading-[29px]">
                            <span className="flex-1 font-[700] md:w-[25%]">{element.title}</span>
                            <span className="flex-1">{element.content}</span>
                            <div className="flex-1 md:justify-end flex">
                                <button className="w-fit font-[700] text-[16px] leading-[22px] md:text-[22px] md:leading-[29px] bg-[#FFA63E] px-2 md:px-8 py-2 md:py-3 flex items-center rounded-md border-none hover:bg-[#ff9114] text-white" onClick={()=>setOpen(true)}>Register Now</button>

                            </div>
                        </div>
                    )
                })}

            </div>
            {open && <DonatePopup setOpen={setOpen}/>}
        </div>
    )
}



const page = () => {
  return (
    <div className="w-full font-khand  flex flex-col items-center">

        <h1 className="my-4 md:my-12 text-center  md:leading-[72px] text-[40px] md:text-[68px] font-bold "><span className="text-[#FFA63E]">Event </span> Calendar</h1>

        <CalendarHeader/>

        <February/>

        <Image src={borderImg} alt="-" className="w-full object-cover my-10 md:my-20"></Image>

        <MarchApril/>
        
        <Image src={borderImg} alt="-" className="w-full object-cover my-10 md:my-20"></Image>

        <PujaDetails/>

        {/* <PastProgrammes/> */}

        <Footer/>
    </div>
  )
}

export default page