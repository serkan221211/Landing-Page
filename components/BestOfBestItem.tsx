import { IBestOfBest } from "@/interfaces/app";
import { IconCart } from "./common/icons";
import Image from "next/image";

type Props = {
  item: IBestOfBest;
};

const BestOfBestItem = ({ item }: Props) => {
  return (
    <div className="relative">
      {item.variant === 1 && (
        <div className="bg-[#BE185D] rounded-[50px] bg-opacity-75 w-[202.09px] h-[202.09px] lg:w-[271px] lg:h-[271px] absolute z-0 left-[20.54px] -bottom-[32.89px] lg:bottom-[25px] lg:-left-[35px]" />
      )}
      {item.variant === 2 && (
        <>
          <div className="bg-[#0369A1] rounded-[50px] bg-opacity-75 w-[120.06px] h-[120.06px] lg:w-[161px] lg:h-[161px] absolute z-0 -right-[16px] top-[139.6px] lg:-top-[31px] lg:-left-[20.67px]" />
          <div className="bg-[#B45309] rounded-[30px] bg-opacity-75 w-[130px] h-[130px] absolute z-0 bottom-[48px] -right-[13.67px] lg:block hidden" />
        </>
      )}{" "}
      {item.variant === 3 && (
        <>
          <div className="bg-[#15803D] rounded-[50px] bg-opacity-75 w-[232px] h-[232px] absolute z-0 top-[33px] -right-[43px] lg:block hidden" />
          <div className="bg-[#A21CAF] rounded-[30px] bg-opacity-75 w-[150.64px] h-[150.64px] absolute z-0 -left-[16px] top-[53.21px] lg:hidden block" />
          <div className="bg-[#A21CAF] rounded-[30px] bg-opacity-75 w-[202px] h-[202px] absolute z-0 -bottom-[24px] left-1/2 transform -translate-x-1/2 lg:block hidden" />
        </>
      )}
      <div className="bg-[#0F172A] border border-[#0F172A] rounded-[10px] w-full shadow-[0px_25px_50px_-12px_#FFFFFF40] !z-10 relative">
        <div>
          <Image
            src={item.imageUrl}
            alt="best-image"
            width={394.67}
            height={220}
            className="w-full h-[220px] object-cover rounded-t-[10px]"
          />
        </div>
        <div className="px-8 pt-8 space-y-4">
          <div className="text-white font-bold text-2xl leading-[26.4px]">
            {item.title}
          </div>
          <div className="font-normal text-white text-lg leading-[28.8px]">
            {item.desc}
          </div>
        </div>
        <div className="p-8">
          <button className="w-full">
            <div className="flex items-center gap-x-4 justify-center border-2 border-white rounded-lg py-4">
              <IconCart width={24} height={24} />
              <span className="text-xl text-white font-medium leading-[24px]">
                Buy Now
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestOfBestItem;
