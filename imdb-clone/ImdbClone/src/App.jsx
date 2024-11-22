import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
export default function App() {
  const [watchList, setWatchList] = useState([]);

  function addToWatchList(movie) {
    setWatchList((prev) => [...prev, movie]);
    localStorage.setItem("watchList", JSON.stringify([...watchList, movie]));
  }

  function removeFromWatchList(movie) {
    setWatchList((prev) => {
      return prev.filter((item) => {
        return item.id !== movie.id;
      });
    });
    //console.log(watchList);
    localStorage.setItem("watchList", JSON.stringify(watchList.filter((item) => {
      return item.id !== movie.id;
    })));
  }

  useEffect(() => {
    const movies = localStorage.getItem("watchList");
    if (!movies) return;
    setWatchList(JSON.parse(movies));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  addToWatchList={addToWatchList}
                  removeFromWatchList={removeFromWatchList}
                  WatchList={watchList}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={<WatchList watchList={watchList} setWatchList={setWatchList}/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
