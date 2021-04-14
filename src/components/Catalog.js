import React from "react";
import MovieCard from "./MovieCard";
import { movies } from "../data";

const Catalog = ({ filter }) => {
  return (
    <div className="catalog">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Catalog;
