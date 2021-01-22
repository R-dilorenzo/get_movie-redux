import React, { useState } from "react";
import YouTube from "react-youtube";
import { FlexBox } from "../Style/Flexbox";
import { ButtonTrailer, Trailer } from "../Style/StyledInfoFilm";

function FilmTrailer({ trailerUrl, opts }) {
  const [boolButton, setBoolButton] = useState(false);

  return (
    <Trailer>
      {trailerUrl ? (
        <>
          {boolButton ? (
            <>
              <h1>Trailer:</h1>
              <YouTube videoId={`${trailerUrl}`} opts={opts}></YouTube>
              <FlexBox justifyCenter>
                <ButtonTrailer onClick={() => setBoolButton(false)}>
                  HideTrailer
                </ButtonTrailer>
              </FlexBox>
            </>
          ) : (
            <FlexBox justifyCenter>
              <ButtonTrailer onClick={() => setBoolButton(true)}>
                Watch Trailer
              </ButtonTrailer>
            </FlexBox>
          )}
        </>
      ) : (
        <span></span>
      )}
    </Trailer>
  );
}

export default FilmTrailer;
