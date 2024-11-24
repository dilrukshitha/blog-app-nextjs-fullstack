"use client";
import { assets } from "@/Assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

function Page() {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "admin",
    authorImg: "/author_img.png",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("author", data.author);
      formData.append("authorImg", data.authorImg);
      formData.append("image", image);

      // Send the form data to the API endpoint
      const response = await axios.post("/api/blog", formData);

      // Handle response messages
      if (response.data.success) {
        toast.success(response.data.message);
        setImage(false);
        setData({
          title: "",
          description: "",
          category: "Startup",
          author: "admin",
          authorImg: "/author_img.png",
        });
      } else {
        toast.error(response.data.message || "Failed to add blog.");
      }
    } catch (error) {
      console.error("Error adding blog:", error);

      // Check if the error is from Axios
      if (error.response) {
        // Extract error details from the server response
        toast.error(
          error.response.data?.error || `Server Error: ${error.response.status}`
        );
      } else {
        // Handle other unexpected errors
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-4 px-5 sm:pt-8 sm:pl-10">
        <p className="text-xl">Upload thumbnail</p>
        <label
          htmlFor="image"
          className="block mt-2 w-[160px] h-[90px] relative overflow-hidden border border-gray-300 rounded-md"
        >
          {image ? (
            // Use <img> for the uploaded image and enforce fixed dimensions
            <img
              src={URL.createObjectURL(image)}
              alt="Uploaded Thumbnail"
              className="w-full h-full object-cover"
            />
          ) : (
            // Placeholder image with next/image
            <Image
              src={assets.upload_area}
              alt="upload-area"
              layout="fill" // Forces the placeholder image to fill the container
              objectFit="cover" // Crops the image to fit the container
              className="rounded-md"
            />
          )}
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          name="image"
          id="image"
          hidden
          required
        />

        <p className="text-xl mt-4">Blog title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Type here"
          required
        />
        <p className="text-xl mt-4">Blog Description</p>
        <div className="hint-box">
          <p className="text-sm text-gray-500">
            Available tags: <b>&lt;b&gt;</b> (bold), <b>&lt;p&gt;</b>{" "}
            (paragraph), <b>&lt;h1&gt;</b> (Heading 1),
            <b>&lt;h2&gt;</b> (Heading 2), <b>&lt;h3&gt;</b> (Heading 3). Each
            tag has predefined styles.
          </p>
          <textarea
            name="description"
            onChange={onChangeHandler}
            value={data.description}
            className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
            type="text"
            placeholder="Write content here"
            rows={6}
            required
          />
        </div>

        <p className="text-xl mt-4">Blog category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 px-4 py-3 border text-gray-500"
          id=""
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          ADD
        </button>
      </form>
    </>
  );
}

export default Page;
