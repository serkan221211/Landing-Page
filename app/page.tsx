import BecauseLove from "@/components/BecauseLove";
import BestOfBest from "@/components/BestOfBest";
import Footer from "@/components/common/Layout/Footer";
import Header from "@/components/common/Layout/Header";
import GrowCollection from "@/components/GrowCollection";
import HeroSection from "@/components/HeroSection";
import WhyJoinUs from "@/components/WhyJoinUs";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BestOfBest />
      <WhyJoinUs />
      <BecauseLove />
      <GrowCollection />
      <Map />
      <Footer />
    </>
  );
}
