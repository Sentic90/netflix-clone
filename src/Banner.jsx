import React from "react";
import "./Banner.css";
const Banner = () => {
  const trucate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <div className="banner__description">
          {trucate(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorem eaque necessitatibus aspernatur mollitia aliquam eius veniam corporis in, asperiores fuga amet soluta molestiae modi tempora voluptatum quasi maxime id, error enim, ipsam nemo laboriosam. Ad, vero commodi qui labore cupiditate neque beatae placeat vel assumenda, omnis dolorum autem. Nulla?`,
            150
          )}
        </div>

        <div className="banner--fadeBottom" />
      </div>
    </header>
  );
};

export default Banner;
