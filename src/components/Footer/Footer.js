import logo from "./2023-02-09_155135.png";
import "./FooterStyle.scss";
import React from "react";
import { Button } from "antd";
import { Layout, Menu, List } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;
function Footer() {
  return (
    <div className="container-fluid px-0 overflow-hidden footer-container">
      <div className="row mt-5 mx-2 mx-sm-5 mb-sm-2 px-sm-5">
        <div className="col-12 col-sm-6">
          <h1 className="h1">
            Enough Talk, Let’s Build
            <br /> Something Together
          </h1>
        </div>
        <div className="col-12 col-sm-6 item">
          <button className="footer-button">Let’s Say Hi</button>
        </div>
      </div>

      <div className="row mt-2 mx-sm-5">
        <div className="col-12 px-sm-5">
          <hr />
        </div>
      </div>

      <div className="row mx-1 mx-sm-5">
        <div className="col-12 col-sm-6 px-sm-5">
          <div className="footer-headquarter-col1">
            <img className="footer-logo" src={logo} />
            <div className="px-sm-1 pt-sm-0 ">
              <br />
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
            <b style={{ fontFamily: "revert-layer", fontSize: 18 }}>Services</b>
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
        </div>
      </div>
      <div className="row mt-2 mx-sm-5">
        <div className="col-12 px-sm-5">
          <hr />
        </div>
      </div>
      <div className="row my-sm-3">
        <div className="col-12">
          <p style={{ textAlign: "center", color: "white", opacity: 0.7 }}>
            Copyright © 2021 DEHA VIET NAM
          </p>
        </div>
      </div>
    </div>

    // <div className="footer-container">
    //   <div className="footer-enough">
    //     <h1 className="h1">
    //       Enough Talk, Let’s Build
    //       <br /> Something Together
    //     </h1>
    //     <button className="footer-button">Let’s Say Hi</button>
    //   </div>
    //   {/* <hr width="84%" color="#388BE2" size="5px" align="center" /> */}
    //   <hr className="hr-1"></hr>
    //   <div className="footer-headquarter">
    //     <div className="footer-headquarter-col1">
    //       <img className="footer-logo" src={logo} />
    //       <div style={{ padding: "10px 0 0 4px" }}>
    //         <b style={{ fontFamily: "revert-layer", fontSize: 18 }}>
    //           Headquarters
    //         </b>
    //         <p>
    //           5F, Intracom building, 82 Dich Vong Hau, Cau Giay, Ha Noi, Viet
    //           Nam
    //           <br />
    //           Email: info@deha-soft.com <br />
    //           Phone: (+84)-24-3200-4183
    //         </p>
    //       </div>
    //       <div style={{ padding: "10px 0 0 3px" }}>
    //         <b style={{ fontFamily: "revert-layer", fontSize: 18 }}>
    //           Thua Thien Hue Branch
    //         </b>
    //         <p>
    //           28 Nguyen Tri Phuong, Phu Nhuan, Thua Thien Hue, Viet Nam
    //           <br />
    //           Phone: (+84)-24-3200-4183
    //         </p>
    //       </div>
    //     </div>
    // <div className="footer-headquarter-col1">
    //   <b
    //     style={{ fontFamily: "revert-layer", fontSize: 18, marginTop: 15 }}
    //   >
    //     Company
    //   </b>
    //   <a className="footer-link" href="">
    //     About us
    //   </a>
    //   <a className="footer-link" href="">
    //     Contact
    //   </a>
    //   <div></div>
    // </div>
    // <div className="footer-headquarter-col1">
    //   <b
    //     style={{ fontFamily: "revert-layer", fontSize: 18, marginTop: 15 }}
    //   >
    //     Services
    //   </b>
    //   <a className="footer-link" href="">
    //     Web design & development
    //   </a>
    //   <a className="footer-link" href="">
    //     Mobile development
    //   </a>
    //   <a className="footer-link" href="">
    //     Engineering & Maintenance
    //   </a>
    //   <a className="footer-link" href="">
    //     Testing services
    //   </a>
    //   <a className="footer-link" href="">
    //     Integration services
    //   </a>
    //   <a className="footer-link" href="">
    //     Ecommerce services
    //   </a>
    // </div>
    //   </div>
    //   <hr className="hr-2" />
    // <p style={{ textAlign: "center", color: "white", opacity: 0.7 }}>
    //   Copyright © 2021 DEHA VIET NAM
    // </p>
    // </div>
  );
}

export default Footer;
