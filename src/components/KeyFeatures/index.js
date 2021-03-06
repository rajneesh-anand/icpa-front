import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/client";
import Image from "next/image";

const Hiddenfrom = ({ formData }) => {
  return (
    <form
      id="redFrom"
      method="post"
      action={`https://securegw.paytm.in/theia/api/v1/showPaymentPage?mid=${formData.mid}&orderId=${formData.orderId}`}
      name="paytm"
    >
      <input type="hidden" name="mid" value={formData.mid} />
      <input type="hidden" name="orderId" value={formData.orderId} />
      <input type="hidden" name="txnToken" value={formData.txnToken} />
    </form>
  );
};

const KeyFeatures = ({ data }) => {
  const [session, loading] = useSession();

  const [paytmData, setPaytmData] = useState({
    mid: "",
    orderId: "",
    txnToken: "",
  });

  const truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ") + "  ..... ";
  };

  const handlePayment = async (amount, service) => {
    // event.preventDefault();
    try {
      const orderData = {
        name: session.user.name,
        email: session.user.email,
        type: service,
        amount: amount,
      };

      const response = await fetch("/api/paytm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const result = await response.json();

      setPaytmData({
        mid: "FEFWlQ95811221002383",
        orderId: result.orderId,
        txnToken: result.txnToken,
      });
      document.getElementById("redFrom").submit();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="features-area ptb-50">
        <div className="container">
          <div className="row justify-content-center">
            {data &&
              data.map((item, index) => (
                <div
                  key={index}
                  className="col-xl-4 col-lg-6 col-sm-6 col-md-6"
                >
                  <div className="service-card">
                    <div
                      style={{
                        position: "relative",
                        height: 204,
                      }}
                    >
                      <Image
                        src={
                          item.image
                            ? item.image
                            : "https://source.unsplash.com/160x160/?food"
                        }
                        layout="fill"
                        objectFit="fill"
                        alt={item.name}
                      />
                    </div>

                    {/* <div
                      className="service-card-img"
                      style={{
                        backgroundImage: item.image
                          ? `url(${item.image})`
                          : `url(https://images.unsplash.com/photo-1491374812364-00028bbe7d2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a22e4862c36c552e726815949fbcb41a&auto=format&fit=crop&w=500&q=60)`,
                      }}
                    >
                      <div className="overlay">
                        <div className="overlay-content">
                          <Link href="/contact">
                            <a>Contact Us </a>
                          </Link>
                        </div>
                      </div>
                    </div> */}

                    <div className="service-card-content">
                      <div className="price-group text-center">
                        {item.discount > 0 ? (
                          <div className="d-flex justify-content-center">
                            <h6>&#x20B9;{item.serviceFee}</h6>
                            <h4> &#x20B9;{item.saleFee}</h4>
                            {item.popularity && <span>{item.popularity}</span>}
                          </div>
                        ) : item.saleFee == 0 ? (
                          <p>Free</p>
                        ) : (
                          <h4> &#x20B9; {item.saleFee}</h4>
                        )}
                      </div>

                      {item.discount && (
                        <div className="discount">
                          <h6>- {Math.round(item.discount)} % Off</h6>
                        </div>
                      )}

                      <div className="text-center serviceName">
                        <h6>{item.serviceName}</h6>
                      </div>
                      {item.discount > 0 && (
                        <div className="btn-list">
                          <div className="plan-btn">
                            {!session ? (
                              <Link href="/auth/signin">
                                <a className="default-btn-sm">Buy Service</a>
                              </Link>
                            ) : (
                              <button
                                className="default-btn-sm"
                                onClick={() =>
                                  handlePayment(item.saleFee, item.serviceName)
                                }
                              >
                                Buy Service
                              </button>
                            )}
                          </div>
                          <div className="plan-btn">
                            <Link href="/contact">
                              <a className="default-btn-sm">Ask Our Experts</a>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <Hiddenfrom formData={paytmData} />
      </div>
    </>
  );
};

export default KeyFeatures;
