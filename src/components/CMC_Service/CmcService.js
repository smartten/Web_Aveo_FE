import image1 from "./2023-02-13_090638.png";
import "./CmcStyle.scss";
import React from "react";
import { Button } from "antd";
import { Layout, Menu, List } from "antd";
import { Link } from "react-router-dom";
import {
  CaretDownFilled,
  CaretUpFilled,
  LoginOutlined,
} from "@ant-design/icons";

function CmcService() {
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
            <p className="cms-p m-0 p-0 mt-5 pt-5">CMS services</p>
            <p className="cms-p-unlock">
              Unlock the Potential of Your Business with standard CMS solution!
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div style={{ backgroundColor: "white" }} class="col-12 p-5">
          <div>
            <p className="title-start pt-3">
              Start your idea with our all-in-one CMS Solution!
            </p>
            <p className="section-service">
              We offer a whole gamut of CMS to facilitate you to build complex
              websites, manage content and business data and render pages as you
              desired in a structured manner without much help from the
              technical experts
            </p>
          </div>
        </div>
      </div>
      <div className="row pt-0 p-5">
        <div className="col-12 col-md-6 col-lg-3">
          <img className="image-row2" src={image1} />
          <p className="p-for-title text-align mt-3">
            CMS System Consultation & Strategy
          </p>
          <p className="p-for-content text-align">
            Our Content Management System Consultants help you define your
            enterprise content strategy, choose the apt CMS, build customized
            solutions wherever necessary to ensure that your website is
            professional, appealing, and profitable.
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <img className="image-row2" src={image1} />
          <p className="p-for-title text-align mt-3">
            CMS System Consultation & Strategy
          </p>
          <p className="p-for-content text-align">
            Our Content Management System Consultants help you define your
            enterprise content strategy, choose the apt CMS, build customized
            solutions wherever necessary to ensure that your website is
            professional, appealing, and profitable.
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <img className="image-row2" src={image1} />
          <p className="p-for-title text-align mt-3">
            CMS System Consultation & Strategy
          </p>
          <p className="p-for-content text-align">
            Our Content Management System Consultants help you define your
            enterprise content strategy, choose the apt CMS, build customized
            solutions wherever necessary to ensure that your website is
            professional, appealing, and profitable.
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <img className="image-row2" src={image1} />
          <p className="p-for-title text-align mt-3">
            CMS System Consultation & Strategy
          </p>
          <p className="p-for-content text-align">
            Our Content Management System Consultants help you define your
            enterprise content strategy, choose the apt CMS, build customized
            solutions wherever necessary to ensure that your website is
            professional, appealing, and profitable.
          </p>
        </div>
      </div>
      <div className="row pt-0 p-5">
        <div className="col-12 col-md-6 col-lg-3">
          <img className="image-row2" src={image1} />
          <p className="p-for-title text-align mt-3">
            CMS System Consultation & Strategy
          </p>
          <p className="p-for-content text-align">
            Our Content Management System Consultants help you define your
            enterprise content strategy, choose the apt CMS, build customized
            solutions wherever necessary to ensure that your website is
            professional, appealing, and profitable.
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <img className="image-row2" src={image1} />
          <p className="p-for-title text-align mt-3">
            CMS System Consultation & Strategy
          </p>
          <p className="p-for-content text-align">
            Our Content Management System Consultants help you define your
            enterprise content strategy, choose the apt CMS, build customized
            solutions wherever necessary to ensure that your website is
            professional, appealing, and profitable.
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <img className="image-row2" src={image1} />
          <p className="p-for-title text-align mt-3">
            CMS System Consultation & Strategy
          </p>
          <p className="p-for-content text-align">
            Our Content Management System Consultants help you define your
            enterprise content strategy, choose the apt CMS, build customized
            solutions wherever necessary to ensure that your website is
            professional, appealing, and profitable.
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <img className="image-row2" src={image1} />
          <p className="p-for-title text-align mt-3">
            CMS System Consultation & Strategy
          </p>
          <p className="p-for-content text-align">
            Our Content Management System Consultants help you define your
            enterprise content strategy, choose the apt CMS, build customized
            solutions wherever necessary to ensure that your website is
            professional, appealing, and profitable.
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
            <a
              href="/contact-us"
              style={{ margin: "auto" }}
              className="hmHr-but"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div style={{ backgroundColor: "white" }} class="col-12 p-5">
          <div>
            <p className="title-start pt-3">
              How we deliver the perfect website to you?
            </p>
            <p className="section-service">
              DEHA's approach offers a whole gamut of CMS to facilitate you to
              build complex websites, manage content and business data, and
              render pages as you desired.
            </p>
          </div>
        </div>
      </div>
      <div className="row pt-0 p-5">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="circle">01</div>
          <p className="p-for-title mt-3">Planning & Analysis</p>
          <ul className="ul-for-content pt-0 p-4">
            <li>Discuss idea</li>
            <li>Project analysis</li>
          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="circle">02</div>
          <p className="p-for-title mt-3">Design</p>
          <ul className="ul-for-content pt-0 p-4">
            <li>Layout/Design concepts</li>
            <li>Client approval</li>
          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="circle">03</div>
          <p className="p-for-title mt-3">Evaluation & Development</p>
          <ul className="ul-for-content pt-0 p-4">
            <li>Site improvements</li>
            <li>Concept Development/Coding</li>
          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="circle">04</div>
          <p className="p-for-title mt-3">Client Feedback & Deployment</p>
          <ul className="ul-for-content pt-0 p-4">
            <li>Implementation of the feedback</li>
            <li>Go live!</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12 imageArea p-5">
          <h2 className="p-2">
            At DEHA, we apply the mobile-first approach in all products. Your
            website will design from the mobile device before moving on to the
            tablet and desktop. This approach makes your website and content
            adapt to screens of any size, and you also save time and money.
          </h2>
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
            Security
          </p>
          <p style={{ fontSize: 20 }} className="section-service">
            There are numerous security threats like malware, ransomware, and
            other security vulnerabilities that are lurking around to break your
            site. We have helped our clients in successfully countering any
            malicious attacks and keep them at bay.
          </p>
        </div>
      </div>
      <div className="row pt-2 p-5 pb-0">
        <div className="col-12 col-sm-7 pt-0  p-4 pb-0">
          <p style={{ fontSize: 28 }} className="p-for-title">
            Scalability
          </p>
          <p style={{ fontSize: 20 }} className="section-service">
            We spend enough time understanding your requirements and seeing
            which CMS and features will accomplish what you need with effortless
            ease. We focus on some elements such as SEO, payment gateways, to
            name a few. We offer extensive scalability of your website and this
            is handled with great care to avoid frustrations down the road.
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
              <b>Do you provide end to end CMS development services?</b>
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
                  Yes. Our CMS development services are wholesome to meet all
                  your needs right from consultation and strategizing to support
                  & maintenance. We provide CMS UI/UX design, third-party
                  integrations, migrations, upgrades, SEO services, and
                  everything you need from end to end.
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
              <b>Which CMS platform is suitable for my business website?</b>
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
                  Choosing the right platform depends on the complexity of your
                  project. There is no one particular element based on which we
                  can narrow down to one CMS platform. A particular CMS may be
                  more suitable to a specific niche while the other may support
                  more robust systems.
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
              <b>What are the applications of content management systems?</b>
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
                  The applications of CMS are diverse- blogging, product
                  management, account management, payment options, email
                  marketing, social media engagement, promotional banners,
                  customer management, a metric ton more.
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
              <b>
                What after-sales services do you provide for my CMS website?
              </b>
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
                  We are one of the most reliable partners for our clients. We
                  offer dedicated support and maintenance services, debugging,
                  upgrades, migrations, updates, security handling, backup
                  options, additional plugin development, and more.
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
              <b>
                Can you integrate additional plugins after completion of
                development?
              </b>
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
                  Yes. We offer a comprehensive set of post-development services
                  which includes the addition of plugins to enrich your website
                  functionality. We can add the already available plugin or
                  develop it from scratch as per your needs.
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
              <b>I am looking or SEO-friendly CMS, can you help?</b>
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
                  Of course. We strictly follow search engine guidelines to
                  optimize the websites built by us. We also possess a shrewd
                  understanding of the SEO plugins that can amplify search
                  engine visibility. Check out our comprehensive SEO services to
                  know better.
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
              <b>How do you improve the visibility of my CMS website?</b>
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
                  We offer digital marketing services like SEO, PPC, email
                  marketing, social media marketing, email marketing, content
                  marketing, inbound marketing, and more to improve the branding
                  and visibility of your CMS-based website.
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
              <b>Do you offer white-label CMS development services?</b>
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
                  Yes. If you ever need any CMS development services, you can
                  always count on us. We offer Custom CMS development services,
                  build custom modules, extensions, and plugins. We can get them
                  in time for you and you can use them as your own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-3 mt-5 mb-5">
          <a href="/contact-us" style={{ margin: "auto" }} className="but-sche">
            Schedule time to talk
            <LoginOutlined
              style={{ position: "absolute", margin: 6, fontSize: 20 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CmcService;
