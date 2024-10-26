import { Theme } from "rainbow-ui";
import React from "react";
import { useStyles } from "./useStyles.styles";

// 1. 创建一个context
type ThemeContextValue = Theme | Partial<Theme> | undefined;
const ThemeContext = React.createContext<ThemeContextValue>(undefined);

// 2. 创建一个provider
export type RainbowProviderProps = React.HTMLAttributes<
  React.ChildContextProvider<ThemeContextValue>
> & {
  theme: ThemeContextValue;
};
export const RainbowProvider = ({
  className,
  theme,
  children,
  ...restProps
}: RainbowProviderProps) => {
  const cls = useStyles({ className, theme });
  return (
    <ThemeContext.Provider value={theme} {...restProps}>
      <div className={cls}>{children}</div>
    </ThemeContext.Provider>
  );
};
