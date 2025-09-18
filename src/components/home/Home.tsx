"use client";

import type { Theme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import type { FC } from "react";

const Background = styled("div")(({ theme }: { theme: Theme }) => ({
  height: "100vh",
  width: "100vw",
  backgroundImage: "url('/assets/background.svg')",
  backgroundPosition: "center",
  backgroundSize: "80%",
  backgroundRepeat: "no-repeat",
  backgroundColor: theme.palette.background.default,
}));

const Home: FC = () => {
  return <Background className="background-div" />;
};

export default Home;
