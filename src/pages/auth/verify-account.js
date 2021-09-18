import React from "react";
import SEO from "@/components/Seo";
import NavbarStyleOne from "@/components/_App/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import FooterStyleOne from "@/components/_App/FooterStyleOne";

export default function AccountverifyPage() {
  // const [session] = useSession();
  // if (!session) {
  //   return (
  //     <Layout>
  //       <SEO
  //         title="Email Verification | KokeLiko "
  //         canonical={process.env.PUBLIC_URL + "/auth/verify-account"}
  //       />
  //       <div className="wrapper home-default-wrapper">
  //         <Header classOption="hb-border" />
  //         <div className="main-content">
  //           <div className="hv-center">
  //             <p>Please Sign in to view this page</p>
  //             <Link href="/auth/signin">
  //               <a>Sign In</a>
  //             </Link>
  //           </div>
  //         </div>
  //         <Footer />
  //       </div>
  //     </Layout>
  //   );
  // }
  return (
    <>
      <SEO
        title="Email Verification"
        description="Verification Page"
        canonical={process.env.PUBLIC_URL + "/auth/verify-account"}
      />
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="Frequently Asked Questions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQ"
      />
      <div className="container">
        <div style={{ textAlign: "center", margin: "48px 8px" }}>
          <h3>
            We have sent a verification link to your registered email address.
          </h3>
          <h2>Kindly login to your email and verify.</h2>
        </div>
      </div>

      <FooterStyleOne />
    </>
  );
}
