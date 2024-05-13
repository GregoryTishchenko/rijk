import classes from './Button.module.css';

const Button = ({ classList, children, ...props }) => {
  return (
    <button {...props} className={`${classes.btn} ${classList}`}>
      {children}
    </button>
  );
};

export default Button;
