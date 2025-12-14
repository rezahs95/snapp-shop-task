import { Skeleton } from "@mui/material";

export default function PDPLoading() {
  return (
    <>
      <section className="pdp-skeleton">
        <Skeleton variant="rectangular" width="100%" height="75vh" />
        <Skeleton variant="rectangular" width="100%" height="7rem" />
      </section>
    </>
  );
}
