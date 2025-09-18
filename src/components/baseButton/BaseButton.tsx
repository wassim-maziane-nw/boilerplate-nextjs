"use client";

import { StyledButton } from "./BaseButton.style";

import type { FC } from "react";
type BaseButtonProps = {
  text: string;
  onClick: () => void;
};

const BaseButton: FC<BaseButtonProps> = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <span>{text}</span>
    </StyledButton>
  );
};

export default BaseButton;
