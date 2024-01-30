"use client"

import React, { useEffect, useState } from 'react'
import tiruppur from "@/assets/calendar/tiruppur-carousel.png"
import kollam from "@/assets/calendar/kollam-carousel.png"
import baba from "@/assets/calendar/baba.png"
import mangalore from "@/assets/calendar/mangalore.png"
import delhi from "@/assets/calendar/delhi.png"
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
 
  } from "@/components/ui/carousel"
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react'

const carouselData = [
    {
        name:"Tiruppur",
        img:tiruppur
    },
    {
        name:"Kollam",
        img:kollam
    },
    {
        name:"Coimbatore",
        img:baba
    },
    {
        name:"Mangalore",
        img:mangalore
    },
    {
        name:"Delhi",
        img:delhi
    },
]

const PastProgrammes = () => {

    const [currentIndex,setCurrentIndex] = useState(0);

    const nextSlide=()=>{
        if(currentIndex===4){
            setCurrentIndex(0);
        }
        else{
            setCurrentIndex((prev)=>prev+1);
        }
    }
    const prevSlide=()=>{
        if(currentIndex===0){
            setCurrentIndex(4);
        }
        else{
            setCurrentIndex((prev)=>prev-1);
        }
    }

  return (
    <div className='w-full font-khand  flex flex-col items-center mb-24 mt-8'>

        <h1 className="my-10 md:my-12 text-center leading-[26px] md:leading-[73px] text-[24px] md:text-[72px] font-bold ">Past <span className='text-[#FFA63E]'>Programmes</span></h1>

        <div className='relative w-[90%] md:w-[80%] border-[1px] border-black flex items-center justify-center p-8 pb-12 md:p-12 md:pb-20'>

            <div className="">
        
                {carouselData.map((item,index)=>{
                    return (
                        <div key={index} className={`transition-all ${currentIndex===index?'flex':'hidden'}`}>
                    
                                <Image src={item.img} alt={item.name} className='w-full h-[45vh] md:h-[70vh] object-contain'></Image>
                                <div className='text-white absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 rounded-[50px] px-8 md:px-12 py-3 bg-black text-[16px] md:text-[30px] transition'>
                                    {item.name}
                                </div>
                        </div>

                    )
                })}
                
                <ChevronLeftCircle className='h-5 w-5 md:h-8 md:w-8 absolute left-[0.5%] md:left-10 top-1/2 -translate-y-1/2' onClick={nextSlide}/>
                <ChevronRightCircle className='h-5 w-5 md:h-8 md:w-8 absolute right-[0.5%] md:right-10 top-1/2 -translate-y-1/2' onClick={prevSlide}/>
                  
            </div>
        </div>
    </div>
  )
}

export default PastProgrammes