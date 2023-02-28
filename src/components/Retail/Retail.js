import "./RetailStyle.scss";
import defaultt from "./Hero-img-default.webp";
import boost from "./boost.png";
import Skyrocket from "./Skyrocket.png";
import Harness from "./Harness.png";
import Engage from "./Engage.png";
import Disrupt from "./Disrupt.png";
import Automate from "./Automate.png";
import {
  BulbOutlined,
  SelectOutlined,
  UserOutlined,
  PieChartOutlined,
  SwitcherOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";

import React, { useEffect } from "react";
function Retail() {
  setTimeout(function () {
    var heathText = document.getElementsByClassName("heath-text");
    for (var i = 0; i < heathText.length; i++) {
      heathText[i].classList.add("fadeInRight", "cssanimation");
    }
  }, 2000);

  useEffect(() => {
    document.title = "AVEO Global - Retail";
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var mobility = document.getElementsByClassName("mobility");
      var mobility2 = document.getElementsByClassName("mobility-2");
      var mobility3 = document.getElementsByClassName("mobility-3");
      var animate = document.getElementsByClassName("animate");
      var animate2 = document.getElementsByClassName("animate-2");

      if (window.scrollY >= 380) {
        for (var i = 0; i < mobility.length; i++) {
          mobility[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 600) {
        for (var i = 0; i < mobility2.length; i++) {
          mobility2[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 900) {
        for (var i = 0; i < mobility3.length; i++) {
          mobility3[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 1100) {
        for (var i = 0; i < animate.length; i++) {
          animate[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 1400) {
        for (var i = 0; i < animate2.length; i++) {
          animate2[i].classList.add("fadeInUp", "cssanimation");
        }
      }
    });
  }, []);
  return (
    <div className="container-fluid overflow-hidden p-0 m-0 g-0">
      <div className="retail-section g-0 m-0">
        <div className="container d-flex">
          <div
            style={{
              height: "100vh",
              position: "relative",
            }}
            className="col-12 col-md-9  col-lg-4  py-sm-5  g-0 heath-text"
          >
            <div
              style={{
                position: "absolute",
                bottom: "18%",
              }}
            >
              <h1>Retail</h1>
              <p>
                We transform the retail customer experience with personalized,
                enterprise omnichannel platforms for your business demands
              </p>
              <div className="btn-deha mt-4 py-3">
                <a className="" href="">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 col-lg-8"></div>
        </div>
      </div>

      <div className="container">
        <div className="row g-0 m-0">
          <div className="col-12 my-5 section-title">
            <h3>Our Solutions</h3>
            <p>
              Our approach for resolving today’s critical challenges combines
              clinical
              <br />
              insights, ahead technologies, and practical experience to design,
              develop
              <br />
              and deploy medical IT solutions.
            </p>
          </div>
        </div>

        <div className="mobility">
          <div className="row g-0 m-0  mb-sm-3 content-mob">
            <div style={{ marginRight: "auto" }} className="col-12 col-sm-6 ">
              <div className="row m-0 p-0 g-0">
                <div className="col-12 col-lg-2">
                  <img src={boost} />
                </div>
                <div className="col-12 col-lg-10 fbox-txt">
                  <h5>Boost Customer Engagement And Conversions</h5>
                  <p>
                    Convert browsers into buyers through an engaging,
                    personalized experience in your digital retail marketplace
                    with location-based technology for mobile marketing, dynamic
                    pricing, and easy, secure payments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="row m-0 p-0 g-0">
                <div className="col-12 col-lg-2">
                  <img src={Skyrocket} />
                </div>
                <div className="col-12 col-lg-10 fbox-txt">
                  <h5>Skyrocket Sales And Customer Loyalty</h5>
                  <p>
                    Turn visitors into raving fans and watch your sales explode
                    by offering personalized product deals, a customer referral
                    program, exceptional support service, an easy-to-use repeat
                    purchase program, and much more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobility-2">
          <div className="row g-0 m-0 mb-sm-3 content-mob">
            <div style={{ marginRight: "auto" }} className="col-12 col-sm-6 ">
              <div className="row m-0 p-0 g-0">
                <div className="col-12 col-lg-2">
                  <img src={Harness} />
                </div>
                <div className="col-12 col-lg-10 fbox-txt">
                  <h5>Harness Demand Prediction For Improved Retention</h5>
                  <p>
                    Our consulting services result in disruptive retailer
                    software solutions that apply data science and predictive
                    analytics to help you forecast inventory and sales while
                    minimizing risk. Save on costs and enhance delivery with
                    data-based insights.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="row m-0 p-0 g-0">
                <div className="col-12 col-lg-2">
                  <img src={Engage} />
                </div>
                <div className="col-12 col-lg-10 fbox-txt">
                  <h5>Engage Shoppers Through Omnichannel Capabilities</h5>
                  <p>
                    How do you reach more consumers? You meet them where they
                    are with an omnichannel strategy that’s customized to their
                    needs and demands. Empower your customers with mobile apps,
                    chatbots, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobility-3">
          <div className="row g-0 m-0 mb-sm-3 content-mob">
            <div style={{ marginRight: "auto" }} className="col-12 col-sm-6 ">
              <div className="row m-0 p-0 g-0">
                <div className="col-12 col-lg-2">
                  <img src={Disrupt} />
                </div>
                <div className="col-12 col-lg-10 fbox-txt">
                  <h5>Disrupt And Improve Your Supply Chain</h5>
                  <p>
                    Innovate your entire supply chain from sourcing to
                    manufacturing and from shipping to tracking and warehousing.
                    Capture your logistics data and use it to power a supply
                    chain that’s highly efficient and lean.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="row m-0 p-0 g-0">
                <div className="col-12 col-lg-2">
                  <img src={Automate} />
                </div>
                <div className="col-12 col-lg-10 fbox-txt">
                  <h5>Automate And Streamline Inventory Control</h5>
                  <p>
                    Having just enough and not too much inventory is easy when
                    you take advantage of inventory control automation. Avoid
                    over-ordering or buying too little with a streamlined,
                    automated inventory control system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-sm-5 g-0  bg-01">
        <div className="col-12"></div>
      </div>

      <div className="container">
        <div className="row my-5 py-sm-5 g-0">
          <div className="col-12 g-0">
            <h3 class="h3-md">Benefits of Partnering with AVEO</h3>
          </div>
        </div>

        <div className="row g-0 m-0 p-0 content-bot">
          <div
            style={{ marginRight: "auto" }}
            className="col-lg-4 mb-3 mb-lg-0  px-4 content-part"
          >
            <div className="icon-benefit mb-4">
              <BulbOutlined />
            </div>
            <div className="text-benefit">
              <span>Expert Advice</span>
              <p className="my-sm-3">
                We are a leading digital strategy consultant. We can offer an
                unique and consultative perspective to your digital
                transformation strategy in general and software engineering in
                particular.
              </p>
            </div>
          </div>
          <div
            style={{ marginRight: "auto" }}
            className="col-lg-4 mb-3 mb-lg-0 px-4 content-part"
          >
            <div className="icon-benefit mb-4">
              <SelectOutlined />
            </div>
            <div className="text-benefit">
              <span>Quality-Focused Solutions</span>
              <p className="my-sm-3">
                We are using cutting-edge technologies and tools in software
                development process to bring the highest software development
                quality, for example automation testing, RPA...
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-0 px-4 content-part">
            <div className="icon-benefit mb-4">
              <UserOutlined />
            </div>
            <div className="text-benefit">
              <span>Great Talent Pool</span>
              <p className="my-sm-3">
                Our team has 260+ experienced developers with in-depth skills &
                knowledge in software building and powerful technologies stacks.
              </p>
            </div>
          </div>
        </div>
        <div className="row mx-0 px-0 g-0 mt-lg-4 mb-sm-5 pb-sm-5 content-bot">
          <div
            style={{ marginRight: "auto" }}
            className="col-lg-4 mb-3 mb-lg-0 px-4 g-0 content-part"
          >
            <div className="icon-benefit mb-4">
              <PieChartOutlined />
            </div>
            <div className="text-benefit">
              <span>Experience</span>
              <p className="my-sm-3">
                We are strategic partner of big corporations such as Mitsui
                O.S.K.Line, Marubeni, Mitani, Hino Motor, Vinmec International
                Hospital...and delivered 1,000+ systems for enterprise.
              </p>
            </div>
          </div>
          <div
            style={{ marginRight: "auto" }}
            className="col-lg-4 mb-3 mb-lg-0 px-4 content-part"
          >
            <div className="icon-benefit mb-4">
              <SwitcherOutlined />
            </div>
            <div className="text-benefit">
              <span>All-in-One Provider</span>
              <p className="my-sm-3">
                Our services are comprehensive from consulting, design,
                development, integration, deployment to system maintenance and
                much mores.
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-sm-0 px-4 content-part">
            <div className="icon-benefit mb-4">
              <PaperClipOutlined />
            </div>
            <div className="text-benefit">
              <span>Agile Mindset</span>
              <p className="my-sm-3">
                An agile mindset is about creating and responding to change in
                uncertain and turbulent environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-04 m-0 p-0 g-0">
        <div className="container">
          <div className="row py-5 py-sm-0 for-contac">
            <div className="col-12 col-sm-6 g-0 my-sm-5 cta-11-txt">
              <h2>Connect with us</h2>
              <p className="my-sm-3">We’re ready to talk opportunity</p>
              <div className="btn-deha mb-4 mb-sm-0 mt-4 py-3">
                <a className="" href="">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-12 col-sm-4 my-sm-5">
              <img className="img-defaultt" src={defaultt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Retail;
