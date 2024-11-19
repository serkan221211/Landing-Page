import { IBecauseLove } from "@/interfaces/app";
import Avatar from "./common/Avatar";

type Props = {
  item: IBecauseLove;
};

const BecauseLoveItem = ({ item }: Props) => {
  return (
    <div className="lg:p-8 p-6 rounded-[20px] border border-[#E2E8F0] bg-white shadow-[0px_10px_15px_-3px_##0000001A] space-y-4 w-[319px] lg:w-[384px]">
      <div className="flex items-center gap-x-2">
        {item.icon}
        <span className="text-2xl font-bold text-[#475569] leading-[26.4px]">
          {item.companyName}
        </span>
      </div>
      <div className="text-black text-base lg:text-2xl font-normal leading-[22.4px] lg:leading-[38.4px]">
        {item.review}
      </div>
      <div className="flex items-center gap-x-4 pt-4">
        <Avatar imageUrl={item.imageUrl} />
        <div>
          <div className="text-lg font-normal text-black leading-[28.8px]">
            {item.fullName}
          </div>
          <div className="text-base font-normal text-[#475569] leading-[22.4px]">
            {item.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecauseLoveItem;
