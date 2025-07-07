"use client";
import { useAuth } from "@/context/authContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const BACKEND_URL = "https://to-do-5j98.onrender.com";

const Signup = () => {
  const { setIsAuthenticated } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    try {
      const body = {
        name,
        email,
        password,
      };

      const response = await fetch(`${BACKEND_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
      router.push("/dashboard");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center text-black">
      <form className="flex w-[60%] sm:w-[50%] md:w-[45%] lg:w-[40%] xl:w-[25%] flex-col justify-center gap-4 p-4 bg-white/90 border border-white shadow-2xl rounded-lg sm:p-6 md:p-8  ">
        <div className="text-xl font-bold flex justify-center">
          Let&apos;s Get Started
        </div>
        <label
          htmlFor="name"
          className="block  text-sm font-medium text-gray-900"
        >
          Name:
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
              className="w-4 h-4 text-gray-500"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
            </svg>
          </div>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
          />
        </div>
        <label
          htmlFor="email"
          className="block mt-2 text-sm font-medium text-gray-900"
        >
          Email:
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
          />
        </div>
        <label
          htmlFor="password"
          className="block mt-2 text-sm font-medium text-gray-900"
        >
          Password:
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-4 w-4 text-gray-500"
              viewBox="0 0 512 512"
            >
              <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
            </svg>
          </div>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
          />
        </div>
        <div className="text-sm text-center text-gray-700 dark:text-gray-400 mt-2">
          Already a user?{" "}
          <Link
            href="/login"
            className=" text-blue-600 hover:underline dark:text-blue-500"
          >
            Login
          </Link>
        </div>
        <button
          type="button"
          onClick={handleSignup}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 w-[100%] py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Signup
          </span>
        </button>
      </form>
    </div>
  );
};

export default Signup;
