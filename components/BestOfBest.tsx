import { useMemo } from "react";
import BestOfBestItem from "./BestOfBestItem";
import Section from "./common/Section";
import { IBestOfBest } from "@/interfaces/app";

const BestOfBest = () => {
  const bestOfBestList: IBestOfBest[] = useMemo(
    () => [
      {
        title: "Title",
        desc: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        imageUrl: "/best-one.png",
        variant: 1,
      },
      {
        title: "Title",
        desc: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        imageUrl: "/best-two.png",
        variant: 2,
      },
      {
        title: "Title",
        desc: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        imageUrl: "/best-three.png",
        variant: 3,
      },
    ],
    []
  );

  return (
    <div className="border-y border-[#E2E8F0] bg-[#0F172A]">
      <Section className="mx-auto">
        <div className="lg:py-20 py-12 lg:space-y-20 space-y-8">
          <div className="flex lg:flex-row flex-col items-center justify-center lg:justify-between gap-y-8">
            <div className="text-white lg:font-extrabold font-bold lg:text-[56px] text-[32px] leading-[35.2px] lg:leading-[61.6px] lg:text-left text-center">
              The best of the best
            </div>
            <button className="px-12 py-5 font-bold text-2xl text-white leading-[24px] border-2 border-white rounded-lg">
              Sign up now
            </button>
          </div>
          <div className="grid lg:grid-cols-3 lg:gap-12 gap-y-8">
            {bestOfBestList.map((item, index) => {
              return <BestOfBestItem key={index} item={item} />;
            })}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BestOfBest;
