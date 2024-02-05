"use client"
import Image from 'next/image'
import border from "../../assets/footer/footer-border.png"
import ModalCarousel from '@/components/modal-carousel'
import { useState } from 'react'

import firstImg from "@/assets/gallery/first/DSC00374.png"
import sixthImg from "@/assets/gallery/first/DSC00446.png"
import secondImg from "@/assets/gallery/first/DSC00457.png"

import thirdImg from "@/assets/gallery/first/DSC00462.png"
import fourthImg from "@/assets/gallery/first/DSC00511.png"
import fivthImg from "@/assets/gallery/first/DSC00540.png"
import seventhImg from "@/assets/gallery/first/DSC00464.png"
import eigthImg from "@/assets/gallery/first/DSC00466.png"
import ninthImg from "@/assets/gallery/first/DSC00472.png"
import tenthImg from "@/assets/gallery/first/DSC00500.png"
import eleventh from "@/assets/gallery/first/IMG-20240204-WA0056.png"
import tw from "@/assets/gallery/first/IMG-20240204-WA0057.png"

import DelhiFirst from "@/assets/gallery/second/20230625_171021.png"
import DelhiSecond from "@/assets/gallery/second/20230625_182559.png"
import DelhiThird from "@/assets/gallery/second/20230625_182601.png"
import DelhiFourth from "@/assets/gallery/second/20230625_182609.png"
import DelhiFivth from "@/assets/gallery/second/20230625_182828.png"
import DelhiSixth from "@/assets/gallery/second/IMG-20230625-WA0100.png"

import sarvaFirst from "@/assets/gallery/third/20230930_093428.png";
import sarvaSecond from "@/assets/gallery/third/20230930_101542.png";
import sarvaThird from "@/assets/gallery/third/20230930_125020.png";
import sarvaFourth from "@/assets/gallery/third/20230930_125023.png";
import sarvaFifth from "@/assets/gallery/third/20230930_163238.png";

import BangaloreFirst from "@/assets/gallery/fourth/20231209_101212.png";
import BangaloreSecond from "@/assets/gallery/fourth/20231209_115954.png";
import BangaloreThird from "@/assets/gallery/fourth/20231210_143320.png";
import BangaloreFourth from "@/assets/gallery/fourth/20231210_143359.png";
import BangaloreFifth from "@/assets/gallery/fourth/20231210_143614.png";
import BangaloreSixth from "@/assets/gallery/fourth/20231210_143616.png";
import BangaloreSeventh from "@/assets/gallery/fourth/20231210_143627.png";
import BangaloreEighth from "@/assets/gallery/fourth/20231210_143700.png";

import ammaFirst from "@/assets/gallery/fivth/DSC00492.png";
import ammaSecond from "@/assets/gallery/fivth/DSC00523 (1).png";
import ammaThird from "@/assets/gallery/fivth/DSC00555.png";
import ammaFourth from "@/assets/gallery/fivth/DSC00570.png";
import ammaFifth from "@/assets/gallery/fivth/DSC00572.png";
import ammaSixth from "@/assets/gallery/fivth/DSC00577 (1).png";
import ammaSeventh from "@/assets/gallery/fivth/Screenshot 2024-02-03 at 10.15.png";
import ammaEighth from "@/assets/gallery/fivth/Screenshot 2024-02-03 at 10.16.png";
import ammaNinth from "@/assets/gallery/fivth/Screenshot 2024-02-03 at 11.39 (1).png";
import ammaTenth from "@/assets/gallery/fivth/Screenshot 2024-02-03 at 11.39.png";
import ammaEleventh from "@/assets/gallery/fivth/Screenshot 2024-02-03 at 11.41.png";
import ammaTwelfth from "@/assets/gallery/fivth/Screenshot 2024-02-03 at 11.44.png";

import mahaFirst from "@/assets/gallery/sixth/WhatsApp Image 2024-02-03 at 2.15 (1).png"
import mahaSecond from "@/assets/gallery/sixth/WhatsApp Image 2024-02-03 at 2.15 (2).png"
import mahaThird from "@/assets/gallery/sixth/WhatsApp Image 2024-02-03 at 2.16.png"
import mahaFourth from "@/assets/gallery/sixth/new-1.jpg"
import mahaFivth from "@/assets/gallery/sixth/new-2.jpg"

