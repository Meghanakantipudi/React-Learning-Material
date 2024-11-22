import React from 'react';

function MovieCard({movie, addToWatchList, removeFromWatchList, WatchList}) {
  function doesContainMovie(movie){
    return WatchList.find((Watchedmovie) => Watchedmovie.id === movie.id);
  }
  return (
    <div className='relative w-[240px] h-[40vh] bg-cover bg-center hover:cursor-pointer hover:scale-110 duration-200 rounded-xl m-5' style={{backgroundImage:`url('https://www.themoviedb.org/t/p/w1280/${movie.poster_path}')`}}>
        <div className="absolute right-0 w-8 h-8 rounded-lg flex justify-center items-center m-3 bg-gray-900/60">
        {doesContainMovie(movie) ? <button className="text-red-600 text-bold text-2xl" onClick={() => removeFromWatchList(movie)}><i class="fa-duotone fa-solid fa-xmark"></i></button> : <button onClick={() => addToWatchList(movie)}>&#128525;</button>}
            
         
        </div>
      <div className='w-full bg-gray-900/60 bg-cover bg-center text-2xl text-white text-center absolute bottom-0'>
        {movie.original_title}
      </div>
    </div>
  )
}
export default MovieCard
