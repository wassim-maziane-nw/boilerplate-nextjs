"use client";

import PrimaryButton from "~components/primary-button";
import SecondaryButton from "~components/secondary-button";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";

import { Background } from "./Home.style";

import type { FC } from "react";
const Home: FC = () => {
  const translate = useTranslation();
  return (
    <Background className="background-div">
      <div className="flex justify-center items-center h-full w-full gap-4">
        <PrimaryButton text={translate(txKeys.common.homePage.joinButton)} onClick={() => undefined} />
        <SecondaryButton text={translate(txKeys.common.homePage.joinButton)} onClick={() => undefined} />
      </div>
    </Background>
  );
};

export default Home;
