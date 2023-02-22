<<<<<<< HEAD
=======
import imageDeha from "./imgwc.jpg";
import imgDig from "./img_dig_cons@2x.jpg";
import imgTranf from "./img_digi_tranf@2x.jpg";
import w1 from "./w1.jpg";
import w4 from "./w4.jpg";
import w2 from "./w2.jpg";
import w5 from "./w5.jpg";
import w3 from "./w3.jpg";
import w6 from "./w6.jpg";
import quote from "./icons8-get-quote-96.png";
import { useState } from "react";

>>>>>>> luong
import "./HomeStyles.scss";
import React from "react";
import Slider from "react-slick";
import { Rate, Carousel } from "antd";

function Home() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
<<<<<<< HEAD
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
=======
    <div className="container-fluid  overflow-hidden m-0 g-0">
      <div className="row hero py-5 px-sm-5 py-sm-auto g-0">
        <div
          id=""
          className="col-sm-12 mx-2 my-5 py-5 mx-sm-5 my-sm-auto px-sm-5 py-sm-auto titleWeb"
        >
          <p className="exb">
            WEB DESIGN &<br />
            <span className="dev">DEVELOPMENT SERVICES</span>
          </p>
          <p className="tec">catch up with the</p>
          <p className="digi">digital transformation</p>
          <button className="hmHr-but my-5 mt-sm-5">Read more</button>
        </div>
      </div>
      <div className="row mt-5 m-sm-5">
        <div className="col-sm-12 miss">
          <h2 className="desc grad">Mission</h2>
          <h3>
            To&nbsp;
            <span style={{ fontWeight: 700, color: "#1d2055" }}>
              deliver happiness&nbsp;
            </span>
            to our <span className="client">clients</span> and
            <span className="client"> staffs</span> .
          </h3>
        </div>
      </div>

      <div className="row  mx-sm-5 px-sm-5">
        <div className="col-sm-6 px-4 pt-1 px-sm-5 px-md-1 px-lg-5">
          <p class="lig">
            Happiness, with DEHA, is the highest value that people accumulate
            through work, cooperation with a positive attitude along with a
            worthy life. Happiness is not an outcome, but a collection of
            experiences, long-lasting and enduring. DEHA considers the
            attainment of happiness as the goal of its business activities. All
            activities of DEHA are aimed at the continuous, unlimited transfer
            of values to members, partners and customers to achieve that
            happiness.
          </p>
          <button className="hmHr-but">About us</button>
        </div>
        <div className="col-sm-6 px-sm-5">
          <img className="misImg" src={imageDeha} />
        </div>
        {/* <div className="row mx-1 my-5 mx-sm-3">
          <div className="col-sm-12">
          </div>
        </div> */}
      </div>
      <div className="row my-sm-5 imageArea px-sm-5 g-0">
        <div className="col-sm-12 px-sm-5">
          <div className="row px-3 m-sm-5 px-sm-5">
            <div className="col-6 col-sm-3">
              <h3>220</h3> <p>Members</p>
>>>>>>> luong
            </div>
          </div>
        </div>
        <div className="service-content container">
          <div className="row">
            <div className="col-4">
              <div
                className="our-service-box"
                style={{
                  background: `url("https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img-digital-consulting") 0% 0% / cover no-repeat`,
                  visibility: "visible",
                }}
              >
                <div className="box-service-content">
                  <p className="text-content">
                    DEHA's Digital Transformation Consultancy service helps
                    customers identify the gaps between where they are now and
                    where they need to be, then closes them by using Digital
                    Technologies.
                  </p>
                </div>
              </div>
              <div className="title-active">
                <h4 style={{ fontWeight: "700" }}>Digital Consulting</h4>
              </div>
            </div>
            <div className="col-4">
              <div
                className="our-service-box"
                style={{
                  background: `url("https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img-digital-consulting") 0% 0% / cover no-repeat`,
                  visibility: "visible",
                }}
              >
                <div className="box-service-content">
                  <p className="text-content">
                    DEHA's Digital Transformation Consultancy service helps
                    customers identify the gaps between where they are now and
                    where they need to be, then closes them by using Digital
                    Technologies.
                  </p>
                </div>
              </div>
              <div className="title-active">
                <h4 style={{ fontWeight: "700" }}>Digital Consulting</h4>
              </div>
            </div>
            <div className="col-4">
              <div
                className="our-service-box"
                style={{
                  background: `url("https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img-digital-consulting") 0% 0% / cover no-repeat`,
                  visibility: "visible",
                }}
              >
                <div className="box-service-content">
                  <p className="text-content">
                    DEHA's Digital Transformation Consultancy service helps
                    customers identify the gaps between where they are now and
                    where they need to be, then closes them by using Digital
                    Technologies.
                  </p>
                </div>
              </div>
              <div className="title-active">
                <h4 style={{ fontWeight: "700" }}>Digital Consulting</h4>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="row mt-3">
            <div className="col-4">
              <div
                className="our-service-box"
                style={{
                  background: `url("https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img-digital-consulting") 0% 0% / cover no-repeat`,
                  visibility: "visible",
                }}
              >
                <div className="box-service-content">
                  <p className="text-content">
                    DEHA's Digital Transformation Consultancy service helps
                    customers identify the gaps between where they are now and
                    where they need to be, then closes them by using Digital
                    Technologies.
                  </p>
