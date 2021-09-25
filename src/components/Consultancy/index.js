import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormCheck from "react-bootstrap/FormCheck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import moment from "moment";
import Timeline from "@/components/Timeline";

const Datetime = dynamic(() => import("react-datetime"), {
  ssr: false,
});

const Hiddenfrom = ({ formData }) => {
  return (
    <form
      id="redFrom"
      method="post"
      action={`https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=${formData.mid}&orderId=${formData.orderId}`}
      name="paytm"
    >
      <input type="hidden" name="mid" value={formData.mid} />
      <input type="hidden" name="orderId" value={formData.orderId} />
      <input type="hidden" name="txnToken" value={formData.txnToken} />
    </form>
  );
};

const Consultancy = () => {
  const [isProcessing, setProcessingTo] = useState(false);
  const [value, onChange] = useState(new Date());
  const [paytmData, setPaytmData] = useState({
    mid: "",
    orderId: "",
    txnToken: "",
  });

  var yesterday = moment().subtract(1, "day");
  function valid(current) {
    return current.isAfter(yesterday);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setProcessingTo(true);
    try {
      const orderData = {
        name: data.name,
        email: data.email,
        type: "Telephonic Consultation",
        amount: "50",
      };

      const customerInfo = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        sellerType: data.sellertype,
        companyType: data.companytype,
        monthlySale: data.monthlysale,
        interestedIn: data.interest,
        talkTimePackage: data.package,
        scheduledCallDate: value.toDate(),
        comment: data.comment,
      };

      const response = await fetch("/api/paytm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const result = await response.json();

      if (result.msg === "success") {
        const telRes = await fetch("/api/telephonic", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(customerInfo),
        });
        const telResult = await telRes.json();
        if (telResult.msg === "success") {
          setPaytmData({
            mid: "zWEMTK89662017572077",
            orderId: result.orderId,
            txnToken: result.txnToken,
          });
          document.getElementById("redFrom").submit();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="consultation-area ptb-50">
      <div className="container">
        <div className="tel-box">
          <img
            src="/images/customer-support-icon.png"
            alt="support-icon"
            height={60}
            width={60}
          />
          <h4>BOOK TELEPHONIC CONSULTATION IN 2 EASY STEPS</h4>
        </div>

        <Timeline />

        <div className="consultancy-form ">
          <div className="text-center">
            <h6>FILL UP THE FORM AND BOOK TELEPHONIC CONSULTATION</h6>
          </div>

          <Form>
            <Row className="justify-content-center mb-2">
              <Form.Group as={Col} md="4">
                <Form.Label>Select Seller Type *</Form.Label>
                <Form.Select
                  defaultValue="New Seller"
                  name="sellertype"
                  {...register("sellertype")}
                >
                  <option>New Seller</option>
                  <option>Existing Seller</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>Select Company Type *</Form.Label>
                <Form.Select
                  defaultValue="Manufacturer / Brand Owner"
                  name="companytype"
                  {...register("companytype")}
                >
                  <option>Manufacturer / Brand Owner</option>
                  <option>Distributer/Wholesaler</option>
                  <option>Retailer</option>
                  <option>Others</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="justify-content-center mb-2">
              <Form.Group as={Col} md="4">
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

              <Form.Group as={Col} md="4">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  {...register("email", {
                    required: "Email is required !",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address !",
                    },
                  })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </Form.Group>
            </Row>
            <Row className="justify-content-center mb-2">
              <Form.Group as={Col} md="4">
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

              <Form.Group as={Col} md="4">
                <Form.Label>Organization/ Company Name </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Company Name"
                  name="companyName"
                  {...register("companyName")}
                />
              </Form.Group>
            </Row>
            <Row className="justify-content-center mb-2">
              <Form.Group as={Col} md="4">
                <Form.Label>I am interested in *</Form.Label>
                <Form.Select
                  defaultValue="Amazon/Flipkart Advertising"
                  name="interest"
                  {...register("interest")}
                >
                  <option>Amazon/Flipkart New Account Setup</option>
                  <option>Amazon/Flipkart Advertising</option>
                  <option>Growth and Sales Boost Strategy</option>
                  <option>Others</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>Average Monthly Sale *</Form.Label>
                <Form.Select
                  defaultValue="Below INR 10,000"
                  name="monthlysale"
                  {...register("monthlysale")}
                >
                  <option>Below INR 10,000</option>
                  <option>INR 10,000 - INR 25,000</option>
                  <option>INR 10,000 - INR 25,000</option>
                  <option>INR 25,000 - INR 50,000</option>
                  <option>INR 50,000 - INR 1,00,000</option>
                  <option>INR 1,00,000 - INR 5,00,000</option>
                  <option>INR 5,00,000+</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="justify-content-center mb-2">
              <Form.Group as={Col} md="4">
                <Form.Label>Select Talktime Package *</Form.Label>
                <Form.Select
                  defaultValue="Below INR 10,000"
                  name="package"
                  {...register("package")}
                >
                  <option>1 Hour (999)</option>
                  <option>40 Min (750)</option>
                  <option>20 Hour (149)</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Label>Select Date for Telephonic Call </Form.Label>
                <Datetime
                  onChange={onChange}
                  value={value}
                  closeOnSelect={true}
                  isValidDate={valid}
                />
              </Form.Group>
            </Row>
            <Row className="justify-content-center mb-2">
              <Form.Group as={Col} md="8">
                <Form.Label>Specify your reason for call </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  name="comment"
                  {...register("comment")}
                />
              </Form.Group>
            </Row>
            <div className="text-center">
              <button
                type="button"
                className="default-btn-sm"
                onClick={handleSubmit(onSubmit)}
              >
                {isProcessing ? "Processing ..." : `MAKE PAYMENT`}
              </button>
            </div>
          </Form>
        </div>

        <Hiddenfrom formData={paytmData} />
      </div>
    </div>
  );
};
export default Consultancy;
