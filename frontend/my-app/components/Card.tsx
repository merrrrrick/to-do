"use client";
import { BACKEND_URL } from "@/app/(auth)/signup/page";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
const Card = ({
  title,
  desc,
  id,
  setFetch,
}: {
  title: string;
  desc: string;
  id: string;
  setFetch: any;
}) => {
  const [heading, setHeading] = useState(title);
  const [description, setDescription] = useState(desc);

  useEffect(() => {
  const token = localStorage.getItem("token");
  // do something
}, []);
  const handleEdit = async () => {
    const token = localStorage.getItem("token");
    try {
      const body = {
        title: heading,
        description,
      };

      const response = await fetch(`${BACKEND_URL}/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log(data);
      //@ts-expect-error error
      setFetch((p) => !p);
      toast("To-do has been edited.");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${BACKEND_URL}/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log(data);
      //@ts-expect-error error
      setFetch((p) => !p);
      toast("To-do has been deleted.");
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300">
      <div className="mx-3 mb-0 border-b border-slate-300 pt-3 pb-2 px-1 ">
        <input
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          type="text"
          className="focus:outline-none text-sm text-slate-600 font-medium bg-transparent"
        />
      </div>

      <div className="p-4">
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="mb-2 focus:outline-none text-slate-800 text-xl font-semibold pb-2.5 w-full bg-transparent"
        />
        <div className="flex gap-2">
          <button onClick={handleEdit} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Edit
          </button>
          <button onClick={handleDelete} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
