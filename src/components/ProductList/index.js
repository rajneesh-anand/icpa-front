import React from "react";

const ProductList = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="products-area ptb-50 bg-F7F7FF">
        <div className="container">
          <div className="row">
            {data &&
              data.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                  <div class="card h-100 shadow-sm">
                    <img
                      src="https://source.unsplash.com/160x160/?food"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="label-top shadow-sm">Most Popular</div>
                    <div class="card-body">
                      <div class="clearfix mb-3">
                        <span class="float-start price-hp">12354.00€</span>{" "}
                        <span class="float-end">
                          <a class="text-muted small" href="#">
                            Reviews
                          </a>
                        </span>
                      </div>
                      <h5 class="card-title">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Veniam quidem eaque ut eveniet aut quis rerum.
                        Asperiores accusamus harum ducimus velit odit ut. Saepe,
                        iste optio laudantium sed aliquam sequi.
                      </h5>
                      <div class="text-center my-4">
                        <a href="#" class="btn btn-warning">
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
