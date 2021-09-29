import React from "react";

const ProductList = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="products-area ptb-50 bg-F7F7FF">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">SELECT YOUR PRODUCTS FOR LISTING</span>
            <h4>We Stock &amp; You Sell</h4>
          </div>
          <div className="row justify-content-center">
            {data &&
              data.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card h-100 shadow-sm">
                    <img
                      src="https://source.unsplash.com/160x160/?food"
                      className="card-img-top"
                      alt="..."
                    />
                    {/* <div className="label-top shadow-sm">Most Popular</div> */}
                    <div className="card-body">
                      <div className="clearfix mb-3">
                        <span className="float-start price-hp">
                          &#x20B9;12354.00
                        </span>{" "}
                        <span className="float-end">
                          <a className="text-muted small" href="#">
                            Reviews
                          </a>
                        </span>
                      </div>
                      <h5 className="card-title">{item.name}</h5>
                      <div className="text-center my-4">
                        <a href="#" className="btn btn-warning">
                          Check offer
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
