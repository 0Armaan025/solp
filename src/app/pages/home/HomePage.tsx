import Navbar from "@/app/components/navbar/Navbar";
import React from "react";
import MiddlePart from "./middlePart/MiddlePart";

const HomePage = () => {
  return (
    <div>
      <main className="bg-gradient-to-r from-slate-900 to-slate-700">
        <Navbar />
        <MiddlePart />
      </main>
    </div>
  );
};

export default HomePage;
