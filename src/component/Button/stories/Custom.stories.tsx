import { Button } from "rainbow";
import { makeStyles } from "@griffel/react";

const useClasses = makeStyles({
    root: {
      backgroundColor: "yellow",
      padding: "100px",
    },
  });

export const Custom = () => {
  const styles = useClasses();
  return (
    <div className={styles.root}>
      <Button primary label="Button"></Button>
    </div>
  );
};
