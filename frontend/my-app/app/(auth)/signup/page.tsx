'use client'
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export const BACKEND_URL = 'http://localhost:8080'


const Signup = () => {

    const{setIsAuthenticated} = useAuth();
    const [name, setName] = useState("");
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

            const response = await fetch(`${BACKEND_URL}/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body),
            })

            const data = await response.json();
            setIsAuthenticated(true);
            router.push('/dashboard')
            console.log(data) 

        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <form className='flex flex-col items-start justify-center gap-4 max-w-lg w-full '>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" onChange={(e) => setName(e.target.value)} className='p-3 rounded-lg focus:outline-none w-full text-black' />


                <label htmlFor="email">Email:</label>
                <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} className='p-3 rounded-lg focus:outline-none w-full text-black' />


                <label htmlFor="password">Password:</label>
                <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} className='p-3 rounded-lg focus:outline-none w-full text-black' />


                <button type='button' onClick={handlseSignup} className='bg-blue-400 text-black rounded-lg p-3 mx-auto'>Signup</button>

            </form>

        </div>
    )
}

export default Signup