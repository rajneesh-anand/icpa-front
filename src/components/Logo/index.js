import Link from "next/link";
import PropTypes from "prop-types";

const Logo = ({ image, classOption }) => {
  return (
    <Link href={process.env.PUBLIC_URL + "/"}>
      <a className={`${classOption}`}>
        <img
          className="sticky-img"
          src={process.env.PUBLIC_URL + image}
          alt="Logo"
        />
      </a>
    </Link>
  );
};

Logo.propTypes = {
  image: PropTypes.string,
  classOption: PropTypes.string,
};

Logo.defaultProps = {
  classOption: "text-center",
};

export default Logo;
