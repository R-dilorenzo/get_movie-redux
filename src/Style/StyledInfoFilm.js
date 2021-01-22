import styled from "styled-components";
import StarRateIcon from "@material-ui/icons/StarRate";
import { colors } from "./colors";

export const Poster = styled.img`
  object-fit: contain;
  max-height: 60vh;
  transition: transform 450ms;
  margin-right: 10px;
  flex: 1 0 auto;
  max-width: 25vw;

  &:hover {
    transform: scale(1.08);
    opacity: 1;
  }

  @media (max-width: 750px) {
    max-width: 35vw;
  }

  @media (max-width: 600px) {
    max-width: 45vw;
    display: grid;
    margin-right: auto;
    margin-left: auto;
  } ;
`;

export const FilmDescription = styled.div`
  margin-left: 10px;
  padding: 10px;

  b {
    font-size: clamp(0.8rem, 1.4vw, 2rem);
  }
`;

export const DescriptionData = styled.div`
  display: flex;

  p {
    opacity: 0.5;
    margin-right: 10px;
    font-size: clamp(0.8rem, 1.4vw, 2rem);
  }
`;

export const DescriptionTitle = styled.div`
  display: flex;
  
  h1 {
    font-size: clamp(3rem, 4.5vw, 9rem);
    font-weight: 800;
    padding-bottom: 0.3rem;
    margin-right: 20px;
  }
  h2 {
    margin-top: 10px;
  }
`;

export const DescriptionVoti = styled.div`
  display: flex;

  p {
    font-size: clamp(0.8rem, 1.4vw, 2rem);
  }

  .voti__text {
    margin-left: 5px;
  }
`;

export const Trailer = styled.div`
  h1 {
    margin-left: 7%;
  }
`;

export const IconVoti = styled(StarRateIcon)`
  && {
    fill: #f0c14b;
    font-size: 2vw;
  }
`;

export const ButtonTrailer = styled.button`
  cursor: pointer;
  border-radius: 25px;
  margin: 20px 0px;
  padding: 14px 30px;
  background-color: ${colors.blue};
  border: 0px;
  text-transform: inherit;
  color: ${colors.white};
  outline: 0;

  &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    background-color: ${colors.dodgerblue};
  }
`;
