import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectFilms } from "../features/filmsSlice";
import { FlexboxCard } from "../Style/Flexbox";
import { Link } from "react-router-dom";
import {
  ButtonCard,
  Card,
  CardContent,
  CardDate,
  CardImage,
  MovieCardContainer,
} from "../Style/StyledMovieCard";
import InfiniteScrollCard from "./InfiniteScrollCard";

function MovieCard() {
  const base_url = "https://image.tmdb.org/t/p/original/";

  const films = useSelector(selectFilms);

  return (
    <MovieCardContainer>
      <h2>Tutti i Film</h2>
      <InfiniteScrollCard></InfiniteScrollCard>
      {/** senza infiniteScroll */}
      {/* <FlexboxCard>
                {films.map((movie) => (
                    <Card>
                            <Link 
                                to={{
                                pathname:"/infoFilm",
                                state: {movie:movie} 
                                }}
                            >
                            <CardImage
                                key={movie.id}
                                className="movieCard__poster"
                                src={`${base_url}${movie.backdrop_path}`}
                                alt={movie.title || movie.name}
                            ></CardImage>
                            </Link>
                        <CardContent>
                            {movie.title || movie.name}
                            <br/>
                            <CardDate>
                                {movie.first_air_date || movie.release_date
                                    ? (movie.first_air_date || movie.release_date).substring(0, 4)
                                    : "N/D"}  
                            </CardDate>  
                            <br/>
                            <Link 
                                to={{
                                    pathname:"/infoFilm",
                                    state: {movie:movie} 
                                }}
                            >
                                <ButtonCard variant="contained">
                                Info
                                </ButtonCard>
                            </Link>                    
                        </CardContent>
                    </Card>
                ))}
            </FlexboxCard> */}
    </MovieCardContainer>
  );
}

export default MovieCard;
