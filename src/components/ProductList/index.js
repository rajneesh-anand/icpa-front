import React, { useState, useEffect } from "react";
import useMasonry from "@/utils/useMasonry";
import DataFilter from "@/components/DataFilter";
import { slugify } from "../../utils/helper";

const ProductList = ({ data }) => {
  const { categories } = useMasonry(
    data,
    ".portfolio-list",
    ".masonry-grid",
    ".messonry-button",
    ".messonry-button button"
  );

  return (
    <>
      <div className="products-area ptb-50 bg-F7F7FF">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">SELECT YOUR PRODUCTS FOR LISTING</span>
            <h4>We Stock &amp; You Sell</h4>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="messonry-button text-center mb-8">
                <DataFilter categories={categories} />
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 portfolio-list mb-n30">
            <div className="col resizer"></div>
            {data &&
              data.map((item) => (
                <div
                  key={item.id}
                  className={`col masonry-grid mb-30 ${item.category
                    .map((cat) => slugify(cat))
                    .join(" ")}`}
                >
                  <div className="card h-100 shadow-sm">
                    <img
                      src="https://source.unsplash.com/160x160/?food"
                      className="card-img-top"
                      alt={item.name}
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
