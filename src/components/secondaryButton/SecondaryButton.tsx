import { StyledSecondaryButton } from "./SecondaryButton.style";

import type { FC } from "react";

type SecondaryButtonProps = {
  text: string;
  onClick: () => void;
};

const SecondaryButton: FC<SecondaryButtonProps> = ({ text, onClick }) => {
  return <StyledSecondaryButton text={text} onClick={onClick} />;
};

export default SecondaryButton;
