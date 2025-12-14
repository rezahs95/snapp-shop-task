import Link from "next/link";
import styles from "./pdp.module.css";
import { Button } from "@mui/material";

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <p>محصول مورد نظر یافت نشد!</p>
      <Link color="primary" href="/">
        <Button variant="contained" color="primary">
          بازگشت به صفحه اصلی
        </Button>
      </Link>
    </section>
  );
}
