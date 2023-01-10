import { useEffect, useState } from "react";
import getTrendingTerms from "../../services/getTrendingTerms";
import Category from "../Category";

export const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);
  return <Category name="ｱのｱひﾚ乇尺" options={trends} />;
};

export default TrendingSearches;
