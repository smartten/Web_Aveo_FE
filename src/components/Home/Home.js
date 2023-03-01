import logo from "./Asset 1.svg";
import logo1 from "./COMATCH's_logo.svg";
import logo2 from "./Group.svg";
import logo3 from "./logo-tisa-white.svg";
import logo4 from "./Logo-white_340x156-px-01.svg";
import logo5 from "./layer1.svg";
import logo6 from "./g16.svg";
import logo7 from "./imageLogo1.svg";
import img1 from "./CustomImg1.png";
import img2 from "./MobileImg1.png";
import img3 from "./WebImg1.png";
import img4 from "./Companyv2.svg";
import img5 from "./imgoffshore.jpg";
import img6 from "./TestingIng1.png";
import img7 from "./CloudImg1.png";
import "./HomeStyles.scss";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { Rate, Carousel } from "antd";
import { RightCircleOutlined, ArrowRightOutlined } from "@ant-design/icons";

function Home() {
  setTimeout(function () {
    var text = document.getElementsByClassName("text-slider");
    for (var i = 0; i < text.length; i++) {
      text[i].classList.add("fadeInLeft", "cssanimation");
    }
  }, 500);

  useEffect(() => {
    document.title =
      "AVEO Global - Leading Software Development Company in Vietnam";
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      var imageBlock = document.getElementsByClassName("img-fluid");
      var txtblock = document.getElementsByClassName("txt-block");
      var service = document.getElementsByClassName("service-content");
      var bigGuy = document.getElementsByClassName("big-guys");
      if (window.scrollY >= 300) {
        for (var i = 0; i < imageBlock.length; i++) {
          imageBlock[i].classList.add("fadeInLeft", "cssanimation");
        }
        for (var i = 0; i < txtblock.length; i++) {
          txtblock[i].classList.add("fadeInRight", "cssanimation");
        }
      }
      if (window.scrollY >= 600) {
        for (var i = 0; i < service.length; i++) {
          service[i].classList.add("fadeInLeft", "cssanimation");
        }
      }
      if (window.scrollY >= 1560) {
        for (var i = 0; i < bigGuy.length; i++) {
          bigGuy[i].classList.add("fadeInLeft", "cssanimation");
        }
      }
    });
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="home">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item-home">
            <div className="container">
              <div className="slide-content">
                <div className="text-slider">
                  <p className="text-title">
                    <span>Leading Software</span>
                  </p>
                  <p className="text-title">Development Company</p>
                  <p className="text-title">in Vietnam</p>
                  <p className="sub-text">
                    With dedicated and experienced software engineers, we
                    accompany clients to create lasting value throughout the
                    digital transformation process.
                  </p>
                  <a
                    href="/contact-us"
                    target="_blank"
                    className="btn btn-detail"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us">
        <div className="container">
          <div className="top-row pb-50">
            <div className="row d-flex align-items-center">
              <div className="col-md-5 col-lg-6 order-first order-md-2">
                <div
                  className="img-block left-column wow"
                  style={{ visibility: "visible" }}
                >
                  <img
                    className="img-fluid"
                    src={img4}
                    alt="Vietnam Software Development Outsourcing Company"
                    // style={{ display: "block" }}
                  />
                </div>
              </div>
              <div className="col-md-7 col-lg-6 order-last order-lg-2">
                <div
                  className="txt-block left-column wow"
                  style={{ visibility: "visible" }}
                >
                  <h3 className="h3-xs">
                    Vietnam Software Development Outsourcing Company
                  </h3>
                  <p className="p-lg">
                    AVEO Global is one of the leading Software Development and
                    Outsourcing companies in Vietnam, specializing in providing
                    digital transformation consulting services and software
                    solutions in Manufacturing, Retail, Ecommerce, Finance,
                    Healthcare ...
                    <br />
                    We accompany clients to create lasting value throughout the
                    Digital Transformation process.
                  </p>
                  <div
                    className="btns-group mb-30 wow "
                    style={{ visibility: "visible" }}
                  >
                    <a className="btn btn-contact" href="/contact-us">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-services">
        <div className="title-service container">
          <div class="row justify-content-center">
            <div class="col-md-10 col-lg-8">
              <div class="section-title title-02 mb-75">
                <h1 class="h3-xl">Our Services Offering</h1>
                <p class="p-xl">
                  We offer a complete solution from consulting, designing, R&D,
                  developing, integrating, deploying and system maintenance for
                  businesses
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-content container">
          <div className="row">
            <div className="col-3">
              <div
                className="our-service-box"
                style={{
                  background: `url("${img5}") 0% 0% / cover no-repeat`,
                  visibility: "visible",
                }}
              >
                <div className="box-service-content">
                  <div className="title-box">
                    <p>Offshore Development Services</p>
                  </div>
                  <p className="text-content">
                    Our Cloud services are wide-ranging and innovative. So no
                    matter where you are on your Cloud journey, Smartten will
                    help build a practical solution and fulfill your business
                    requirements.
                  </p>
                  <br />
                  <div className="icon-box">
                    <a href="/">
                      <ArrowRightOutlined />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div
                className="our-service-box"
                style={{
                  background: `url(${img3}) 0% 0% / cover no-repeat`,
                  visibility: "visible",
                }}
              >
                <div className="box-service-content">
                  <div className="title-box">
                    <p>Web App Development Services</p>
                  </div>
                  <p className="text-content">
                    We always keep up with the latest Front & Back-end Web
                    Development technologies to create high-quality Web
                    Applications in a constantly changing business environment.
                  </p>
                  <br />
                  <div className="icon-box">
                    <a href="/web-application">
                      <ArrowRightOutlined />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                className="our-service-box"
                style={{
                  background: `url(${img2}) 0% 0% / cover no-repeat`,
                  visibility: "visible",
                }}
              >
                <div className="box-service-content">
                  <div className="title-box">
                    <p>Mobile App Development Services</p>
                  </div>
                  <p className="text-content">
                    Being the top 30 Global App Developers, Savvycom has immense
                    experience creating feature-rich & high-performing Mobile
                    Apps for iOS and Android platforms.
                  </p>
                  <br />
                  <div className="icon-box">
                    <a href="/web-application">
                      <ArrowRightOutlined />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-3">
              <div
                className="our-service-box"
                style={{
                  background: `url("${img6}") 0% 0% / cover no-repeat`,
                  visibility: "visible",
                }}
              >
                <div className="box-service-content">
                  <div className="title-box">
                    <p>QA & Software Testing Services</p>
                  </div>
                  <p className="text-content">
                    Rigorous testing and stringent quality assurance at every
                    stage ensure zero defects after releaseIN.
                  </p>
                  <br />
                  <div className="icon-box">
                    <a href="/testing-service">
                      <ArrowRightOutlined />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                className="our-service-box"
                style={{
                  background: `url(${img7}) 100% 0% / cover no-repeat`,
                  visibility: "visible",
                }}
              >
                <div className="box-service-content">
                  <div className="title-box">
                    <p>Cloud Service</p>
                    <br />
                  </div>
                  <p className="text-content">
                    We quickly allocate independent software developers for your
                    internal projects with a focus on communication processes &
                    detailed development phases.
                  </p>
                  <br />
                  <div className="icon-box">
                    <a href="/cloud-service">
                      <ArrowRightOutlined />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                className="our-service-box"
                style={{
                  background: `url("${img1}") 0% 0% / cover no-repeat`,
                  visibility: "visible",
                }}
              >
                <div className="box-service-content">
                  <div className="title-box">
                    <p>Custom Software Development</p>
                  </div>
                  <p className="text-content">
                    We design bold and unique digital products that help you
                    achieve your business goals. Every feature included in each
                    product is designed to boost your company’s value, customer
                    base, and profitability.
                  </p>
                  <br />
                  <div className="icon-box">
                    <a href="#">
                      <ArrowRightOutlined />
                    </a>
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
      <section className="comment">
        <div className="siler-list">
          <div className="slider-item-comment">
            <div className="container">
              <div className="slide-content">
                <div className="text mb-5">
                  <p className="text-title">What our clients say about us?</p>
                </div>

                <Slider {...settings}>
                  <div className="row comment-content d-flex">
                    <div className="col-4">
                      <div className="box-comment">
                        <p className="comment-content">
                          AVEO Global is the best technology partner any
                          business could ask for, they go above and beyond to
                          satisfy my business needs and they will do research
                          and develop anything you need. I will never switch to
                          any other company, may your success be our success!
                          P.S. AVEO is the best.
                        </p>
                        <p className="name-comment">Mr. Tony Nguyen</p>
                        <p className="address-name">Blitz Group, Singapore</p>
                        <Rate defaultValue={5} disabled className="mobile" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="box-comment">
                        <p className="comment-content">
                          I was very happy with the promises made and, more
                          importantly, delivered. Quality code. Neat and
                          organized. They assisted with the last tweaks to
                          ensure I was a happy client. I would be happy to work
                          with them again on my next project.
                        </p>
                        <p className="name-comment">Mr. Dean Han</p>
                        <p className="address-name">
                          Military Insurance Corporation - MIC
                        </p>
                        <Rate defaultValue={5} disabled className="mobile" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="box-comment">
                        <p className="comment-content">
                          The project thus far was not complicated and we are
                          continuing to the next phase. My experience with AVEO
                          to date: Very good service - friendly and helpful with
                          high level of technical understanding and competence .
                          Listens to what I want, makes suggestions where
                          appropriate and delivers very quickly.
                        </p>
                        <p className="name-comment">Mr. Hung Nguyen</p>
                        <p className="address-name">
                          Vietnam Electricity Corporation - EVN
                        </p>
                        <Rate defaultValue={5} disabled className="mobile" />
                      </div>
                    </div>
                  </div>
                  <div className="row comment-content d-flex">
                    <div className="col-4">
                      <div className="box-comment">
                        <p className="comment-content">
                          They spent more time waiting on me than I did them,
                          and they were patient and courteous every step of the
                          way. I would definitely recommend hiring them and I
                          will continue to use them for my future projects
                        </p>
                        <p className="name-comment">Mr. Mark Henry</p>
                        <p className="address-name">
                          Co MATCH Consulting - Australia
                        </p>
                        <Rate defaultValue={5} disabled className="mobile" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="box-comment">
                        <p className="comment-content">
                          AVEO Global is the best technology partner any
                          business could ask for, they go above and beyond to
                          satisfy my business needs and they will do research
                          and develop anything you need. I will never switch to
                          any other company, may your success be our success!
                          P.S. AVEO is the best.
                        </p>
                        <p className="name-comment">Mr. Tony Nguyen</p>
                        <p className="address-name">Blitz Group, Singapore</p>
                        <Rate defaultValue={5} disabled className="mobile" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="box-comment">
                        <p className="comment-content">
                          I was very happy with the promises made and, more
                          importantly, delivered. Quality code. Neat and
                          organized. They assisted with the last tweaks to
                          ensure I was a happy client. I would be happy to work
                          with them again on my next project.
                        </p>
                        <p className="name-comment">Mr. Dean Han</p>
                        <p className="address-name">
                          Military Insurance Corporation - MIC
                        </p>
                        <Rate defaultValue={5} disabled className="mobile" />
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="contact-us-v1">
        <div className="container ">
          <div className="row mb-0 py-5">
            <br />
            <div className="col-12 col-sm-4 footer-headquarter-col1">
              <img className="footer-logo" src={logo} />
              <div className=" pt-sm-0 ">
                <br />
                <p>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "14.5px",
                    }}
                  >
                    Headquarter:
                  </span>{" "}
                  4F No 9 Building, 9 Ha Dinh, Thanh Xuan, Hanoi, Vietnam
                </p>
                <p>
                  <span style={{ fontWeight: 700, fontSize: "14.5px" }}>
                    Phone:
                  </span>{" "}
                  +84 24 6259 3698
                </p>
                <p>
                  <span style={{ fontWeight: 700, fontSize: "14.5px" }}>
                    Fax:
                  </span>{" "}
                  +84 24 6259 3698
                </p>
                <p>
                  <span style={{ fontWeight: 700, fontSize: "14.5px" }}>
                    Email:
                  </span>{" "}
                  sales@aveo.com.vn
                </p>
              </div>
            </div>
            <div className="col-6 col-sm-2 footer-headquarter-col1">
              <b style={{ fontFamily: "revert-layer", fontSize: 20 }}>
                Services
              </b>
              <p className="mt-2">
                <a className="footer-link" href="/web-design-and-development">
                  Offshore Development Services
                </a>
              </p>
              <p>
                <a className="footer-link" href="/web-application">
                  Web Application Development
                </a>
              </p>
              <p>
                <a className="footer-link" href="/mobile-application">
                  Mobile Application Development
                </a>
              </p>
              <p>
                <a className="footer-link" href="/testing-service">
                  Testing services
                </a>
                <br />
                <a className="footer-link" href="/integration-services">
                  Cloud Services
                </a>
              </p>
            </div>
            <div className="col-6 col-sm-2  footer-headquarter-col1">
              <b
                style={{
                  fontFamily: "revert-layer",
                  fontSize: 20,
                }}
              >
                Industries
              </b>
              <p className="mt-2">
                <a className="footer-link" href="/manufacturing">
                  Manufacturing
                </a>
                <br />
                <a className="footer-link" href="/healthcare">
                  Health Care
                </a>
                <br />
                <a className="footer-link" href="/retail">
                  Retail
                </a>
                <br />
                <a className="footer-link" href="/ecommerce">
                  Ecommerce
                </a>
                <br />
                <a className="footer-link" href="/financial">
                  Financial
                </a>
              </p>
            </div>
            <div className="col-12 col-sm-4 g-0 mt-3 mt-sm-0 conact-img">
              <img
                className="px-4"
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/hero/Hero-img-default"
              />
            </div>
          </div>
          <hr class="divider"></hr>
          <div className="row mt-sm-5 pb-sm-4">
            <div className="col-12 ">
              <p
                style={{
                  color: "white",
                  fontWeight: 600,
                  fontSize: 18,
                  fontFamily: "inherit",
                }}
              >
                © 2023 AVEO. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Home;
