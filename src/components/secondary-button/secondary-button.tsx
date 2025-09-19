import { StyledSecondaryButton } from "./secondary-button.style";

import type { FC } from "react";

type SecondaryButtonProps = {
  title: string;
  onClick: () => void;
};

const SecondaryButton: FC<SecondaryButtonProps> = ({ title, onClick }) => {
  return <StyledSecondaryButton title={title} onClick={onClick} />;
};

export default SecondaryButton;
