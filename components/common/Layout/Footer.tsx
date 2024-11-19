import { useMemo } from "react";
import Section from "../Section";
import Link from "next/link";
import {
  IconAppStore,
  IconGooglePlay,
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconTwitter,
  IconYoutebe,
  IconWorld,
} from "../icons";

const Footer = () => {
  const footerList = useMemo(
    () => [
      {
        title: "Product",
        menus: [
          { name: "Pricing", url: "#" },
          { name: "Overview", url: "#" },
          { name: "Browse", url: "#" },
          { name: "Accessibility", url: "#" },
          { name: "Five", url: "#" },
        ],
      },
      {
        title: "Solutions",
        menus: [
          { name: "Brainstorming", url: "#" },
          { name: "Ideation", url: "#" },
          { name: "Wireframing", url: "#" },
          { name: "Research", url: "#" },
          { name: "Design", url: "#" },
        ],
      },
      {
        title: "Support",
        menus: [
          { name: "Contact Us", url: "#" },
          { name: "Developers", url: "#" },
          { name: "Documentation", url: "#" },
          { name: "Integrations", url: "#" },
          { name: "Reports", url: "#" },
        ],
      },
    ],
    []
  );

  const socialMediaList = useMemo(
    () => [
      { url: "#", icon: <IconYoutebe width={24} height={24} /> },
      { url: "#", icon: <IconFacebook width={24} height={24} /> },
      { url: "#", icon: <IconTwitter width={24} height={24} /> },
      { url: "#", icon: <IconInstagram width={24} height={24} /> },
      { url: "#", icon: <IconLinkedin width={24} height={24} /> },
    ],
    []
  );
  const legalPagesList = useMemo(
    () => [
      { name: "Terms", url: "#" },
      { name: "Privacy", url: "#" },
      { name: "Contact", url: "#" },
    ],
    []
  );

  return (
    <div className="bg-[#0F172A]">
      <Section className="mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-12 gap-12 border-y border-[#334155]">
          {footerList.map((item, index) => {
            return (
              <div key={index}>
                <div className="py-3 text-white font-medium text-base leading-[17.6px] md:text-left text-center">
                  {item.title}
                </div>
                {item.menus.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      className="py-3 text-white font-normal text-base leading-[17.6px] block hover:underline md:text-left text-center"
                      href={item.url}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            );
          })}
          <div className="space-y-2">
            <div className="py-3 text-white font-medium text-base leading-[17.6px] md:text-left text-center">
              Get the App
            </div>
            <Link href="#" className="py-0.75 md:block flex justify-center">
              <IconAppStore width={119.66} height={40} />
            </Link>
            <Link href="#" className="py-0.75 md:block flex justify-center">
              <IconGooglePlay width={135} height={40} />
            </Link>
            <div className="text-[#E2E8F0] text-base font-medium leading-[17.6px] pt-12 pb-3 md:text-left text-center">
              Follow Us
            </div>
            <div className="flex items-center gap-x-4 md:justify-start justify-center">
              {socialMediaList.map((item, index) => {
                return (
                  <Link key={index} href={item.url}>
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center md:flex-row flex-col justify-center md:justify-between py-6 gap-y-6">
          <div className="text-[#E2E8F0] text-base font-normal leading-[22.4px]">
            Collers @ 2023. All rights reserved.
          </div>
          <div className="flex items-center gap-x-8">
            {legalPagesList.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.url}
                  className="text-[#E2E8F0] text-base font-normal leading-[22.4px] py-3 hover:underline"
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="flex items-center gap-x-2 py-3 cursor-pointer">
              <IconWorld width={24} height={24} />
              <span className="text-[#E2E8F0] text-base font-normal leading-[22.4px]">
                EN
              </span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Footer;
