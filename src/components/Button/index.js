import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

const Button = ({ classOption, text, path }) => {
  return (
    <React.Fragment>
      <Link href={process.env.PUBLIC_URL + path}>
        <a className={`${classOption}`}>{text}</a>
      </Link>
    </React.Fragment>
  );
};

Button.propTypes = {
  classOption: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
};
Button.defaultProps = {
  classOption: "btn",
};

export default Button;
