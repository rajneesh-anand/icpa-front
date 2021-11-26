import React from "react";
import Link from "next/link";

const YoutubeLink = () => {
  return (
    <div className="container">
      <div className="page-title-content">
        <div className="youtube-btn">
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=SlOM0otAiCM&list=PLgWbknddpHMYwjA3Kcdh4wzQkrWGIVDFs"
            rel="noopener noreferrer"
          >
            <img
              src="/images/YouTube.svg"
              alt="youtube"
              style={{ height: "104px" }}
            />
          </a>
        </div>
        <div className="youtube-link">
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=SlOM0otAiCM&list=PLgWbknddpHMYwjA3Kcdh4wzQkrWGIVDFs"
            rel="noopener noreferrer"
          >
            Join / Subscribe our Youtube channel for Amazon / Flipkart Seller
            videos &amp; latest updates{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
export default YoutubeLink;
