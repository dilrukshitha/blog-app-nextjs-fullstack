import React from "react";
import Image from "next/image";
import Link from "next/link";

function BlogItem({ title, description, category, image, id }) {
  return (
    <div className="max-w-[330px] bg-[#FFF7E9] border border-gray-400 hover:border-gray-800 rounded-sm shadow-sm hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden">
      {/* Image */}
      <div className="relative h-[180px] w-full">
        <Image src={image} alt={title} className="rounded-t-sm" />
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
        <p className="text-sm text-gray-600">
          {description.length > 80
            ? `${description.substring(0, 77)}...`
            : description}
        </p>

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