import spaceFirst from "@/assets/gallery/seventh/20240121_115328.png"
import spaceSecond from "@/assets/gallery/seventh/20240121_170636.png"

import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react'
import GalleryComponent from '@/components/gallery-component'
import Footer from '@/components/footer'


const First = ()=>{

  const [open,setOpen] = useState(false);

  const firstData = [
    sixthImg,
    eigthImg,
    ninthImg,
    secondImg,
    fivthImg,
    seventhImg,
    firstImg,
    thirdImg,
    fourthImg,
    tenthImg,
    eleventh,
    tw
  ]

  const handleOpen=()=>{
    document.body.style.overflow="hidden";
    setOpen(true);
  }

  return(
    <div className=' w-full bg-[#F5F2ED] md:p-6 flex flex-col items-center'>
      <div className='text-center bg-[#FFA63E] text-black w-[90%] my-10 font-[700] text-[20px]leading-[25px] md:text-[44px]  md:leading-[53px] py-3 md:py-6 border-[1px] border-black'>
        Energy Retreat - Recognize the Five Elements - Thiruvanamalai
      </div>
      <h2 className='md:text-[30px] w-[90%] font-[600] text-[18px] leading-[20px] md:leading-[45px] text-center'>
      Thiruvanamalai a 3 day retreat between 7th to 9th April 2023
      </h2>

      <div className='flex w-[90%] md:flex-row flex-col items-start justify-between md:gap-14 gap-8 md:my-10 my-8'>
        <div className='flex flex-col gap-6 w-full md:w-[40%]'>
          <div className='w-fit bg-[#D4D4D4] py-2 px-6 border-[1px] border-black font-[600] text-[18px] leading-[20px] md:text-[24px] md:leading-[25px]'>
            Topics Covered :
          </div>
          <div className='text-[17px] leading-[24px]  md:text-[20px] md:leading-[30px]'>
            <ol className=' list-decimal pl-4'>
              <li>Sankalpa Dhyana and Deepening with Silence practices</li>
              <li>Mantra Diksha, Homa and Power of Sound and Light</li>
              <li>Visualisation and Manifestation</li>
              <li>Light / Sound / Water / Colour Meditation - Art in Meditation</li>
              <li>Night Walk Girivalam & Night Chanting and Satsang</li>
            </ol>
          </div>
        </div>
        <div className='flex flex-col gap-6 w-full md:w-[40%]'>
          <div className='w-fit bg-[#D4D4D4] py-2 px-6 border-[1px] border-black font-[600] text-[18px] leading-[20px] md:text-[24px] md:leading-[25px]'>
            Program Outcome
          </div>
          <div className='text-[17px] leading-[24px]  md:text-[20px] md:leading-[30px]'>
          Developed an appreciation for nature&apos;s five elements within and without. Learnt simple methods of body, mind and balance. Realised the importance of sound, light and colour in our lives and how they can help to create safer, calmer and pristine environments for us.
          </div>
        </div>

        <div className='w-full md:w-[20%]'>
          <h2 className='text-[#FFA63E] text-[70px] leading-[74px] md:text-[102px] md:leading-[109px] font-[700]'>25</h2>
          <h1 className='text-[30px] md:text-[41px] leading-[34px] md:leading-[44px] font-[700]'>
          People attended the event
          </h1>
        </div>
      </div>


      <div className='w-[90%] p-4 md:p-8 border-black border-[1px] relative flex justify-center items-center'>
        <Image src={sixthImg} onClick={handleOpen} alt='img' className='md:h-[500px] w-auto object-contain'></Image>
        <ChevronLeftCircle onClick={handleOpen} className='absolute h-5 w-5 md:w-8 md:h-8 left-[0.5%] md:left-4 top-1/2 -translate-y-1/2'/>
        <ChevronRightCircle onClick={handleOpen} className='absolute h-5 w-5 md:w-8 md:h-8 right-[0.5%] md:right-4 top-1/2 -translate-y-1/2'/>
      </div>

      {open && <ModalCarousel images={firstData} setOpen={setOpen} videos={["https://www.youtube.com/embed/uNGUPTONWak?si=6gtu97GEdWCIqRQ1","https://www.youtube.com/embed/mn4tf22H6SQ?si=-rwMWIcNH1zUZL93"]}/>}
    </div>
  )
}

