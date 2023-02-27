import logo from "./Asset 1.svg";
import "./FooterStyle.scss";
import React from "react";
import { Button } from "antd";
import { Layout, Menu, List } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;
function Footer() {
  return (
    <div className="container-fluid px-4  overflow-hidden footer-container">
      <div className="container">
        <div className="row pt-4">
          <div className="col-12 col-sm-4 mt-sm-4">
            <div className="footer-headquarter-col1">
              <img className="footer-logo" src={logo} />
              <div className=" pt-sm-0 ">
                <br />
                <p>
                  5F, Intracom building, 82 Dich Vong Hau, Cau Giay, Ha Noi,
                  Viet Nam
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
              <b style={{ fontFamily: "revert-layer", fontSize: 20 }}>
                Services
              </b>
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
        <div className="row my-sm-4">
          <div className="col-12 g-0 p-0 m-0">
            <p style={{ color: "white", fontWeight: 600, fontSize: 18 }}>
              © 2023 DEHA. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
