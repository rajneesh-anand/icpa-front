import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import ScrollAnimation from "react-animate-on-scroll";

const FreeTrialStyle2 = () => {
  const [message, setMessage] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    if (message) {
      if (message === "success") {
        toast.success("Thank you for your email, We will contact you shortly");
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
        setMessage("success");
      }
    } catch (error) {
      setMessage("failed");
    }
  };

  return (
    <>
      <div className="free-trial-area">
        <div className="container">
          <div className="free-trial-content bg-color">
            <span className="sub-title">Feel Free To Contact Us </span>
            <h4>Send us your query ?</h4>
            <div className="row">
              <div className="col-lg-4 col-md-4 ">
                <div data-aos="fade-down">
                  <div className="contact-title">
                    <div className="icon bg1">
                      <i className="ri-customer-service-2-line"></i>
                    </div>
                    <p>+91-9874521369</p>
                  </div>
                  <div className="contact-title">
                    <div className="icon bg2">
                      <i className="ri-mail-send-line"></i>
                    </div>
                    <a href="mailto:hello@texap.com">
                      support@theicpaglobal.com
                    </a>
                  </div>

                  <div className="contact-title">
                    <div className="icon bg3">
                      <i className="ri-whatsapp-line"></i>
                    </div>
                    <p>+91-9874521369</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 ">
                <div className="contact-form">
                  <form
                    className="free-trial-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              id="name"
                              placeholder="Eg: Sarah Taylor"
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
                              placeholder="hello@sarah.com"
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
                              placeholder="Enter your phone number"
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
                            <input
                              type="text"
                              name="msg_subject"
                              className="form-control"
                              id="msg_subject"
                              placeholder="Enter your subject"
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
                              placeholder="Enter message..."
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
                            className="default-btn"
                            onClick={handleSubmit(onSubmit)}
                          >
                            <i className="bx bx-paper-plane"></i> Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeTrialStyle2;
