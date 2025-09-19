"use client";

import { StyledButton } from "./base-button.style";

import type { FC } from "react";
type BaseButtonProps = {
  title: string;
  onClick: () => void;
  className?: string;
};

const BaseButton: FC<BaseButtonProps> = ({ title, onClick, className }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      <span>{title}</span>
    </StyledButton>
  );
};

export default BaseButton;
