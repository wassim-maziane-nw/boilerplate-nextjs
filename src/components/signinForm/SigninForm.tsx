"use client";

import { IMAGES } from "~config/images";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";

import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
const SigninForm: FC = () => {
  const translate = useTranslation();
  return (
    <div className="relative h-full w-full">
      <Link href="/" className="absolute top-4">
        <div className="flex flex-col gap-1">
          <Image src={IMAGES.arrowLeft} width={24} height={24} alt="back button" />
          <Typography variant="body2">Back</Typography>
        </div>
      </Link>
      <div className="flex flex-col gap-4 w-full h-full justify-center items-center">
        <Image src={IMAGES.theodoLogo} height={36} width={167} alt="theodo logo" />
        {translate(txKeys.common.signInPage.welcome)}
      </div>
    </div>
  );
};

export default SigninForm;
