"use client";

import { useMemo } from "react";
import Section from "./common/Section";
import { IconCheck } from "./common/icons";
import Image from "next/image";
import useModal from "@/hooks/useModal";
import Modal from "./common/Modal";

const WhyJoinUs = () => {
  const { open, onToggle } = useModal();

  const joinUsList = useMemo(
    () => [
      "Est et in pharetra magna adipiscing ornare aliquam.",
      "Tellus arcu sed consequat ac velit ut eu blandit.",
      "Ullamcorper ornare in et egestas dolor orci.",
    ],
    []
  );

  return (
    <div className="lg:py-40 py-4 lg:bg-[#FFFEF9] bg-white">
      <Modal open={open} onToggle={onToggle}>
        <div className="relative lg:h-[550px] lg:w-[550px]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/_ke0TYcabVM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
      <Section className="mx-auto">
        <div className="relative w-full bg-white rounded-[30px] lg:p-20 py-8 px-4  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] flex lg:flex-row flex-col items-center justify-between lg:gapy-0 gap-y-8 lg:gap-x-20">
          <div className="space-y-6 flex-1">
            <div className="lg:text-[56px] text-[32px] font-extrabold text-[#0F172A] leading-[61.6px] lg:text-left text-center">
              Why join us
            </div>
            <div className="lg:space-y-0 space-y-2">
              {joinUsList.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-x-2">
                    <IconCheck width={24} height={24} />
                    <div className="lg:text-xl text-base text-[#0F172A] font-normal lg:leading-[36px] leading-[22.4px] flex-1">
                      {item}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex lg:justify-start justify-center">
              <button className="py-4 px-8 border-2 border-[#78350F] rounded-lg font-medium text-xl text-[#78350F] leading-[24px] relative z-10">
                Sign up now
              </button>
            </div>
          </div>
          <div className="mx-auto cursor-pointer relative">
            <Image
              src="/join-us.png"
              alt="join-us-image"
              width={520}
              height={350}
              className="w-[520px] h-[350px] relative z-20 object-fill lg:block hidden"
              onClick={() => onToggle()}
            />{" "}
            <Image
              src="/join-us-mobile.png"
              alt="join-us-image"
              width={329}
              height={234}
              className="w-full h-[234px] relative z-20 object-fill lg:hidden block"
              onClick={() => onToggle()}
            />
            <div className="absolute lg:w-[218px] lg:h-[218px] w-[134.59px] h-[134.59px] bg-[#BE185D] bg-opacity-75 rounded-[50px] -right-[30.31px] -bottom-[59.39px] lg:-bottom-[109px] lg:-right-[118px] z-[1]" />
            <div className="absolute lg:w-[74px] lg:h-[74px] w-[45.69px] h-[45.69px] bg-[#A21CAF] bg-opacity-75 rounded-[30px] lg:-bottom-[44px] -bottom-[19.46px] lg:right-[63px] right-[76.43px] z-0" />
            <div className="absolute lg:w-[85px] lg:h-[85px] w-[50px] h-[50px] bg-[#15803D] bg-opacity-75 rounded-full lg:-bottom-[36px] lg:left-[70px] left-[43px] -bottom-[18.8px] z-[21]" />
            <div className="absolute lg:w-[90px] lg:h-[90px] w-[55.56px] h-[55.56px] rounded-full bg-[#B45309] bg-opacity-75 lg:rounded-[30px] top-[25.46px] -left-[21.91px] lg:top-[25px] lg:-left-[20px] z-0" />{" "}
            <div className="absolute lg:w-[666.26px] lg:h-[217.93px] w-[411.34px] h-[134.55px] bg-[#FDE68A] rotate-[135deg] lg:bottom-[60px] -left-[65.87px] bottom-[49.8px] lg:-right-[50px] z-0" />{" "}
            <div className="absolute lg:w-[60px] lg:h-[60px] w-[37px] h-[37px] bg-[#0369A1] bg-opacity-75 rounded-full -top-[40px] right-[23px] lg:-top-[108px] lg:right-[63px] z-1" />{" "}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default WhyJoinUs;
