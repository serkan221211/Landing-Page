import Image from "next/image";
import { twMerge } from "tailwind-merge";

type Props = {
  imageUrl: string;
  className?: string;
};

const Avatar = ({ imageUrl, className }: Props) => {
  return (
    <Image
      src={imageUrl}
      width={64}
      height={64}
      className={twMerge("w-16 h-16 rounded-full", className)}
      alt="avatar"
    />
  );
};

export default Avatar;
