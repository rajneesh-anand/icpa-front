import React, { useState, useEffect } from "react";
import Partner from "@/components/Partner";
import ModalForm from "@/components/ModalForm";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";
// import { faq } from "@/constant/faq";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const FaqPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);

  return (
    <Layout>
      <Seo
        title="F.A.Q | ICPA Global Consultants"
        description="Freaquently Asked Questions | ICPA Global Consultant is one stop solution for setting up an online store on various platforms i.e ( Amazon , Flipkart , Meesho , Shopsy ). We have years of expertise in online seller consultancy"
        canonical={`${process.env.PUBLIC_URL}/faq`}
      />
      <Header />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>F.A.Q</a>
              </li>
              <li className="active">Do you have any questions ?</li>
            </ul>
            <h2>Frequently Asked Questions </h2>
          </div>
        </div>
      </div>
      <div className="faq-area ptb-50">
        <div className="container">
          <div className="faq-accordion">
            <Accordion allowZeroExpanded preExpanded={["a"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Why are consultants important?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    <strong>Texap</strong> is always looking for talented{" "}
                    <a href="/faq">information</a> security and IT risk
                    management professionals who are dedicated, hard working and
                    looking for a challenge. If you are interested in employment
                    with <strong>Texap</strong>, a company who values you and
                    your family, visit our careers page.
                  </p>
                  <ul>
                    <li>a console</li>
                    <li>Two Joy-Con controllers that are detachable</li>
                    <li>
                      A grip that enables you to combine them into a single
                      gamepad for play on the TV
                    </li>
                    <li>
                      Two straps for turning the Joy-Cons into individual
                      controllers
                    </li>
                    <li>
                      A dock which you can use to connect your console to the
                      television for traditional gameplay
                    </li>
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>What is the purpose of a consultant?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  </p>
                  <ul>
                    <li>a console</li>
                    <li>
                      Two Joy-Con controllers that are{" "}
                      <a href="/faq">detachable</a>
                    </li>
                    <li>
                      A grip that enables you to combine them into a single
                      gamepad for play on the TV
                    </li>
                    <li>
                      Two straps for turning the Joy-Cons into{" "}
                      <strong>individual</strong> controllers
                    </li>
                    <li>
                      A dock which you can use to connect your console to the
                      television for traditional gameplay
                    </li>
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>What attracts you to the role of a consultant?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                  </p>
                  <p>
                    Tunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>What are the advantages of being a consultant?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <ul>
                    <li>a console</li>
                    <li>Two Joy-Con controllers that are detachable</li>
                    <li>
                      A grip that enables you to combine them into a single
                      gamepad for play on the TV
                    </li>
                    <li>
                      Two straps for turning the Joy-Cons into individual
                      controllers
                    </li>
                    <li>
                      A dock which you can use to connect your console to the
                      television for traditional gameplay
                    </li>
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Is consulting a good career?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="f">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>How is working in consulting?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  </p>
                  <ul>
                    <li>a console</li>
                    <li>
                      Two Joy-Con controllers that are{" "}
                      <a href="/faq">detachable</a>
                    </li>
                    <li>
                      A grip that enables you to combine them into a single
                      gamepad for play on the TV
                    </li>
                    <li>
                      Two straps for turning the Joy-Cons into{" "}
                      <strong>individual</strong> controllers
                    </li>
                    <li>
                      A dock which you can use to connect your console to the
                      television for traditional gameplay
                    </li>
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <Partner />
      <ModalForm show={show} handleClose={handleClose} />
      <Footer />
    </Layout>
  );
};

export default FaqPage;
