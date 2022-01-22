import React, { useState, useEffect } from "react";
import useMasonry from "@/utils/useMasonry";
import DataFilter from "@/components/DataFilter";
import { slugify } from "../../utils/helper";
import Link from "next/link";
import Image from "next/image";

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
      <div className="products-area pb-50 ">
        <div className="container">
          <div className="messonry-button text-center mb-8">
            <DataFilter categories={categories} />
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 portfolio-list mb-n30">
            <div className="col resizer"></div>
            {data &&
              data.map((item) => (
                <div
                  key={item.id}
                  className={`col masonry-grid  ${item.category
                    .map((cat) => slugify(cat))
                    .join(" ")}`}
                >
                  <div className="card shadow-sm">
                    <div style={{ position: "relative", height: 204 }}>
                      {" "}
                      <Image
                        src={
                          item.image
                            ? item.image
                            : "https://source.unsplash.com/160x160/?food"
                        }
                        layout="fill"
                        objectFit="contain"
                        alt={item.name}
                      />
                    </div>

                    {item.popularity && (
                      <div className="label-top shadow-sm">
                        {item.popularity}
                      </div>
                    )}
                    <div className="card-body">
                      {/* <div className="clearfix mb-3">
                        <span className="float-start price-hp">
                          &#x20B9; {item.price}
                        </span>{" "}
                        <span className="float-end">
                          <a className="text-muted small" href="#">
                            Reviews
                          </a>
                        </span>
                      </div> */}
                      <div className="text-center">
                        <h5 className="card-title">{item.name}</h5>
                      </div>

                      <div className="text-center my-4">
                        <Link href="/contact">
                          <a className="btn btn-warning">
                            Contact Us to Sell Online
                          </a>
                        </Link>
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
