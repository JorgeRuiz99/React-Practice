import { lazy, Suspense } from "react";
import useNearScreen from "../../hooks/useNearScreen";
import Spinner from "../Spinner";

const TrendingSearches = lazy(() => import("./TrendingSearches"));

const LazyTrending = () => {
  const { show, fromRef } = useNearScreen({ distance: "200px" });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {show ? <TrendingSearches /> : <Spinner />}
      </Suspense>
    </div>
  );
};

export default LazyTrending;
