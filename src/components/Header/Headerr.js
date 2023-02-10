import logo from "./2023-02-09_114503.png";
import "./HeadStyle.css";
import React, { useEffect, useState } from "react";
import {
  CaretRightOutlined,
  FacebookFilled,
  YoutubeFilled,
  MailFilled,
  PhoneFilled,
} from "@ant-design/icons";

function Headerr() {
  const [nav, setNav] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY >= 65) {
        setNav("nav");
      } else {
        setNav("");
      }
    });
  }, []);
  return (
    <>
      <div className="head-top">
        <h4>
          <a className="top-link" href="">
            TOP
          </a>
        </h4>
        <div style={{ width: "66%" }}></div>
        <div className="head-menu-icon">
          <FacebookFilled className="icon" />
          <YoutubeFilled className="icon" />
          <MailFilled className="icon" />
          <PhoneFilled className="icon" />
          <h4 style={{ marginTop: 0 }} className="top-link">
            (+84)-24-3200-4183
          </h4>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div id="navbar" className={nav ? "head-totall sticky" : "head-totall"}>
          <img className="logo" src={logo} />
          <div className="head-menu">
            <div>
              <a href="" class="link">
                Company
              </a>
            </div>

            <div class="dropdown">
              <a href="" class="link">
                Our Solutions
              </a>
              <div class="dropdown-content">
                <div className="div-for-a">
                  <a href="" class="link-drop">
                    Facio ME
                  </a>
                </div>
              </div>
            </div>

            <div class="dropdown">
              <a href="" class="link">
                Digital Consulting
              </a>
              <div class="dropdown-content">
                <div className="div-for-a dropdown-submenu">
                  <a href="" class="link-drop">
                    Application Services
                  </a>
                  <CaretRightOutlined
                    style={{ color: "gray", fontSize: 10, marginLeft: 50 }}
                  />
                  <div className="dropdown-content-submenu">
                    <div className="div-for-a">
                      <a href="" class="link-drop">
                        Web design & development
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="" class="link-drop">
                        Mobile development
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="" class="link-drop">
                        Engineering & maintenance
                      </a>
                    </div>
                  </div>
                </div>
                <div className="div-for-a">
                  <a href="" class="link-drop">
                    Testing services
                  </a>
                </div>
                <div className="div-for-a">
                  <a href="" class="link-drop">
                    Integration services
                  </a>
                </div>
                <div className="div-for-a">
                  <a href="" class="link-drop">
                    CMS services
                  </a>
                </div>
                <div className="div-for-a">
                  <a href="" class="link-drop">
                    Blockchain services
                  </a>
                </div>
              </div>
            </div>
            <div class="dropdown">
              <a href="" class="link">
                DX Consulting
              </a>
              <div class="dropdown-content">
                <div className="div-for-a">
                  <a href="" class="link-drop">
                    Ecommerce solutions
                  </a>
                </div>
                <div className="div-for-a">
                  <a href="" class="link-drop">
                    Enterprise Services
                  </a>
                </div>
              </div>
            </div>
            <button className="header-but">Contact</button>
          </div>
          <div className="triangle-bottomright"></div>
        </div>
        {/* <div></div> */}
      </div>
    </>
  );
}

export default Headerr;
