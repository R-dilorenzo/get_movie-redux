import styled, { css } from "styled-components";

export const FlexBox = styled.div`
  display: flex;

  ${(props) =>
    props.justifyCenter &&
    css`
      justify-content: center;
    `}

  ${(props) =>
    props.alignCenter &&
    css`
      align-items: center;
    `}

    ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
`;

export const FlexboxCard = styled(FlexBox)`
  padding: 0px 20px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const FlexboxInfoFilm = styled(FlexBox)`
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 80px;
  padding-bottom: 20px;

  @media (max-width: 750px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  } ;
`;
