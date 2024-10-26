import * as React from "react";
import { RainbowProviderProps } from "rainbow-ui";
import { createCSSRuleFromTheme } from "./createCSSRuleFromTheme";

// 生成style标签,id
const createStyleTag = (
  target: Document | undefined,
  elementAttributes: Record<string, string>
) => {
  if (!target) {
    return undefined;
  }

  const tag = target.createElement("style");

  Object.keys(elementAttributes).forEach((attrName) => {
    tag.setAttribute(attrName, elementAttributes[attrName]);
  });

  target.head.appendChild(tag);

  return tag;
};

const insertSheet = (tag: HTMLStyleElement, rule: string) => {
  const sheet = tag.sheet;

  if (sheet) {
    if (sheet.cssRules.length > 0) {
      sheet.deleteRule(0);
    }

    sheet.insertRule(rule);
  }
};

export const useThemeStyleTag = ({ theme }: Partial<RainbowProviderProps>) => {
  const generatedId = React.useId();
  const escapedId = React.useMemo(
    () => generatedId.replace(/:/g, ""),
    [generatedId]
  );
  const themeClassName = "rainbow-ui-FishProvider" + escapedId;
  const rule = React.useMemo(
    () => createCSSRuleFromTheme(`.${themeClassName}`, theme),
    [theme, themeClassName]
  );

  const styleTag = React.useRef<HTMLStyleElement | undefined | null>(null);
  React.useLayoutEffect(() => {
    styleTag.current = createStyleTag(document, { id: themeClassName });
    if (styleTag.current) {
      insertSheet(styleTag.current, rule);
    }

    return () => {
      styleTag.current?.remove();
    };
  }, [themeClassName, rule]);

  return { themeClassName };
};
