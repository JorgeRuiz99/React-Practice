import React, { useState } from "react";
import { useLocation } from "wouter";
import Category from "../../components/Category";
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/ useGifs";
import TrendingSearches from "../../components/TrendingSearchesService";

const POPULAR_GIFS = ["Space", "Moon", "Mars", "Jupiter"];
const Tierra = ["Ocean", "Trees", "Mountains", "Rivers"];

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [, pushLocation] = useLocation();
  const { gifs } = useGifs();

  const handleSubmit = (e) => {
    e.preventDefault();
    //navegar a otra ruta
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input
          placeholder="Search a gif here..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title"> Last search</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches />
          <Category name="яυαηg αηgкαѕα" options={POPULAR_GIFS} />
          <Category name="乃ㄩ爪丨" options={Tierra} />
        </div>
      </div>
    </>
  );
};

export default Home;
