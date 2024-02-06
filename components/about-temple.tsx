import Image, { StaticImageData } from "next/image"
import templeFirst from "@/assets/about/temple-1.png"
// import templeSecond from "@/assets/about/temple-2.png"
import templeSecond from "@/assets/about/goddess-bala.jpg"

const temples = [
    {
        title1:"Sri Pratyangira Devi",
        title2:"Velvi Peedam",
        content:[
            "Devi Pratyangira was perfected by two Rishis, Maharishi Pratyangaras and Maharishi Angiras. The Maha Yogmaya Devi herself declared that she would be known by the name “Pratyangira”. The Rishis, Angras and Prathyangaras, have shared Sri Maha Pratyangira Devi’s powerful mantra: “Om Sam Pakshak Jwala Jigwe Karala Thamstre Prathyangere Sham Hreem Hum pat”",
            "Pratyangira worship is only done by the guidance of a Guru who is proficient in Tantra and Mantra. Worships dedicated to Pratyangira are performed for the welfare of the people and for eliminating the influences of evil forces. Here at Dharapuram, Sri Pratyangira Devi Velvi Peedam, Pratyangira Homam is performed by her child Swami Sarvanandar on the days of Amavasya and Poornima."
        ],
        img:templeFirst
    },
    {
        title1:"Goddess Bala",
        title2:"Thripura Sundari",
        content:[
            "Bala Thripurasundari is the younger aspect and daughter of the Goddess Thripura Sundari. She is a prime and most important goddess of the Tantric Shri Vidya tradition. Residing in the Bindu of the Sri Chakra or Maha Meru, bearing the appearance of a nine- to eleven-year-old and possessing great powers, Goddess Bala Thripurasundari, is Adiparashakti herself.",
            "Thripura means the goddess who assumes the three forms. Bala as a child, fully grown as Thripura Bhairavi, and formless as Maha Thripurasundari. The Beeja Mantra chanting of “Aim Kleem Saum, Saum Kleem Aim” provides the seeker a calm and steady mind to face any adversities. Those who worship Bala Thripurasundari will achieve purity in the soul."
        ],
        img:templeSecond
    },

]

interface TempleComponentProps{
    img:StaticImageData,
    content:string[],
    title1:string,
    title2:string
}

const TempleComponent = ({img,content,title1,title2}:TempleComponentProps)=>{
    return(
        <div className="w-[90%] block md:flex justify-between font-khand mb-20 md:mb-40">
            <div className="md:w-[45%] rounded-lg w-full flex items-center justify-start ">
                <Image src={img} alt="temple image" className="" style={{borderRadius: '10%', width: '70%'}}></Image>
            </div>
            <div className="md:w-[45%] mt-8 md:mt-0 w-full flex flex-col justify-center">
                <div>
                    <h1 className="font-[700] text-[48px] leading-[54px]">{title1}</h1>
                    <h1 className="text-[#FFA63E] font-[700] text-[48px] leading-[54px]">{title2}</h1>

                </div>

                <div className="mt-4">
                    {content.map((para,index)=>(
                        <p key={index} className="text-[20px] leading-[32px] mt-4">
                            {para}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

const AboutTemple = () => {
  return (
    <div className="w-full flex flex-col items-center font-khand">
        <h1 className="my-10 md:my-20 text-center leading-[72px] text-[60px] md:text-[68px] font-bold ">Our <span className="text-[#FFA63E]">Temple </span></h1>

        {temples.map((temple,index)=>{
            return <TempleComponent title1={temple.title1} title2={temple.title2} content={temple.content} img={temple.img} key={index}/>
        })}
    </div>
  )
}

export default AboutTemple