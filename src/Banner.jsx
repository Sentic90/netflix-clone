import React, { useEffect, useState } from "react";

import httpService from "./httpService";
import Requests from "./Requests";
import "./Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState({});
  const trucate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  const getRandomNumber = (length) => {
    // return Math.floor(Math.random() * length - 1);
    return 11;
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await httpService.get(Requests.fetchTrending);
      setMovie(data.results[getRandomNumber(data.results.length)]);
    }

    fetchData();
    // return request;
  }, []);

  console.log(``);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <div className="banner__description">
          {trucate(movie?.overview, 150)}
        </div>

        <div className="banner--fadeBottom" />
      </div>
    </header>
  );
};

export default Banner;
