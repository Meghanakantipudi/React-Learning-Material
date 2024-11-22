import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../imdblogo.jpg';

function Navbar() {
  return (
    <div className="flex items-center justify-start">
      <img className="w-[100px]" src={logo} alt="IMDB Logo" />
      <Link className="pr-2 pt-2 text-4xl text-blue-500 font-bold" to="/">Movies</Link>
      <Link className="pl-2 pt-2 text-4xl text-blue-500 font-bold" to="/watchlist">Watch List</Link>
    </div>
  )
}

export default Navbar
