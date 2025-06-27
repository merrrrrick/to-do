"use client";
import { BACKEND_URL } from "@/app/(auth)/signup/page";
import React, { useState } from "react";
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

  const token = localStorage.getItem("token");
  const handleEdit = async () => {
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
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
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

    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
        <input
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          type="text"
          className="focus:outline-none text-sm text-slate-600 font-medium"
        />
      </div>

      <div className="p-4">
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="mb-2 focus:outline-none text-slate-800 text-xl font-semibold pb-2.5"
        />
        <div className="flex gap-2">
          <button onClick={handleEdit} className="border rounded w-20 py-1">
            Edit
          </button>
          <button onClick={handleDelete} className="border rounded w-20 py-1">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
