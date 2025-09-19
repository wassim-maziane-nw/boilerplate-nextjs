"use client";

import { StyledButton } from "./BaseButton.style";

import type { FC } from "react";
type BaseButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

const BaseButton: FC<BaseButtonProps> = ({ text, onClick, className }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      <span>{text}</span>
    </StyledButton>
  );
};

export default BaseButton;
