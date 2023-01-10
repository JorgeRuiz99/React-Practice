import debounce from "just-debounce-it";
import React, { useCallback, useEffect, useRef } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import Spinner from "../../components/Spinner";
import useGifs from "../../hooks/ useGifs";
import useNearScreen from "../../hooks/useNearScreen";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  // const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  // const handleNextPage = () => console.log("next page");

  const debounceHandleNextPage = useCallback(
    () => debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );
  useEffect(() => {
    console.log(isNearScreen);
    if (isNearScreen) debounceHandleNextPage();
  }, [isNearScreen, debounceHandleNextPage]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
      {/* <br />
      <button onClick={handleNextPage}>Get next page</button> */}
    </>
  );
};

export default SearchResults;
