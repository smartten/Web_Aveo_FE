import logo from "./2023-02-09_155135.png";
import "./FooterStyle.css";
import React from "react";
import { Button } from "antd";
import { Layout, Menu, List } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-enough">
        <h1 className="h1">
          Enough Talk, Let’s Build
          <br /> Something Together
        </h1>
        <button className="footer-button">Let’s Say Hi</button>
      </div>
      <hr width="84%" color="#388BE2" size="0.5px" align="center" />
      <div className="footer-headquarter">
        <div className="footer-headquarter-col1">
          <img className="footer-logo" src={logo} />
          <div style={{ padding: "10px 0 0 4px" }}>
            <b style={{ fontFamily: "revert-layer", fontSize: 18 }}>
              Headquarters
            </b>
            <p>
              5F, Intracom building, 82 Dich Vong Hau, Cau Giay, Ha Noi, Viet
              Nam
              <br />
              Email: info@deha-soft.com <br />
              Phone: (+84)-24-3200-4183
            </p>
          </div>
          <div style={{ padding: "10px 0 0 3px" }}>
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
        <div className="footer-headquarter-col1">
          <b
            style={{ fontFamily: "revert-layer", fontSize: 18, marginTop: 15 }}
          >
            Company
          </b>
          <a className="footer-link" href="">
            About us
          </a>
          <a className="footer-link" href="">
            Contact
          </a>
          <div></div>
        </div>
        <div className="footer-headquarter-col1">
          <b
            style={{ fontFamily: "revert-layer", fontSize: 18, marginTop: 15 }}
          >
            Services
          </b>
          <a className="footer-link" href="">
            Web design & development
          </a>
          <a className="footer-link" href="">
            Mobile development
          </a>
          <a className="footer-link" href="">
            Engineering & Maintenance
          </a>
          <a className="footer-link" href="">
            Testing services
          </a>
          <a className="footer-link" href="">
            Integration services
          </a>
          <a className="footer-link" href="">
            Ecommerce services
          </a>
        </div>
      </div>
      <hr width="84%" color="#388BE2" size="0.5px" align="center" />
      <p style={{ textAlign: "center", color: "white", opacity: 0.7 }}>
        Copyright © 2021 DEHA VIET NAM
      </p>
    </div>
  );
}

export default Footer;
