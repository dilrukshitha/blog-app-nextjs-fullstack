"use client";
import { useEffect } from "react";
import React, { useState } from "react";
import { blog_data } from "@/Assets/assets";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import Link from "next/link";
import axios from "axios";

export default function Page({ params: paramsPromise }) {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(true); // To track loading state

  useEffect(() => {
    let isMounted = true; // To avoid state updates on unmounted components

    async function fetchParamsAndData() {
      try {
        setLoading(true); // Start loading
        const params = await paramsPromise; // Await the params Promise
        if (!isMounted) return; // Avoid state updates after unmount
        setId(params.id); // Store the id for any further use

        const response = await axios.get("/api/blog", {
          params: {
            id: params.id,
          },
        });
        if (isMounted) {
          setData(response.data); // Set the fetched data
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        if (isMounted) setLoading(false); // Stop loading
      }
    }

    fetchParamsAndData();

    return () => {
      isMounted = false; // Cleanup on component unmount
    };
  }, [paramsPromise]);

  console.log(data);

  return data ? (
    <div>
      <div className="px-[5%] py-5 w-full flex gap-[40%] lg:gap-[60%] flex-wrap flex-row justify-center content-start items-center">
        <Link href="/">
          {assets.logo && (
            <Image
              src={assets.logo}
              alt="Blogger-logo"
              className="w-[130px] sm:w-[180px] py-2"
            />
          )}
        </Link>
        <button className="flex flex-nowrap items-center justify-start text-lg border border-solid border-black p-2 shadow-[-6px_6px_0px_#000000] active:bg-gray-600 active:text-white transition-transform transform hover:scale-105">
          Get started{" "}
          {assets.arrow && (
            <Image src={assets.arrow} className="ml-1" alt="arrow-icon" />
          )}
        </button>
      </div>

      {/* Content area */}
      <div className="px-5 py-10 mx-auto max-w-5xl bg-gray-50 shadow-lg">
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-center mb-6">
          {data.blog?.title}
        </h1>
        <div className="flex items-center justify-center mb-6">
          {data?.blog?.authorImg && (
            <Image
              src={data.blog.authorImg}
              alt="Author Image"
              width={50}
              height={50}
              className="rounded-full"
            />
          )}
          <p className="ml-3 text-gray-700 font-semibold">
            {data.blog?.author}
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-6 w-full max-w-[700px] mx-auto">
          {data?.blog?.image && (
            <Image
              src={data.blog.image}
              layout="responsive"
              width={700} // Define the width of the image
              height={0} // Next.js calculates height automatically based on the source
              objectFit="cover"
              alt={data.blog.title || "Blog Cover"}
              className="rounded-sm shadow"
            />
          )}
        </div>

        {/* Content Section */}
        <div className="overflow-hidden mb-6 text-black">
          <div className="blog-content" dangerouslySetInnerHTML={{__html:data.blog.description}}></div>
        </div>

        {/* Social media links */}
        <div className="pt-10 pb-5 font-semibold">
          Share this article on social media
        </div>
        <div className="flex justify-start items-center gap-4">
          {assets.facebook_icon && (
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Image
                src={assets.facebook_icon}
                alt="Facebook"
                className="w-[40px]"
              />
            </a>
          )}
          {assets.googleplus_icon && (
            <a
              href="https://plus.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Image
                src={assets.googleplus_icon}
                alt="Google Plus"
                className="w-[40px]"
              />
            </a>
          )}
          {assets.twitter_icon && (
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Image
                src={assets.twitter_icon}
                alt="Twitter"
                className="w-[40px]"
              />
            </a>
          )}
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <></>
  );
}
