import React, { useState, useEffect } from "react";

import httpService from "./httpService";

import "./Row.css";
const Row = ({ title, fetchUrl, isLargRow = false }) => {
  const [movies, setMovies] = useState([]);
  const BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL;

  useEffect(() => {
    async function fetchData() {
      const {
        data: { results },
      } = await httpService.get(fetchUrl);
      setMovies(results);
    }

    fetchData();
    // return request;
  }, []);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className={"row__posters " + (isLargRow ? "row__posterLarge" : "")}>
        {movies.map(
          (movie) =>
            ((isLargRow && movie.poster_path) ||
              (!isLargRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`row__poster `}
                src={
                  BASE_IMAGE_URL +
                  (isLargRow ? movie.poster_path : movie.backdrop_path)
                }
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
