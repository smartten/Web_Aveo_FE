import logo from "./Asset 1.svg";
import "./FooterStyle.scss";
import React from "react";
import { Button } from "antd";
import { Layout, Menu, List } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;
function Footer() {
  return (
    <section className="contact-us-v1">
      <div className="container ">
        <div className="row mb-0 mb-5 pt-5 pb-4 hanoi">
          <br />
          <div
            style={{ marginRight: "auto" }}
            className="col-12 col-sm-4 footer-headquarter-col1"
          >
            <img className="footer-logo" src={logo} />
            <div className=" pt-sm-0 ">
              <br />
              <p>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "14.5px",
                  }}
                >
                  Headquarter:
                </span>{" "}
                4F - No 9 Building, 9 Ha Dinh, Thanh Xuan, Hanoi, Vietnam
              </p>
              <p>
                <span style={{ fontWeight: 700, fontSize: "14.5px" }}>
                  Phone:
                </span>{" "}
                +84 24 6259 3698
              </p>
              <p>
                <span style={{ fontWeight: 700, fontSize: "14.5px" }}>
                  Fax:
                </span>{" "}
                +84 24 6259 3698
              </p>
              <p>
                <span style={{ fontWeight: 700, fontSize: "14.5px" }}>
                  Email:
                </span>{" "}
                sales@aveo.com.vn
              </p>
            </div>
          </div>
          <div className="col-6 col-sm-2 footer-headquarter-col1">
            <b style={{ fontFamily: "inherit", fontSize: 20 }}>Services</b>
            <p className="mt-2">
              <a className="footer-link" href="/offshore-development">
                Offshore Development Services
              </a>
              <br />
              <p style={{ margin: 6 }}></p>
              {/* </p>
            <p> */}
              <a className="footer-link" href="/web-application">
                Web App Development
              </a>
              <br />
              <p style={{ margin: 6 }}></p>
              {/* </p>
            <p> */}
              <a className="footer-link" href="/mobile-application">
                Mobile App Development
              </a>
              <br />
              <p style={{ margin: 6 }}></p>
              {/* </p>
            <p> */}
              <a className="footer-link" href="/testing-services">
                Testing Services
              </a>
              <br />
              <p style={{ margin: 6 }}></p>
              <a className="footer-link" href="/cloud-services">
                Cloud Services
              </a>
              <br />
              <p style={{ margin: 6 }}></p>
              <a className="footer-link" href="/custom-software">
                Custom Software Development
              </a>
            </p>
          </div>
          <div className="col-6 col-sm-2  footer-headquarter-col1">
            <b
              style={{
                fontFamily: "inherit",
                fontSize: 20,
              }}
            >
              Industries
            </b>
            <p className="mt-2">
              <a className="footer-link" href="/manufacturing">
                Manufacturing
              </a>
              <br />
              <a className="footer-link" href="/health-care">
                Health Care
              </a>
              <br />
              <a className="footer-link" href="/retail">
                Retail
              </a>
              <br />
              <a className="footer-link" href="/ecommerce">
                Ecommerce
              </a>
              <br />
              <a className="footer-link" href="/financial">
                Financial
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-4 g-0 mt-3 mt-sm-0 conact-img">
            <img
              className="px-4"
              src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/hero/Hero-img-default"
            />
          </div>
        </div>
        <hr class="divider"></hr>
        <div className="row mt-sm-5 pb-sm-4">
          <div className="col-12 all-right">
            <p
              style={{
                color: "white",
                fontWeight: 600,
                fontSize: 18,
                fontFamily: "inherit",
              }}
            >
              © 2023 AVEO. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
