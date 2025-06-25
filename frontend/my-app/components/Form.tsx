'use client'
import { BACKEND_URL } from '@/app/(auth)/signup/page'
import React, { useState } from 'react'

const AddTodo = ({setTodos}: {setTodos: React.Dispatch<React.SetStateAction<never[]>>}) => {
    const [form, setForm] = useState({
        title: '',
        description: ''
    })
    
    const onSubmit = async() => {
        try {
            const token = localStorage.getItem('token')
            const response = await fetch(`${BACKEND_URL}/create-todo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(form)
            })
            const data = await response.json();
            //@ts-ignore
            setTodos(p => [...p, data])
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    } 
    return (
        <form>
            <input type="text" onChange={(e) => setForm({...form, title: e.target.value})} placeholder='Add a todo' className='w-full p-2 border rounded-2xl mb-4' />
            <input type="text" onChange={(e) => setForm({...form, description: e.target.value})} placeholder='Description' className='w-full p-2 border rounded-2xl mb-4' />
            <button type='button' onClick={onSubmit} className='bg-blue-400 p-2 rounded-2xl px-4'>Add</button>
        </form>
    )
}

export default AddTodo