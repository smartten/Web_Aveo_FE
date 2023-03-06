import "./TestStyle.scss";
import logo1 from "./COMATCH's_logo.svg";
import logo2 from "./Group.svg";
import logo3 from "./logo-tisa-white.svg";
import logo4 from "./Logo-white_340x156-px-01.svg";
import logo5 from "./layer1.svg";
import logo6 from "./g16.svg";
import logo7 from "./imageLogo1.svg";
import icon1 from "./api.svg";
import icon2 from "./Mobile-Development2.svg";
import icon3 from "./Automation-Service.svg";
import icon4 from "./Penetration.svg";
import img1 from "./Hero-testing.webp";
import React, { useEffect } from "react";

import {
  MobileOutlined,
  WalletOutlined,
  ApiOutlined,
  FileProtectOutlined,
  BulbOutlined,
  SelectOutlined,
  UserOutlined,
  PieChartOutlined,
  SwitcherOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
function Testing() {
  useEffect(() => {
    document.title = "AVEO Global - Testing Service";
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

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

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
    });
  }, []);

  return (
    <div className="testing">
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
                    <span>Testing Services</span>
                  </p>
                  <p className="sub-text">
                    We provides full-range testing services based on our
                    proficiency with application specifics and standards to
                    ensure your app's high quality and user adoption
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
                    Our testing service ensures each aspect of your software:
                    functioning, integrations, performance, usability, and
                    security is defect-free and fully compliant with its
                    requirements.
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
                    <img src={icon1} />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">API Testing</b>
                    <p className="text-sub">
                      Our testing services use best practices and open-source
                      tools to reduce your delivery cycles. We evaluate your
                      APIs based on their specifications, performance, error
                      handling, and security.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col up1">
                <div className="content-text row">
                  <div className="icon-service col-2 left w-mobi">
                    <img src={icon2} />
                  </div>
                  <div className="text-service col left">
                    <b className="text-title">Mobile Testing</b>
                    <p className="text-sub">
                      Mobile testing comprises functional, compatibility,
                      usability, performance, error handling, security testing
                      types.s
                    </p>
                  </div>
                </div>
              </div>
              <div className="col up2">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <img src={icon3} />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">Automation Testing</b>
                    <p className="text-sub">
                      To ensure sufficient test coverage, we can apply test
                      automation for functional and regression, performance,
                      compatibility, and security.
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
                    <b className="text-title">Penetration Testing</b>
                    <p className="text-sub">
                      Detect Security Vulnerabilities and Security Hotspots
                      during code review.
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
            <p className="title-typical">Our Software Testing Approach</p>
          </div>
          <div className="box-content-typical">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col">
                <div className="box">
                  <span className="nummber">1</span>
                  <div className="content-number">
                    <h3 className="title-box">Discover</h3>
                    <p className="content-title-box">
                      We work with you to gain clarity on your software testing
                      needs, defining clear business outcomes to set up a
                      successful engagement
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <span className="nummber">2</span>
                  <div className="content-number">
                    <h3 className="title-box">Elaborate</h3>
                    <p className="content-title-box">
                      We determine the best solution for your needs and align
                      our team to fill your skill and resource gaps.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <span className="nummber">3</span>
                  <div className="content-number">
                    <h3 className="title-box">Execute</h3>
                    <p className="content-title-box">
                      Our team assesses and develops a software testing plan and
                      strategy, executing the updated processes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <span className="nummber">4</span>
                  <div className="content-number">
                    <h3 className="title-box">Report</h3>
                    <p className="content-title-box">
                      We deliver and implement the proposed solution, evaluating
                      the software testing results to ensure we’re meeting your
                      needs. We also deliver a detail report to allow you fix
                      bugs and update your software.
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
          <div className="container benefit up3 ">
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
                    Our team has 70+ experienced developers with in-depth skills
                    & knowledge in software building and powerful technologies
                    stacks.
                  </p>
                </div>
              </div>
            </div>
            <div className="row up4">
              <div className="col-4 content-part">
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
    </div>
  );
}

export default Testing;
