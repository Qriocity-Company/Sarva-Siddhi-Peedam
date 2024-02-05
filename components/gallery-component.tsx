"use client"


import Image, { StaticImageData } from "next/image"
import border from "@/assets/footer/footer-border.png"
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react"
import { useEffect, useState } from "react"
import ModalCarousel from "./modal-carousel"
import { useNavbarContext } from "@/context/NavbarContext"

interface GalleryComponentProps{
    title:string,
    content:string,
    images:StaticImageData[],
    firstImg:StaticImageData,
    last:boolean,
    videos:string[],
    attendee:string
}

const GalleryComponent = ({title,content,images,firstImg,last,videos,attendee}:GalleryComponentProps) => {

    const [open,setOpen] = useState(false);

    const { showNavbar, setShowNavbar } = useNavbarContext();


    const handleOpenModal = ()=>{
      document.body.style.overflow = 'hidden';
      setOpen(true);
      setShowNavbar(false);
    }

    // console.log("First image in gallery component : ",firstImg)
    // console.log("images arrray in gallery component : ",images);

  return (
    <div className={`${last?'pb-6 mb-10 md:mb-20':''}  w-full flex flex-col items-center bg-[#F5F2ED]`}>
        <Image src={border} alt="img" className="w-full md:my-20 my-10"></Image>

        <div className='text-center bg-[#FFA63E] text-black w-[90%] mb-10 font-[700] text-[20px]leading-[25px] md:text-[44px]  md:leading-[53px] py-3 md:py-6 border-[1px] border-black px-4'>
        {title}
        </div>
        <p className="w-[90%] md:w-[80%] text-center text-[15px] leading-[22px] md:text-[20px] md:leading-[30px] mb-6 md:mb-6">{content}</p>

        {<div className="w-[90%] mb-6 md:mb-12 flex justify-center gap-4 items-center">
            <h2 className='text-[#FFA63E] text-[50px] leading-[54px] md:text-[102px] md:leading-[109px] font-[700]'>{attendee}</h2>
            <h1 className='text-[30px] md:text-[41px] leading-[30px] md:leading-[44px] font-[700]'>
            People were Benefitted
            </h1>
        </div>}

        <div className='w-[90%] p-4 md:p-8 border-black border-[1px] relative flex justify-center items-center'>
        <Image src={firstImg} onClick={handleOpenModal} alt='img' className='max-h-[300px] md:max-h-full md:h-[500px] w-auto object-contain'></Image>
        <ChevronLeftCircle onClick={handleOpenModal} className='absolute h-5 w-5 md:w-8 md:h-8 left-[0.5%] md:left-4 top-1/2 -translate-y-1/2'/>
        <ChevronRightCircle onClick={handleOpenModal} className='absolute h-5 w-5 md:w-8 md:h-8 right-[0.5%] md:right-4 top-1/2 -translate-y-1/2'/>
      </div>
    
      {open && <ModalCarousel images={images} setOpen={setOpen} videos={videos}/>}
    </div>
  )
}

export default GalleryComponent