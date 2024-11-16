"use client";
import { useEffect } from "react";
import React, { useState } from "react";
import { blog_data } from "@/Assets/assets";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import Link from "next/link";

export default function Page({ params }) {
  const [data, setData] = useState(null);

  async function fetchBlogData() {
    const { id } = await params;
    for (let i = 0; i < blog_data.length; i++) {
      if (blog_data[i].id === Number(id)) {
        setData(blog_data[i]);
        break;
      }
    }
  }

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <div>
      <div className="px-[5%] py-5 w-full flex gap-[40%] lg:gap-[60%] flex-wrap flex-row justify-center content-start items-center">
        <Link href='/'><Image
          src={assets.logo}
          alt="Blogger-logo"
          className="w-[130px] sm:w-[180px] py-2"
        /></Link>
        <button className="flex flex-nowrap items-center justify-start text-lg border border-solid border-black p-2 shadow-[-6px_6px_0px_#000000] active:bg-gray-600 active:text-white transition-transform transform hover:scale-105">
          Get started{" "}
          <Image src={assets.arrow} className="ml-1" alt="arrow-icon" />
        </button>
      </div>

      {/* Content area */}
      <div className="px-5 py-10 mx-auto max-w-3xl bg-gray-50 shadow-lg">
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-center mb-6">{data?.title}</h1>
        <div className="flex items-center justify-center mb-6">
          <Image
            src={data?.author_img}
            alt="Author Image"
            width={50}
            height={50}
            className="rounded-full"
          />
          <p className="ml-3 text-gray-700 font-semibold">{data?.author}</p>
        </div>

        {/* Image Section */}
        <div className="mb-6">
          <Image
            src={data?.image}
            alt={data?.title}
            className="w-full h-auto rounded-lg shadow"
          />
        </div>

        {/* Content Section */}
        <div className="text-left">
          <h2 className="text-xl font-semibold mb-4">Introduction:</h2>
          <p className="text-gray-600 mb-6">{data?.description}</p>

          {/* Steps */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Step 1: Self-Reflection and Goal Setting
            </h3>
            <p className="text-gray-600 mb-4">
              Before you can manage your lifestyle, you must have a clear
              understanding...
            </p>

            <h3 className="text-lg font-semibold mb-2">
              Step 2: Self-Reflection and Goal Setting
            </h3>
            <p className="text-gray-600 mb-4">
              Before you can manage your lifestyle, you must have a clear
              understanding...
            </p>

            <h3 className="text-lg font-semibold mb-2">
              Step 3: Self-Reflection and Goal Setting
            </h3>
            <p className="text-gray-600 mb-6">
              Before you can manage your lifestyle, you must have a clear
              understanding...
            </p>
          </div>

          {/* Conclusion */}
          <h2 className="text-xl font-semibold mb-4">Conclusion:</h2>
          <p className="text-gray-600">
            Managing your lifestyle is a journey that requires commitment and
            self-awareness...
          </p>
        </div>

        {/* Social media links */}
        <div className="pt-10 pb-5 font-semibold">Share this article on social media</div>
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
      <Footer/>
    </div>
  ) : (
    <></>
  );
}
