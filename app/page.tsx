import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
    </main>
  );
}
