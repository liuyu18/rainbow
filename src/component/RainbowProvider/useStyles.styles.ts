import { makeStyles, mergeClasses } from "@griffel/react";
import { RainbowProviderProps, tokens } from "rainbow-ui";
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

export const useStyles = ({
  className,
  theme,
}: Partial<RainbowProviderProps>) => {
  const baseStyles = useBaseStyles();
  // 根据theme创建cssrules
  const { themeClassName } = useThemeStyleTag({ theme });
  return mergeClasses(
    fishProviderClassNames.root,
    themeClassName,
    baseStyles.root,
    className
  );
};
