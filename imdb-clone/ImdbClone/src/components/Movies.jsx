import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

function Movies({
  addToWatchList,
  removeFromWatchList,
  WatchList
}) {
  const [movies, setMoviesState] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?&api_key=ee6cdcb404fa9c7f9f23ee33a8746f2e&language=en-US&page=${page}`
      )
      .then((response) => {
        console.log(response.data.results);
        setMoviesState(response.data.results);
      });
  }, [page]);

  function updatePage(pageNumber) {
    if (pageNumber < 1 || pageNumber > 20) return;
    setPage(pageNumber);
  }

  return (
    <div>
      <div className="flex align-center justify-center p-5 font-bold text-xl m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex flex-row flex-wrap">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              movie={movieObj}
              addToWatchList={addToWatchList}
              removeFromWatchList={removeFromWatchList}
              WatchList={WatchList}
            />
          );
        })}
      </div>
      <Pagination page={page} updatePageNumber={updatePage} />
    </div>
  );
}

export default Movies;
