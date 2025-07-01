'use client'
import { BACKEND_URL } from '@/app/(auth)/signup/page'
import React, { useState } from 'react'
import { toast } from 'sonner';

type Todo = {
  id: string;
  title: string;
  description: string;
};

const AddTodo = ({ setTodos }: { setTodos: React.Dispatch<React.SetStateAction<Todo[]>> }) => {
  const [form, setForm] = useState({
    title: '',
    description: ''
  });

  const onSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${BACKEND_URL}/create-todo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      setTodos(prev => [...prev, data]); // Add new todo
      console.log(data);
      toast("To-do has been added.");
      setForm({ title: '', description: '' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='px-4 py-6'>
      <input
  type="text"
  value={form.title}
  onChange={(e) => setForm({ ...form, title: e.target.value })}
  placeholder='Add a todo'
  className='w-full p-2 border rounded-2xl mb-4'
/>
<input
  type="text"
  value={form.description}
  onChange={(e) => setForm({ ...form, description: e.target.value })}
  placeholder='Description'
  className='w-full p-2 border rounded-2xl mb-4'
/>

      <button
        type='button'
        onClick={onSubmit}
        className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
