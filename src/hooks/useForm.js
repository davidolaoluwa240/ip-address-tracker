// Hooks
import { useState } from "react";

/**
 * Use Form Hook
 * @param {Function} validator Validation function to be executed on form submit
 * @param {Object} initState Form initial state
 * @returns {Object}
 */
export const useForm = (validator, initState) => {
  const [formState, setFormState] = useState(initState);

  /**
   * Reset Form State
   */
  const resetFormState = function () {
    setFormState(initState);
  };

  /**
   * Submit Form Data
   * @param {Function} callback Function to be executed when user submit
   * @returns {Function} Submit handler
   */
  const onSubmit = (callback) => (e) => {
    e.preventDefault();
    const valid = validator(formState);
    valid && callback(formState, resetFormState, e);
  };

  /**
   * Update Form State
   * @param {InputEvent} e Event
   */
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return { onSubmit, onInputChange, formState };
};
