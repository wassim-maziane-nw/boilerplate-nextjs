"use client";

import React, { type FC, useState } from "react";

import PrimaryButton from "~components/primary-button";
import SecondaryButton from "~components/secondary-button";
import TextInput from "~components/text-input";
import { IMAGES } from "~config/images";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";

import type { signInValidationType } from "./signInvalidationSchema";
import { buildSignInValidationSchema } from "./signInvalidationSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
const SigninForm: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const translate = useTranslation();
  const searchParams = useSearchParams();
  const prefilled = searchParams?.get("prefilled");
  const signInValidationSchema = buildSignInValidationSchema(translate);
  const lastConnectedEmail = localStorage.getItem("LAST_CONNECTED_EMAIL") ?? "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInValidationType>({
    resolver: zodResolver(signInValidationSchema),
    defaultValues: {
      email: prefilled === "true" ? lastConnectedEmail : "",
      password: "",
    },
  });

  const handleClickPasswordVisiblity = () => {
    setShowPassword(!showPassword);
  };

  const submitForm = () => undefined;
  return (
    <div className="relative h-full w-full bg-brand-gray ">
      <Link href="/" className="absolute top-4 left-4">
        <div className="flex flex-col gap-1">
          <Image src={IMAGES.arrowLeft} width={24} height={24} alt="back button" />
          <Typography variant="body2">Back</Typography>
        </div>
      </Link>
      <div className="flex flex-col gap-4 w-1/2 mx-auto h-full justify-center items-center">
        <Image src={IMAGES.theodoLogo} height={36} width={167} alt="theodo logo" />
        {translate(txKeys.common.signInPage.welcome)}
        <form className="w-full" onSubmit={handleSubmit(submitForm)}>
          <div className="flex flex-col gap-4 pb-8">
            <TextInput
              label={translate(txKeys.common.signInPage.formFields.emailAddress)}
              {...register("email")}
              type="text"
              variant="standard"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
            <TextInput
              label={translate(txKeys.common.signInPage.formFields.Password)}
              variant="standard"
              {...register("password")}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleClickPasswordVisiblity}>
                    <Image src={IMAGES.eye} width={20} height={20} alt="visibility icon" />
                  </IconButton>
                ),
              }}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
          </div>
          <PrimaryButton fullWidth title={translate(txKeys.common.homePage.signInButton)} onClick={() => undefined} />
        </form>
        <div className="flex flex-col gap-4 w-full">
          <SecondaryButton
            fullWidth
            title={translate(txKeys.common.signInPage.googleContinue)}
            onClick={() => undefined}
            iconPath={IMAGES.google}
          />
          <SecondaryButton
            fullWidth
            title={translate(txKeys.common.signInPage.appleContinue)}
            onClick={() => undefined}
            iconPath={IMAGES.apple}
          />
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
