"use client"

import Image from "next/image"
import quote from "@/assets/home/quote-testimonial.png"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
 
  } from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"

const testimonials =[
    {
        content:"I have been guided by the Divine Grace to meet Swami Aiyya in the year 2016. I have had the biggest fortune of spending hours one on one with my guru learning the secrets of life and living, entwined with ancient wisdom of form and energy (Shiva Shakti).",
        name:"Jayanthi Muthukrishnan",
        place:"Bangalore"
    },
    {
        content:"Engaging in this meditation practice has brought extraordinary benefits to my whole family and positive transformations have occurred. My husband’s migraine and acidity has been healed. It is impossible to capture the immense gratitude we feel for this transformative experience.",
        name:"Tanushree",
        place:"New Delhi"
    },
    {
        content:"I attended the Panchabootha meditation session. I observed and felt how nature connects with us when we pay attention to nature in a very subtle way. Thanks to Aiyya n Jayanthi for conducting the session.",
        name:"Pavani",
        place:"Bangalore"
    },
    {
        content:"Aiyya has simply taught us to be still in the present and be natural and normal, it is real self realisation. Thanks Aiyya, gratitude from my heart. This beautiful retreat has made me embrace my inner being with  tranquillity and peace !!!",
        name:"Chandra Vadanan",
        place:"Chennai"
    },
    {
        content:"With a very open mind I attended this class and the experience has been profound. Between yoga and other spiritual practices, what I learnt here has just stumped me. I felt energy in nature. It has blown my mind. I am truly grateful and have a newfound appreciation for everything in life.",
        name:"Aditya",
        place:"Bangalore"
    },
    {
        content: "I stumbled upon Swami Aiyya's teachings during a challenging period in my life. The wisdom and guidance received were like a beacon of light, leading me towards inner peace and self-discovery. The transformative power of these teachings is truly remarkable.",
        name: "Rajesh",
        place: "New Delhi"
      }
]

const Testimonials = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api) {
          return
        }
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1)
        })
      }, [api])

    const onLeftClick = ()=>{
        if (!api) {
            return
        }
        api.scrollPrev();
        setCurrent(api?.selectedScrollSnap())
    }
    const onRightClick = ()=>{
        if (!api) {
            return
        }
        api.scrollNext();
        setCurrent(api?.selectedScrollSnap())
    }

    const checkNextOrPrev=(index:number)=>{
        if(index===(current-1))
            return true;
        if(current-1<0 && index===testimonials.length-1){
            return true;
        }
        if(index===(current+1)){
            return true;
        }
        if(current+1>=testimonials.length && index===0){
            return true;
        }
    }

  return (
    <div className="w-full flex flex-col items-center font-khand py-10">

        <h1 className="text-center font-[600] text-[40px] md:text-[68px]"><span className="text-[#FFA63E]">Words </span> of Wisdom</h1>
        <Carousel 
            plugins={[
                Autoplay({
                delay: 5000,
                }),
            ]}
            opts={{
                loop:true
            }}
            setApi={setApi}
            className="w-[90%] md:w-[130%] pb-[120px] overflow-x-hidden mt-4 md:mt-10">

            <CarouselContent className="md:-ml-60">
                
                {testimonials.map((testimonial,index)=>{
                    return (
                        <CarouselItem className={`pb-10 basis1/1 md:basis-1/3 lg:basis-1/5 md:pl-[9rem]`} key={index}>
                            <div className={`relative py-6 px-10 h-[540px] md:h-[480px] md:w-[400px] bg-[#F5F2ED] rounded-md 
                               `}>
                                <Image src={quote} alt="''"></Image>

                                <p className="mt-4 font-[500] text-[21px] leading-[31px]">
                                    {testimonial.content}
                                </p>

                                <div className="absolute bottom-[5%]">
                                    <h3 className="mt-6 font-[700] text-[22px]">
                                        {testimonial.name}
                                    </h3>
                                    <p className="font-[400] text-[22px]">
                                        {testimonial.place}
                                    </p>
                                </div>
                                
                            </div>
                        </CarouselItem>
                    )
                })}
                
                
            </CarouselContent>
            {/* <CarouselPrevious onClick={onLeftClick} className="left-[37%] md:left-[47.8%] top-[90%] bg-[#FFA63E]"/>
            <CarouselNext  onClick={onRightClick} className="right-[37%] md:right-[47.8%] top-[90%] bg-[#FFA63E]  "/> */}
        </Carousel>
    </div>
  )
}

export default Testimonials