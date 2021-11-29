import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const HomeContactPage = () => {
  const [message, setMessage] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    if (message) {
      if (message === "success") {
        toast.success(
          "Thank you for your email, We will contact you shortly ! "
        );
      } else {
        toast.error("Oops, Something went wrong !");
      }
    }
  }, [message]);

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      subject: data.msg_subject,
      message: data.message,
      mobile: data.mobile,
      type: data.type,
    };

    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userInfo),
      });
      console.log(result.status);
      if (result.status >= 400 && result.status < 600) {
        throw new Error("Bad response from server");
      } else {
        reset("", {
          keepValues: false,
        });
        setMessage("success");
      }
    } catch (error) {
      setMessage("failed");
    }
  };

  return (
    <>
      <div className="home-contact-area ptb-50 bg-F7F7FF">
        <div className="container">
          {message && (
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          )}
          <div className="section-title">
            <span className="sub-title">
              Do you have any question ? Send us your query !{" "}
            </span>
            {/* <h2>Most Probably Included Best Features Ever</h2> */}
          </div>
          <div className="home-contact-form">
            <div className="row">
              <div className="col-lg-4 col-md-4 ">
                <div>
                  <div className="contact-title">
                    <div className="icon bg1">
                      <i className="ri-customer-service-2-line"></i>
                    </div>
                    <a href="tel:+918810436602">(+91) 8810436602</a>
                  </div>
                  <div className="contact-title">
                    <div className="icon bg2">
                      <i className="ri-mail-send-line"></i>
                    </div>
                    <a href="mailto:theicpaglobal@gmail.com">
                      theicpaglobal@gmail.com
                    </a>
                  </div>

                  <div className="contact-title">
                    <div className="icon bg3">
                      <i className="ri-whatsapp-line"></i>
                    </div>
                    <a href="tel:+918810436602">(+91) 8810436602</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 ">
                <div className="contact-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="Full Name"
                            {...register("name", {
                              required: "Name is required !",
                            })}
                          />

                          {errors.name && <p>{errors.name.message}</p>}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            placeholder="Email Address"
                            {...register("email", {
                              required: "Email is required !",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address !",
                              },
                            })}
                          />
                          {errors.email && <p>{errors.email.message}</p>}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="phone_number"
                            className="form-control"
                            id="phone_number"
                            placeholder="Contact Number"
                            {...register("mobile", {
                              required: "Contact Number is required !",
                              pattern: {
                                value: /^((\+91?)|\+)?[7-9][0-9]{9}$/,
                                message: "Invalid Mobile Number !",
                              },
                            })}
                          />
                          {errors.mobile && <p>{errors.mobile.message}</p>}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group">
                          <select className="form-select" {...register("type")}>
                            <option value="Online Seller Courses">
                              Online Courses
                            </option>
                            <option value="Membership Gold Plan">
                              Membership Gold Plan
                            </option>
                            <option value="Products Suggestion Query">
                              Products Suggestion Query
                            </option>
                            <option value="Online Seller Services">
                              Online Seller Services
                            </option>
                            <option value="Others Query">Others Query</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="msg_subject"
                            className="form-control"
                            id="msg_subject"
                            placeholder="Subject"
                            {...register("msg_subject", {
                              required: "Subject is required !",
                            })}
                          />
                          {errors.msg_subject && (
                            <p>{errors.msg_subject.message}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            cols="30"
                            rows="6"
                            placeholder="Type message here ..."
                            {...register("message", {
                              required: "Message is required !",
                            })}
                          ></textarea>
                          {errors.message && <p>{errors.message.message}</p>}
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <button
                          type="submit"
                          className="default-btn-sm"
                          onClick={handleSubmit(onSubmit)}
                        >
                          <i className="bx bx-paper-plane"></i> Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContactPage;
