import React from "react";
import PropTypes from "prop-types";
import GoTop from "@/components/GoTop";
import WhatsAppWidget from "react-whatsapp-widget";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
      <WhatsAppWidget
        phoneNumber="917011898821"
        companyName="ICPA Global Consultants"
        message="What can we do for you?"
      />
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
