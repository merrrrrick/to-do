// app/(home)/page.tsx
"use client";

import React from "react";
import LampDemo from "@/components/ui/lamp"; // Adjust path as needed

const Home = () => {
  return (
    <LampDemo>
      <div className="text-white text-4xl font-bold text-center mt-20">
      </div>
    </LampDemo>
  );
};

export default Home;
