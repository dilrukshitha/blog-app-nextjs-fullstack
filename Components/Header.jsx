import React from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="px-[5%] py-5 w-full flex gap-[40%] lg:gap-[60%] flex-wrap flex-row justify-center content-start items-center">
        <Image
          src={assets.logo}
          alt="Blogger-logo"
          className="w-[130px] sm:w-[180px] py-2"
        />
        <button className="flex flex-nowrap items-center justify-start text-lg border border-solid border-black p-2 shadow-[-6px_6px_0px_#000000] active:bg-gray-600 active:text-white transition-transform transform hover:scale-105">
          Get started{" "}
          <Image src={assets.arrow} className="ml-1" alt="arrow-icon" />
        </button>
      </div>
      <div className="w-full px-[5%] flex gap-4 flex-col justify-start content-center items-center">
        <div className="text-5xl font-medium">Latest Blogs</div>
        <div className="text-base">
          Find the latest Blogs news from WIRED. See related science and
          technology articles, photos, slideshows and videos
        </div>
        <form className="flex w-full max-w-[500px] justify-start items-center border border-solid border-black shadow-[-6px_6px_0px_#000000]">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow min-w-0 px-4 py-3 outline-none max-w-full"
          />
          <button
            type="submit"
            className="py-3 px-4 text-lg active:bg-gray-600 active:text-white border-l border-solid border-black"
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default Header;
