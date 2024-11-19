"use client";

import { IBecauseLove } from "@/interfaces/app";
import BecauseLoveItem from "./BecauseLoveItem";
import Section from "./common/Section";
import {
  IconArrowLeft,
  IconArrowRightTwo,
  IconShells,
  IconVemue,
  IconWa,
  IconZoomerr,
} from "./common/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const BecauseLove = () => {
  const becauseLoveList: IBecauseLove[] = [
    {
      title: "Team Lead",
      fullName: "Hellen Jummy",
      review:
        "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      companyName: "Zoomerr",
      icon: <IconZoomerr width={32} height={32} />,
      imageUrl: "/user-1.jpg",
    },
    {
      title: "Co-founder",
      fullName: "Hellena John",
      review:
        "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      companyName: "SHELLS",
      icon: <IconShells width={30.4} height={32} />,
      imageUrl: "/user-2.jpg",
    },
    {
      title: "Manager",
      fullName: "David Oshodi",
      review:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      companyName: "ArtVenue",
      icon: <IconVemue width={55.81} height={32} />,
      imageUrl: "/user-3.jpg",
    },
    {
      title: "CEO",
      fullName: "Charolette Hanlin",
      review:
        "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
      companyName: "WAVES",
      icon: <IconWa width={21.03} height={32} />,
      imageUrl: "/user-4.jpg",
    },
    {
      title: "Team Lead",
      fullName: "Hellen Jummy",
      review:
        "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      companyName: "Zoomerr",
      icon: <IconZoomerr width={32} height={32} />,
      imageUrl: "/user-1.jpg",
    },
    {
      title: "Co-founder",
      fullName: "Hellena John",
      review:
        "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      companyName: "SHELLS",
      icon: <IconShells width={30.4} height={32} />,
      imageUrl: "/user-2.jpg",
    },
    {
      title: "Manager",
      fullName: "David Oshodi",
      review:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      companyName: "ArtVenue",
      icon: <IconVemue width={55.81} height={32} />,
      imageUrl: "/user-3.jpg",
    },
    {
      title: "CEO",
      fullName: "Charolette Hanlin",
      review:
        "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
      companyName: "WAVES",
      icon: <IconWa width={21.03} height={32} />,
      imageUrl: "/user-4.jpg",
    },
    {
      title: "Team Lead",
      fullName: "Hellen Jummy",
      review:
        "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      companyName: "Zoomerr",
      icon: <IconZoomerr width={32} height={32} />,
      imageUrl: "/user-1.jpg",
    },
    {
      title: "Co-founder",
      fullName: "Hellena John",
      review:
        "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      companyName: "SHELLS",
      icon: <IconShells width={30.4} height={32} />,
      imageUrl: "/user-2.jpg",
    },
    {
      title: "Manager",
      fullName: "David Oshodi",
      review:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      companyName: "ArtVenue",
      icon: <IconVemue width={55.81} height={32} />,
      imageUrl: "/user-3.jpg",
    },
    {
      title: "CEO",
      fullName: "Charolette Hanlin",
      review:
        "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
      companyName: "WAVES",
      icon: <IconWa width={21.03} height={32} />,
      imageUrl: "/user-4.jpg",
    },
  ];

  return (
    <div className="py-20 lg:space-y-10 space-y-4">
      <Section className="mx-auto">
        <div className="flex items-center justify-between">
          <div className="lg:text-[56px] text-3.5xl font-bold lg:font-extrabold text-[#0F172A] leading-[35.2px] lg:leading-[61.6px] lg:text-left text-center w-full">
            Because they love us
          </div>
          <div className="flex items-center gap-x-6">
            <div className="w-12 h-12 border-2 border-[#78350F] rounded-full items-center justify-center cursor-pointer lg:flex hidden swiper-button-prev-custom-module">
              <IconArrowLeft width={24} height={24} />
            </div>
            <div className="w-12 h-12 border-2 border-[#78350F] rounded-full items-center justify-center cursor-pointer lg:flex hidden swiper-button-next-custom-module">
              <IconArrowRightTwo width={24} height={24} />
            </div>
          </div>
        </div>
      </Section>
      <div className="lg:px-10 h-[277px] lg:h-[421px] w-full">
        <div className="h-full w-full bg-[#FDE68A] relative">
          <div className="lg:top-10 top-4 relative">
            <Swiper
              initialSlide={2}
              slidesPerView={1.2}
              spaceBetween={24}
              slidesOffsetBefore={32}
              slidesOffsetAfter={16}
              navigation={{
                prevEl: ".swiper-button-prev-custom-module",
                nextEl: ".swiper-button-next-custom-module",
              }}
              modules={[Navigation]}
              pagination={{ clickable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                  slidesOffsetBefore: 32,
                  slidesOffsetAfter: 16,
                },
                530: {
                  slidesPerView: 1.4,
                  slidesOffsetBefore: 64,
                  slidesOffsetAfter: 16,
                },
                768: {
                  slidesPerView: 1.9,
                  slidesOffsetBefore: 16,
                  slidesOffsetAfter: 16,
                },
                1024: {
                  slidesPerView: 2.3,
                  slidesOffsetBefore: 64,
                  slidesOffsetAfter: 64,
                },
                1280: {
                  slidesPerView: 3.3,
                  slidesOffsetBefore: 128,
                  slidesOffsetAfter: 64,
                },
                1490: {
                  slidesPerView: 4,
                  slidesOffsetBefore: 128,
                  slidesOffsetAfter: 64,
                },
              }}
            >
              {becauseLoveList.map((item, index) => (
                <SwiperSlide key={index} className="flex  items-center">
                  <BecauseLoveItem item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecauseLove;
