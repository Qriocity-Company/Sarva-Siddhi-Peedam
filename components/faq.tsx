"use client"

import { Plus } from "lucide-react";
import { useState } from "react";
import "../styles/faqs.css"

const faqs = [
    {
        question:"How is SSSD different from other forms of meditation?",
        answer:"SSSD is a simple technique that can be performed with eyes open as well as closed. At anytime of the day and anywhere."
    },
    {
        question:"How long does the practice take?",
        answer:"It is most beneficial if practised for 1 hour, initially 10 mins is powerful too."
    },
    {
      question:"What will I benefit from this meditation?",
      answer:"Clarity in all aspects of living - Letting go, Self Imporovement and Focus, Enhance mental, physical and material realm, Strong relationships with family and friends, Leadership qualities, Solving your own problems, Body and mind in Balance, Better organized, Energetic, Do something good for the world by realizing the absolute truth."
  },
    {
        question:"Is there a time and place to do this?",
        answer:"Any time and any place , take a few minutes to fine tune yourself before an important meeting, activity or event, so that you are in tune with nature and abundance will be provided to you."
    },
    {
        question:"How many different stages are in the curriculum of becoming a light being?",
        answer:"There are 10 stages to become a Light Being"
    },
    
]
const Faqs = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index:any) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

  return (
    <div className="w-full flex flex-col items-center font-khand">

        <h1 className="text-center leading-[46px] md:leading-[72px] text-[40px] md:text-[68px] font-bold "><span className="text-[#FFA63E]">Frequently </span>Asked Questions</h1>

        <div className='mt-4 md:mt-10 w-[90%] md:w-[70%]'>
      {faqs.map((item, index) => (
        
        <div key={index} className={`hover:bg-[#F5F2ED] transform p-2 md:p-8 bg-[#FBFAF8] text-black  transition-all duration-[300ms] ${(openIndex==index)?'bg-[#F5F2ED]':'bg-[#F5F2ED]'}`}>
          <div
            className="flex justify-between items-center p-2 cursor-pointer "
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex  items-center w-full">
             
              <div className="flex justify-between items-center w-full ">
                <div className={`flex serviceDiv  gap-5 items-center  `}>
                  
                  <div className="text-[25px] md:text-[42px] text-[#9D96A8] font-[700]">
                    {"0"+(index + 1)}
                  </div>
                  <span
                    className={`text-start font-[700] text-[18px] md:text-[34px] leading-[22px] md:leading-[41px] md:px-5`}
                  >
                    {item.question}
                  </span>
                </div>
                <div className={`${(openIndex==index)?'rotate-icon':''}`}>
                  <Plus className={`h-10 w-10 p-3 rounded-full ${(openIndex==index)?'rotate-icon bg-black text-white':''}`}/>
                </div>
              </div>
            </div>
          </div>
          
          <div className={` ${(openIndex==index)?'block':'hidden' } fade-in p-5  md:px-10  relative`}>
            <p className="text-gray-500 text-[16px] md:text-[22px] leading-[20px] md:leading-[32px]">{item.answer}</p>
          </div>
          
        </div>
      
      ))}
      </div>

        
    </div>
  )
}

export default Faqs