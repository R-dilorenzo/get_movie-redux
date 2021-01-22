import React from "react";
import { FlexBox } from "../Style/Flexbox";
import {
  DescriptionData,
  DescriptionTitle,
  DescriptionVoti,
  FilmDescription,
  IconVoti,
  Poster,
} from "../Style/StyledInfoFilm";

function FilmRow({ selectedMovie, base_url }) {
  return (
    <>
      <Poster
        key={selectedMovie.state.movie.id}
        src={`${base_url}${selectedMovie.state.movie.poster_path}`}
        alt={selectedMovie.state.movie.title || selectedMovie.state.movie.name}
      ></Poster>
      <FilmDescription>
        <DescriptionTitle>
          <h1>
            {selectedMovie.state.movie.title || selectedMovie.state.movie.name}
          </h1>
          <h2>
            [
            {selectedMovie.state.movie?.origin_country ||
              selectedMovie.state.movie.original_language}
            ]
          </h2>
        </DescriptionTitle>
        <br />
        <b>{selectedMovie.state.movie?.overview}</b>
        <br />
        <br />
        <DescriptionData>
          <p>Data di uscita:</p>
          <b>
            {selectedMovie.state.movie.first_air_date ||
              selectedMovie.state.movie.release_date ||
              "N/D"}
          </b>
        </DescriptionData>
        <DescriptionVoti>
          <IconVoti />
          <b>{selectedMovie.state.movie.vote_average}</b>
          <p>/10</p>
          <p className="voti__text">
            su {selectedMovie.state.movie.vote_count} voti
          </p>
        </DescriptionVoti>
      </FilmDescription>
    </>
  );
}

export default FilmRow;
