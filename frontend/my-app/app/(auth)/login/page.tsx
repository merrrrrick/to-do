'use client'
import React, { useState } from 'react'
import { BACKEND_URL } from '../signup/page';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';
const Login = () => {

    const {setIsAuthenticated} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handlseSignup = async () => {

        try {

            const body = {
                name,
                email,
                password
            }

            const response = await fetch(`${BACKEND_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body),
            })

            const data = await response.json();
            localStorage.setItem("token", data.token)
            setIsAuthenticated(true);
            router.push('/dashboard')
            console.log(data) 

        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className='w-full h-screen flex items-center justify-center text-black'>
            <form className='flex flex-col items-start justify-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 '>

                <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900'>Email:</label>
                <div className='relative'>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
      </svg>
                    
                </div>
                <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 ' />
                </div>

                <label htmlFor="password">Password:</label>
                <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} className='p-3 rounded-lg focus:outline-none w-full text-black' />


                <button type='button' onClick={handlseSignup} className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                    <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent'>Signup</span></button>

            </form>

        </div>
    )
}

export default Login


{/* <form class="max-w-sm mx-auto">
  <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
  <div class="flex">
    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
      </svg>
    </span>
    <input type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green">
  </div>
</form> */}
