import React from "react";
import Row from "../Row/Row";
import requests from "../../../utilities/requests";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
      <Row title="Science Fiction" fetchUrl={requests.fetchScienceFiction} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
      <Row title="Crime" fetchUrl={requests.fetchCrime} />
      <Row title="War" fetchUrl={requests.fetchWar} />
    </>
  );
};

export default RowList;
