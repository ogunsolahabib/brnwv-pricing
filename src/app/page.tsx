import Features from "@/components/sections/features";
import Hero from "@/components/sections/hero";
import Plans from "@/components/sections/plans";
import Toggle from "@/components/ui/toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Hero />
      <Plans />

      <Features />

    </main>
  );
}
