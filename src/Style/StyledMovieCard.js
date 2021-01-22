import styled from "styled-components";
import { colors } from "./colors";
import Button from "@material-ui/core/Button";

export const Card = styled.div`
  border: 2px solid ${colors.blue};
  width: clamp(250px, 20vw, 450px);
  margin: 20px;

  @media (max-width: 650px) {
    width: 100%;
    display: flex;
  }
`;

export const CardImage = styled.img`
  object-fit: fill;
  flex: 1 0 auto;
  width: 100%;
  height: clamp(200px, 35vh, 350px);
`;

export const CardContent = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  margin-bottom: 20px;
  margin-top: 5px;
  height: 20vh;
  position: relative;
  font-size: clamp(1rem, 1.2vw, 4rem);

  @media (max-width: 650px) {
    width: 50%;
    margin-top: 5%;
    height: 180px;
  }
`;

export const CardDate = styled.div`
  opacity: 0.5;
`;

export const MovieCardContainer = styled.div`
  h2 {
    margin-top: 10px;
    margin-left: 10px;
    font-size: clamp(1rem, 2.5vw, 6rem);
  }
`;

export const ButtonCard = styled(Button)`
  && {
    background-color: ${colors.blue};
    color: ${colors.white};
    position: absolute;
    bottom: 0;
    right: 30px;
    font-size: clamp(0.8rem, 1vw, 3rem);

    &:hover {
      background-color: ${colors.dodgerblue};
    }
  }
`;
