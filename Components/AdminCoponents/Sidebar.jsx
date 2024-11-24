// import React from 'react'
// import Image from 'next/image'
// import { assets } from '@/Assets/assets'

// function Sidebar() {
//   return (
//     <div>
//       design your code here
//       you can use image assets
//         assets.logo 
//         assets.add_icon

//     you want to wrap each field inside Link tag which we can proviede next routing paths,
//         /admin/addProduct
//         /admin/BlogList 
//         /admin/subscriptions

//     </div>
//   )
// }

// export default Sidebar
   


import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/Assets/assets';

function Sidebar() {
  return (
    <div className="h-screen bg-gray-100 w-64 flex flex-col p-4 border-r border-black">
      {/* Logo Section */}
      <div className="flex items-center mb-8">
        <Image src={assets.logo} alt="Logo" className='w-20 sm:w-28' />
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col space-y-4">
        <Link href="/admin/addProduct" className="group flex items-center border border-black rounded-sm p-2 hover:bg-gray-200">
          <div className="flex items-center justify-center w-6 h-6">
            <Image src={assets.add_icon} alt="Add blogs" width={20} height={20} />
          </div>
          <span className="ml-2 text-base font-semibold group-hover:underline">Add blogs</span>
        </Link>
        <Link href="/admin/blogList" className="group flex items-center border border-black rounded-sm p-2 hover:bg-gray-200">
          <div className="flex items-center justify-center w-6 h-6">
            <Image src={assets.blog_icon} alt="Blog lists" width={20} height={20} />
          </div>
          <span className="ml-2 text-base font-semibold group-hover:underline">Blog lists</span>
        </Link>
        <Link href="/admin/subscriptions" className="group flex items-center border border-black rounded-sm p-2 hover:bg-gray-200">
          <div className="flex items-center justify-center w-6 h-6">
            <Image src={assets.email_icon} alt="Subscriptions" width={20} height={20} />
          </div>
          <span className="ml-2 text-base font-semibold group-hover:underline">Subscriptions</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;

