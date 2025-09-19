import { StyledPrimaryButton } from "./primary-button.style";

import type { FC } from "react";

type PrimaryButtonProps = {
  title: string;
  onClick: () => void;
};

const PrimaryButton: FC<PrimaryButtonProps> = ({ title, onClick }) => {
  return <StyledPrimaryButton onClick={onClick} title={title} />;
};

export default PrimaryButton;
