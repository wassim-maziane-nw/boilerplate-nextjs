"use client";

import PrimaryButton from "~components/primary-button";
import SecondaryButton from "~components/secondary-button";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";

import { Background } from "./Home.style";

import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
const Home: FC = () => {
  const translate = useTranslation();
  return (
    <Background className="background-div relative">
      <Link href="#" className="absolute top-4 right-40 flex gap-2">
        <Image src="/assets/user.svg" alt="Theodo user" width={14} height={16} />
        <div>
          <Typography variant="h3" color="silver" component="span">
            {translate(txKeys.common.homePage.continueLink)}
          </Typography>{" "}
          <Typography component="span">{translate(txKeys.common.homePage.userFallback)}</Typography>
        </div>
      </Link>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center h-full w-1/2 gap-4">
          <Image src="/assets/theodo-logo.svg" alt="Theodo Logo" width={295} height={63} />
          <Typography variant="h1">{translate(txKeys.common.homePage.title)}</Typography>
          <Typography variant="h2">{translate(txKeys.common.homePage.subtitle)}</Typography>
          <div className="flex gap-6">
            <PrimaryButton title={translate(txKeys.common.homePage.joinButton)} onClick={() => undefined} />
            <SecondaryButton title={translate(txKeys.common.homePage.signInButton)} onClick={() => undefined} />
          </div>
        </div>
      </div>
    </Background>
  );
};

export default Home;
