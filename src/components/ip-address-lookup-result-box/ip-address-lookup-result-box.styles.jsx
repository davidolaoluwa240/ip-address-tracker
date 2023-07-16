// Modules
import styled from "styled-components";

export const IPAddressLookupResultBoxWrapper = styled.div`
  background-color: var(--light-color);
  margin-top: 6rem;
  border-radius: 8px;
  padding: 2.5rem;
  box-shadow: 0px 5px 7px 0px hsl(0, 0%, 59%);
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    display: block;
    margin-top: 2rem;
  }
`;
