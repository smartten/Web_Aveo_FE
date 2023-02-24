import logo1 from "./COMATCH's_logo.svg";
import logo2 from "./Group.svg";
import logo3 from "./logo-tisa-white.svg";
import logo4 from "./Logo-white_340x156-px-01.svg";
import logo5 from "./layer1.svg";
import logo6 from "./g16.svg";
import logo7 from "./imageLogo1.svg";
import img1 from "./ImgTeam.jpg";
import img2 from "./AppMobile.jpg";
import img3 from "./WebDev.jpg";
import "./HomeStyles.scss";
import React from "react";
import Slider from "react-slick";
import { Rate, Carousel } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";

function Home() {
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
                <div className="text">
                  <p className="text-title">
                    <span>SME Warehouse</span>
                  </p>
                  <p className="text-title">Management Systems</p>
                  <p className="text-title">Vision 2030</p>
                  <p className="sub-text">
                    The concept of on-demand warehousing is fast emerging to
                    meet <br></br>the intermittent demands for more storage
                    space.
                  </p>
                  <a className="btn btn-detail">Get The Detail</a>
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
            <div className="col-4">
              <div
                className="our-service-box"
                style={{
                  background: `url("http://smartten.com.vn/static/media/Smartten-Services-1000-4.703fb17628d102013d8e.jpeg") 0% 0% / cover no-repeat`,
                  visibility: "visible",
                }}
              >
                <div className="box-service-content">
                  <div className="title-box">
                    <p>Cloud Services</p>
                  </div>
                  <p className="text-content">
                    Our Cloud services are wide-ranging and innovative. So no
                    matter where you are on your Cloud journey, Smartten will
                    help build a practical solution and fulfill your business
                    requirements.
                  </p>
                  <br />
                  <div className="icon-box">
                    <a href="/cloud-computing">
                      <RightCircleOutlined />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div
                className="our-service-box"
                style={{
                  background: `url(${img3}) 0% 0% / cover no-repeat`,
                  visibility: "visible",
                }}
              >
                <div className="box-service-content">
                  <div className="title-box">
                    <p>Web App Development</p>
                  </div>
                  <p className="text-content">
                    We always keep up with the latest Front & Back-end Web
                    Development technologies to create high-quality Web
                    Applications in a constantly changing business environment
                  </p>
                  <br />

                  <div className="icon-box">
                    <a href="/web-application">
                      <RightCircleOutlined />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div
                className="our-service-box"
                style={{
                  background: `url(${img2}) 0% 0% / cover no-repeat`,
                  visibility: "visible",
                }}
              >
                <div className="box-service-content">
                  <div className="title-box">
                    <p>Mobile App Development</p>
                  </div>
                  <p className="text-content">
                    We quickly allocate independent software developers for your
                    internal projects with a focus on communication processes &
                    detailed development phases.
                  </p>
                  <br />
                  <div className="icon-box">
                    <a href="/web-application">
                      <RightCircleOutlined />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-4">
              <div
                className="our-service-box"
                style={{
                  background: `url("http://smartten.com.vn/static/media/Smartten-Services-1000-5.5d0639777e2b133c05e9.jpeg") 0% 0% / cover no-repeat`,
                  visibility: "visible",
                }}
              >
                <div className="box-service-content">
                  <div className="title-box">
                    <p>Quality Assurance and Testing</p>
                  </div>
                  <p className="text-content">
                    Rigorous testing and stringent quality assurance at every
                    stage ensure zero defects after releaseIN.
                  </p>
                  <div className="icon-box">
                    <a href="/testing-service">
                      <RightCircleOutlined />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div
                className="our-service-box"
                style={{
                  background: `url(${img1}) 0% 0% / cover no-repeat`,
                  visibility: "visible",
                }}
              >
                <div className="box-service-content">
                  <div className="title-box">
                    <p>Dedicated Development Team</p>
                  </div>
                  <p className="text-content">
                    We quickly allocate independent software developers for your
                    internal projects with a focus on communication processes &
                    detailed development phases.
                  </p>
                  <div className="icon-box">
                    <a href="#">
                      <RightCircleOutlined />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div
                className="our-service-box"
                style={{
                  background: `url("http://smartten.com.vn/static/media/Smartten-Services-1000-2.c44a54aad023c97cdde1.jpeg") 0% 0% / cover no-repeat`,
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
                  <div className="icon-box">
                    <a href="#">
                      <RightCircleOutlined />
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
          <div className="row">
            <div className="col">
              <img
                src={logo1}
                style={{ width: "100%", height: "auto", marginTop: "10px" }}
              />
            </div>
            <div className="col">
              <img
                src={logo2}
                style={{ width: "110%", height: "auto", marginTop: "20px" }}
              />
            </div>
            <div className="col">
              <img
                src={logo3}
                style={{
                  width: "80%",
                  height: "auto",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              />
            </div>
            <div className="col">
              <img src={logo4} style={{ width: "80%", height: "auto" }} />
            </div>
            <div className="col">
              <img
                src={logo6}
                style={{ width: "70%", height: "auto", marginTop: "10px" }}
              />
            </div>
            <div className="col">
              <img
                src={logo7}
                style={{ width: "70%", height: "auto", marginTop: "0px" }}
              />
            </div>
            <div className="col">
              <img src={logo5} style={{ width: "25%", height: "auto" }} />
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
                  className="img-block left-column wow fadeInLeft"
                  style={{ visibility: "visible" }}
                >
                  <img
                    className="img-fluid"
                    src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img-who-we-are"
                    alt="Vietnam Leading Digital Strategy Consultant"
                    style={{ display: "block" }}
                  />
                </div>
              </div>
              <div className="col-md-7 col-lg-6 order-last order-lg-2">
                <div
                  className="txt-block left-column wow fadeInRight"
                  style={{ visibility: "visible" }}
                >
                  <h3 className="h3-xs">
                    Vietnam Leading Digital Strategy Consultant
                  </h3>
                  <p className="p-lg">
                    DEHA Vietnam specialized in digital strategy consulting for
                    business firm varies from industries such as: Manufacturing,
                    Retail, Ecommerce, Finance, Internet Service,
                    Transportation, Construction... With a team of experienced
                    experts, we help you to LEVERAGE YOUR BUSINESS in the age of
                    Digital Transformation.
                  </p>
                  <div
                    className="btns-group mb-30 wow fadeInUp"
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
                          Nulla quis lorem ut libero malesuada feugiat. Praesent
                          sapien massa, convallis a pellentesque nec, egestas
                          non nisi. Nulla quis lorem ut libero malesuada
                          feugiat.
                        </p>
                        <p className="name-comment">Nguyen Hieu</p>
                        <p className="address-name">Ha Noi, Viet Nam</p>
                        <Rate defaultValue={5} disabled />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="box-comment">
                        <p className="comment-content">
                          Nulla quis lorem ut libero malesuada feugiat. Praesent
                          sapien massa, convallis a pellentesque nec, egestas
                          non nisi. Nulla quis lorem ut libero malesuada
                          feugiat.
                        </p>
                        <p className="name-comment">Nguyen Hieu</p>
                        <p className="address-name">Ha Noi, VIet Nam</p>
                        <Rate defaultValue={5} disabled />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="box-comment">
                        <p className="comment-content">
                          Nulla quis lorem ut libero malesuada feugiat. Praesent
                          sapien massa, convallis a pellentesque nec, egestas
                          non nisi. Nulla quis lorem ut libero malesuada
                          feugiat.
                        </p>
                        <p className="name-comment">Nguyen Hieu</p>
                        <p className="address-name">Ha Noi, Viet Nam</p>
                        <Rate defaultValue={5} disabled />
                      </div>
                    </div>
                  </div>
                  <div className="row comment-content d-flex">
                    <div className="col-4">
                      <div className="box-comment">
                        <p className="comment-content">
                          Nulla quis lorem ut libero malesuada feugiat. Praesent
                          sapien massa, convallis a pellentesque nec, egestas
                          non nisi. Nulla quis lorem ut libero malesuada
                          feugiat.
                        </p>
                        <p className="name-comment">Nguyen Minh Hieu</p>
                        <p className="address-name">Ha Noi, Viet Nam</p>
                        <Rate defaultValue={5} disabled />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="box-comment">
                        <p className="comment-content">
                          Nulla quis lorem ut libero malesuada feugiat. Praesent
                          sapien massa, convallis a pellentesque nec, egestas
                          non nisi. Nulla quis lorem ut libero malesuada
                          feugiat.
                        </p>
                        <p className="name-comment">Nguyen Minh Hieu</p>
                        <p className="address-name">Ha Noi, VIet Nam</p>
                        <Rate defaultValue={5} disabled />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="box-comment">
                        <p className="comment-content">
                          Nulla quis lorem ut libero malesuada feugiat. Praesent
                          sapien massa, convallis a pellentesque nec, egestas
                          non nisi. Nulla quis lorem ut libero malesuada
                          feugiat.
                        </p>
                        <p className="name-comment">Nguyen Minh Hieu</p>
                        <p className="address-name">Ha Noi, Viet Nam</p>
                        <Rate defaultValue={5} disabled />
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us-v1">
        <div className="container">
          <div className="contact-content">
            <div className="contact-text">
              <h2>Connect with us</h2>
              <p>We're ready to talk opportunity</p>
              <a className="btn btn-contact" href="/contact-us">
                Contact Us
              </a>
            </div>
            <div className="conact-img">
              <img src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/hero/Hero-img-default" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
