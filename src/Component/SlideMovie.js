import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React, { useEffect, useRef, useState } from "react";
import { FlexBox } from "../Style/Flexbox";
import {
  SMovie,
  SButton,
  SMoviePosters,
  PosterContainer,
} from "../Style/StyledSlideMovie";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import { clamp } from "gsap";

function SlideMovie({ fetchUrl }) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);
  let posterMovie = useRef(null);

  useEffect(() => {
    //se vuoto esegui una volta quando slideMovie viene caricata altrimenti non caricarlo
    async function fetchData() {
      await axios
        .get(fetchUrl)
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, [fetchUrl]);

  const scrollLeft = () => {
    posterMovie.scrollLeft -= 200;
  };

  const scrollRight = () => {
    posterMovie.scrollLeft += 200;
  };

  return (
    <SMovie>
      <FlexBox spaceBetween>
        <h2 style={{ fontSize: "clamp(1rem, 2.5vw, 6rem)" }}>
          Novità popolari
        </h2>
        <SButton>
          <button onClick={scrollLeft}>
            <ArrowBackIosIcon className="arrow"></ArrowBackIosIcon>
          </button>
          <button onClick={scrollRight}>
            <ArrowForwardIosIcon className="arrow"></ArrowForwardIosIcon>
          </button>
        </SButton>
      </FlexBox>
      <SMoviePosters
        ref={(el) => {
          posterMovie = el;
        }}
      >
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={{
              pathname: "/infoFilm",
              state: { movie: movie },
            }}
          >
            <PosterContainer>
              {/* movie.poster_path è del tipo => /image.jpg; quindi bisogna appendere questa string a base_url definito sopra */}
              <img
                key={movie.id}
                src={`${base_url}${movie.poster_path}`}
                alt={movie.title || movie.name}
              />
              <div className="poster__title">{movie.title || movie.name}</div>
            </PosterContainer>
          </Link>
        ))}
      </SMoviePosters>
    </SMovie>
  );
}

export default SlideMovie;
