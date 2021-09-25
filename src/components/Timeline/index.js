import React, { useState } from "react";

export default function Timeline() {
  return (
    <div className="timeline">
      <svg height="5" width="200">
        <line
          x1="0"
          y1="0"
          x2="200"
          y2="0"
          style={{ stroke: "#004165", strokeWidth: 5 }}
        />
        Sorry, your browser does not support inline SVG.
      </svg>

      <div className="event">
        <div className="eventBubble text-center" data-aos="zoom-in">
          <i
            className="bx bxs-edit"
            style={{
              fontSize: 36,
              color: "white",
              paddingTop: 4,
            }}
          ></i>
          <div className="eventTitle">Fill Up The Form</div>
        </div>

        <svg height="36" width="36">
          <circle cx="15" cy="15" r="12" fill="#004165" />
        </svg>
        <div className="time">
          <div className="now text-center">NOW</div>
        </div>
      </div>

      <svg height="5" width="300">
        <line
          x1="0"
          y1="0"
          x2="300"
          y2="0"
          style={{ stroke: "#004165", strokeWidth: 5 }}
        />
        Sorry, your browser does not support inline SVG.
      </svg>

      <div className="event">
        <div className="eventBubble text-center" data-aos="zoom-in">
          <i
            className="bx bx-credit-card"
            style={{
              fontSize: 36,
              color: "white",
              paddingTop: 4,
            }}
          ></i>
          <div className="eventTitle">Make Payment</div>
        </div>

        <svg height="36" width="36">
          <circle cx="15" cy="15" r="12" fill="#004165" />
        </svg>
        <div className="time">
          <div className="now text-center">STEP 2</div>
        </div>
      </div>

      <svg height="5" width="300">
        <line
          x1="0"
          y1="0"
          x2="300"
          y2="0"
          style={{ stroke: "#004165", strokeWidth: 5 }}
        />
        Sorry, your browser does not support inline SVG.
      </svg>

      <div className="event">
        <div className="eventBubble text-center" data-aos="zoom-in">
          <i
            className="bx bxs-phone-call"
            style={{
              fontSize: 36,
              color: "white",
              paddingTop: 4,
            }}
          ></i>
          <div className="eventTitle">Get Call from Our Business Experts</div>
        </div>

        <svg height="36" width="36">
          <circle cx="15" cy="15" r="12" fill="#004165" />
        </svg>
        <div className="time">
          <div className="now text-center">FINISH</div>
        </div>
      </div>

      <svg height="5" width="200">
        <line
          x1="0"
          y1="0"
          x2="200"
          y2="0"
          style={{ stroke: "#004165", strokeWidth: 5 }}
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
}
