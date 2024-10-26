import { makeStyles } from "@griffel/react";
import {
  RainbowProvider,
  tokens,
  webLightTheme,
  teamsLightTheme,
  teamsDarkTheme,
  webDarkTheme,
  teamsHighContrastTheme,
} from "rainbow-ui";

const useStyles = makeStyles({
  provider: {
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
  text: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontSize: "20px",
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
});

export const Default = () => {
  const styles = useStyles();
  return (
    <>
      <div>
        <RainbowProvider className={styles.provider} theme={webLightTheme}>
          <div className={styles.text}>Web Light Theme</div>
        </RainbowProvider>
      </div>
      <div>
        <RainbowProvider className={styles.provider} theme={teamsLightTheme}>
          <div className={styles.text}>Teams Light Theme</div>
        </RainbowProvider>
      </div>
      <div>
        <RainbowProvider className={styles.provider} theme={webDarkTheme}>
          <div className={styles.text}>webDarkTheme</div>
        </RainbowProvider>
      </div>
      <div>
        <RainbowProvider className={styles.provider} theme={teamsDarkTheme}>
          <div className={styles.text}>Teams Dark Theme</div>
        </RainbowProvider>
      </div>
      <div>
        <RainbowProvider
          className={styles.provider}
          theme={teamsHighContrastTheme}
        >
          <div className={styles.text}>teamsHighContrastTheme</div>
        </RainbowProvider>
      </div>
    </>
  );
};
