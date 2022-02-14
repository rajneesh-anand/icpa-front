import React from "react";
import ContentLoader from "react-content-loader";

const ImageLoader = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 320 320"
    backgroundColor="#F3F6FA"
    foregroundColor="#E7ECF3"
    className="w-100"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="204" />
    {/* <rect x="18" y="203" rx="3" ry="3" width="226" height="12" /> */}
    <rect x="18" y="236" rx="3" ry="3" width="280" height="16" />
    <rect x="18" y="258" rx="3" ry="3" width="280" height="16" />
    {/* <rect x="18" y="287" rx="3" ry="3" width="79" height="5" /> */}
  </ContentLoader>
);

export default ImageLoader;
