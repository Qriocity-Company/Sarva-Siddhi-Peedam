import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

import firstImg from "@/assets/home/step-1.png"
import secondImg from "@/assets/home/step-2.png"
import thirdImg from "@/assets/home/step-3.png"
import fourthImg from "@/assets/home/step-4.png"

const SingleStep= ({title,content,img,even,last}:{title:string, content:string, img:StaticImport, even:boolean , last:boolean})=>{
    return (
        <div className='w-full block md:flex justify-between items-center mt-10 md:mt-20'>
            <div className={`w-full md:w-[50%] flex items-center  ${even?'order-2 justify-end':' order-1 justify-start'}`}>
                <Image src={img} alt="img"></Image>
            </div>
            <div className={`mt-4 md:mt-0 w-full md:w-[50%] flex flex-col items-start ${even?'order-1':'order-2'}`}>
                <h2 className="font-[600] text-[25px] md:text-[55px]">{title}</h2>
                <p className="mt-2 text-[20px] leading-[24px] md:text-[36px] md:leading-[48px] ">
                    {content}
                </p>
                {last && (<p className="text-[20px] leading-[24px] md:text-[36px] md:leading-[48px] mt-6">All is One, All is Love, All is Sarva Ananda!!</p>)}
            </div>
        </div>
    )
}

const stepsData = [
    {
        title:"Receiving",
        img:firstImg,
        content:"Let’s learn about universal energy in its grandeur. Work towards connecting with our source and tapping the energy We have been separated long enough from the source, we teach you to reconnect with the universal energy.",
        even:false,
        last:false
    },
    {
        title:"Saving",
        img:secondImg,
        content:"Let’s recognise we are a part of the source,learn to save energy and use it to synchronise our body, mind and soul with the five elements of nature for our betterment.",
        even:true,
        last:false
    },
    {
        title:"Sharing",
        img:thirdImg,
        content:"Let’s share goodness and god-ness with all creations. Direct experience of sharing universal energy with all living beings will be initiated and the phenomenon would be Magical.",
        even:false,
        last:false
    },
    {
        title:"Blessings",
        img:fourthImg,
        content:"Finally let’s merge in the divine source to become one and resolve to bless others as a reflection of your own divinity. Let’s find the path towards realising",
        even:true,
        last:true
    },
    
]

const Steps = () => {
  return (
    <div className='font-khand py-12 px-8 w-full flex items-center justify-center'>
    <div className='w-[90%] flex flex-col items-center'>
        <h1 className='text-center leading-[46px] md:leading-[72px] text-[40px] md:text-[68px] font-bold '>Four Steps to <span className='text-[#FFA63E]'>Divinity</span> </h1>

        {stepsData.map((step,index)=>{
            return <SingleStep key={index} img={step.img} content={step.content} title={step.title} even={step.even} last={step.last}/>
        })}

    </div>
    </div>
  )
}

export default Steps