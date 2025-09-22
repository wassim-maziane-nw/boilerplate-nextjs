"use client";

import { type FC, useState } from "react";

import PrimaryButton from "~components/primary-button";
import SecondaryButton from "~components/secondary-button";
import TextInput from "~components/text-input";
import { IMAGES } from "~config/images";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";

import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const SigninForm: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const translate = useTranslation();
  const searchParams = useSearchParams();
  const prefilled = searchParams?.get("prefilled");

  const handleClickPasswordVisiblity = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="relative h-full w-full bg-brand-gray ">
      <Link href="/" className="absolute top-4 left-4">
        <div className="flex flex-col gap-1">
          <Image src={IMAGES.arrowLeft} width={24} height={24} alt="back button" />
          <Typography variant="body2">Back</Typography>
        </div>
      </Link>
      <div className="flex flex-col gap-4 w-full h-full justify-center items-center">
        <Image src={IMAGES.theodoLogo} height={36} width={167} alt="theodo logo" />
        {translate(txKeys.common.signInPage.welcome)}
        <div className="flex flex-col gap-4 w-1/2">
          <TextInput
            label="Email address"
            value={prefilled === "true" ? localStorage.getItem("LAST_CONNECTED_EMAIL") : ""}
            variant="standard"
          />
          <TextInput
            label="Password"
            variant="standard"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleClickPasswordVisiblity}>
                  <Image src={IMAGES.eye} width={20} height={20} alt="visibility icon" />
                </IconButton>
              ),
            }}
          />
          <div className="flex flex-col gap-4 pt-8">
            <PrimaryButton fullWidth title="Sign In" onClick={() => undefined} />
            <SecondaryButton
              fullWidth
              title="Continue with Google"
              onClick={() => undefined}
              iconPath={IMAGES.google}
            />
            <SecondaryButton fullWidth title="Continue with Apple" onClick={() => undefined} iconPath={IMAGES.apple} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
