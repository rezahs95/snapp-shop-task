import { Skeleton } from "@mui/material";
import styles from "./plp.module.css";

export default function PLPLoading() {
  return (
    <>
      <main className={styles.main}>
        <Skeleton variant="rectangular" width="100%" height="50vh" />
        <Skeleton variant="rectangular" width="100%" height="50vh" />
        <Skeleton variant="rectangular" width="100%" height="50vh" />
        <Skeleton variant="rectangular" width="100%" height="50vh" />
        <Skeleton variant="rectangular" width="100%" height="50vh" />
        <Skeleton variant="rectangular" width="100%" height="50vh" />
      </main>
    </>
  );
}
