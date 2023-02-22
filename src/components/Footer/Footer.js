import logo from "./Asset 1.svg";
import "./FooterStyle.scss";
import React from "react";
import { Button } from "antd";
import { Layout, Menu, List } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;
function Footer() {
  return (
<<<<<<< HEAD
    <div className="container-fluid px-0 overflow-hidden footer-container">
      <div className="container">
        <div className="row mt-5 mb-sm-2">
          <div className="col-12 col-sm-6">
            <h1 className="h1">
              Enough Talk, Let's Build
              <br /> Something Together
            </h1>
          </div>
          <div className="col-12 col-sm-6 item">
            <button className="footer-button">Let's Say Hi</button>
          </div>
        </div>
      </div>

      <div className="row mt-2 mx-sm-5">
        <div className="col-12 px-sm-5">
          <hr />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="footer-headquarter-col1">
              <img className="footer-logo" src={logo} />
              <div className="px-sm-1 pt-sm-0 ">
                <br />
                <b style={{ fontFamily: "revert-layer", fontSize: 18 }}>
                  Headquarters
                </b>
                <p>
                  5F, Intracom building, 82 Dich Vong Hau, Cau Giay, Ha Noi,
                  Viet Nam
                  <br />
                  Email: info@deha-soft.com <br />
                  Phone: (+84)-24-3200-4183
                </p>
                <b style={{ fontFamily: "revert-layer", fontSize: 18 }}>
                  Thua Thien Hue Branch
                </b>
                <p>
                  28 Nguyen Tri Phuong, Phu Nhuan, Thua Thien Hue, Viet Nam
                  <br />
                  Phone: (+84)-24-3200-4183
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-2 mt-sm-4">
            <div className="footer-headquarter-col1">
              <b
                style={{
                  fontFamily: "revert-layer",
                  fontSize: 18,
                }}
              >
                Company
              </b>
              <br />
              <a className="footer-link" href="">
                About us
              </a>
              <br />
              <a className="footer-link" href="">
                Contact
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-4 mt-sm-4">
            <div className="footer-headquarter-col1 px-sm-5">
              <b style={{ fontFamily: "revert-layer", fontSize: 18 }}>
                Services
              </b>
              <br />
              <a className="footer-link" href="/web-design-and-development">
                Web design & development
              </a>
              <br />
              <a className="footer-link" href="/mobile-development">
                Mobile development
              </a>
              <br />
              <a className="footer-link" href="/engineering-and-maintenance">
                Engineering & Maintenance
              </a>
              <br />
              <a className="footer-link" href="/testing-service">
                Testing services
              </a>
              <br />
              <a className="footer-link" href="/integration-services">
                Integration services
              </a>
              <br />
              <a className="footer-link" href="/ecommerce-solutions">
                Ecommerce services
              </a>
            </div>
=======
    <div className="container-fluid px-4  overflow-hidden footer-container">
      <div className="row mx-1 pt-sm-5 m-sm-5">
        <div className="col-12 col-sm-4 mt-sm-4 px-sm-5">
          <div className="footer-headquarter-col1">
            <img className="footer-logo" src={logo} />
            <div className="px-sm-1 pt-sm-0 ">
              <br />
              <p>
                5F, Intracom building, 82 Dich Vong Hau, Cau Giay, Ha Noi, Viet
                Nam
                <br />
              </p>
              <p>
                28 Nguyen Tri Phuong, Phu Nhuan, Thua Thien Hue, Viet Nam
                <br />
              </p>
              <p>
                104-0045, 4F, CUBE TSUKIJI, 3-7-11 Tsukiji, Chuo-ward, Tokyo
                <br />
              </p>
              <p>Email: info@deha-soft.com</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-2 mt-sm-4">
          <div className="footer-headquarter-col1">
            <b
              style={{
                fontFamily: "revert-layer",
                fontSize: 20,
              }}
            >
              Company
            </b>
            <br />
            <br />
            <a className="footer-link" href="">
              Blogs
            </a>
            <br />
            <a className="footer-link" href="">
              Whitepapers
            </a>
            <br />
            <a className="footer-link" href="">
              About us
            </a>
            <br />
            <a className="footer-link" href="">
              Contact us
            </a>
            <br />
            <br />
            <b
              style={{
                fontFamily: "revert-layer",
                fontSize: 20,
              }}
            >
              Our Portfolios
            </b>
            <br />
            <br />
            <a className="footer-link" href="">
              DEHA Solutions
            </a>
            <br />
            <a className="footer-link" href="">
              Codegym
            </a>
            <br />
            <a className="footer-link" href="">
              NIX Education
            </a>
          </div>
        </div>
        <div className="col-12 col-sm-2 mt-sm-4">
          <div className="footer-headquarter-col1">
            <b style={{ fontFamily: "revert-layer", fontSize: 20 }}>Services</b>
            <br />
            <br />
            <a className="footer-link" href="/web-design-and-development">
              Offshore Development Services
            </a>
            <br />
            <a className="footer-link" href="/mobile-development">
              Web Application Development
            </a>
            <br />
            <a className="footer-link" href="/engineering-and-maintenance">
              Mobile Application Development
            </a>
            <br />
            <a className="footer-link" href="/testing-service">
              Testing services
            </a>
            <br />
            <a className="footer-link" href="/integration-services">
              Cloud Services
            </a>
          </div>
        </div>
        <div className="col-12 col-sm-2 mt-sm-4">
          <div className="footer-headquarter-col1">
            <b
              style={{
                fontFamily: "revert-layer",
                fontSize: 20,
              }}
            >
              Industries
            </b>
            <br />
            <br />
            <a className="footer-link" href="">
              Manufacturing
            </a>
            <br />
            <a className="footer-link" href="">
              Health Care
            </a>
            <br />
            <a className="footer-link" href="">
              Retail
            </a>{" "}
            <br />
            <a className="footer-link" href="">
              Ecommerce
            </a>{" "}
            <br />
            <a className="footer-link" href="">
              Financial
            </a>
>>>>>>> luong
          </div>
        </div>
        <div className="col-12 col-sm-2 mt-sm-4">
          <div className="footer-headquarter-col1">
            <b
              style={{
                fontFamily: "revert-layer",
                fontSize: 20,
              }}
            >
              Policies
            </b>
            <br />
            <br />
            <a className="footer-link" href="">
              Terms of use
            </a>
            <br />
            <a className="footer-link" href="">
              Privacy Policy
            </a>
            <br />
            <a className="footer-link" href="">
              Vulnerability
            </a>
            <br />
            <a className="footer-link" href="">
              Disclosure
            </a>
          </div>
        </div>
      </div>
      <hr class="divider"></hr>
      <div className="row my-sm-4 mx-sm-5 px-sm-5">
        <div className="col-12 g-0 p-0 m-0">
          <p style={{ color: "white", fontWeight: 600, fontSize: 18 }}>
            © 2023 DEHA. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
