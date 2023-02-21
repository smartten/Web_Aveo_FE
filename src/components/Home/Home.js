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
