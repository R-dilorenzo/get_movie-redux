import styled from "styled-components";
import { colors } from "./colors";

export const ImgBanner = styled.div`
  color: ${colors.white};
  object-fit: contain;
  height: 77vh;
  background-image: ${(props) => props.bakcgroundImage};
  background-size: cover;
  background-position: center center;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const BannerContent = styled.div`
  margin-left: 30px;
  padding-top: 18.5vh;
`;

export const BannerTitle = styled.h1`
  font-size: clamp(3rem, 4vw, 9rem);
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

export const BannerButton = styled.div`
  button {
    cursor: pointer;
    color: ${colors.white};
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    background-color: rgba(51, 51, 51, 0.5);
    padding-bottom: 0.5rem;

    &:hover {
      color: #000;
      background-color: ${colors.gray};
      transition: all 0.2s;
    }
  }
`;

export const BannerDescription = styled.div`
  width: 35vw;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: clamp(0.8rem, 1.2vw, 2rem);
  max-width: 45vw;
  height: 12vh;
  margin-left: 0;
`;
