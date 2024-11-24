import React from "react";
import Image from "next/image";
import Link from "next/link";

function BlogItem({ title, description, category, image, id }) {
  return (
    <div className="w-[330px] bg-[#FFF7E9] border border-gray-400 hover:border-gray-800 rounded-sm shadow-sm hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden">
      {/* Image */}
      <div className="relative h-[200px] w-full">
        <Image
          src={image}
          alt={title}
          layout="fill" // Dynamically fills the parent container
          objectFit="cover" // Ensures consistent aspect ratio by cropping excess
          className="rounded-t-sm" // Adds the border-radius for styling
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Category Tag */}
        <span className="inline-block px-2 py-1 text-sm text-white bg-black">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold text-black leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-sm text-gray-600"
          dangerouslySetInnerHTML={{
            __html:
              description.length > 120
                ? `${description.slice(0, 120)}...`
                : description,
          }}
        ></p>

        {/* Read More Link */}
        <Link
          href={`/blogs/${id}`}
          className="flex items-center text-sm font-medium text-black hover:underline"
        >
          Read more
          <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
}

export default BlogItem;
