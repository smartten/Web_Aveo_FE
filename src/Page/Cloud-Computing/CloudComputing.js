import "./CloudComputingStyle.scss";
import React, { useEffect } from "react";
import logo1 from "./COMATCH's_logo.svg";
import logo2 from "./Group.svg";
import logo3 from "./logo-tisa-white.svg";
import logo4 from "./Logo-white_340x156-px-01.svg";
import logo5 from "./layer1.svg";
import logo6 from "./g16.svg";
import logo7 from "./imageLogo1.svg";
import icon1 from "./Cloud.svg";
import icon2 from "./icons-05-22.svg";
import icon3 from "./CloudMonitoring.svg";
import icon4 from "./LegacySystemtoCloudMigration.svg";
import img1 from "./Cloud-Services-1-01.svg";
import {
  CloudServerOutlined,
  DashboardOutlined,
  FieldTimeOutlined,
  CodeOutlined,
  BulbOutlined,
  SelectOutlined,
  UserOutlined,
  PieChartOutlined,
  SwitcherOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
function CloudComputing() {
  useEffect(() => {
    document.title = "AVEO Global - Cloud Service";
    topFunction();
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
      var bigGuy = document.getElementsByClassName("big-guys");
      if (window.scrollY >= 320) {
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
      if (window.scrollY >= 1560) {
        for (var i = 0; i < bigGuy.length; i++) {
          bigGuy[i].classList.add("fadeInLeft", "cssanimation");
        }
      }
      if (window.scrollY >= 1650) {
        for (var i = 0; i < up3.length; i++) {
          up3[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 1690) {
        for (var i = 0; i < up4.length; i++) {
          up4[i].classList.add("fadeInUp", "cssanimation");
        }
      }
    });
  }, []);

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="cloud-computing">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="image">
                  <img src={img1} />
                </div>
                <div className="text">
                  <p className="text-title">
                    <span>Cloud Services</span>
                  </p>
                  <p className="sub-text">
                    An effective cloud strategy ensures that the enterprise
                    makes the right technology investments at the right time and
                    on the right platforms to improve business performance
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
                    Shift your business to cloud with support from our experts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-service">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col up1">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <img src={icon3} />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">Cloud Strategy Consulting</b>
                    <p className="text-sub">
                      We help you find out the right cloud strategy supports
                      core business and innovation in any hybrid multicloud
                    </p>
                  </div>
                </div>
              </div>
              <div className="col up1">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <img src={icon2} />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">Cloud System Optimization</b>
                    <p className="text-sub">
                      Cloud optimization is the process of eliminating cloud
                      resource waste by selecting, provisioning, and
                      right-sizing the resources you spend on specific cloud
                      features.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col up2">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <img src={icon1} />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">Cloud Monitoring</b>
                    <p className="text-sub">
                      Utilization of manual or automation techniques to monitor
                      the performance of applications, servers...Assessment and
                      evaluation of resource utilization, server response times,
                      availability and operating speeds.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col up2">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <img src={icon4} />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">
                      Legacy System to Cloud Migration
                    </b>
                    <p className="text-sub">
                      We help you transform all the data, applications, and
                      other business digital assets from an on-premise
                      infrastructure to the cloud.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-typical">
        <div className="container">
          <div className="content-typical">
            <p className="title-typical">
              Our Typical Blockchain Implementation Roadmap
            </p>
          </div>
          <div className="box-content-typical">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col">
                <div className="box">
                  <span className="nummber">1</span>
                  <div className="content-number">
                    <h3 className="title-box">Discover</h3>
                    <p className="content-title-box">
                      We work with you to gain clarity on your needs, learn when
                      and where blockchains makes sense in your business.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <span className="nummber">2</span>
                  <div className="content-number">
                    <h3 className="title-box">Research</h3>
                    <p className="content-title-box">
                      We determine and select the blockchain technology stack
                      and develop functional and technical architecture.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <span className="nummber">3</span>
                  <div className="content-number">
                    <h3 className="title-box">Build</h3>
                    <p className="content-title-box">
                      Our skilled blockchain engineers efficiently build and
                      test the proof of concept iteratively, retrospective to
                      confirm value and identify new challenges.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <span className="nummber">4</span>
                  <div className="content-number">
                    <h3 className="title-box">Scale</h3>
                    <p className="content-title-box">
                      We work with you to develop operating models and
                      governence, deploy blockchain solution in live production
                      environment. We also design roll-out strategy and
                      integrate with your legacy systems.
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
                    Our team has 70+ experienced developers with in-depth skills
                    & knowledge in software building and powerful technologies
                    stacks.
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
                    We are strategic partner of big corporations such as Blitz
                    Group, Co MARTCH, MIC ..and delivered 200+ systems for
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

export default CloudComputing;
