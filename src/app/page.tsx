import { Metadata } from "next";
import Home from "@/components/home/home";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Ansh Gujral",
    description: "Coming Soon...",
  };
}

export default function RetroComingSoon() {
  return <Home />;
}