=======
        </div>
      </div>
      <div className="row my-4 my-sm-0">
        <div className="col-12 sTitle">
          <h3 style={{ fontSize: 27, opacity: 0.9 }} class="lig">
            Services
          </h3>
          <h2 class="grad ">What We Do</h2>
        </div>
      </div>

      <div className="row my-sm-5">
        <div
          style={{ borderRight: "none" }}
          className="col-sm-6 py-4 p-sm-5 hmLiser"
        >
          <h3>Digital Consulting</h3>
          <img className="px-sm-5" src={imgDig} />
          <a className="mt-sm-5" href="">
            Application services, Next-gen technologies services and more…
          </a>
        </div>
        <div className="col-sm-6 py-4 p-sm-5 hmLiser">
          <h3 style={{ color: "#8aba2b" }}>
            DIGITAL TRANSFORMATION CONSULTING
          </h3>
          <img className="px-sm-5" src={imgTranf} />
          <a
            style={{ color: "#8aba2b", border: "1px #8aba2b solid" }}
            className="mt-sm-5"
            href=""
          >
            Ecommerce services, Smart Logistics and more…
          </a>
        </div>
      </div>
      {/* <div className="row my-5 my-sm-0 mb-sm-5">
        <div className="col-12 sTitle">
          <h3 style={{ fontSize: 27, opacity: 0.9, lineHeight: 1 }} class="lig">
            Creative Portfolio
          </h3>
          <h2 class="grad">Success cases</h2>
        </div>
      </div>

      <div className="row mx-sm-5 px-sm-5 g-0 listFolio">
        <div className="col-sm-4 g-0 ">
          <img className="mb-4 g-0" src={w1} />
          <br />
          <img src={w4} />
        </div>
        <div className="col-sm-4 g-0">
          <img className="mb-4" src={w2} />
          <br />
          <img src={w5} />
        </div>
        <div className="col-sm-4 g-0">
          <img className="mb-4" src={w3} />
          <br />
          <img src={w6} />
        </div>
      </div> */}

      <div className="row hmQuote mt-lg-5 p-lg-5">
        <div className="col-12 col-lg-6 px-4 mt-lg-5 p-lg-5">
          <img src={quote} />
          <p>
            {text.desc
              ? text.desc
              : "Using DEHA market research services provide us a positive result. We grasped the market situation and used it for our strategy and policy."}
          </p>
          <h6>
            <span>{text.auth ? text.auth : "LE ANH DUONG"} </span>
            {text.office
              ? text.office
              : "- Sales Manager, Mitsubishi Electric Viet Nam"}
          </h6>
        </div>
        <div className="col-12 px-5 col-lg-6 mt-lg-5 p-lg-5">
          <div className="row mt-3 mt-sm-5 g-0 imgQuote px-sm-5">
            {quotes &&
              quotes.map((p) => (
                <div className="col-4 col-sm-4">
                  <img
                    src={p.src}
                    id="selected"
                    alt="Testimonial Images"
                    onClick={() => {
                      setText({
                        desc: p.desc,
                        auth: p.auth,
                        office: p.office,
                      });
                    }}
                  ></img>
>>>>>>> luong
                </div>
              </div>
              <div className="title-active">
                <h4 style={{ fontWeight: "700" }}>Digital Consulting</h4>
              </div>
            </div>
            <div className="col-4">
              <div
                className="our-service-box"
                style={{
                  background: `url("https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img-digital-consulting") 0% 0% / cover no-repeat`,
                  visibility: "visible",
                }}
              >
                <div className="box-service-content">
                  <p className="text-content">
                    DEHA's Digital Transformation Consultancy service helps
                    customers identify the gaps between where they are now and
                    where they need to be, then closes them by using Digital
                    Technologies.
                  </p>
                </div>
              </div>
              <div className="title-active">
                <h4 style={{ fontWeight: "700" }}>Digital Consulting</h4>
              </div>
            </div>
            <div className="col-4">
              <div
                className="our-service-box"
                style={{
                  background: `url("https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img-digital-consulting") 0% 0% / cover no-repeat`,
                  visibility: "visible",
                }}
              >
                <div className="box-service-content">
                  <p className="text-content">
                    DEHA's Digital Transformation Consultancy service helps
                    customers identify the gaps between where they are now and
                    where they need to be, then closes them by using Digital
                    Technologies.
                  </p>
                </div>
              </div>
              <div className="title-active">
                <h4 style={{ fontWeight: "700" }}>Digital Consulting</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="big-guys">
        <div className="container">
          <p className="text-center title-big-guy">
            This BIG guys are using DEHA services and they are more than happier
            ever
          </p>
          <div className="row">
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
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
