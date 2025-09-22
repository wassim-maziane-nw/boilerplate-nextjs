import { StyledTextField } from "./text-input.style";

import type { TextFieldProps } from "@mui/material";
import type { FC } from "react";
const TextInput: FC<TextFieldProps> = (props) => {
  return <StyledTextField {...props} />;
};
export default TextInput;
