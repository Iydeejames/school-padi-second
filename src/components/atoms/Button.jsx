
import PropTypes from 'prop-types';

const Button = ({
  bgColor = "#FFFFFF",  // Default background color: White
  color = "#8E959C",    // Default text color: Grey
  borderColor = "#014F9E", // Default border color: Medium Dark Blue
  width,
  height = "40px",
  fontSize = "15px",
  fontWeight = "700",
  children,
  ...rest
}) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        width: width,
        height: height,
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
      }}
      className="border text-sm font-bold p-2 rounded-sm"
      {...rest}
    >
      {children}
    </button>
  );
};

// Define prop types
Button.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
