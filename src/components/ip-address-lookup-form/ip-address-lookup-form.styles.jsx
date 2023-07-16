// Modules
import styled from "styled-components";

// Components
import { Input, Form } from "../";
import { ReactComponent as CarretRightIconSvg } from "../../assets/images/icon-arrow.svg";

// Styles
import { ButtonBase } from "../button/button.styles";

export const IPAddressLookupFormWrapper = styled(Form)`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
`;

export const IPAddressLookupFormGroup = styled.div`
  display: flex;
`;

export const IPAddressLookupFormControl = styled(Input)`
  width: 100%;
  height: 46px;
  border-radius: 8px 0px 0px 8px;
  display: block;
  border: none;
  font-size: 1.5rem;
  padding: 1.2rem 2.2rem;
  color: rgba(0, 0, 0, 0.8);

  &::placeholder {
    color: rgba(0, 0, 0, 0.8);
    font-size: 1.5rem;
    font-weight: 500;
    font-family: inherit;
  }

  &:focus {
    outline-color: rgba(0, 0, 0, 0.8);
  }
`;

export const StyledCarretRightIconSvg = styled(CarretRightIconSvg)`
  vertical-align: middle;
`;

export const IPAddressLookupFormButton = styled(ButtonBase)`
  border-radius: 0px 8px 8px 0px;
`;
