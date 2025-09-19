import { styled } from "@mui/material";
import type { Theme } from "@mui/material/styles";

export const StyledButton = styled("button")(({ theme }: { theme: Theme }) => ({
  width: theme.button.width,
  height: theme.button.height,
  borderRadius: theme.button.borderRadius,
  borderColor: theme.palette.secondary.main,
  borderWidth: theme.button.borderWidth,
  borderStyle: "solid",
  backgroundColor: theme.palette.primary.main,

  "& span": {
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.body1.fontWeight,
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
  },
}));
