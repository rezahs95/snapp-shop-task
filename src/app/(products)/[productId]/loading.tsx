import { Skeleton } from "@mui/material";
import styles from "./pdp.module.css";

export default function PDPLoading() {
  return (
    <>
      <main className={styles.productDetails}>
        <Skeleton variant="rectangular" width="100%" height="75vh" />
        <Skeleton variant="rectangular" width="100%" height="7rem" />
      </main>
    </>
  );
}
