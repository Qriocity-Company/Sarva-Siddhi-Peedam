"use client"

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import scanner from '@/assets/bar-code.jpg';



const DonateNowForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    starSign:'',
    email:''
  });

  const handleChange = (e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    if(formData.number.length<9 || formData.number.length>10){
      return;
    }

    console.log('Form submitted with data:', formData);
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        // Reset form data if needed
        setFormData({
          name: '',
          number: '',
          email: '',
          starSign:''
        });
      
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setFormData({
      name: '',
      number: '',
      email: '',
      starSign:''
    });
    
  };

  return (
   
      <div className="p-6 w-full md:px-8 flex flex-col items-center relative">
       
        
        <form onSubmit={handleSubmit} className="w-full text-black">

            <div className='md:flex block p-6 w-full'>

            <div className='md:w-[50%] w-full'>
                <div className="flex flex-col gap-1 mb-3 w-full">
                    <label htmlFor="firstName" className="text-[#919191] text-[20px] leading-[30px]">
                    First Name
                    </label>
                    <input
                    required
                    type="text"
                    id="firstName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-[1px] border-[#8E8E8E80] outline-none p-2 px-4"
                    />
                </div>
                <div className="flex flex-col gap-1 mb-3 w-full">
                    <label htmlFor="mobileNumber" className="text-[#919191] text-[20px] leading-[30px]">
                    Mobile Number
                    </label>
                    <input
                    required
                    type="number" 
                    maxLength={10} pattern="\d{10}"
                    id="mobileNumber"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className="border-[1px] border-[#8E8E8E80] outline-none p-2 px-4"
                    />
                </div>
                <div className="flex flex-col gap-1 mb-6 w-full">
                    <label htmlFor="starSign" className="text-[#919191] text-[20px] leading-[30px]">
                        Star Sign
                    </label>
                    <select
                        required
                        id="starSign"
                        name="starSign"
                        value={formData.starSign}
                        onChange={handleChange}
                        className="border-[1px] border-[#8E8E8E80] outline-none p-2 px-4"
                    >
                        <option value="" disabled>Select Star Sign</option>
                        <option value="Aries">Aries</option>
                        <option value="Taurus">Taurus</option>
                        <option value="Gemini">Gemini</option>
                        <option value="Cancer">Cancer</option>
                        <option value="Leo">Leo</option>
                        <option value="Virgo">Virgo</option>
                        <option value="Libra">Libra</option>
                        <option value="Scorpio">Scorpio</option>
                        <option value="Sagittarius">Sagittarius</option>
                        <option value="Capricorn">Capricorn</option>
                        <option value="Aquarius">Aquarius</option>
                        <option value="Pisces">Pisces</option>
                    </select>
                    </div>

            </div>

            <div className="flex flex-col md:w-[50%] w-full justify-center items-end">
                
                <div className='flex flex-col items-center'>
                    <Image src={scanner} alt="img" className='w-full h-[200px] md:w-[200px] md:h-auto'/>
                    <p className='mt-4 text-center md:text-xl'>UPI ID :artist.kalaivarnan@okaxis</p>

                </div>
                
                
            </div>
            </div>
            <button
                type="submit"
                className="mx-auto mt-6 bg-[#FFA63E] text-white text-[20px] font-[500] p-3 px-10 rounded-lg flex items-center"
            >
                DONATE
            </button>
        </form>
      </div>
  
  );
};

export default DonateNowForm;
