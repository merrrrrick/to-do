'use client'
import { BACKEND_URL } from '@/app/(auth)/signup/page'
import React, { useState } from 'react'
import { toast } from "sonner"
const Card = ({ title, desc, id, setFetch }: { title: string, desc: string, id: string, setFetch: any }) => {
  const [heading, setHeading] = useState(title)
  const [description, setDescription] = useState(desc)

  const token = localStorage.getItem('token')
  const handleEdit = async () => {
    try {

      const body = {
        title: heading,
        description
      }

      const response = await fetch(`${BACKEND_URL}/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body),
      })

      const data = await response.json();
      console.log(data);
      //@ts-expect-error error
      setFetch(p => !p)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/todos/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      const data = await response.json();
      console.log(data);
      //@ts-expect-error error
      setFetch(p => !p)
      toast("To-do has been deleted.")
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='max-w-[300px] w-full text-black p-6 rounded-2xl flex flex-col gap-2 bg-white'>
      <input value={heading} onChange={(e) => setHeading(e.target.value)} type="text" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" />

      <button onClick={handleEdit} className='border p-1'>Edit</button>
      <button onClick={handleDelete} className='border p-1'>Delete</button>


    </div>
  )
}

export default Card