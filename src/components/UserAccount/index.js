import React, { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/client";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserAccount = ({ data }) => {
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
      email: data.phone,
      company: data.address,
    };

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
    <div className="user-account-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="text-center">
              <img
                src={data[0].image ? data[0].image : "/images/logo.png"}
                alt="Admin"
                className="rounded-circle"
                width="110"
              />
              <div className="mt-3">
                {data[0].name && <h4>{data[0].name}</h4>}
                <small>{data[0].email}</small>
              </div>
              <div className="mt-3">
                <Link href="/user/course">
                  <a className="btn btn-primary btn-sm">My Courses</a>
                </Link>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => signOut()}
                  style={{ marginLeft: 16 }}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <Form>
              <Row className="justify-content-center mb-2">
                <Form.Group as={Col}>
                  <Form.Label>Full Name *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Full Name"
                    name="name"
                    {...register("name", {
                      required: "Full Name is required !",
                    })}
                  />
                  {errors.name && <p>{errors.name.message}</p>}
                </Form.Group>
              </Row>

              <Row className="justify-content-center mb-2">
                <Form.Group as={Col}>
                  <Form.Label>Phone Number *</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Your Phone Number"
                    {...register("phone", {
                      required: "Phone is required !",
                      pattern: {
                        value: /^((\+91?)|\+)?[7-9][0-9]{9}$/,
                        message: "Invalid Mobile Number !",
                      },
                    })}
                  />
                  {errors.phone && <p>{errors.phone.message}</p>}
                </Form.Group>
              </Row>
              <Row className="justify-content-center mb-2">
                <Form.Group as={Col}>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Address"
                    name="address"
                    {...register("address")}
                  />
                </Form.Group>
              </Row>

              <div className="text-center">
                <button
                  type="button"
                  className="default-btn-sm"
                  onClick={handleSubmit(onSubmit)}
                >
                  UPDATE
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserAccount;
