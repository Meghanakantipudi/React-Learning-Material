import React from "react";
import genreids from "../Utilities/genres.js";

function WatchList({ watchList, setWatchList }) {
  const [search, setSearch] = React.useState("");
  const [genreId, setGenreId] = React.useState(-1);
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function sortDecreasing() {
    console.log("sorting");
    let sortedWatchList = watchList.sort((movie1, movie2) => {
      return movie1.vote_average - movie2.vote_average;
    });
    setWatchList([...sortedWatchList]);
  }

  function sortIncreasing() {
    let sortedWatchList = watchList.sort((movie1, movie2) => {
      return movie2.vote_average - movie1.vote_average;
    });
    setWatchList([...sortedWatchList]);
  }

  return (
    <>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {Object.entries(genreids).map((entry) => {
          return entry[0] == genreId ? (<button key={entry[0]} onClick={() => setGenreId(entry[0])} className="bg-blue-500 text-white font-bold px-10 py-2 m-5 rounded-lg hover:cursor-pointer hover:scale-110 duration-150">
            {entry[1]}
          </button>) : (<button key={entry[0]} onClick={() => setGenreId(entry[0])} className="bg-gray-400 text-white font-bold px-10 py-2 m-5 rounded-lg hover:cursor-pointer hover:scale-110 duration-150">
            {entry[1]}
          </button>);
        })}
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <input
          type="text"
          placeholder="Search Movies"
          className="bg-gray-300 h-[3rem] w-[21rem] m-5 p-3 border-gray"
          onChange={handleSearch}
          value={search}
        />
      </div>

      <div className="m-10">
        <table className="w-full border-gray border-2">
          <thead className="border-gray border-2">
            <tr>
              <th>Name</th>
              <th className="flex flex-row space-x-2">
                <div onClick={sortIncreasing}>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div>Ratings</div>
                <div onClick={sortDecreasing}>
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList
              .filter((movie) => {
                return movie.original_title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              }).filter((movie) => {
                return movie.genre_ids[0] == genreId || genreId == -1;
              })
              .map((movie) => {
                const img_url = `https://www.themoviedb.org/t/p/w1280/${movie.poster_path}`;
                return (
                  <tr key={movie.id} className="border-2 border-gray">
                    <td className="flex flex-wrap items-center">
                      <img
                        className="w-[300px] h-[200px] m-5"
                        src={img_url}
                        alt="movie poster"
                      />
                      <div className="text-center">{movie.original_title}</div>
                    </td>
                    <td className="text-center">{movie.vote_average}</td>
                    <td className="text-center">{movie.popularity}</td>
                    <td className="text-center">
                      {genreids[movie.genre_ids[0]]}
                    </td>
                    <td className="text-red-500 font-bold text-center">
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
