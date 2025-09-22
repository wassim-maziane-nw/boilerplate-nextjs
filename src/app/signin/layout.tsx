import AuthImage from "~components/authImage";
import { IMAGES } from "~config/images";

import type { FC, PropsWithChildren } from "react";
const SignIn: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="relative w-1/2 h-full">
        <AuthImage src={IMAGES.microphone} alt="microphone" />
      </div>
      <div className="flex w-1/2 justify-center items-center">{children}</div>
    </div>
  );
};

export default SignIn;
