import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import requests from "../utils/requests";
import {
  BannerButton,
  BannerContent,
  BannerDescription,
  BannerTitle,
  ImgBanner,
} from "../Style/StyledBanner";
import { Link } from "react-router-dom";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <ImgBanner
      bakcgroundImage={`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}
    >
      <BannerContent>
        <BannerTitle>
          {movie?.title || movie?.name || movie?.original_name}
        </BannerTitle>
        {movie ? (
          <BannerButton>
            <Link
              to={{
                pathname: "/infoFilm",
                state: { movie: movie },
              }}
            >
              <button>More Info...</button>
            </Link>
          </BannerButton>
        ) : (
          <span></span>
        )}

        <BannerDescription>{truncate(movie?.overview, 250)}</BannerDescription>
      </BannerContent>
    </ImgBanner>
  );
}

export default Banner;
