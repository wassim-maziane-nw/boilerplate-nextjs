"use client";

import { IMAGES } from "~config/images";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";

import Image from "next/image";
import type { FC } from "react";

const SigninForm: FC = () => {
  const translate = useTranslation();
  return (
    <div className="flex flex-col gap-4">
      <Image src={IMAGES.theodoLogo} height={36} width={167} alt="theodo logo" />
      {translate(txKeys.common.signInPage.welcome)}
    </div>
  );
};

export default SigninForm;
