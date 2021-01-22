import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectFilms } from "../features/filmsSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { FlexboxCard } from "../Style/Flexbox";
import { Link } from "react-router-dom";
import {
  ButtonCard,
  Card,
  CardContent,
  CardDate,
  CardImage,
} from "../Style/StyledMovieCard";

function InfiniteScrollCard() {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const films = useSelector(selectFilms);

  const [count, setCount] = useState({
    prev: -15,
    next: 0,
  });

  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(films.slice(count.prev, count.next));

  const getMoreData = () => {
    if (films.length < count.next + 15) {
      setCurrent(
        current.concat(
          films.slice(
            count.prev + 15,
            count.next + (films.length - current.length)
          )
        )
      );
      setHasMore(false);
    } else {
      setTimeout(() => {
        setCurrent(
          current.concat(films.slice(count.prev + 15, count.next + 15))
        );
      }, 500);
      setCount((prevState) => ({
        prev: prevState.prev + 15,
        next: prevState.next + 15,
      }));
    }
  };

  return (
    <InfiniteScroll
      dataLength={current.length}
      next={getMoreData}
      hasMore={hasMore}
      endMessage={
        <p style={{ textAlign: "center", padding: "20px" }}>
          <b>Sei arrivato alla fine!</b>
        </p>
      }
      loader={
        <p style={{ textAlign: "center", padding: "20px" }}>
          <b>Loading...</b>
        </p>
      }
    >
      <FlexboxCard>
        {current &&
          current.map((movie, index) => (
            <Card>
              <Link
                key={movie.id}
                to={{
                  pathname: "/infoFilm",
                  state: { movie: movie },
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
                <br />
                <CardDate>
                  {movie.first_air_date || movie.release_date
                    ? ((movie.first_air_date || movie.release_date).substring(
                        0,
                        4
                      ))
                    : "N/D"}
                </CardDate>
                <br />
                <Link
                  key={movie.id}
                  to={{
                    pathname: "/infoFilm",
                    state: { movie: movie },
                  }}
                >
                  <ButtonCard variant="contained">Info</ButtonCard>
                </Link>
              </CardContent>
            </Card>
          ))}
      </FlexboxCard>
    </InfiniteScroll>
  );
}

export default InfiniteScrollCard;
