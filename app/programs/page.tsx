import Image from "next/image"

import headerImg from "@/assets/programs/programs-header.png"
import agni from "@/assets/programs/agnihotaram.png"
import surya from "@/assets/programs/suryanamaskar.png"
import guru from "@/assets/programs/guru-namaskar.png"
import mantra from "@/assets/programs/mantra-chanting.png"

import sankalpa from "@/assets/programs/sankalpa.svg"
import receiving from "@/assets/programs/receiving-energy.svg"
import saving from "@/assets/programs/saving-energy.svg"
import sharing from "@/assets/programs/sharing-energy.svg"
import blessing from "@/assets/programs/blessing-energy.svg"
import sankalpam from "@/assets/programs/sankalpam.svg"
import manifestation from "@/assets/programs/energy-manifestation.svg"
import chakravidya from "@/assets/programs/Sri-chakra-vidya.svg"
import srishti from "@/assets/programs/srishti.svg"
import paripoorna from "@/assets/programs/paripoorna.svg"
import Footer from "@/components/footer"

const headerCardsData =[
    {
        title:"AGNIHOTRAM",
        content:"First step to protect ourselves",
        img:agni
    },
    {
        title:"SURYA NAMASKAR",
        content:"Age old Technique of Energy Bath",
        img:surya
    },
    {
        title:"GURU NAMASKAR",
        content:"Gratitude to our GURU",
        img:guru
    },
    {
        title:"MANTRA CHANTING",
        content:"Step to bringing focus to the mind",
        img:mantra
    },
]

const stagesData = [
    {
        number:"01",
        title:"Sankalpa Mudra Initiation",
        content:"Understanding Sankalpa Maha Mudra",
        img:sankalpa
    },
    {
        number:"02",
        title:"Receiving Energy",
        content:"From the source methods and Methodologies",
        img:receiving
    },
    {
        number:"03",
        title:"Saving Energy",
        content:"Save Energy for our personal well-being & growth",
        img:saving
    },
    {
        number:"04",
        title:"Sharing Energy",
        content:"With all Living Beings BY Utilising the Power of Five Elements.",
        img:sharing
    },
    {
        number:"05",
        title:"Blessing Universal Energy",
        content:"Healing and Blessing Living beings for greater common good",
        img:blessing
    },
    {
        number:"06",
        title:"Sankalpam",
        content:"Visualization & Manifestation Techniques",
        img:sankalpam
    },
    {
        number:"07",
        title:"Energy Manifestation",
        content:"Using energy as the self defensive tool",
        img:manifestation
    },
    {
        number:"08",
        title:"Sri Chakra Vidhya",
        content:"Sri Chakra Meditation & Karma Clearing",
        img:chakravidya
    },
    {
        number:"09",
        title:"Srishti",
        content:"Become the Creator - Sammadhi State",
        img:srishti
    },
    {
        number:"10",
        title:"Paripoorna Nilai",
        content:"State of Becoming a Whole",
        img:paripoorna
    },
]

const dotsData = [
    {
        color:"#D2A166"
    },
    {
        color:"#E7AF6D"
    },
    {
        color:"#FFD000"
    },
    {
        color:"#FF9900"
    },
    {
        color:"#FDAF3A"
    },
    {
        color:"#FD803A"
    },
    {
        color:"#FD693A"
    },
    {
        color:"#FF602D"
    },
    {
        color:"#F47519"
    },
    {
        color:"#FF3E00"
    },
]

const specialProgramsData1 = [
    {
        heading:"Light & Colour -",
        content:"Space meditation"
    },
    {
        heading:"Sound Therapy",
        content:""
    },
    {
        heading:"Art in Meditation -",
        content:"Colour Therapy"
    },
    {
        heading:"Shiva Lingam -",
        content:"Meditation"
    },
    {
        heading:"Water Therapy",
        content:""
    },
    {
        heading:"Rebirth - ",
        content:"Back to the Womb"
    },
    {
        heading:"Lost in Paradise",
        content:""
    },
    {
        heading:"Atma & You -",
        content:"Not being born again"
    },
]
const specialProgramsData2 = [
    {
        heading:"Cosmic Dance -",
        content:"Deepa Vidhya"
    },
    {
        heading:"Trekking - ",
        content:"to Sacred Mountain Precincts"
    },
    {
        heading:"Travelling -",
        content:"to High Energy Spaces"
    },
    {
        heading:"Bindu Matra Chanting",
        content:""
    },
    {
        heading:"Sri Chakra Meditation and Healing",
        content:""
    },
    {
        heading:"Energy Protection",
        content:""
    },
    {
        heading:"Deep Silence Experience",
        content:""
    },
    {
        heading:"Sri Vidya Satsang",
        content:""
    },
]

