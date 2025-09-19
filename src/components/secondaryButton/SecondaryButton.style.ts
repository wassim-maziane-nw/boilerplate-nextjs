import BaseButton from "~components/baseButton";

import { styled } from "@mui/material";

export const StyledSecondaryButton = styled(BaseButton)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  backgroundColor: "transparent",
  "& span": {
    color: theme.palette.text.primary,
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    "& span": {
      color: theme.palette.text.secondary,
    },
  },
}));
