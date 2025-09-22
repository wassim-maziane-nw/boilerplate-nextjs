import { styled } from "@mui/material";
import type { Theme } from "@mui/material/styles";

type styledButtonProps = {
  theme: Theme;
  fullWidth: boolean;
};

export const StyledButton = styled("button")(({ theme, fullWidth = false }: styledButtonProps) => ({
  width: fullWidth ? "100%" : theme.button.width,
  height: theme.button.height,
  borderRadius: theme.button.borderRadius,
  borderColor: theme.palette.secondary.main,
  borderWidth: theme.button.borderWidth,
  borderStyle: "solid",
  backgroundColor: theme.palette.primary.main,

  "& span": {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.body1.fontWeight,
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
  },
}));
