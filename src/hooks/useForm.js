// Modules
import { useState } from "react";

const useForm = function (validator, initState) {
  const [ formState, setFormState ] = useState(initState);

  // Reset the entire form state
  const resetFormState = function () {
    setFormState(initState);
  };

  //  OnSubmit call validator and call the callback function
  const onSubmit = (callback) => {
    return function (e) {
      e.preventDefault();
      const valid = validator(formState);
      valid && callback(formState, resetFormState, e);
    };
  };

  // Update Form State
  const onInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return { onSubmit, onInputChange, formState };
};

export default useForm;
