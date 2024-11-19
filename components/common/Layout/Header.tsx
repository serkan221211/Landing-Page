"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import Section from "../Section";
import { IconMenu } from "../icons";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbarList = useMemo(
    () => [
      { name: "Products", url: "#" },
      { name: "Solutions", url: "#" },
      { name: "Pricing", url: "#" },
      { name: "Resources", url: "#" },
      { name: "Log In", url: "#" },
    ],
    []
  );
  return (
    <div className="lg:bg-customTwo bg-white">
      <Section className="mx-auto">
        <div className="w-full py-6 lg:flex hidden justify-between items-center">
          <Link
            href="#"
            className="text-customOne font-bold text-3.5xl leading-[35.2px]"
          >
            Collers
          </Link>
          <div className="flex items-center gap-4">
            {navbarList.map((item, index) => {
              return (
                <Link
                  className="px-2 py-3 text-customOne text-base font-medium leading-[24px] hover:underline"
                  href={item.url}
                  key={index}
                >
                  {item.name}
                </Link>
              );
            })}
            <button className="p-3 border-2 border-customOne rounded-lg">
              <div className="px-4 text-customOne text-base font-medium leading-[24px]">
                Sign up now
              </div>
            </button>
          </div>
        </div>
        <div className="w-full lg:hidden flex items-center justify-between py-4">
          <Link
            href="#"
            className="text-customOne font-bold text-3.5xl leading-[35.2px]"
          >
            Collers
          </Link>
          <div
            className="cursor-pointer"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <IconMenu width={24} height={24} />
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="bg-white shadow-lg absolute top-[72px] left-0 w-full z-50">
            <div className="flex flex-col items-center gap-4 py-4">
              {navbarList.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="text-customOne text-base font-medium leading-[24px] hover:underline"
                >
                  {item.name}
                </Link>
              ))}
              <button className="p-3 border-2 border-customOne rounded-lg">
                <div className="px-4 text-customOne text-base font-medium leading-[24px]">
                  Sign up now
                </div>
              </button>
            </div>
          </div>
        )}
      </Section>
    </div>
  );
};
export default Header;
