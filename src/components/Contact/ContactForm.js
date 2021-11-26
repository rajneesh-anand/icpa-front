import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const ContactForm = () => {
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
        toast.success("Thank you for your email, We will contact you shortly");
      } else {
        toast.error("Oops, Something went wrong !");
      }
    }
  }, [message]);

  const onSubmit = async (data) => {
    setMessage(null);
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
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      if (result.status >= 400 && result.status < 600) {
        throw new Error("Bad response from server");
      } else {
        setMessage("success");
        reset("", {
          keepValues: false,
        });
      }
    } catch (error) {
      setMessage("failed");
    }
  };

  return (
    <div className="contact-area pb-50">
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

        <div className="contact-form ptb-50">
          <div className="form-items">
            <h3>How Can We Help You ? </h3>
            <p>Fill in the data below.</p>
            <form>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Enter Your Full Name"
                    {...register("name", {
                      required: "Name is required !",
                    })}
                  />

                  {errors.name && <p>{errors.name.message}</p>}
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="example@xyz.com"
                    {...register("email", {
                      required: "Email is required !",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address !",
                      },
                    })}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
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

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <select className="form-select mt-3" {...register("type")}>
                    <option value="Online Seller Courses">
                      Online Courses
                    </option>
                    <option value="Products Query">Products Query</option>
                    <option value="Online Seller Services">
                      Online Seller Services
                    </option>
                    <option value="Others Query">Others Query</option>
                  </select>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
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
                  {errors.msg_subject && <p>{errors.msg_subject.message}</p>}
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
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
                <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                  <button
                    type="submit"
                    className="default-btn"
                    onClick={handleSubmit(onSubmit)}
                  >
                    <i className="bx bx-paper-plane"></i> Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.466813780782!2d77.17734651440828!3d28.67567938887911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03cd035888b9%3A0x5dca567f9bead6bd!2sICPA%20Global%20Consultants!5e0!3m2!1sen!2shk!4v1633373625467!5m2!1sen!2shk"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
