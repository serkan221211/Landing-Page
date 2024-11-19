import { useMemo } from "react";
import Section from "./common/Section";
import {
  IconHeroOne,
  IconHeroThree,
  IconHeroTwo,
  IconPlay,
} from "./common/icons";
import Image from "next/image";

const HeroSection = () => {
  const bottomList = useMemo(
    () => [
      {
        icon: <IconHeroOne width={84} height={65} />,
        title: "Nibh viverra",
        desc: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      },
      {
        icon: <IconHeroTwo width={65} height={65} />,
        title: "Cursus amet",
        desc: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      },
      {
        icon: <IconHeroThree width={82} height={58} />,
        title: "Ipsum fermentum",
        desc: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
      },
    ],
    []
  );
  return (
    <div className="lg:bg-[#FFFEF9] bg-white relative w-full z-10">
      <div
        className="absolute lg:block hidden top-0 right-0 w-full h-full -z-10 bg-[#FEF3C7]"
        style={{
          clipPath: "polygon(100% 15%, 100% 100%, 0% 100%)",
        }}
      ></div>{" "}
      <div
        className="absolute lg:hidden block top-0 right-0 w-full h-full -z-10 bg-[#FEF3C7]"
        style={{
          clipPath: "polygon(100% 25%, 100% 50%, 100% 100%, 0 100%, 0 50%)",
        }}
      ></div>
      <Section className="mx-auto !z-50">
        <div className="lg:py-20 py-12 flex lg:flex-row flex-col items-center justify-center lg:justify-between gap-x-20 gap-y-8">
          <div className="flex-1 space-y-8">
            <div className="lg:text-[72px] text-[56px] font-extrabold text-[#0F172A] lg:leading-[79.2px] leading-[61.6px] lg:text-left text-center">
              Collectible Sneakers
            </div>
            <div className="text-lg font-normal text-[#0F172A] leading-[28.8px] lg:text-left text-center">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </div>
            <div className="flex items-center lg:justify-start justify-center gap-x-4">
              <button className="border-2 border-[#78350F] rounded-lg py-4 px-8 text-[#78350F] lg:text-xl text-base font-medium leading-[24px] whitespace-nowrap">
                Sign up now
              </button>
              <button className="border-none outline-none py-4 px-8 text-[#78350F] lg:text-xl text-base font-medium leading-[24px]">
                <div className="flex items-center gap-x-2 whitespace-nowrap">
                  <span>
                    <IconPlay width={24} height={24} />
                  </span>
                  Watch Demo
                </div>
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/hero-image.png"
              width={486}
              height={423}
              alt="hero-image"
            />
          </div>
        </div>
        <div className="lg:py-20 py-12 grid grid-cols-1 lg:grid-cols-3 gap-x-20 gap-y-8">
          {bottomList.map((item, index) => {
            return (
              <div key={index} className="space-y-4">
                <div className="flex lg:justify-start justify-center">
                  {item.icon}
                </div>
                <div className="font-medium text-xl text-[#0F172A] leading-[22px] lg:text-left text-center">
                  {item.title}
                </div>
                <div className="text-lg font-normal text-[#0F172A] leading-[28.8px] lg:text-left text-center">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
};

export default HeroSection;
