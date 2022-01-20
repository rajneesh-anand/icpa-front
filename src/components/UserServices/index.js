import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const UserServicesList = ({ data }) => {
  return (
    <>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h4>MY SERVICES</h4>
          </div>
        </div>
      </div>
      <div className="courses-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {data &&
              data.map((item, index) => (
                <div key={index}>
                  <div className="single-course-box">
                    <div
                      className="course-content text-center"
                      style={{ border: "1px solid #ddd" }}
                    >
                      <p style={{ fontSize: 18, fontWeight: "700" }}>
                        {item.orderType}
                      </p>
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

export default UserServicesList;