const page = () => {
  return (
    <div className='w-full flex flex-col items-center font-khand'>

        <h1 className="my-4 md:my-12 text-center  md:leading-[72px] text-[40px] md:text-[68px] font-bold ">Gallery</h1>

        <Image src={border} alt='-' className='w-full mb-10 md:mb-20'></Image>

        <First/>

        <GalleryComponent title={"Karma Cleaning- Delhi Blessing - June 2023"} content={"An evening where 63 people gathered to receive one on one blessings from Aiyya They received good karma blessings from Aiyya and gave him their bad karma. A self transformative experience. People were amazed at the energy exchange from Aiyya for all the 63 people who had come there."} images={[DelhiSixth,DelhiSecond,DelhiFourth,DelhiFivth,DelhiFirst]} firstImg={DelhiSixth} last={false}
        videos={["https://www.youtube.com/embed/6SaRs8UdBa4","https://www.youtube.com/embed/R31L4RytjA0?si=xUN7Fe1ZrBZCAWcf"]} attendee={"63+"}/>


        

        <GalleryComponent title={"Sarva Siddhi Sankalpa Dhyanam - Receiving Energy  Delhi 2 day Stage 1 and 2 - September 2023"} content={"A 2 day program, 20 people gathered to experience the divine energy and further practised karma cleaning with the Siva Lingam Meditation. Many reported that they slept well, had a magical experience, and experienced weightlessness. Their continued practise has given them phenomenal changes in life. Share testimonials"} images={[sarvaSecond,sarvaFirst,sarvaThird,sarvaFourth,sarvaFifth,]} firstImg={sarvaSecond} last={false}
        videos={[]} attendee={"20+"}/>

        <GalleryComponent title={"Receiving Energy - Bangalore 2 day Stage 2 December 9th and 10th 2023"} content={"Karma Clearing, Aura Healing and Connection with Nature. Participants could get over past baggages and generate new found karma for themselves. They could experience energy without touch and they were mind blow as plants and trees responded to them. Share testimonials."} images={[BangaloreFifth,BangaloreFirst, BangaloreSecond, BangaloreThird, BangaloreFourth,  BangaloreSixth, BangaloreSeventh, BangaloreEighth]} firstImg={BangaloreFifth} last={false}
        videos={[]} attendee={"20+"}/>

        <GalleryComponent title={"Ammavasai Celebrated on Jan 11th 2024"} content={"Amavasya Homam and Your Life in your Hands Workshop, - At Dharapuram.On this day we saw an ethereal experience of the divine flow of energy at the Peedam followed by a session revealing the secrets of the form and formlessness of the Shiva Lingam."} images={[ammaFifth,ammaNinth,   ammaSeventh, ammaEighth , ammaTenth, ammaEleventh, ammaTwelfth,ammaFourth,ammaSecond, ammaThird,  ammaSixth,]} firstImg={ammaFifth} last={false} videos={[]} attendee={"100+"}/>

        <GalleryComponent title={"Mahashivratri Celebrations (2022)"} content={"Around 150 people attend this celebration every year from all parts of South India. At Dharapuram the celebration is pure in the essence of Shivratri from mantra chanting to Vibhuti Abhishekam, Anna dhanam and a Grand Homam. The place vibrates with the high energy of Chanting “Om Namah Sivaya” throughout the night. An event worth participating for true followers of the Shiva Shakti Cosmos."} images={[mahaFourth,mahaFivth,mahaFirst,mahaSecond,mahaThird]} firstImg={mahaFourth} last={false} videos={[]} attendee={"150+"}/>

        <GalleryComponent title={"Space: Formlessness to Form : Science Conference Chennai 21st jan 2024."} content={"Swami Aiyya’s take on Theory of space was presented by his First Disciple : Jayanthi Amma at a science conference in Chennai. The paper was well received by ISRO scientists and HOD of Philosophy. The audience was convinced with the truth in the presentation and have invited our team to participate in National Forums on Science and Spirituality."} images={[spaceFirst,spaceSecond]} firstImg={spaceFirst} last={true} videos={[]} attendee={"100+"}/>

        
        <Footer/>
    </div>
  )
}

export default page