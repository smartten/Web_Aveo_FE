import "./HealthStyle.scss";
import Medical from "./Medical.png";
import Patient from "./Patient.png";
import improved from "./improved.png";
import webBrower from "./web-brower.png";
import defaultt from "./Hero-img-default.webp";
import {
  BulbOutlined,
  SelectOutlined,
  UserOutlined,
  PieChartOutlined,
  SwitcherOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";

import React, { useEffect } from "react";
function Healthcare() {
  setTimeout(function () {
    var heathText = document.getElementsByClassName("heath-text");
    for (var i = 0; i < heathText.length; i++) {
      heathText[i].classList.add("fadeInRight", "cssanimation");
    }
  }, 2000);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      var mobility = document.getElementsByClassName("mobility");
      var mobility2 = document.getElementsByClassName("mobility-2");
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
      if (window.scrollY >= 1000) {
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
      <div className="health-section g-0 m-0">
        <div className="container d-flex">
          <div
            style={{
              position: "absolute",
              marginTop: 200,
            }}
            className="col-12 col-sm-5  py-sm-5  g-0 heath-text"
          >
            <h1>Health Care</h1>
            <p>
              DEHA empowers healthcare providers with innovative solutions that
              automate processes, improve treatment outcomes and the patient
              experience, and reduce costs.
            </p>
            <div className="btn-deha mt-sm-4 py-sm-3">
              <a className="" href="">
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-7"></div>
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

        <div className="row g-0 m-0  mb-sm-3">
          <div
            style={{ width: "47%", marginRight: "auto" }}
            className="col-12 col-sm-6 mobility"
          >
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-sm-2">
                <img src={Medical} />
              </div>
              <div className="col-12 col-sm-10 fbox-txt">
                <h5>Medical Operations Optimization</h5>
                <p>
                  You can improve your clinical and operating systems at any
                  stage of your digital transformation. Built-in artificial
                  intelligence and machine learning will help you automate
                  varied tasks, including adaptive staffing, billing, and
                  healthcare with real-time data access.
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "47%" }} className="col-12 col-sm-6 mobility">
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-sm-2">
                <img src={Patient} />
              </div>
              <div className="col-12 col-sm-10 fbox-txt">
                <h5>Digital Patient Experience</h5>
                <p>
                  With our technologies, you can digitize the entire process of
                  delivering medicare - with a focus on data and technical
                  infrastructure for the industry. You'll get smart tools to
                  deliver premium quality health support and personalized
                  service.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0 m-0 mb-sm-3">
          <div
            style={{ width: "47%", marginRight: "auto" }}
            className="col-12 col-sm-6 mobility-2"
          >
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-sm-2">
                <img src={improved} />
              </div>
              <div className="col-12 col-sm-10 fbox-txt">
                <h5>Improved Medical Imaging And Research</h5>
                <p>
                  In your work, you will use intelligent image processing
                  techniques, including recognition, analysis, and enhancement
                  of images, for scientific and medical research and treatment
                  without invasive procedures.
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "47%" }} className="col-12 col-sm-6 mobility-2">
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-sm-2">
                <img src={webBrower} />
              </div>
              <div className="col-12 col-sm-10 fbox-txt">
                <h5>Feature-Rich Pharmaceutical Solutions</h5>
                <p>
                  You will have access to software tailored to the specifics of
                  the pharmaceutical industry with a variety of feature sets and
                  the ability to customize and adapt to your business demands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-sm-5 g-0  bg-01">
        <div className="col-12"></div>
      </div>

      <div className="container">
        <div className="row my-sm-5 py-sm-5 g-0">
          <div className="col-12 g-0">
            <h3 class="h3-md">Benefits of Partnering with DEHA</h3>
          </div>
        </div>

        <div className="animate">
          <div className="row g-0 m-0 p-0 ">
            <div
              style={{ width: "32%", marginRight: "auto" }}
              className="col-sm-4 px-sm-4 content-part"
            >
              <div className="icon-benefit mb-sm-4">
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
              style={{ width: "32%", marginRight: "auto" }}
              className="col-sm-4 px-sm-4 content-part"
            >
              <div className="icon-benefit mb-sm-4">
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
            <div
              style={{ width: "32%" }}
              className="col-sm-4 px-sm-4 content-part"
            >
              <div className="icon-benefit mb-sm-4">
                <UserOutlined />
              </div>
              <div className="text-benefit">
                <span>Great Talent Pool</span>
                <p className="my-sm-3">
                  Our team has 260+ experienced developers with in-depth skills
                  & knowledge in software building and powerful technologies
                  stacks.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="animate-2">
          <div className="row mx-0 px-0 g-0 mt-sm-4 mb-sm-5 pb-sm-5">
            <div
              style={{ width: "32%", marginRight: "auto" }}
              className="col-sm-4 px-sm-4 g-0 content-part"
            >
              <div className="icon-benefit mb-sm-4">
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
              style={{ width: "32%", marginRight: "auto" }}
              className="col-sm-4 px-sm-4 content-part"
            >
              <div className="icon-benefit mb-sm-4">
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
            <div
              style={{ width: "32%" }}
              className="col-sm-4 px-sm-4 content-part"
            >
              <div className="icon-benefit mb-sm-4">
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
      </div>

      <div className="bg-04 m-0 p-0 g-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 g-0 my-sm-5 cta-11-txt">
              <h2>Connect with us</h2>
              <p className="my-sm-3">We’re ready to talk opportunity</p>
              <div className="btn-deha mt-sm-4 py-sm-3">
                <a className="" href="">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-4 my-sm-5">
              <img className="img-defaultt" src={defaultt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Healthcare;
