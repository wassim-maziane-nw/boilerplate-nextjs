import Image from "next/image";
import type { FC } from "react";

type AuthImageProps = {
  src: string;
  alt: string;
};
const AuthImage: FC<AuthImageProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} className="aspect-25/32 object-contain" fill />;
};

export default AuthImage;
