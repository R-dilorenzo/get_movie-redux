import styled, { css } from "styled-components";
import { IconButton } from "@material-ui/core";
import { colors } from "./colors";

export const IconMaterialUI = styled(IconButton)`
  && {
    margin: 0px 20px;
    color: ${colors.black};

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const Logo = styled.img`
  margin: 5px;
  width: 120px;
  object-fit: contain;

  @media (max-width: 480px) {
    margin-left: 0px;
  } ;
`;

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => (props.show ? colors.blue : "")};

  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  min-width: 480px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }

  a {
    outline: 0;
  }
`;

export const StyledAutocomplete = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  background-color: ${colors.white};
  max-width: 560px;
  height: 30px;
  padding: 10px 20px;
  margin: 0 auto;
  margin-top: 5px;
  border-radius: 50px;
  width: 10px;
  position: relative;
  transition: width 1s;

  .nav__button {
    color: ${colors.black};
    cursor: pointer;
    position: absolute;
    right: 10px;
  }

  ${(props) =>
    props.search &&
    css`
      width: 250px;
    `};

  &:hover {
    width: 250px;
    #autoComplete {
      width: 200px;
    }
  }

  #autoComplete {
    width: 0px;
    border: none;
    font-size: medium;
    font-size: medium;
    transition: width 1s;

    ${(props) =>
      props.search &&
      css`
        width: 200px;
        padding: 10px 20px;
      `};

    &:focus {
      width: 200px;
      padding: 10px 20px;
    }
  }

  /* :focus-within => matches elements that either themselves match :focus 
                        or that have descendants which match :focus.
        permette quindi di applicare stili al padre (in questo caso StyledComponent [div])
        quando un elemento figlio ha focus
    */
  &:focus-within {
    width: 250px;
  }
`;
