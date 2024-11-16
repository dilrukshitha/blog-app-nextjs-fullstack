import React from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-wrap gap-y-5 gap-x-28 justify-center items-center bg-gray-800 text-white py-8 px-5">
      {/* Logo */}
      <Image src={assets.logo_light} alt="logo_light" className="w-[120px]" />
      
      {/* Copyright */}
      <p>All rights reserved. Copyright @blogger</p>
      
      {/* Social Media Links */}
      <div className="flex justify-start items-center gap-4">
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon"
        >
          <Image src={assets.facebook_icon} alt="Facebook" className="w-[40px]" />
        </a>
        <a 
          href="https://plus.google.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon"
        >
          <Image src={assets.googleplus_icon} alt="Google Plus" className="w-[40px]" />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon"
        >
          <Image src={assets.twitter_icon} alt="Twitter" className="w-[40px]" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
