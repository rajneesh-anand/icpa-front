import React from "react";
import Link from "next/link";

const YoutubeLink = () => {
  return (
    <div className="page-title-area">
      <div className="container">
        <div className="page-title-content">
          <div className="youtube-btn">
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=TiSGujM22OI&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-youtube"></i>
            </a>
          </div>
          <div className="youtube-link">
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=TiSGujM22OI&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK"
              rel="noopener noreferrer"
            >
              Join / Subscribe our Youtube channel for Amazon / Flipkart Seller
              videos &amp; latest updates{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default YoutubeLink;
