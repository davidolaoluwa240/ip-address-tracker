// Modules
import styled from "styled-components";

// Components
import { ThreeDotsSpinner } from "../../";

export const IPAddressLookupResultItemWrapper = styled.div`
  @media screen and (max-width: 900px) {
    text-align: center;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

export const IPAddressLookupResultItemHeading = styled.p`
  color: var(--secondary-color);
  font-weight: 500;
  font-size: 1.3rem;
  letter-spacing: 2px;
  margin-bottom: 0.6rem;
`;

export const IPAddressLookupResultItemContent = styled.p`
  font-weight: 700;
  font-size: 1.7rem;
  color: var(--primary-color);
  display: ${({ $isVisible }) => !$isVisible && "none"};
`;

export const IPAddressLookupResultItemSpinner = styled(ThreeDotsSpinner)`
  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;
