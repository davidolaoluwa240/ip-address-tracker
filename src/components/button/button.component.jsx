// Assets
import "./button.styles.scss";

const Button = ({ children, arialLabel, className }) => {
  return (
    <button className={`btn btn--primary ${className}`} aria-label={arialLabel}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: "",
  arialLabel: "",
};

export default Button;
