import "./IotStyle.scss";
import {
  SearchOutlined,
  FileProtectOutlined,
  QrcodeOutlined,
  PushpinOutlined,
  BulbOutlined,
  SelectOutlined,
  UserOutlined,
  PieChartOutlined,
  SwitcherOutlined,
  PaperClipOutlined,
  ApartmentOutlined,
  ProfileOutlined,
  DiffOutlined,
} from "@ant-design/icons";
function Iotapp() {
  setTimeout(function () {
    var text = document.getElementsByClassName("text");
    for (var i = 0; i < text.length; i++) {
      text[i].classList.add("fadeRight", "cssanimation");
    }
    var image = document.getElementsByClassName("image");
    for (var i = 0; i < image.length; i++) {
      image[i].classList.add("fadeInLeft", "cssanimation");
    }
  }, 1000);
  return (
    <div className="iot-app">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="image">
                  <img src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/hero/Hero-iot-1_gfh00f" />
                </div>
                <div className="text">
                  <p className="text-title">
                    <span>IoT Application</span>
                  </p>
                  <p className="sub-text">
                    Our IoT App development services provide you with the
                    ability to remotely control your products from anywhere in
                    the world
                  </p>
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
                  <h3 class="title">Our Services</h3>
                  <p class="sub-title">
                    We drive value-centered IoT solutions and set up multi-level
                    data pipelines for that: from edge computing to cloud data
                    processing and data science.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-service">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <ApartmentOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">Process automation</b>
                    <p className="text-sub">
                      Automating manual actions based on commands sent from
                      control apps to actuators. Applicable to simple actions
                      like switching on/off, opening/closing, and complicated
                      industrial processes, like robotic order picking.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <ProfileOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">Environmental monitoring</b>
                    <p className="text-sub">
                      Measuring the required environmental metrics. Helps check
                      the compliance of asset storage and transportation,
                      monitor operation conditions for industrial equipment and
                      at human workplaces, understand the environmental impact
                      of processes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <ProfileOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">Asset and inventory management</b>
                    <p className="text-sub">
                      Remote tracking of assets' geoposition and movements.
                      Instant indication of low stock.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <DiffOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">Remote diagnostics</b>
                    <p className="text-sub">
                      Analyzing vital signs measured by wearable devices and
                      informing a supervising doctor on deviations from normal
                      levels. An advanced level of telehealth
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <SearchOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">Video surveillance</b>
                    <p className="text-sub">
                      Real-time alerting on abnormal behavior within the area
                      under surveillance. Used for crime prevention, early fire
                      detection, traffic incident alerts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <QrcodeOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">Product quality management</b>
                    <p className="text-sub">
                      Monitoring product parameters and process compliance
                      during manufacturing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <FileProtectOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">
                      Preventive equipment maintenance
                    </b>
                    <p className="text-sub">
                      Remote monitoring of equipment performance metrics and
                      early detection of potential malfunctioning. Prevents
                      equipment breakage and production interruptions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <PushpinOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">Transportation management</b>
                    <p className="text-sub">
                      Real-time monitoring of cargo in transit to cerify its
                      quality and validate the compliance with transportation
                      requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="certificates">
        <div className="container">
          <div className="content-certificates">
            <h3 className="title-certificates mb-3">
              Certificates & International Standards
            </h3>
            <div className="row justify-content-center">
              <div className="col-2">
                <img
                  src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/services/Img-cert-cmmi-level3"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-2">
                <img
                  src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/services/Img-cert-cmmi-level3"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-2">
                <img
                  src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/services/Img-cert-cmmi-level3"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-2">
                <img
                  src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/services/Img-cert-cmmi-level3"
                  style={{ width: "100%" }}
                />
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
      <section className="benefits-of-partnering">
        <div className="container">
          <p className="title-benefit">Benefits of Partnering with DEHA</p>
          <div className="container benefit ">
            <div className="row">
              <div className="col-4 content-part">
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
              <div className="col-4 content-part">
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
              <div className="col-4 content-part">
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
              <div className="col-4 content-part">
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
              <div className="col-4 content-part">
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
              <div className="col-4 content-part">
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

export default Iotapp;
