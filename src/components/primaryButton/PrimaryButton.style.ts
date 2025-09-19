import BaseButton from "~components/baseButton";

import { styled } from "@mui/material/styles";

export const StyledPrimaryButton = styled(BaseButton)(({ theme }) => ({
  "& span": {
    color: theme.palette.text.secondary,
  },
  "&:hover": {
    backgroundColor: theme.button.hoverColor,
    "& span": {
      color: theme.palette.text.primary,
    },
  },
}));
