"use client";

import Image from "next/image";
import Section from "./common/Section";
import { useMemo, useState } from "react";
import {
  IconArrowRight,
  IconPodcast,
  IconRocket,
  IconScreen,
  IconSearch,
  IconSettingsAlt,
  IconShieldCheck,
} from "./common/icons";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

const GrowCollection = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const buttonList = useMemo(
    () => [
      {
        name: "Bibendum tellus",
        icon: <IconSearch width={24} height={24} />,
        value: 0,
      },
      {
        name: "Cras eget",
        icon: <IconShieldCheck width={24} height={24} />,
        value: 1,
      },
      {
        name: "Dolor pharetra",
        icon: <IconRocket width={24} height={24} />,
        value: 2,
      },
      {
        name: "Amet, fringilla",
        icon: <IconScreen width={24} height={24} />,
        value: 3,
      },
      {
        name: "Amet nibh",
        icon: <IconPodcast width={24} height={24} />,
        value: 4,
      },
      {
        name: "Sed velit",
        icon: <IconSettingsAlt width={24} height={24} />,
        value: 5,
      },
    ],
    []
  );

  return (
    <div className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 lg:bg-[#FFFEF9] bg-white">
      <div className="absolute inset-0 overflow-hidden z-0 lg:block hidden">
        <svg
          viewBox="0 0 1440 684"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-auto z-10"
        >
          <path
            d="M208 507.373C108.284 488.351 37 531.837 0 602.413V684H1440V3.58104C1397.38 -12.5779 1346.49 29.8525 1326.38 53.0877C1292.55 94.2772 1203.11 173.171 1115.99 159.23C1028.87 145.289 954.268 224.975 927.858 266.56C891.557 322.272 785.577 419.199 652.063 361.217C528 307.339 441.5 391.416 395.823 433.695C358.736 466.699 313.484 527.496 208 507.373Z"
            fill="#FDE68A"
          />
        </svg>
        <svg
          viewBox="0 0 1440 564"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-auto z-20"
        >
          <path
            d="M208 418.361C108.284 402.675 37 438.532 0 496.727V564H1440V2.95279C1397.38 -10.3713 1346.49 24.6153 1326.38 43.774C1292.55 77.7373 1203.11 142.79 1115.99 131.295C1028.87 119.8 954.268 185.505 927.858 219.795C891.557 265.733 785.577 345.655 652.063 297.845C528 253.42 441.5 322.747 395.823 357.608C358.736 384.822 313.484 434.953 208 418.361Z"
            fill="#FEF3C7"
          />
        </svg>
        <svg
          viewBox="0 0 1440 372"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-auto z-30"
        >
          <path
            d="M208 275.94C108.284 265.594 37 289.245 0 327.628V372H1440V1.94758C1397.38 -6.84063 1346.49 16.2356 1326.38 28.8722C1292.55 51.2735 1203.11 94.1807 1115.99 86.5987C1028.87 79.0167 954.268 122.355 927.858 144.971C891.557 175.271 785.577 227.985 652.063 196.451C528 167.149 441.5 212.876 395.823 235.869C358.736 253.819 313.484 286.884 208 275.94Z"
            fill="#78350F"
          />
        </svg>
      </div>
      <div className="absolute inset-0 overflow-hidden z-0 lg:hidden block">
        <svg
          viewBox="0 0 393 685"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-auto z-10"
        >
          <path
            d="M208 507.577C108.284 488.554 37 532.041 0 602.617V684.204H1440V3.78465C1397.38 -12.3743 1346.49 30.0562 1326.38 53.2913C1292.55 94.4808 1203.11 173.375 1115.99 159.433C1028.87 145.492 954.268 225.178 927.858 266.764C891.557 322.475 785.577 419.403 652.063 361.42C528 307.543 441.5 391.62 395.823 433.898C358.736 466.903 313.484 527.7 208 507.577Z"
            fill="#FDE68A"
          />
        </svg>
        <svg
          viewBox="0 0 393 565"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-auto z-20"
        >
          <path
            d="M208 418.564C108.284 402.879 37 438.736 0 496.93V564.204H1440V3.1564C1397.38 -10.1677 1346.49 24.8189 1326.38 43.9776C1292.55 77.9409 1203.11 142.994 1115.99 131.498C1028.87 120.003 954.268 185.709 927.858 219.999C891.557 265.936 785.577 345.859 652.063 298.049C528 253.624 441.5 322.95 395.823 357.811C358.736 385.026 313.484 435.157 208 418.564Z"
            fill="#FEF3C7"
          />
        </svg>
        <svg
          viewBox="0 0 393 373"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-auto z-30"
        >
          <path
            d="M208 276.144C108.284 265.798 37 289.448 0 327.832V372.204H1440V2.1512C1397.38 -6.63701 1346.49 16.4392 1326.38 29.0758C1292.55 51.4772 1203.11 94.3843 1115.99 86.8023C1028.87 79.2203 954.268 122.558 927.858 145.175C891.557 175.474 785.577 228.189 652.063 196.655C528 167.353 441.5 213.079 395.823 236.073C358.736 254.022 313.484 287.088 208 276.144Z"
            fill="#78350F"
          />
        </svg>
      </div>
      <Section className="mx-auto relative z-40">
        <div className="lg:space-y-20 space-y-8">
          <div className="space-y-8">
            <div className="lg:text-[56px] text-[32px] lg:text-left text-center text-[#0F172A] font-extrabold leading-[61.6px]">
              Grow your collection
            </div>
            <div className="lg:text-lg text-base lg:text-left text-center text-[#0F172A] font-normal leading-[28.8px]">
              Enim neque massa porta adipiscing elit. Sem libero id faucibus
              nibh amet dictum pellentesque sed. Eu non turpis risus odio
              sapien, fames sit rhoncus. Nec magna sed interdum sit purus
              tellus. Et volutpat proin neque placerat at bibendum quam tellus.
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:items-start lg:gap-x-20 lg:gap-y-0 gap-y-8 lg:justify-between items-center">
            <div className="lg:space-y-4 w-full lg:w-[256px] lg:block flex items-center gap-x-4 overflow-auto lg:py-0 pb-2 scrollbar-hide">
              {buttonList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={twMerge(
                      "p-4 flex items-center cursor-pointer",
                      clsx({
                        "shadow-[0px_4px_6px_-1px_#0000001A] rounded-lg bg-white lg:bg-[#FFFEF9]":
                          selectedButton === item.value,
                        "shadow-none bg-none": selectedButton !== item.value,
                      })
                    )}
                    onClick={() => setSelectedButton(item.value)}
                  >
                    {item.icon}
                    <span className="px-4 font-medium text-xl whitespace-nowrap text-[#0F172A] leading-[24px]">
                      {item.name}
                    </span>
                    <IconArrowRight
                      width={24}
                      height={24}
                      className={twMerge(
                        "block",
                        clsx({
                          block: selectedButton === item.value,
                          hidden: selectedButton !== item.value,
                        })
                      )}
                    />
                  </div>
                );
              })}
            </div>
            <Image
              src="/grow-desktop.png"
              alt="grow-desktop-image"
              width={944}
              height={556}
              className="flex-1 w-full h-full"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default GrowCollection;
