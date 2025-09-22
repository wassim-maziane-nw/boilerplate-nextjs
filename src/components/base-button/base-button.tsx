"use client";

import { StyledButton } from "./base-button.style";

import Image from "next/image";
import type { FC } from "react";
type BaseButtonProps = {
  title: string;
  onClick: () => void;
  className?: string;
  fullWidth?: boolean;
  iconPath?: string | undefined;
};

const BaseButton: FC<BaseButtonProps> = ({ title, onClick, className, fullWidth = false, iconPath }) => {
  return (
    <StyledButton onClick={onClick} className={className} fullWidth={fullWidth}>
      <span>
        {iconPath !== undefined && <Image src={iconPath} width={16} height={16} alt="start icon" />} {title}
      </span>
    </StyledButton>
  );
};

export default BaseButton;
