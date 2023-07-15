const Field = ({ type, value, placeholder, name, onChange, className }) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

Field.defaultProps = {
  className: "",
};

export default Field;
