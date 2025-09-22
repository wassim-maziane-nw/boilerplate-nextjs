import Image from "next/image";
import type { FC } from "react";

type AuthImageProps = {
  src: string;
  alt: string;
};
const AuthImage: FC<AuthImageProps> = ({ src, alt }) => {
  return (
    <div className="relative hidden md:block md:w-1/2 h-full">
      <Image src={src} alt={alt} className="aspect-25/32 object-contain" fill />
    </div>
  );
};

export default AuthImage;
