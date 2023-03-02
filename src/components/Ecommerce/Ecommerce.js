import "./EcommerceStyle.scss";
import logo1 from "./COMATCH's_logo.svg";
import logo2 from "./Group.svg";
import logo3 from "./logo-tisa-white.svg";
import logo4 from "./Logo-white_340x156-px-01.svg";
import logo5 from "./layer1.svg";
import logo6 from "./g16.svg";
import logo7 from "./imageLogo1.svg";
import React, { useEffect } from "react";
import {
  AppstoreOutlined,
  RetweetOutlined,
  FolderAddOutlined,
  FundOutlined,
  ControlOutlined,
  BulbOutlined,
  SelectOutlined,
  UserOutlined,
  PieChartOutlined,
  SwitcherOutlined,
  PaperClipOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
function Ecommerce() {
  useEffect(() => {
    document.title = "AVEO Global - Ecommerce";
  }, []);

  setTimeout(function () {
    var text = document.getElementsByClassName("text");
    for (var i = 0; i < text.length; i++) {
      text[i].classList.add("fadeInRight", "cssanimation");
    }
    var image = document.getElementsByClassName("image");
    for (var i = 0; i < image.length; i++) {
      image[i].classList.add("fadeInLeft", "cssanimation");
    }
  }, 1000);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var up1 = document.getElementsByClassName("up1");
      var up2 = document.getElementsByClassName("up2");
      var up3 = document.getElementsByClassName("up3");
      var up4 = document.getElementsByClassName("up4");
      var up5 = document.getElementsByClassName("up5");
      var bigGuy = document.getElementsByClassName("big-guys");
      if (window.scrollY >= 250) {
        for (var i = 0; i < up1.length; i++) {
          up1[i].classList.add("fadeInUp", "cssanimation");
        }
        // for (var i = 0; i < txtblock.length; i++) {
        //   txtblock[i].classList.add("fadeInRight", "cssanimation");
        // }
      }
      if (window.scrollY >= 330) {
        for (var i = 0; i < up2.length; i++) {
          up2[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 450) {
        for (var i = 0; i < up5.length; i++) {
          up5[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 800) {
        for (var i = 0; i < bigGuy.length; i++) {
          bigGuy[i].classList.add("fadeInLeft", "cssanimation");
        }
      }
      if (window.scrollY >= 1100) {
        for (var i = 0; i < up3.length; i++) {
          up3[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 1300) {
        for (var i = 0; i < up4.length; i++) {
          up4[i].classList.add("fadeInUp", "cssanimation");
        }
      }
    });
  }, []);
  return (
    <div className="ecommerce">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content">
                <div className="text">
                  <p className="text-title">
                    <span>Ecommerce</span>
                  </p>
                  <p className="sub-text">
                    We'll help you build a scalable, secure platform that will
                    guide your buyer through a seamless purchasing process
                  </p>
                  <a href="/contact-us" className="btn btn-contact">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="developer-service">
        <div className="container">
          <div className="title-service">
            <div class="row justify-content-center">
              <div class="col-lg-10 col-xl-8">
                <div class="section-title title-01 mb-70">
                  <h3 class="title">Our Solutions</h3>
                  <p class="sub-title">
                    Ecommerce solutions suited to your needs
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-service">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <AppstoreOutlined />
                  </div>
                  <div className="text-service col up1">
                    <b className="text-title">
                      Cart to Cart Migration Made Easy
                    </b>
                    <p className="text-sub">
                      With the most advanced shopping cart migration solution,
                      we ensure the highest accuracy and the least human
                      involvement. Only 3 simple steps to set everything up. No
                      coding required!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col up1">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <FundOutlined />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">Channel and System Integration</b>
                    <p className="text-sub">
                      Our ecommerce services enhance your business operations
                      through effective channel integration and help increase
                      your customer reach. We connect your internal management
                      systems like ERP, CRM, PIM, and CMS to external systems
                      and enable bidirectional data flow.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col up1">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <FolderAddOutlined />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">
                      Centralized Inventory Management
                    </b>
                    <p className="text-sub">
                      Manage 100% error-free inventory that gets updated in real
                      time across all your sale channels.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col up2">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <BarChartOutlined />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">Analytics and Forecasting</b>
                    <p className="text-sub">
                      We deliver actionable insights based on historical and
                      present data to help you predict and understand evolving
                      customer requirements. Our automated ecommerce solution
                      helps you determine the structural changes your site needs
                      based on customer preferences and more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col up2">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <RetweetOutlined />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">Competitive Intelligence </b>
                    <p className="text-sub">
                      Our ecommerce experts monitor product prices using product
                      GAP analysis to enhance your portfolio and safeguard your
                      brand value.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col up2">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <ControlOutlined />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">
                      Omnichannel eCommerce Solutions
                    </b>
                    <p className="text-sub">
                      Deliver a consistent brand experience across every
                      channel, from your physical store to your online store—and
                      everything in between.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="big-guys">
        <div className="container">
          <p className="text-center title-big-guy">
            This BIG guys are using services and they are more than happier ever
          </p>
          <div className="row justify-content-center flex-wrap">
            <div className="col-2 ml">
              <img
                src={logo1}
                style={{ width: "100%", height: "auto", marginTop: "10px" }}
              />
            </div>
            {/* <div className="col">
              <img
                src={logo2}
                style={{ width: "110%", height: "auto", marginTop: "20px" }}
              />
            </div> */}
            <div className="col-2 left">
              <img
                src={logo3}
                style={{
                  width: "80%",
                  height: "auto",
                  // marginLeft: "20px",
                  marginTop: "10px",
                }}
              />
            </div>
            {/* <div className="col">
              <img src={logo4} style={{ width: "80%", height: "auto" }} />
            </div> */}
            <div className="col-2 left">
              <img
                src={logo6}
                style={{ width: "70%", height: "auto", marginTop: "10px" }}
              />
            </div>
            <div className="col-2">
              <img
                src={logo7}
                style={{ width: "70%", height: "auto", marginTop: "0px" }}
              />
            </div>
            <div className="col-2 left">
              <img src={logo5} style={{ width: "30%", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>
      <section className="benefits-of-partnering">
        <div className="container">
          <p className="title-benefit">Benefits of Partnering with AVEO</p>
          <div className="container benefit ">
            <div className="row">
              <div className="col-4 content-part up3">
                <div className="icon-benefit">
                  <BulbOutlined />
                </div>
                <div className="text-benefit">
                  <b>Expert Advice</b>
                  <p>
                    We are a leading digital strategy consultant. We can offer
                    an unique and consultative perspective to your digital
                    transformation strategy in general and software engineering
                    in particular.
                  </p>
                </div>
              </div>
              <div className="col-4 content-part up3">
                <div className="icon-benefit">
                  <SelectOutlined />
                </div>
                <div className="text-benefit">
                  <b>Quality-Focused Solutions</b>
                  <p>
                    We are using cutting-edge technologies and tools in software
                    development process to bring the highest software
                    development quality, for example automation testing, RPA...
                  </p>
                </div>
              </div>
              <div className="col-4 content-part up3">
                <div className="icon-benefit">
                  <UserOutlined />
                </div>
                <div className="text-benefit">
                  <b>Great Talent Pool</b>
                  <p>
                    Our team has 260+ experienced developers with in-depth
                    skills & knowledge in software building and powerful
                    technologies stacks.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4 content-part up4">
                <div className="icon-benefit">
                  <PieChartOutlined />
                </div>
                <div className="text-benefit">
                  <b>Experience</b>
                  <p>
                    We are strategic partner of big corporations such as Mitsui
                    O.S.K.Line, Marubeni, Mitani, Hino Motor, Vinmec
                    International Hospital...and delivered 1,000+ systems for
                    enterprise.
                  </p>
                </div>
              </div>
              <div className="col-4 content-part up4">
                <div className="icon-benefit">
                  <SwitcherOutlined />
                </div>
                <div className="text-benefit">
                  <b>All-in-One Provider</b>
                  <p>
                    Our services are comprehensive from consulting, design,
                    development, integration, deployment to system maintenance
                    and much mores.
                  </p>
                </div>
              </div>
              <div className="col-4 content-part up4">
                <div className="icon-benefit">
                  <PaperClipOutlined />
                </div>
                <div className="text-benefit">
                  <b>Agile Mindset</b>
                  <p>
                    An agile mindset is about creating and responding to change
                    in uncertain and turbulent environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ecommerce;
