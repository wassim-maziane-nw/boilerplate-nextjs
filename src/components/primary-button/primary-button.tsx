import { StyledPrimaryButton } from "./primary-button.style";

import type { FC } from "react";

type PrimaryButtonProps = {
  text: string;
  onClick: () => void;
};

const PrimaryButton: FC<PrimaryButtonProps> = ({ text, onClick }) => {
  return <StyledPrimaryButton onClick={onClick} text={text} />;
};

export default PrimaryButton;
