import React from "react";
import dynamic from "next/dynamic";
import htmr from "htmr";
import Link from "next/link";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import moment from "moment";
import Image from "next/image";

const options = {
  nav: false,
  loop: true,
  margin: 25,
  dots: true,
  center: true,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
};

const HomeBlogPage = () => {
  const [display, setDisplay] = React.useState(false);
  const [blogs, setBlogs] = React.useState();

  React.useEffect(async () => {
    setDisplay(true);

    let isMounted = true;
    const res = await fetch(`${process.env.API_URL}/blog`);
    const result = await res.json();

    const blogData = result.data.length > 0 ? result.data : null;
    if (isMounted) {
      setBlogs(blogData);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const truncate = (str, no_words) => {
    let truncatedString = str.split(" ").splice(0, no_words).join(" ") + " ";

    return htmr(truncatedString);
  };
  const fomatDate = (date_value) => {
    return moment(date_value).format("Do MMMM YYYY");
  };

  return (
    <>
      <div className="feedback-area ptb-50">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">READ OUR LATEST BLOGS & NEWS </span>
            <h6>
              Don't miss our daily news and blogs regarding e-commerce online
              sellers
            </h6>
          </div>

          {display &&
            (blogs && blogs.length > 0 ? (
              <OwlCarousel
                className="feedback-slides owl-carousel owl-theme"
                {...options}
              >
                {blogs.map((item, index) => (
                  <div key={index} className="single-blog-box">
                    <div className="single-blog-post">
                      <div className="image">
                        <Image
                          src={
                            item.image ? item.image : "/images/blog-default.svg"
                          }
                          alt={item.title}
                          layout="fill"
                        />
                      </div>
                      <div className="content">
                        <ul className="meta">
                          <li>
                            <i className="ri-time-line"></i>
                            {fomatDate(item.createdAt)}
                          </li>
                        </ul>
                        <h3>
                          <Link href={`/blog/${item.slug}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h3>
                        <div style={{ minHeight: "272px" }}>
                          {truncate(item.content, 40)}
                        </div>
                      </div>
                      <div className="read-more">
                        <Link href={`/blog/${item.slug}`}>
                          <a className="default-btn-sm">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            ) : (
              ""
            ))}
        </div>
      </div>
    </>
  );
};

export default HomeBlogPage;
