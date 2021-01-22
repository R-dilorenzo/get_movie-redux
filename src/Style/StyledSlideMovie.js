import styled from "styled-components";
import { colors } from "./colors";

export const SMovie = styled.div`
  margin-top: 10px;
  margin-left: 10px;
`;

export const SButton = styled.div`
  margin-right: 10px;

  button {
    width: 46px;
    margin-right: 5px;
    border-radius: 25px;
    border: 0px;
    cursor: pointer;
    background-color: ${colors.blue};

    &:hover {
      /* background-color:#006bd6; */
      background-color: ${colors.dodgerblue};
    }
  }

  .arrow {
    margin-left: 8px;
    margin-top: 6px;
    margin-bottom: 3px;
    color: ${colors.white};
  }
`;

export const SMoviePosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  scroll-behavior: smooth; //scroll lento nel div

  /* Hide scrollbar-x per IE,Edge e Firefox */
  -ms-overflow-style: none; /* per IE e Edge */
  scrollbar-width: none; /* per Firefox */

  /* Hide scrollbar-x per Chrome,Safari e Opera */
  &::-webkit--sscrollbar {
    display: none;
  }
`;

export const PosterContainer = styled.div`
  position: relative;
  transition: transform 450ms ease-in-out;

  &:hover .poster__title {
    display: inline-block;
    transform: scale(1);
  }

  .poster__title {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    font-size: 2vw;
    font-weight: 600;
    color: white;
    margin-left: 5px;
    margin-top: 5px;
    /* 1 pixel black shadow to left, top, right and bottom */
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }

  img {
    object-fit: contain;
    max-height: 50vh;
    /* se si ha un trasform questo avviene con una transizione di 450 ms. In questo caso transform è stato settato con onHover */
    transition: transform 450ms;
    margin-right: 10px;
    flex: 1 0 auto;

    &:hover {
      transform: scale(1.09);
      opacity: 1;
    }
  }
`;
