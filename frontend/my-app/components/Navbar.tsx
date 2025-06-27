'use client'
import { useAuth } from '@/context/authContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const {isAuthenticated, logout} = useAuth();
    const router = useRouter();

    const handleClick = () => {
        if(isAuthenticated){
            logout();
            router.push('/login')
        }else{
            router.push('/login')
        }
    }
    return (
        <nav className='border shadow-2xl rounded-3xl p-2 px-4 bg-black w-[80%] max-w-4xl mx-auto mt-4 flex items-center justify-between'>
            <div className=" text-black flex gap-4 ">
                <div className='bg-white rounded-2xl p-2 hover:bg-gray-100'>
                <Link className='font-semibold color-white' href={'/'}>Home</Link>
                </div>
                <div className='bg-white rounded-2xl p-2 hover:bg-gray-100'>
                <Link className='font-semibold' href={'/dashboard'}>Dashboard</Link>
                </div>
            </div>

            <button onClick={handleClick} className="bg-blue-500 p-2 font-semibold rounded-2xl px-4 hover:bg-blue-400">{isAuthenticated ? "Logout" : "Login"}</button>
        </nav>
    )
}

export default Navbar