import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const ContactForm = () => {
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
      <div className="contact-area ptb-100">
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
            <h2>Get in Touch</h2>
            <p>
              The IT industry offers a sea of options, from platforms,
              programming languages methodologies, technologies, tools, and
              more.
            </p>
          </div>

          <div className="contact-form">
            <form id="contactForm">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Eg: Sarah Taylor"
                      {...register("name", { required: "Name is required !" })}
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
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
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
                      {...register("mobile", {})}
                    />
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
                    {errors.msg_subject && <p>{errors.msg_subject.message}</p>}
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
            </form>
          </div>
        </div>

        {/* <div className="maps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46660.669043361966!2d-76.17429939609431!3d43.03529129888566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f3b8019f2991%3A0x58d5929e21a62e5!2sDinosaur%20Bar-B-Que!5e0!3m2!1sen!2sbd!4v1593527523138!5m2!1sen!2sbd"></iframe>
        </div> */}
      </div>
    </>
  );
};

export default ContactForm;
