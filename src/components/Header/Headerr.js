import "./HeadStyle.scss";
import logo from "./2023-02-09_114503.png";
import React, { useEffect, useState } from "react";
import {
  CaretRightOutlined,
  FacebookFilled,
  YoutubeFilled,
  MailFilled,
  PhoneFilled,
} from "@ant-design/icons";

window.onload = function () {
  setTimeout(function () {
    document.getElementById("logo").classList.add("logo");
  }, 1000);

  setTimeout(function () {
    var testarray = document.getElementsByClassName("link");
    for (var i = 0; i < testarray.length; i++) {
      testarray[i].classList.add("fadeInBottom", "cssanimation");
    }
    document
      .getElementById("header-but")
      .classList.add("fadeInBottom", "cssanimation");
  }, 1500);

  setTimeout(function () {
    document
      .getElementById("head-top")
      .classList.add("fadeInBottom", "cssanimation", "dislay");
  }, 2500);
};
function Headerr() {
  const [nav, setNav] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        console.log("check scroll:", window.scrollY);

        document
          .getElementById("head-top")
          .classList.remove(
            "fadeInBottom",
            "cssanimation",
            "dislay",
            "fadeInTop"
          );
        setNav("nav");
      } else {
        setNav("");
        setTimeout(function () {
          document
            .getElementById("head-top")
            .classList.add("fadeInTop", "cssanimation", "dislay");
        }, 500);
      }
    });
  }, []);
  console.log("check nav:", nav);
  return (
    <>
      <div
        style={{
          paddingBottom: 6,
          position: "fixed",
          marginTop: 0,
          width: "100%",
        }}
      >
        <div id="infor" className="overlay transition"></div>
        <div style={{ height: 50, width: "100%" }}>
          <div id="head-top" className="head-top">
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
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div
            id="navbar"
            className={nav ? "head-totall sticky" : "head-totall"}
          >
            <img id="logo" src={logo} />
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
                      style={{
                        color: "gray",
                        fontSize: 10,
                        marginLeft: 50,
                        marginBottom: -40,
                      }}
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
              <button id="header-but" className="header-but">
                Contact
              </button>
            </div>
            <div className="triangle-bottomright"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Headerr;