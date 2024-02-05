
import Image, { StaticImageData } from 'next/image'
import { Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious } from './ui/carousel'
import { X } from 'lucide-react'

interface ModalCarouselProps {
    images:StaticImageData[],
    setOpen:(value:boolean)=>void,
    videos:string[]
}

const ModalCarousel = ({images,setOpen,videos}:ModalCarouselProps) => {

    const handleClose= ()=>{
        document.body.style.overflow = 'auto';
        setOpen(false);
        localStorage.removeItem("modalOpen");
    }

  return (
    <div className='fixed top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.8)] flex justify-center items-center px-20'>
        <X className='z-20 h-8 w-8 md:h-10 md:w-10 absolute right-4 top-[7rem] cursor-pointer text-white' onClick={handleClose}/>
        <Carousel opts={{
                loop:true
            }} className='w-[120%] md:w-[100%] md:mt-20'>
            <CarouselContent className=''>
                {
                    images.map((img,index)=>{
                        return(
                            <CarouselItem key={index} className='basis1/1 mx-5 flex items-center'>
                                <Image src={img} alt='img' className=' md:h-[600px] w-auto m-auto'></Image>
                            </CarouselItem>
                        )
                    })
                }
                {
                    videos.map((url,index)=>{
                        return(
                            <CarouselItem key={index} className='basis1/1 mx-5 flex items-center'>
                                <iframe 
                                    src={url}
                                    className='md:w-[600px] md:h-[600px] w-auto m-auto'
                                    title="BLESSINGS" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                                    
                                    </iframe>
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
            <CarouselPrevious className='h-5 w-5 md:h-10 md:w-10 z-100 bg-[#FFA63E] font-[700]'/>
            <CarouselNext className='h-5 w-5 md:h-10 md:w-10 z-100 bg-[#FFA63E] font-[700]'/>
        </Carousel>
    </div>
  )
}

export default ModalCarousel