const ProgramsHeader = ()=>{
    return(
        <div className="w-full relative flex flex-col items-center">
            <Image src={headerImg} alt="img" className="w-full h-[40vh] object-cover md:h-auto"></Image>

            <div className="text-white absolute right-[5%] top-[40%] -translate-y-1/2">
                <h1 className="text-[#FFA63E] font-[700] text-[25px] leading-[30px] md:text-[57px] md:leading-[61px]">Become a Light Being</h1>
                <p className="text-right text-[20px] leading-[22px] md:text-[40px] md:leading-[42px]">Stage 1 to 10</p>
            </div>

            
        </div>
    )
}

const HeaderCards= ()=>{
    return(
        <div className="w-full flex items-center justify-center my-12 md:my-20">
            <div className="w-[80%] grid md:grid-rows-2 md:grid-cols-2 grid-rows-1 grid-cols-1 gap-x-12 gap-y-6">
                {
                    headerCardsData.map((item,index)=>{
                        return(
                            <div key={index} className="p-8 bg-[#F5F2ED] border-[1.37px] border-black shadow-[1.37px_2.74px_0px_#000000] flex gap-x-6 rounded-md">
                                <Image src={item.img} alt={item.title} className="md:h-24 md:w-24 h-16 w-16"></Image>

                                <div className="flex flex-col text-[16px] md:text-[32px]">
                                    <h4 className="font-[700]">{item.title}</h4>
                                    <p className="leading-[18px] md:leading-[34px]">{item.content}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const Stages = ()=>{
    return(
        <div className="w-full flex flex-col items-center  mb-12 md:mb-20 mt-0">
            <h1 className="my-4 md:my-12 text-center  md:leading-[72px] text-[40px] md:text-[68px] font-bold ">Stages of <span className="text-[#FFA63E]">Light Being </span></h1>

            <div className="w-full bg-[#F5F2ED] px-4 md:px-0 py-12 md:py-20">

                {/* <h4 className="mb-10 md:mb-20 text-center text-[22px] md:text-[32px] ">Stage 1 is an online class, all other classes will be 2 to 3 day retreats</h4> */}

                <div className="flex justify-center gap-x-6 md:gap-x-12">

                    <div className="flex flex-col gap-y-[4.15rem] md:gap-y-24 md:mt-0 mt-8">
                    {
                    stagesData.map((item,index)=>{
                        return(
                           <>
                           {
                            (index%2===0)?
                            <div key={index} className="flex justify-end">
                                <div className="h-[70px] w-[70px] md:w-[150px] md:h-[150px] relative bg-white rounded-full p-4 shadow-[0px_0px_16px_rgba(0,0,0,0.25)]">
                                    <Image src={item.img} alt={item.title} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:h-auto md:w-auto h-[40px] w-[40px]"></Image>

                                </div>
                            </div>:
                            <div key={index} className="flex flex-col items-end gap-y-2 md:gap-y-0">

                                <div className="flex items-end gap-1 md:gap-4">
                                    <span className="order-2 text-[40px] leading-[32px] md:text-[82px] md:leading-[81px]">{item.number}</span>
                                    <h3 className="order-1 font-[700] text-[16px] leading-[20px] md:text-[30px] md:leading-[50px] text-right">{item.title}</h3>
                                </div>
                                <p className="text-[16px] md:text-[24px] md:w-[70%] text-right">
                                    {item.content}
                                </p>
                            </div>

                            
                            }
                           </> 
                        )
                    })
                    }
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="h-[50px] bg-[#E5E0DF] w-[10px] md:w-[20px] "></div>
                    {
                        dotsData.map((item,index)=>{
                            return(
                                <div key={index} className="flex flex-col items-center">
                                    <div key={index} className="p-2  bg-white rounded-full">
                                        <div className={`h-5 w-5 md:h-10 md:w-10 rounded-full`} style={{backgroundColor:item.color}}>

                                        </div>
                                    </div>
                                    <div className={`${index===9?'hidden':'block'} 
                                    ${index<=1?'h-[110px] ':'h-[120px] md:h-[182]'}
                                    
                                    md:h-[182px] bg-[#E5E0DF] w-[10px] md:w-[20px]
                                     ${index===3?'md:h-[200px] h-[130px]':''}  
                                     ${index===4?'h-[135px]':''}  
                                    `}>

                                    </div>
                                </div>

                            )
                        })
                    }
                        
                    </div>

                    <div className="flex flex-col gap-y-16 md:gap-y-24 md:mt-4 mt-6">
                    {
                    stagesData.map((item,index)=>{
                        return(
                           <>
                            {
                            (index%2!==0)?
                            <div key={index} className="flex justify-start">
                                <div className="h-[70px] w-[70px] md:w-[150px] md:h-[150px] relative bg-white rounded-full p-4 shadow-[0px_0px_16px_rgba(0,0,0,0.25)]">
                                    <Image src={item.img} alt={item.title} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:h-auto md:w-auto h-[40px] w-[40px]"></Image>

                                </div>
                            </div>
                            :
                            <div key={index} className="flex flex-col gap-y-2 md:gap-y-0">

                                <div className="flex items-end gap-1 md:gap-4">
                                    <span className="text-[40px] leading-[32px] md:text-[82px] md:leading-[81px]">{item.number}</span>
                                    <h3 className="font-[700] text-[16px]  leading-[20px] md:text-[30px] md:leading-[50px]">{item.title}</h3>
                                </div>
                                <p className="text-[16px] md:text-[24px] md:w-[70%] text-left">
                                    {item.content}
                                </p>
                            </div>
                            }
                            
                           
                           </> 
                        )
                    })
                    }
                    </div>

                </div>

            </div>
        </div>
    )
}

const SpecialPrograms=()=>{
    return (
        <div className="w-full flex flex-col items-center mb-14 md:mb-28">
            <h1 className="my-4 md:my-12 text-center  md:leading-[72px] text-[40px] md:text-[68px] font-bold "><span className="text-[#FFA63E]">Special</span> Programs</h1>

            <div className="w-[90%] md:w-[80%] md:flex rounded-md border-2 border-black shadow-[4px_6px_0px_4px_#FFA63E] ">

                <div className="md:w-1/2 w-full flex flex-col gap-y-6 px-6 py-6">
                {
                    
                    specialProgramsData1.map((item,index)=>{
                        return (
                            <div key={index} className="flex text-[16px] md:text-[30px] gap-3">
                                <span className="font-[700]">{index+1+"."} </span>
                                <span className="font-[700]">{item.heading} </span>
                                <span>{item.content}</span>
                            </div>
                        )
                    })
                    
                }
                </div>
                <div className="md:w-1/2 w-full flex flex-col gap-y-6 md:border-l-2 border-black px-6 py-6  md:pt-6 pt-0">
                {
                    
                    specialProgramsData2.map((item,index)=>{
                        return (
                            <div key={index} className="flex text-[16px] md:text-[30px] gap-3">
                                <span className="font-[700]">{index+9+"."} </span>
                                <span className="font-[700]">{item.heading} </span>
                                <span>{item.content}</span>
                            </div>
                        )
                    })
                    
                }
                </div>

            </div>
        </div>
    )
}

const page = () => {
  return (
    <div className="w-full font-khand  flex flex-col items-center">
        <h1 className="my-4 md:my-12 text-center  md:leading-[72px] text-[40px] md:text-[68px] font-bold "><span className="text-[#FFA63E]">Our </span> Programs</h1>

        <ProgramsHeader/>
        <HeaderCards/>
        <Stages/>
        <SpecialPrograms/>
        <Footer/>
    </div>
  )
}

export default page