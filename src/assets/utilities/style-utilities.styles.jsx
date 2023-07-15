// Modules
import styled from "styled-components";

export const Container = styled.div`
  max-width: 950px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 900px) {
    max-width: 500px;
  }

  @media screen and (max-width: 600px) {
    max-width: 86%;
  }
`;
