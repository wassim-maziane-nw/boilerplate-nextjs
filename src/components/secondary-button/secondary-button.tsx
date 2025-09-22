import { StyledSecondaryButton } from "./secondary-button.style";

import type { FC } from "react";

type SecondaryButtonProps = {
  title: string;
  onClick: () => void;
  fullWidth?: boolean;
  iconPath?: string;
};

const SecondaryButton: FC<SecondaryButtonProps> = ({ title, onClick, fullWidth = false, iconPath }) => {
  return <StyledSecondaryButton title={title} onClick={onClick} fullWidth={fullWidth} iconPath={iconPath} />;
};

export default SecondaryButton;
