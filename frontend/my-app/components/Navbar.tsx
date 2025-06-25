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
        <nav className='border rounded-3xl p-2 px-4 bg-white w-[80%] max-w-4xl mx-auto mt-4 flex items-center justify-between'>
            <div className=" text-black flex gap-4">
                <Link href={'/'}>Home</Link>
                <Link href={'/dashboard'}>Dashboard</Link>
            </div>

            <button onClick={handleClick} className="bg-blue-400 p-2 rounded-2xl px-4">{isAuthenticated ? "Logout" : "Login"}</button>
        </nav>
    )
}

export default Navbar