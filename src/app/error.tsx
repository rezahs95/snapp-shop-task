"use client";

import { Button } from "@mui/material";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="global-error">
      <h2>خطایی رخ داده است!</h2>
      <p>متن خطا: {error.message}</p>
      <section>
        <Button variant="contained" color="primary" onClick={reset}>
          تلاش مجدد
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.location.reload()}
        >
          بارگذاری مجدد صفحه
        </Button>
      </section>
    </main>
  );
}
