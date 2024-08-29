import { RainbowProviderProps } from "./RainbowProvider";
import { makeStyles, mergeClasses } from "@griffel/react";
import { tokens } from "../../tokens";
import { useThemeStyleTag } from "./useThemeStyleTag";

const fishProviderClassNames = {
  root: "rainbow-ui-FishProvider",
};

const useBaseStyles = makeStyles({
  root: {
    color: tokens.colorNeutralForeground1,
    backgroundColor: tokens.colorNeutralBackground1,
    textAlign: "left",
  },
});

export const useStyle = ({ className, theme }: Partial<RainbowProviderProps>) => {
  const baseStyles = useBaseStyles();
  const { themeClassName } = useThemeStyleTag({ theme });
  return mergeClasses(
    fishProviderClassNames.root,
    themeClassName,
    baseStyles.root,
    className
  );
};