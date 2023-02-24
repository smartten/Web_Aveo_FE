import "./ManufacturingStyle.scss";
import logo1 from "./COMATCH's_logo.svg";
import logo2 from "./Group.svg";
import logo3 from "./logo-tisa-white.svg";
import logo4 from "./Logo-white_340x156-px-01.svg";
import logo5 from "./layer1.svg";
import logo6 from "./g16.svg";
import logo7 from "./imageLogo1.svg";
import {
  CommentOutlined,
  OneToOneOutlined,
  NodeIndexOutlined,
  ClockCircleOutlined,
  ScheduleOutlined,
  BulbOutlined,
  SelectOutlined,
  UserOutlined,
  PieChartOutlined,
  SwitcherOutlined,
  PaperClipOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
function Manufacturing() {
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
    <div className="manufacturing">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content">
                <div className="text">
                  <p className="text-title">
                    <span>Manufacturing</span>
                  </p>
                  <p className="sub-text">
                    Maintenance + Product Lifecycle Management + Quality
                  </p>
                  <a className="btn btn-contact">Contact Us</a>
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
                  <p class="sub-title">Manufacturing Reinvented</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-service">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <CommentOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">Realtime Communication</b>
                    <p className="text-sub">
                      Display worksheets, quality alerts to workers during
                      operations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <ClockCircleOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">No more time clocking</b>
                    <p className="text-sub">
                      Accurate planning directly based on real manufacturing
                      times measures.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <NodeIndexOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">Artificial intelligence (AI)</b>
                    <p className="text-sub">
                      The next wave of manufacturing automation will involve AI,
                      which refers to the ability for machines to perform
                      complex tasks and become smarter over time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <DashboardOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">
                      Industrial Internet of Things (IIoT)
                    </b>
                    <p className="text-sub">
                      IIoT refers to intelligent devices and sensors that
                      collect data from the manufacturing floor for use in AI,
                      machine learning, and predictive analytics systems.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <OneToOneOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">
                      Asset performance management (APM)
                    </b>
                    <p className="text-sub">
                      APM involves automating asset control, providing a
                      streamlined way to manage and control everything from
                      fleets to assembly lines to forklifts, and everything in
                      between.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <ScheduleOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">All-in-one solution</b>
                    <p className="text-sub">
                      RP, Quality, Maintenance and PLM fully integrated.
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
            This BIG guys are using services and they are more than happier ever
          </p>
          <div className="row justify-content-center flex-wrap">
            <div className="col-2">
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
            <div className="col-2">
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
            {/* <div className="col">
              <img src={logo4} style={{ width: "80%", height: "auto" }} />
            </div> */}
            <div className="col-2">
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
            <div className="col-2">
              <img src={logo5} style={{ width: "25%", height: "auto" }} />
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

export default Manufacturing;
