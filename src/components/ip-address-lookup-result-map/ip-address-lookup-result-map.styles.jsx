// Modules
import styled from "styled-components";

export const IPAddressLookupResultMapWrapper = styled.div`
  .leaflet-container {
    width: 100%;
    height: calc(100vh - 40vh);
    z-index: 0;
  }
`;

export const IPAddressLookupResultMapPopupContent = styled.div`
  display: flex;
  align-items: center;
`;

export const IPAddressLookupResultMapPopupImage = styled.img`
  width: 30px;
  height: 20px;
  margin-right: 1rem;
`;

export const IPAddressLookupResultMapPopupText = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  font-family: var(--primary-font-family);
`;
