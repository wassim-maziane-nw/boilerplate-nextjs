import { StyledPrimaryButton } from "./primary-button.style";

import type { FC } from "react";

type PrimaryButtonProps = {
  title: string;
  onClick: () => void;
  fullWidth?: boolean;
  iconPath?: string;
};

const PrimaryButton: FC<PrimaryButtonProps> = ({ title, onClick, fullWidth = false, iconPath }) => {
  return <StyledPrimaryButton onClick={onClick} title={title} fullWidth={fullWidth} iconPath={iconPath} />;
};

export default PrimaryButton;
