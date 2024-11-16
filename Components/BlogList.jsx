'use client';
import { blog_data } from "@/Assets/assets";
import React, { useState, useEffect } from "react";
import BlogItem from "./BlogItem";

export default function BlogList() {
  const [menu, setMenu] = useState("All");

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}
        >
          All
        </button>

        <button
          onClick={() => setMenu("Technology")}
          className={menu === "Technology" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}
        >
          Technology
        </button>

        <button
          onClick={() => setMenu("Startup")}
          className={menu === "Startup" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}
        >
          Startup
        </button>

        <button
          onClick={() => setMenu("Lifestyle")}
          className={menu === "Lifestyle" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}
        >
          Lifestyle
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-4 gap-y-6 px-3 mb-16 xl:mx-24">
        {blog_data.filter((item) => menu === "All" ? true : item.category === menu).map((item, index) => {
          return (
            <BlogItem
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              category={item.category}
              description={item.description}
            />
          );
        })}
      </div>
    </>
  );
}



