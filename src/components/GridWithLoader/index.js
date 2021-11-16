import dynamic from "next/dynamic";
import rangeMap from "@/libs/range-map";
const ProductLoader = dynamic(() => import("@/components/ProductLoader"));

const GridWithLoader = ({ showLoaders, limit = 20, children }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {showLoaders ? (
          <>
            {rangeMap(limit, (i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <ProductLoader key={i} uniqueKey={`product-${i}`} />
              </div>
            ))}
          </>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default GridWithLoader;
