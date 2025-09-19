"use client";

import PrimaryButton from "~components/primaryButton";
import SecondaryButton from "~components/secondaryButton";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";

import { Background } from "./Home.style";

import type { FC } from "react";
const Home: FC = () => {
  const translate = useTranslation();
  return (
    <Background className="background-div">
      <div className="flex justify-center items-center h-full w-full gap-4">
        <PrimaryButton text={translate(txKeys.common.joinButton)} onClick={() => undefined} />
        <SecondaryButton text={translate(txKeys.common.joinButton)} onClick={() => undefined} />
      </div>
    </Background>
  );
};

export default Home;
