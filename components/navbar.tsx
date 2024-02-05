"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/home/logo.png";
import Link from "next/link";
import { useNavbarContext } from "@/context/NavbarContext";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { showNavbar, setShowNavbar } = useNavbarContext();


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  

  if(showNavbar)
  return (

    <div className=" w-[100vw] flex justify-between bg-[#371D15] items-center px-4 md:px-[48px] py-[1rem] sticky top-0 md:text-[12px] lg:text-[16px] z-50">
      <a href="/" className="flex gap-4 items-center justify-center">
        <Image src={logo} alt="logo" className="h-[40px] w-[40px] md:h-[65px] md:w-[65px]" />
        <h1 className="font-bremenb text-transparent bg-clip-text bg-gradient-to-b  from-[#DA6039] to-[#FFA63E]  text-[18px] md:text-[22px] lg:text-[32px]">Sarva Siddhi Peedam</h1>
      </a>
      <div className="hidden md:flex gap-12 text-[20px] text-white font-khand justify-between items-center ">
        
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/calendar">Event Calender</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/contact" className="">Contact Us</Link>
      </div>
      <div className="md:hidden flex items-center justify-between">
        {showMenu ? (
          <HiX
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <HiMenu
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>
      {showMenu && (
        <div className=" font-Poppins md:hidden fixed top-0 left-0 w-[85vw] h-[100%]  backdrop-blur-[0.8rem] flex flex-col gap-10 py-10 items-end pr-12  bg-gradient-to-l from-[#DA6039] to-[#FFA63E] text-white z-[50] font-semibold text-[24px] ">
          <HiX className=" text-2xl cursor-pointer " onClick={toggleMenu} />
          
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/about" onClick={toggleMenu}>About Us</Link>
          <Link href="/programs" onClick={toggleMenu}>Programs</Link>
          <Link href="/calendar" onClick={toggleMenu}>Event Calender</Link>
          <Link href="/gallery" onClick={toggleMenu}>Gallery</Link>
          <Link href="/contact" onClick={toggleMenu}>Contact Us</Link>
        </div>
      )}

    </div>
  );

  return null;
};
