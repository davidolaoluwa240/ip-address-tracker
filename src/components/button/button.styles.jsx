// Modules
import styled, { css } from "styled-components";

export const getButtonColor = ({ $color }) => {
  switch ($color) {
    default:
      return css`
        background-color: var(--primary-color);
      `;
  }
};

export const ButtonBase = styled.button`
  border: none;
  display: inline-block;
  padding: 1.4rem 2rem;
  cursor: pointer;

  ${getButtonColor};

  &:focus {
    outline: none;
  }
`;
