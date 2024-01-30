import Image from "next/image"
import headerImg from "@/assets/calendar/calendar-header.png"


import borderImg from "@/assets/footer/footer-border.png"
import PastProgrammes from "@/components/past-programmes"
import Footer from "@/components/footer"


const CalendarHeader = ()=>{
    return (
        <div className="w-full text-white font-khand relative">
            <Image src={headerImg} alt="img" className="h-[40vh] md:h-auto w-full object-cover"></Image>

            <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[80%] md:w-[50%] flex flex-col gap-y-4 md:gap-y-6">
                <h1 className="text-[30px] leading-[35px] md:text-[76px] md:leading-[82px] font-[700]">Maha Shivratri Celebrations</h1>
                <p className="text-[15px] leading-[18px] md:text-[27px] md:leading-[37px] font-[500]">March 8th @Dharapuram between 4AM-4PM</p>
                <button className="w-fit font-[700] text-[14px] md:text-[18px] leading-[25px] bg-[#FFA63E] px-6 md:px-10 py-2 md:py-3 rounded-md border-none hover:bg-[#ff9a26]">Register Now</button>
            </div>
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
        content:"Chakra Healing, Rainbow Drive Layout, Bangalore"
    },
    {
        date:"Feb 18th",
        content:"Sessions for Kids, Rainbow Drive Layout, Bangalore"
    },
    {
        date:"Feb 16th & 23rd",
        content:"Satsang from 4pm to 6pm"
    },
    {
        date:"Feb 24th",
        content:"Poornima Celebrations with Satsang and SSSD class Stage 1"
    },
]
const timeline_data_2 = [
    {
        date:"March 1st, 15th & 22nd",
        content:"Satsang from 4pm to 6pm"
    },
    {
        date:"March 24th",
        content:"Poornima Celebrations with Satsang and SSSD class Stage 1"
    },
    {
        date:"March 29th to 31st",
        content:"Stage 2 and 3 Thiruvanamalai Retreat"
    },
    {
        date:"April : 1st week",
        content:"Delhi: Second Stage Training program and Ayodhya sessions."
    },
    {
        date:"April : 2nd week",
        content:"April ProgramStage 1 & 2 @ Dharamshala."
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
                                <div key={index} className={` flex w-full items-center ${index===4?'w-[49.8%]':'w-full'}`}>
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

                <div className="flex flex-col md:flex-row w-[60%] md:w-[100%] gap-y-14 md:gap-y-0 gap-x-4">
                    {data.map((event,index)=>{
                        return (
                            <div className=" flex gap-y-1 md:gap-y-4 flex-col items-center text-[16px] md:text-[20px] leading-[26px] w-full">
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
    return (
        <div className="w-full font-khand relative flex flex-col items-center text-black">

           <h1 className="my-8 md:my-12 font-[700] leading-[26px] text-[24px] md:text-[48px] md:leading-[51px] text-center">February</h1> 

            <div className="w-[80%] flex flex-col items-center gap-y-6">
                <div className="w-full bg-[#F5F2ED] border-2 border-black shadow-[2px_4px_0px_#000000] px-4 py-4 flex items-center justify-center rounded-lg">
                    <p className="text-[18px] leading-[24px] md:text-[22px] md:leading-[29px]">
                        <span className="font-[700]">
                            STAGE 1 :
                        </span>
                        SANKALPA MUDRA INITIATION - UNDERSTANDING Maha Mudra : Classes will be held ONLINE Feb 3rd, 4th, 10th, 11th.
                    </p>
                </div>
                <div className="w-full bg-[#F5F2ED] border-2 border-black shadow-[2px_4px_0px_#000000] px-4 py-4 flex items-center justify-center rounded-lg">
                    <p className="text-[18px] leading-[24px] md:text-[22px] md:leading-[29px]">
                    February weekends Sat and Sun Zoom class Stage 1 between 10-12pm.
                    </p>
                </div>
            </div>

            <TimeLine data={timeline_data_1}/>

            <button className="w-fit font-[700] text-[22px] leading-[29px] bg-[#FFA63E] px-12 py-3 flex items-center rounded-md border-none hover:bg-[#ff9114] text-white">Register Now</button>
        </div>
    )
}
const MarchApril = ()=>{
    return (
        <div className="w-full font-khand relative flex flex-col items-center text-black">

            <h1 className="my-8 md:my-12 font-[700] leading-[26px] text-[24px] md:text-[48px] md:leading-[51px] text-center">March-April</h1> 

            <div className="w-[80%] flex flex-col items-center gap-y-6">
                <div className="w-full bg-[#F5F2ED] border-2 border-black shadow-[2px_4px_0px_#000000] px-4 py-4 flex items-center justify-center rounded-lg">
                    <p className="text-[18px] leading-[24px] md:text-[22px] md:leading-[29px]">
                        <span className="font-[700]">
                            STAGE 1 :
                        </span>
                        SANKALPA MUDRA INITIATION - UNDERSTANDING Maha Mudra : Classes will be held ONLINE March 2nd, 3rd, 16th, 17th, 23rd.
                    </p>
                </div>
                <div className="w-full bg-[#F5F2ED] border-2 border-black shadow-[2px_4px_0px_#000000] px-4 py-4 flex items-center justify-center rounded-lg">
                    <p className="text-[18px] leading-[24px] md:text-[22px] md:leading-[29px]">
                    March 1st to March 7th we will be special classes between 9-12 PM at Sarva Siddhi Peedam, Dharapuram.
                    </p>
                </div>
            </div>

            <TimeLine data={timeline_data_2}/>

            <button className="w-fit font-[700] text-[22px] leading-[29px] bg-[#FFA63E] px-12 py-3 flex items-center rounded-md border-none hover:bg-[#ff9114] text-white">Register Now</button>
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
    return (
        <div className="w-full font-khand  flex flex-col items-center">

            <h1 className="my-8 md:my-12 font-[700] leading-[26px] text-[24px] md:text-[48px] md:leading-[51px] text-center">Puja Details</h1> 

            <div className="w-[90%]">

                {pujaData.map((element,index)=>{
                    return(
                        <div key={index} className="mb-6 w-full bg-[#F5F2ED] border-2 border-black shadow-[2px_4px_0px_#000000] px-4 py-4 md:flex-row flex-col flex md:items-center justify-between rounded-lg text-[16px] leading-[22px] gap-y-3 md:text-[22px] md:leading-[29px]">
                            <span className="flex-1 font-[700] md:w-[25%]">{element.title}</span>
                            <span className="flex-1">{element.content}</span>
                            <div className="flex-1 md:justify-end flex">
                                <button className="w-fit font-[700] text-[16px] leading-[22px] md:text-[22px] md:leading-[29px] bg-[#FFA63E] px-2 md:px-8 py-2 md:py-3 flex items-center rounded-md border-none hover:bg-[#ff9114] text-white">Register Now</button>

                            </div>
                        </div>
                    )
                })}

            </div>

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

        <PastProgrammes/>

        <Footer/>
    </div>
  )
}

export default page