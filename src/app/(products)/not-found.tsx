import Link from "next/link";
import styles from "./plp.module.css";
import { Button } from "@mui/material";

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <p>محصولی یافت نشد!</p>
      <Link color="primary" href="/">
        <Button variant="contained" color="primary">
          بارگذاری مجدد
        </Button>
      </Link>
    </section>
  );
}
