"use client"

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import scanner from '@/assets/bar-code.png';

interface DonatePopupProps {
  setOpen: (value: boolean) => void;
}

const DonatePopup = ({ setOpen }:DonatePopupProps) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        });
        // Close the popup
        setOpen(false);
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
    });
    
    setOpen(false);
  };

  return (
    <div className="h-[100vh] w-full fixed top-0 left-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50 font-khand">
      <div className="bg-white p-6 w-[90%] md:w-[500px] md:px-8 flex flex-col items-center relative">
        <X
          className="h-6 cursor-pointer w-6 text-black absolute right-4 top-4"
          onClick={() => setOpen(false)}
        />
        <h2 className="mb-2 my-4 text-center font-bold text-[20px] md:text-[30px]">Register Now</h2>
        <form onSubmit={handleSubmit} className="w-full text-black">
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
            <label htmlFor="email" className="text-[#919191] text-[20px] leading-[30px]">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-[1px] border-[#8E8E8E80] outline-none p-2 px-4"
            />
          </div>

          {/* <div className="flex justify-center gap-12 items-center">
            <div>
              <Image src={scanner} alt="img" />
            </div>
            <div className="text-[#919191] text-[20px] ">OR</div>
            <div className="text-[#919191] text-[25px] leading-[38px]">
              <p>ACC. No: 92839283923</p>
              <p>IFSC Code: 92839283923</p>
              <p>CIN: 92839283923</p>
              <p>Branch: 92839283923</p>
            </div>
          </div> */}

          <button
            type="submit"
            className="mx-auto mt-6 bg-[#FFA63E] text-white text-[20px] font-[500] p-3 px-10 rounded-lg flex items-center"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonatePopup;
