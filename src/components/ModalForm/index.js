import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function ModalForm({ show, handleClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      service: data.service,
      company: data.company,
      mobile: data.mobile,
    };
    console.log(userInfo);
    // try {
    //   const result = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: { "content-type": "application/json" },
    //     body: JSON.stringify(userInfo),
    //   });
    //   console.log(result.status);
    //   if (result.status >= 400 && result.status < 600) {
    //     throw new Error("Bad response from server");
    //   } else {
    //     setMessage("success");
    //   }
    // } catch (error) {
    //   setMessage("failed");
    // }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        // dialogClassName="modal-30w"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div className="info-card">
            <div className="card-heading-img text-center">
              <i
                className="bx bxs-edit"
                style={{
                  fontSize: 28,
                  verticalAlign: "middle",
                  color: "white",
                }}
              ></i>
              <span>Fill up the form</span>
              <h6> Our Business team will contact you shortly !</h6>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Full Name "
                    {...register("name", {
                      required: "Full Name is required !",
                    })}
                  />

                  {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email Address"
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

                <div className="form-group">
                  <input
                    type="text"
                    name="mobile"
                    className="form-control"
                    id="mobile"
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
                <div className="form-group">
                  <input
                    type="text"
                    name="company"
                    className="form-control"
                    placeholder="Organization / Company "
                    {...register("company", {})}
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    name="service"
                    {...register("service", {})}
                  >
                    <option value="Online Seller Course">
                      Online Seller Course
                    </option>
                    <option value="Membership Plan">Membership Plan</option>
                  </select>
                </div>

                <div className="text-center">
                  <button
                    className="default-btn"
                    onClick={handleSubmit(onSubmit)}
                  >
                    <i className="bx bx-paper-plane"></i> Send Query
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
