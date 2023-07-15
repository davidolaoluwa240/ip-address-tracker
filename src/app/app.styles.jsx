// Modules
import styled, { createGlobalStyle } from "styled-components";

// Images
import patternBg from "../assets/images/pattern-bg.png";

// Styles
import { Container } from "../assets/utilities/style-utilities.styles";

export const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color: hsl(0, 0%, 17%);
    --secondary-color: hsl(0, 0%, 59%);
    --light-color: #ffffff;
    --dark-color: #000000;
    --primary-font-family: "Rubik", sans-serif;
  }

  *,
  *::after,
  *::before{
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; // 10/16 => 62.5%
    box-sizing: border-box;

    @media screen and (max-width: 600px) {
      font-size: 50%;
    }
  }


  body {
    font-size: 1.6rem;
    font-family: var(--primary-font-family);
    font-weight: 400;
    line-height: 22px;
    color: var(--dark-color);
    box-sizing: border-box;
  }
`;

export const AppHeader = styled.header`
  background: url(${patternBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 40vh;
`;

export const AppHeaderHeading = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  color: var(--light-color);
  padding-top: 4rem;
  text-align: center;
`;

export const AppMain = styled.main``;

export { Container as AppHeaderContainer };
