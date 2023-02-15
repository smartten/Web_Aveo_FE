import image1 from "./2023-02-13_090638.png";
import "./TestStyle.scss";
import React from "react";
import { Button } from "antd";
import { Layout, Menu, List } from "antd";
import { Link } from "react-router-dom";
import {
  CaretDownFilled,
  CaretUpFilled,
  LoginOutlined,
} from "@ant-design/icons";

function Testing() {
  // function hamDropdown() {
  //   var t = document.querySelector(".noidung_dropdown");
  //   console.log(t.div);
  //   document.querySelector(".noidung_dropdown").classList.toggle("hienThi");
  // }
  return (
    <div className="">
      <div class="row cms p-0 m-0 pt-5">
        <div class="col-12 m-0 p-5 mt-5 pt-5">
          <div>
            <p className="cms-p m-0 p-0 mt-5 pt-5">Testing Services</p>
            <p className="cms-p-unlock">
              Improve test coverage and decrease costs by assessing processes,
              tools, and skills.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div style={{ backgroundColor: "white" }} class="col-12 p-5">
          <div>
            <p className="title-start pt-3">Our Software Testing Services</p>
          </div>
        </div>
      </div>
      <div className="row pt-0 p-5">
        <div className="col-12 col-md-6 col-lg-3">
          <img className="image-row2" src={image1} />
          <p className="p-for-title text-align mt-3">
            Software testing services
          </p>
          <p className="p-for-content text-align">
            Software testing is the process of evaluating and verifying that a
            software product or application does what it is supposed to do. The
            benefits of testing include preventing bugs, reducing development
            costs, and improving performance.
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <img className="image-row2" src={image1} />
          <p className="p-for-title text-align mt-3">Mobile testing services</p>
          <p className="p-for-content text-align">
            Different mobile phones run on different operating systems and use
            varied sizes. So, it’s important to do the mobile testing processes
            in software development. Mobile testing services cover all
            functionality, usability, and consistency of the application.
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <img className="image-row2" src={image1} />
          <p className="p-for-title text-align mt-3">
            Penetration test services
          </p>
          <p className="p-for-content text-align">
            Penetration test services will figure out all loopholes and
            weaknesses of the software system which might result in a loss of
            information, revenue, repute at the hands of the employees or
            outsiders of the organization.
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <img className="image-row2" src={image1} />
          <p className="p-for-title text-align mt-3">
            Performance testing services
          </p>
          <p className="p-for-content text-align">
            Performance testing services validate numerous factors and checks
            applications to ensure and maintain their reliability and
            scalability. It measures the quality attributes of the system, such
            as scalability, reliability, and resource usage.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 hmHr p-5">
          <div className="col-6 offset-3 ">
            <h2>Let’s Make it Happen Together!</h2>
            <p>
              There are still not enough friends to realize our goal of “a world
              where everyone can be absorbed in value creation.” If you like,
              why don’t you take a look at DEHA VIET NAM?
            </p>
            <button style={{ margin: "auto" }} className="hmHr-but">
              Contact us
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div style={{ backgroundColor: "white" }} class="col-12 p-5">
          <div className="section-title-1">
            <p className="title">The benefit of</p>
            <p className="desc">PARTNERING WITH DEHA</p>
          </div>
        </div>
      </div>
      <div className="row m-0 pt-0 p-5 pb-0">
        <div className="col-12 col-sm-5 pt-0 p-3">
          <img className="image-row3" src={image1} />
        </div>
        <div className="col-12 col-sm-7 pt-0 p-3 pb-0">
          <p style={{ fontSize: 28 }} className="p-for-title">
            Automation mindset
          </p>
          <p style={{ fontSize: 20 }} className="section-service">
            We apply an automation mindset to everything we build. This approach
            allows our testers to reduce product lead times, and increase
            software delivery speed.
          </p>
        </div>
      </div>
      <div className="row pt-2 p-5 pb-0">
        <div className="col-12 col-sm-7 pt-0  p-4 pb-0">
          <p style={{ fontSize: 28 }} className="p-for-title">
            End-to-End Testing
          </p>
          <p style={{ fontSize: 20 }} className="section-service">
            We provide full-cycle automation testing combine with manual testing
            to guarantee the test cover throughout the entire software
            development process.
          </p>
        </div>
        <div className="col-12 col-sm-5 pt-0 p-3">
          <img className="image-row3" src={image1} />
        </div>
      </div>
      <div className="row m-0 pt-0 p-5 pb-0">
        <div className="col-12 col-sm-5 pt-0 p-3">
          <img className="image-row3" src={image1} />
        </div>
        <div className="col-12 col-sm-7 pt-0 p-3 pb-0">
          <p style={{ fontSize: 28 }} className="p-for-title">
            Agile delivery
          </p>
          <p style={{ fontSize: 20 }} className="section-service">
            We help our clients seamlessly move towards continuous delivery by
            adopting DevOps practices, advanced functional and non-functional
            testing, and detailed business assurance workflows.
          </p>
        </div>
      </div>
      <div className="row pt-2 p-5 pb-0">
        <div className="col-12 col-sm-7 pt-0  p-4 pb-0">
          <p style={{ fontSize: 28 }} className="p-for-title">
            Expertise team
          </p>
          <p style={{ fontSize: 20 }} className="section-service">
            We leverage our expertise to ensure to deliver the highest-quality
            version of your product. Our engineers pull from their domain
            experience, modeling, and intuition to pursue workflows that have
            the potential for risks.
          </p>
        </div>
        <div className="col-12 col-sm-5 pt-0 p-3">
          <img className="image-row3" src={image1} />
        </div>
      </div>
      <div className="row mt-0 pt-0">
        <div class="col-12 mt-0 pt-0">
          <div className="section-title-2">
            <p className="title">Our Favourite Stacks</p>
            <p className="desc grad">Technologies Expertise</p>
          </div>
        </div>
      </div>
      <div className="row mt-5 pt-5">
        <div class="col-12 ">
          <div className="section-title-2 pt-5">
            <p className="desc grad">Frequently Asked Questions</p>
          </div>
        </div>
      </div>
      <div className="row g-0 mt-5 m-5 mb-0">
        <div className="col-12 col-sm-6 m-0 pt-0 p-5 pb-0">
          <div
            onClick={() => {
              document
                .querySelector(".noidung_dropdown")
                .classList.toggle("hienThi");
            }}
            className="row pt-0 pb-0 mt-0 mb-0 dropdownCms"
          >
            <div class="col-11 col-sm-11 p-0 m-0 mb-2 ">
              <b>What types of software testing services do you offer?</b>
            </div>
            <div className="col-1 col-sm-1 m-0 pt-2 p-0">
              <CaretDownFilled
                style={{
                  color: "gray",
                  fontSize: 20,
                  float: "right",
                }}
              />
            </div>
          </div>

          <div className="row mt-3 mb-0">
            <div className="col-12 p-0 m-0">
              <div class="noidung_dropdown p-3 pb-0 mb-3">
                <p>
                  We offer a broad array of software testing services that
                  include performance testing, functional testing, regression
                  testing, integration testing, security testing, compatibility
                  testing, unit testing, usability testing, and automated
                  testing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 m-0 pt-0 p-5 pb-0">
          <div
            onClick={() => {
              document
                .querySelector(".noidung_dropdown1")
                .classList.toggle("hienThi");
            }}
            className="row  dropdownCms"
          >
            <div class="col-11 col-sm-11 p-0 m-0 mb-2 ">
              <b>What is automation testing?</b>
            </div>
            <div className="col-1 col-sm-1 m-0 pt-2 p-0">
              <CaretDownFilled
                style={{
                  color: "gray",
                  fontSize: 20,
                  float: "right",
                }}
              />
            </div>
          </div>

          <div className="row mt-3 mb-0">
            <div className="col-12 p-0 m-0">
              <div class="noidung_dropdown1 p-3 pb-0 mb-3">
                <p>
                  Automation testing is the process of running software tests
                  automatically, handling test data and evaluating results to
                  improve product quality. It is a way of measuring the quality
                  assurance of a software through automated tests to save time,
                  money and effort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-0 mt-0 m-5 mb-0">
        <div className="col-12 col-sm-6 m-0 pt-0 p-5 pb-0">
          <div
            onClick={() => {
              document
                .querySelector(".noidung_dropdown2")
                .classList.toggle("hienThi");
            }}
            className="row pt-0 pb-0 mt-0 mb-0 dropdownCms"
          >
            <div class="col-11 col-sm-11 p-0 m-0 mb-2 ">
              <b>What is automation testing?</b>
            </div>
            <div className="col-1 col-sm-1 m-0 pt-2 p-0">
              <CaretDownFilled
                style={{
                  color: "gray",
                  fontSize: 20,
                  float: "right",
                }}
              />
            </div>
          </div>

          <div className="row mt-3 mb-0">
            <div className="col-12 p-0 m-0">
              <div class="noidung_dropdown2 p-3 pb-0 mb-3">
                <p>
                  Manual testing is the practice of testing a software manually
                  to detect bugs and errors. During this process, the tester
                  executes test cases to evaluate each component of a website or
                  a mobile application (without using any tool or script), and
                  reports to the developers if they find any discrepancies or
                  inconsistencies in the app.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 m-0 pt-0 p-5 pb-0">
          <div
            onClick={() => {
              document
                .querySelector(".noidung_dropdown3")
                .classList.toggle("hienThi");
            }}
            className="row  dropdownCms"
          >
            <div class="col-11 col-sm-11 p-0 m-0 mb-2 ">
              <b>Can I hire Selenium developers and manage them directly?</b>
            </div>
            <div className="col-1 col-sm-1 m-0 pt-2 p-0">
              <CaretDownFilled
                style={{
                  color: "gray",
                  fontSize: 20,
                  float: "right",
                }}
              />
            </div>
          </div>

          <div className="row mt-3 mb-0">
            <div className="col-12 p-0 m-0">
              <div class="noidung_dropdown3 p-3 pb-0 mb-3">
                <p>
                  Yes, you can hire highly proficient selenium developers from
                  us. If you want, you can manage your developers directly,
                  assign tasks, and review the output. Alternatively, we are
                  happy to offer a free-of-cost Project Manager who can act as
                  your single point of contact while managing multiple
                  developers on your behalf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-0 mt-0 m-5 mb-0">
        <div className="col-12 col-sm-6 m-0 pt-0 p-5 pb-0">
          <div
            onClick={() => {
              document
                .querySelector(".noidung_dropdown4")
                .classList.toggle("hienThi");
            }}
            className="row pt-0 pb-0 mt-0 mb-0 dropdownCms"
          >
            <div class="col-11 col-sm-11 p-0 m-0 mb-2 ">
              <b>What is 'Software Testing'?</b>
            </div>
            <div className="col-1 col-sm-1 m-0 pt-2 p-0">
              <CaretDownFilled
                style={{
                  color: "gray",
                  fontSize: 20,
                  float: "right",
                }}
              />
            </div>
          </div>

          <div className="row mt-3 mb-0">
            <div className="col-12 p-0 m-0">
              <div class="noidung_dropdown4 p-3 pb-0 mb-3">
                <p>
                  The operation of a system or application under controlled
                  conditions refers to 'software testing'. Software testing is
                  carried out, in order to evaluate the results of the
                  operation. In the process of software testing, the controlled
                  conditions would include both normal and abnormal conditions.
                  While testing applications, testers would intentionally try to
                  make things go wrong in order to determine if application
                  works well and is error-free. Software testing teams usually
                  consist of testers, developers and project managers. At times
                  software testing would also include a part of QA testing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 m-0 pt-0 p-5 pb-0">
          <div
            onClick={() => {
              document
                .querySelector(".noidung_dropdown5")
                .classList.toggle("hienThi");
            }}
            className="row  dropdownCms"
          >
            <div class="col-11 col-sm-11 p-0 m-0 mb-2 ">
              <b>How can World Wide Web sites be tested?</b>
            </div>
            <div className="col-1 col-sm-1 m-0 pt-2 p-0">
              <CaretDownFilled
                style={{
                  color: "gray",
                  fontSize: 20,
                  float: "right",
                }}
              />
            </div>
          </div>

          <div className="row mt-3 mb-0">
            <div className="col-12 p-0 m-0">
              <div class="noidung_dropdown5 p-3 pb-0 mb-0">
                <p>
                  Testing websites can become a long-time effort because
                  websites are client/server applications with browser clients
                  and web servers. While testing web sites, firewalls, internet
                  connections, TCP/IP communications, applications that run in
                  web pages and applications that run on the server side.
                  Testing websites is also a major effort because there are a
                  wide variety of browsers and servers to be considered,
                  multiple protocols and standards, different connection speeds
                  and varied technologies. The expected load on the server,
                  target audience, performance expected on the client side,
                  security, HTML specifications, standards of page appearance,
                  validation of links, tracking of programs and other features
                  are kept in mind while testing websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-0 mt-0 m-5 mb-0">
        <div className="col-12 col-sm-6 m-0 pt-0 p-5 pb-0">
          <div
            onClick={() => {
              document
                .querySelector(".noidung_dropdown6")
                .classList.toggle("hienThi");
            }}
            className="row pt-0 pb-0 mt-0 mb-0 dropdownCms"
          >
            <div class="col-11 col-sm-11 p-0 m-0 mb-2 ">
              <b>What's a 'test plan'?</b>
            </div>
            <div className="col-1 col-sm-1 m-0 pt-2 p-0">
              <CaretDownFilled
                style={{
                  color: "gray",
                  fontSize: 20,
                  float: "right",
                }}
              />
            </div>
          </div>

          <div className="row mt-3 mb-0">
            <div className="col-12 p-0 m-0">
              <div class="noidung_dropdown6 p-3 pb-0 mb-3">
                <p>
                  A test plan is a document that contains details about the
                  objectives, approach, scope and focus of a software testing
                  project. Test plans are usually created in order to enable
                  people outside the group of software testers to understand
                  more about the project. These test plans should contain enough
                  information to make it useful but not too much information to
                  make it difficult for people outside the project to
                  understand. Test plans usually include details about the
                  target audience, the objectives of testing, overviews of
                  software products, legal requirements, traceability
                  requirements, testing priorities, database set up requirements
                  and project risk analysis amongst others.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 m-0 pt-0 p-5 pb-0">
          <div
            onClick={() => {
              document
                .querySelector(".noidung_dropdown7")
                .classList.toggle("hienThi");
            }}
            className="row  dropdownCms"
          >
            <div class="col-11 col-sm-11 p-0 m-0 mb-2 ">
              <b>What's a 'test case'?</b>
            </div>
            <div className="col-1 col-sm-1 m-0 pt-2 p-0">
              <CaretDownFilled
                style={{
                  color: "gray",
                  fontSize: 20,
                  float: "right",
                }}
              />
            </div>
          </div>

          <div className="row mt-3 mb-0">
            <div className="col-12 p-0 m-0">
              <div class="noidung_dropdown7 p-3 pb-0 mb-3">
                <p>
                  A test case is a document that contains details about an
                  action and the expected response, to verify if a particular
                  feature in an application is working correctly. Test cases are
                  developed early in the development cycle so that software
                  testers can find problems in the design or requirements of a
                  software application. Test plans usually contains details such
                  as, test case name, test case identifier, test conditions,
                  objectives, steps, input data requirements and the desired
                  results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-3 mt-5 mb-5">
          <button style={{ margin: "auto" }} className="but-sche">
            Schedule time to talk
            <LoginOutlined
              style={{ position: "absolute", margin: 6, fontSize: 20 }}
            />
          </button>
        </div>
      </div>

      <div className="row client p-5">
        <div className="col-12 col-md-5 section-title-3 pb-5">
          <p className="title">Our Clients</p>
          <p className="desc grad">Trusted by over 300+ clients</p>
          <p className="section-service">
            We bring solutions to make life easier for our customers
          </p>
        </div>
        <div className="col-12 col-md-7"></div>
      </div>
      <section className="our-clients">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="title">
                <p className="text-v1">Our Clients</p>
                <p className="text-v2">Trusted by over 300+ clients</p>
                <p className="text-v3">
                  We bring solutions to make life easier for our customers.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-md-4 col-6">
                  <img
                    src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-4 col-6">
                  <img
                    src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-4 col-6">
                  <img
                    src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-4 col-6">
                  <img
                    src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-4 col-6">
                  <img
                    src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-4 col-6">
                  <img
                    src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-4 col-6">
                  <img
                    src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-4 col-6">
                  <img
                    src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-4 col-6">
                  <img
                    src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-4 col-6">
                  <img
                    src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                    style={{ width: "100%" }}
                  />
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
