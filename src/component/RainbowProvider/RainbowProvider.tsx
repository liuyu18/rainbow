import React from "react";
import { Theme } from "../../tokens";
import { useStyle } from "./useStyles.styles";

type ThemeContextValue = Theme | Partial<Theme> | undefined;
const ThemeContext = React.createContext<ThemeContextValue>(undefined);

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
  const cls = useStyle({ className, theme });
  return (
    <ThemeContext.Provider value={theme} {...restProps}>
      <div className={cls}>{children}</div>
    </ThemeContext.Provider>
  );
};
