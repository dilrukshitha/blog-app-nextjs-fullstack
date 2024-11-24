import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminCoponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex justify-between content-start items-center px-5 py-2 border-b border-black">
            <h3 className="min-w-[50%] text-center font-semibold text-2xl">Admin Panel</h3>
            <Image src={assets.profile_icon} alt="profile-icon" className="w-14"/>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
