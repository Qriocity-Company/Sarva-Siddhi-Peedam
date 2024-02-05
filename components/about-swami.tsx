import Image from "next/image";
import swamiImg from "@/assets/about/about-third.png"
const swamiInfo = [
  {
    content: "Swami Sarvanandhar, fondly known as Swami Aiyya was born to Saraswati Amma and Devaraj Aiyya. As a child he would like to spend time in silence and introspection and get lost in trance. Swami Aiyya had difficulties in speech as a teenager and usually maintained silence."
  },
  {
    content: "He loved to spend time in nature and temple premises. Developing a fondness for Lord Shiva, he spent many years chanting his name and also travelled to sacred mountain precincts to spend time in self-contemplation and samadhi. His creative persona chose art as a profession, an expert in Carnatic Music and proficient Flutist."
  },
  {
    content: "At the age of 25, he realized his true self and was attracted to God attributes. All of his learnings were from his Mansika Guru and couple of Living Guru’s, astral journeys and spiritual revelations, during trance, in silence or in meditation."
  },
  {
    content: "At the age of 35, he became a Devi Upasakar and developed into Mastering Sarva Siddhi Sankalpa Dhyanam. This led him to build Sri Pratyangira Devi Velvi Peedam, Dharapuram."
  },
  {
    content: "Swami Aiyya has always stepped up to provide Selfless love, motherly care and strong resolve to help people in distress, He has been guided by the divine to spread his learnings for greater common good."
  },
  {
    content: "He wishes for the world to speak the language of LOVE, to live in the environment of SARVA ANANDA and to feel PARIPOORNAM or feel fulfilled in all aspects of life."
  }
];

// Now you can use the array of objects as needed in your application.


const AboutSwami = () => {
  return (
    <div className="w-full flex flex-col items-center font-khand">
         <h1 className="my-12 mt-0 md:mt-12 text-center leading-[46px] md:leading-[72px] text-[40px] md:text-[68px] font-bold ">Swami <span className="text-[#FFA63E]">Sarvanandhar </span></h1>


        <div className="bg-[#F5F2ED] p-6 md:p-12 flex flex-col items-center relative">

          <div className="w-[90%]">
            <div className="md:w-[60%] z-20 relative">
              {swamiInfo.map((para,index)=>(
                <p key={index} className="text-[16px] leading-[22px] md:text-[20px] md:leading-[35.8px] mt-6">{para.content}</p>
              ))}
            </div>
          </div>

          <Image src={swamiImg} alt="img" className=" opacity-45 md:opacity-100 z-1 absolute right-0 bottom-0"></Image>
        </div>
    </div>
  )
}

export default AboutSwami