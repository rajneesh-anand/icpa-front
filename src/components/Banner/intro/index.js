import PropTypes from "prop-types";
import Link from "next/link";

const Intro = ({ data }) => {
  console.log(data);
  return (
    <div
      className="intro-section"
      style={{
        backgroundImage: `url(${data.url})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="slider-content">
              <p className="text animated delay1">
                feel the difference with us
              </p>
              <h2
                className="title animated delay2"
                dangerouslySetInnerHTML={{
                  __html:
                    "Your Health <span>Is</span><span class='d-block'>Our Priority</span>",
                }}
              />
              <Link href={process.env.PUBLIC_URL + "/"}>
                <a className="btn btn-danger me-3 animated delay1">
                  Get a quote
                </a>
              </Link>
              <Link href={process.env.PUBLIC_URL + "/"}>
                <a className="btn btn-outline-secondary animated delay2">
                  Our Services
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Intro.propTypes = {
  data: PropTypes.object,
};

export default Intro;
