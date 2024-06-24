import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Requests from "./Requests";
import Row from "./Row";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargRow={true}
      />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Documentries" fetchUrl={Requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
