import Image from "next/image";
import "../app/globals.css";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-slate-900 to-slate-700">
      <Navbar />
    </main>
  );
}
