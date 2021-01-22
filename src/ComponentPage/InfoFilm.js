import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import YouTube from "react-youtube";
import axios from "../utils/axios";
import { FlexBox, FlexboxInfoFilm } from "../Style/Flexbox";
import FilmRow from "../Component/FilmRow";
import FilmTrailer from "../Component/FilmTrailer";

function InfoFilm() {
  const base_url = "https://image.tmdb.org/t/p/original/";

  //recupero lo state passato attraverso LINK
  let selectedMovie = useLocation();

  let [trailerUrl, setTrailerUrl] = useState("");

  //prendendo id del film effettuo una richiesta del video attraverso "videos?api_key..."
  //ottenuto oggetto vado a prendere id,fornito dalla API, associado al trailer di youtube
  useEffect(() => {
    window.scrollTo(0, 0);
    if (selectedMovie.state.movie.first_air_date) {
      fetchData(
        `https://api.themoviedb.org/3/tv/${selectedMovie.state.movie.id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045`
      );
    } else if (selectedMovie.state.movie.release_date) {
      fetchData(
        `https://api.themoviedb.org/3/movie/${selectedMovie.state.movie.id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045`
      );
    }
  }, []);

  //option per youtube player VEDI=> https://developers.google.com/youtube/player_parameters
  const opts = {
    height: "700px",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  async function fetchData(fetchUrl) {
    await axios
      .get(fetchUrl)
      .then((res) => {
        const request = res.data;
        setTrailerUrl(request.results[0].key);
        return request;
      })
      .catch((e) => console.log(e));
  }

  return (
    <>
      <FlexboxInfoFilm>
        <FilmRow selectedMovie={selectedMovie} base_url={base_url}></FilmRow>
      </FlexboxInfoFilm>
      <FilmTrailer trailerUrl={trailerUrl} opts={opts}></FilmTrailer>
    </>
  );
}

export default InfoFilm;
