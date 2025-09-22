import AuthImage from "~components/authImage";
import { IMAGES } from "~config/images";

import type { FC, PropsWithChildren } from "react";
const SignIn: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="relative hidden md:block md:w-1/2 h-full">
        <AuthImage src={IMAGES.microphone} alt="microphone" />
      </div>
      <div className="flex h-full w-full md:w-1/2">{children}</div>
    </div>
  );
};

export default SignIn;
