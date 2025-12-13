"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>خطایی رخ داده است!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>تلاش مجدد</button>
      <button onClick={() => window.location.reload()}>
        بارگذاری مجدد صفحه
      </button>
    </div>
  );
}
