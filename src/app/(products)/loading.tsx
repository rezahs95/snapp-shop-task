import { Skeleton } from "@mui/material";

export default function PLPLoading() {
  return (
    <>
      <main className="plp-skeleton">
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
