import image1 from "./2023-02-13_090638.png";
import "./EcommerceStyle.scss";
import React from "react";
import { Button } from "antd";
import { Layout, Menu, List } from "antd";
import { Link } from "react-router-dom";
import {
  CaretDownFilled,
  CaretUpFilled,
  LoginOutlined,
} from "@ant-design/icons";

function Ecommerce() {
  // function hamDropdown() {
  //   var t = document.querySelector(".noidung_dropdown");
  //   console.log(t.div);
  //   document.querySelector(".noidung_dropdown").classList.toggle("hienThi");
  // }
  return (
    <div className="container-fluid px-0 overflow-hidden ">
      <div class="row cms pt-5 px-2 pt-sm-5 m-sm-0">
        <div class="col-12 mt-5 p-sm-5 mt-sm-5 pt-sm-5">
          <div>
            <p className="cms-p mt-5 pt-5 pb-0 mt-sm-5 pt-sm-5">
              Ecommerce Solutions
            </p>
            <p className="cms-p-unlock">
              Fastest growing with your trusted e-commerce partner - from ideas
              to market success
            </p>
          </div>
        </div>
      </div>

      <div className="row  pt-0 m-3 mb-5">
        <div class="col-12 mt-0 pt-0">
          <div className="section-title-2">
            <p className="title font-weight-500 opacity-75">
              Frequently Received Problems
            </p>
            <p className="desc grad">
              If you want to build an online store, but you aren’t sure where to
              start, here are some common problems people have & what we support
              us
            </p>
          </div>
        </div>
      </div>

      <div className="row mx-3 mt-sm-0  m-sm-5 p-sm-5 py-sm-0">
        <div className="col-12 col-sm-6 p-0 pt-sm-0 p-sm-3"></div>
        <div className="col-12 col-sm-6 p-0 pt-sm-0 p-sm-3 pb-sm-0">
          <p style={{ fontSize: 28 }} className="p-for-title">
            I have a business and want to launch an e-commerce site
          </p>
          <p
            style={{ fontSize: 19, opacity: 0.95 }}
            className="section-service"
          >
            With an end-to-end e-commerce approach, we give you everything you
            need to start generating revenue. Our technology is always changing
            to meet every business need.
          </p>
          <ul className="section-service section-service-ul">
            <li>Define what you need</li>
            <li>Technology consulting.</li>
            <li>Ecommerce system design and implementation.</li>
            <li>SEO and content strategy.</li>
          </ul>
        </div>
      </div>
      <div className="row mx-3 mt-4 mt-sm-0  m-sm-5 p-sm-5 py-sm-0">
        <div className="col-12 col-sm-6 p-0 pt-sm-0 p-sm-3 pb-sm-0">
          <p style={{ fontSize: 28 }} className="p-for-title">
            I want to start my business with an e-commerce approach
          </p>
          <p
            style={{ fontSize: 19, opacity: 0.95 }}
            className="section-service"
          >
            Operating a business entirely by e-commerce is not only new but also
            gradually becoming a standard in business. E-commerce will help
            reduce costs to find, serve and care for customers, and help
            businesses grow phenomenally.
          </p>
          <ul className="section-service section-service-ul">
            <li>Define what you need</li>
            <li>Technology consulting.</li>
            <li>Ecommerce system design and implementation.</li>
            <li>SEO and content strategy.</li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 p-0 pt-sm-0 p-sm-3"></div>
      </div>

      <div className="row mx-3 mt-4 mt-sm-0  m-sm-5 p-sm-5 py-sm-0">
        <div className="col-12 col-sm-6 p-0 pt-sm-0 p-sm-3"></div>
        <div className="col-12 col-sm-6 p-0 pt-sm-0 p-sm-3 pb-sm-0">
          <p style={{ fontSize: 28 }} className="p-for-title">
            I want to optimize my e-commerce system
          </p>
          <p
            style={{ fontSize: 19, opacity: 0.95 }}
            className="section-service"
          >
            Your system is gradually becoming unresponsive, bad customer
            experience, constantly dropped in search engine rankings, severely
            reduced customer base. It’s time to optimize your e-commerce system.
          </p>
          <ul className="section-service section-service-ul">
            <li>Investigate business and system problems.</li>
            <li>Optimize system performance.</li>
            <li>Optimize user experience.</li>
            <li>SEO optimization.</li>
          </ul>
        </div>
      </div>
      <div className="row mx-3 mt-4 mt-sm-0  m-sm-5 p-sm-5 py-sm-0">
        <div className="col-12 col-sm-6 p-0 pt-sm-0 p-sm-3 pb-sm-0">
          <p style={{ fontSize: 28 }} className="p-for-title">
            I want to migrate my e-commerce system to updated software and
            technology
          </p>
          <p
            style={{ fontSize: 19, opacity: 0.95 }}
            className="section-service"
          >
            Your current platform could not meet your business needs, it’s time
            to change. By optimizing an existing system or migrating to a new
            system, we help your business keep pace with changes in markets and
            customers
          </p>
          <ul className="section-service section-service-ul">
            <li>Investigate business and system problems.</li>
            <li>Optimize system performance.</li>
            <li>Optimize user experience.</li>
            <li>SEO optimization.</li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 p-0 pt-sm-0 p-sm-3"></div>
      </div>

      <div className="row mx-3 mt-4 mt-sm-0  m-sm-5 p-sm-5 py-sm-0">
        <div className="col-12 col-sm-6 p-0 pt-sm-0 p-sm-3"></div>
        <div className="col-12 col-sm-6 p-0 pt-sm-0 p-sm-3 pb-sm-0">
          <p style={{ fontSize: 28 }} className="p-for-title">
            I want to apply omnichannel retail to my business
          </p>
          <p
            style={{ fontSize: 19, opacity: 0.95 }}
            className="section-service"
          >
            Improve customer experience, explore new markets, increase revenue,
            and manage more easily with omnichannel.
          </p>
          <ul className="section-service section-service-ul">
            <li>Research on user experience strategy.</li>
            <li>Launch eCommerce site.</li>
            <li>System automation &amp; integration.</li>
            <li>Continuous management, measurement, and optimization.</li>
          </ul>
        </div>
      </div>

      <div className="row mt-5 mx-2 mb-0 m-sm-5 mb-sm-0">
        <div style={{ backgroundColor: "white" }} class="col-12 p-sm-5">
          <div>
            <p className="title-start pt-sm-3">Our Ecommerce Services</p>
            <p className="section-service">
              You’ll get to select from an entire range of ecommerce packages,
              software, and shopping cart systems that provide you with the best
              value for your investment. Not only will our ecommerce experts
              design and develop a complete moneymaking website for you, but
              we’ll also provide you with the support and maintenance you need
              to compete in the online marketplace.
            </p>
          </div>
        </div>
      </div>

      <div className="row my-3 mx-2 pt-sm-0 p-sm-5 my-sm-0 m-sm-4">
        <div className="col-12 col-md-6 col-lg-3">
          <img className="image-row2" src={image1} />
          <p className="p-for-title text-align mt-3 mt-sm-3">Consultancy</p>
          <p className="p-for-content text-align">
            With many years of experience in developing e-commerce solutions, we
            have built a team of highly qualified experts who are always ready
            to accompany and advise you on everything you need to get started
            with e-commerce
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <img className="image-row2" src={image1} />
          <p className="p-for-title text-align mt-3 mt-sm-3">Technology</p>
          <p className="p-for-content text-align">
            With more than 200 experienced engineers, we always improve
            technology to bring you the latest achievements. We can handle
            development, optimization, integration, migration... Always putting
            quality first, delivering the perfect product is what makes us happy
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <img className="image-row2" src={image1} />
          <p className="p-for-title text-align mt-3 mt-sm-3">Creative</p>
          <p className="p-for-content text-align">
            User experience is particularly important, we keep your e-commerce
            system up to date with the latest design trends, are user-friendly,
            balance design and performance, help attract more customer
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <img className="image-row2" src={image1} />
          <p className="p-for-title text-align mt-3 mt-sm-3">
            Managed services
          </p>
          <p className="p-for-content text-align">
            Running an e-commerce system is tough, we help you operate and
            maintain it so you can focus on growing your business
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 imageArea p-5">
          <h2 className="p-5 pt-2 pb-2">
            Revenue growth, user satisfaction with our leading mobile app
            developers. We carry out every step from consulting, design,
            development, and app store deployment.
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
      <div className="row m-sm-5 p-sm-3 py-sm-0 my-sm-2">
        <div className="col-12 col-sm-6 p-sm-5 py-sm-0 ">
          <img className="image-row3" src={image1} />
        </div>
        <div className="col-12 px-4 py-4 col-sm-6 p-sm-5 py-sm-0">
          <p style={{ fontSize: 28 }} className="p-for-title">
            Quality first approach
          </p>
          <p style={{ fontSize: 20 }} className="section-service">
            Quality is always our number one priority. We understand that every
            success always comes from a superior product. We always try to bring
            the perfect product to our customers and make everyone happy.
            Quality is always guaranteed with ISO 9001, 27001, CCMI lv3, ISTQB
          </p>
        </div>
      </div>

      <div className="row m-sm-5 p-sm-3 py-sm-0 mt-sm-4">
        <div className="col-12 px-4 py-4 col-sm-6 p-sm-5 py-sm-0">
          <p style={{ fontSize: 28 }} className="p-for-title">
            Technical expertise
          </p>
          <p style={{ fontSize: 20 }} className="section-service">
            Technology is the core and most important part of running
            e-commerce. Understanding that, we are constantly improving the
            latest technologies, giving customers the best performance and
            experience at the lowest cost. We have experience in building
            high-performance e-commerce systems, mobile e-commerce applications,
            and multi-channel integration.
          </p>
        </div>
        <div className="col-12 col-sm-6 p-sm-5 py-sm-0 ">
          <img className="image-row3" src={image1} />
        </div>
      </div>

      <div className="row mt-5 m-sm-5 p-sm-3 py-sm-0 mt-sm-4">
        <div className="col-12 col-sm-6 p-sm-5 py-sm-0 ">
          <img className="image-row3" src={image1} />
        </div>
        <div className="col-12 px-4 py-4 col-sm-6 p-sm-5 py-sm-0">
          <p style={{ fontSize: 28 }} className="p-for-title">
            Up to date technology
          </p>
          <p style={{ fontSize: 20 }} className="section-service">
            We drink technology for breakfast and software architecture for
            lunch. Constantly updating modern technology is our passion. You
            will always experience the latest technological achievements in the
            field of e-commerce when working with us. To us, technology can only
            be better and better
          </p>
        </div>
      </div>

      <div className="row mt-0 pt-0">
        <div class="col-12 mt-0 pt-0">
          <div className="section-title-2">
            <p style={{ fontWeight: 300 }} className="title">
              Our Favourite Stacks
            </p>
            <p className="desc grad">Technologies Expertise</p>
          </div>
        </div>
      </div>
      <div className="row px-3 my-3 mt-sm-5 pt-sm-5">
        <div class="col-12 ">
          <div className="section-title-2 pt-5">
            <p className="desc grad">Frequently Asked Questions</p>
          </div>
        </div>
      </div>

      <div className="row g-sm-0 my-sm-0 m-sm-5">
        <div className="col-12 col-sm-6 m-0 py-0 p-5">
          <div
            onClick={() => {
              document
                .querySelector(".noidung_dropdown")
                .classList.toggle("hienThi");
            }}
            className="row pt-0 pb-0 mt-0 mb-0 dropdownCms"
          >
            <div class="col-11 col-sm-11 p-0 m-0 mb-2 ">
              <b>Magento E-commerce</b>
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
                  If you have a Magento eCommerce website, then you will need a
                  support service to keep it up-to-date and running. We provide
                  support and maintenance services for your Magento store. If
                  you have any queries or issues, you can get in touch with any
                  of our Magento experts.
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
              <b>Can I connect other systems to my Magento eCommerce site?</b>
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
                  Yes, you can link as many systems as you want to your Magento
                  ecommerce website. If they go through the API, you can add a
                  number of programs like CRM, ERP, marketplace plugins, search
                  solutions, and so on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-sm-0 my-sm-0 m-sm-5">
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
              <b>What is the benefit of opting for an Open-Source Platform?</b>
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
                  Open-source platforms provide better creativity,
                  customization, efficiency, support, and agility at low costs.
                  They help users share and navigate the app, add rich features
                  to match business requirements and make effective and faster
                  improvements.
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
              <b>Why I choose DEHA for Ecommerce website development?</b>
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
                  At DEHA, our Ecommerce website developers work closely with
                  firms to transform your business dreams into a reality. Our
                  developers note your requirements from the first interaction
                  till the last to develop a customized Ecommerce solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-sm-0 my-sm-0 m-sm-5">
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
                What are the advantages of using Magento development services?
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
                  Magento is the most popular ecommerce development platform. It
                  provides features such as an interactive dashboard, fast
                  checkout, and multiple payment options. DEHA has expertise and
                  knowledge to help you built a Magento store that will deliver
                  results.
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
              <b>
                Will Magento be useful for selling products to international
                customers?
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
              <div class="noidung_dropdown5 p-3 pb-0 mb-0">
                <p>
                  Yes! Magento provides multi-currency and multi-lingual support
                  for ecommerce sellers. It allows currency conversion, tax and
                  discount calculations in different currencies so you can cater
                  to a wider audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-sm-0 my-sm-0 m-sm-5">
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
              <b>Does your team have certified Magento ecommerce developers?</b>
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
                  DEHA is a hub of talented and experienced developers. Hence,
                  we house a considerable number of certified Magento eCommerce
                  developers that can offer a remarkable transforming journey to
                  organizations.
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
              <b>What is Magento ecommerce development?</b>
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
                  Magento is an open-source eCommerce platform that empowers
                  entrepreneurs to run businesses online. Magento eCommerce
                  development has helped small, mid-sized, and large companies
                  to switch to Estores and generate high-quality output.
                  Certified Magento developers are the best pick to design a
                  functional storefront.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-sm-3 my-5 my-sm-5">
          <button style={{ margin: "auto" }} className="but-sche">
            Schedule time to talk
            <LoginOutlined
              style={{ position: "absolute", margin: 6, fontSize: 20 }}
            />
          </button>
        </div>
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

export default Ecommerce;
