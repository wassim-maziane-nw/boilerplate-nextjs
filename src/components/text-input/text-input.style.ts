import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.h4.fontWeight,
    fontSize: theme.typography.h4.fontSize,
    lineHeight: theme.typography.h4.lineHeight,
  },
}));
