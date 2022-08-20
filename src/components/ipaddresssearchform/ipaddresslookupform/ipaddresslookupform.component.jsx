// Modules
import { toast } from "react-toastify";
import { connect } from "react-redux";
import useForm from "../../../hooks/useForm";

// Components
import Field from "../field/field.component";
import Button from "../../button/button.component";

// Actions
import { getIpAddress } from "../../../actions/searchActions";

// Styles
import "./ipaddresslookupform.styles.scss";

// Assets
import CarretRightIcon from "../../../assets/images/icon-arrow.svg";

// Form Initial State
const SEARCH_INITIAL_STATE = {
  searchTerm: "",
};

const AddressLookupForm = ({ getIpAddress }) => {
  const { onInputChange, onSubmit, formState } = useForm(
    validateForm,
    SEARCH_INITIAL_STATE
  );

  function validateForm(formData) {
    const { searchTerm } = formData;
    if (!searchTerm) {
      toast("Enter an ip address or domain name to continue");
      return false;
    }
    return true;
  }

  const onSearchSubmit = function (formData, resetForm) {
    const { searchTerm } = formData;
    // Dispatch an action to fetch term
    if (isFinite(+searchTerm[0])) {
      getIpAddress({ params: { ipAddress: searchTerm } });
    } else {
      getIpAddress({ params: { domain: searchTerm } });
    }
    // Reset Form Data
    resetForm();
  };

  return (
    <form
      className="search-form"
      autoComplete="off"
      onSubmit={onSubmit(onSearchSubmit)}
    >
      <div className="search-form__group">
        <Field
          className="search-form__control"
          type="text"
          name="searchTerm"
          placeholder="Search for any IP address or domain name"
          value={formState.searchTerm}
          onChange={onInputChange}
        />
        <Button
          className="search-form__btn"
          type="submit"
          arialLabel="search for ip address or domain name"
        >
          <img
            src={CarretRightIcon}
            className="search-form__btn-icon"
            alt="search"
          />
        </Button>
      </div>
    </form>
  );
};

export default connect(null, { getIpAddress })(AddressLookupForm);
