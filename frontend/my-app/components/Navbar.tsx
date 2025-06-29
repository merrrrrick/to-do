"use client";
import { useAuth } from "@/context/authContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleClick = () => {
    if (isAuthenticated) {
      logout();
      router.push("/login");
    } else {
      router.push("/login");
    }
  };
  return (
    <nav className='border shadow-2xl rounded-xl pt-2.5 px-4 bg-gradient-to-r from-[#020617] via-[#031E31] to-[#020617] w-full max-w-4xl mx-auto flex items-center justify-between'>
        <div className=" text-black flex gap-4 ">
            <div className='text-white border hover:border-[#031E31] hover:bg-white hover:text-[#020617] active:bg-slate-50 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'>
            <Link className='font-semibold color-white' href={'/'}>Home</Link>
            </div>
            <div className='text-white border hover:border-[#031E31] hover:bg-white hover:text-[#020617] active:bg-slate-50 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'>
            <Link className='font-semibold' href={'/dashboard'}>Dashboard</Link>
            </div>
        </div>

        <button onClick={handleClick} className="text-blue-700 hover:text-white p-2 border-2 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{isAuthenticated ? "Logout" : "Login"}</button>
    </nav>
  );
};

export default Navbar;
