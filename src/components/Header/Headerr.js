import "./HeadStyle.scss";
import logo from "./Asset 2.svg";
import React, { useEffect, useState } from "react";
import {
  CaretRightOutlined,
  FacebookFilled,
  YoutubeFilled,
  MailFilled,
  PhoneFilled,
  AlignRightOutlined,
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
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        document.getElementById("navbar").style.display = "none";
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
        document.getElementById("navbar").style.display = "block";
        setNav("");
        setTimeout(function () {
          document
            .getElementById("head-top")
            .classList.add("fadeInTop", "cssanimation", "dislay");
        }, 500);
      }
    });
  }, []);
  const handleColMenu = () => {
    var arrayMenu = document.getElementsByClassName("head-menu");
    var outline = document.getElementsByClassName("alignRightOutlined");
    var headTo = document.getElementsByClassName("head-totall");

    if (menu) {
      for (var i = 0; i < arrayMenu.length; i++) {
        arrayMenu[i].style.display = "block";
      }
      for (var i = 0; i < outline.length; i++) {
        outline[i].style.color = "#0262AD";
      }
      for (var i = 0; i < headTo.length; i++) {
        headTo[i].style.backgroundColor = "white";
      }
      setMenu(false);
    } else {
      for (var i = 0; i < arrayMenu.length; i++) {
        arrayMenu[i].style.display = "none";
      }
      for (var i = 0; i < outline.length; i++) {
        outline[i].style.color = "white";
      }
      for (var i = 0; i < headTo.length; i++) {
        headTo[i].style.backgroundColor = "";
      }
      setMenu(true);
    }
    // console.log("check:", arrayMenu);
  };
  return (
    <>
      <div
        style={{ zIndex: 12 }}
        id="infor"
        className="overlay transition"
      ></div>
      <div
        id="navbar"
        style={{
          paddingBottom: 6,
          position: "fixed",
          marginTop: 0,
          width: "100%",
          zIndex: 10,
        }}
      >
        {/* <div style={{ height: 50, width: "100%" }}>
          <div id="head-top" className="head-top">
            <h4>
              <a className="top-link" href="">
                TOP
              </a>
            </h4>
            <div className="topcenter"></div>
            <div className="head-menu-icon">
              <FacebookFilled className="icon" />
              <YoutubeFilled className="icon" />
              <MailFilled className="icon" />
              <PhoneFilled id="phoneFilled" className="icon mx-2 mx-sm-0" />
              <h4 style={{ marginTop: 0 }} className="top-link">
                (+84)-24-3200-4183
              </h4>
            </div>
          </div>
        </div> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div className={nav ? "head-totall sticky" : "head-totall"}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
              className="sizeLogo"
            >
              <img id="logo" src={logo} />
              <div id="alignRightOutlined">
                <AlignRightOutlined
                  onClick={handleColMenu}
                  className="alignRightOutlined m-4"
                />
              </div>
            </div>
            <div id="head-menu" className="head-menu">
              <div>
                <a href="/company" class="link">
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
                  <div
                    id="dropdown-submenu"
                    className="div-for-a dropdown-submenu"
                  >
                    <div>
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
                    </div>
                    <div className="dropdown-content-submenu">
                      <div className="div-for-a">
                        <a href="/web-design-and-development" class="link-drop">
                          Web design & development
                        </a>
                      </div>
                      <div className="div-for-a">
                        <a href="/mobile-development" class="link-drop">
                          Mobile development
                        </a>
                      </div>
                      <div className="div-for-a">
                        <a
                          href="/engineering-and-maintenance"
                          class="link-drop"
                        >
                          Engineering & maintenance
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="div-for-a">
                    <a href="/testing-service" class="link-drop">
                      Testing services
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="integration-services" class="link-drop">
                      Integration services
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="cms-service" class="link-drop">
                      CMS services
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="/blockchain-service" class="link-drop">
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
                    <a href="/ecommerce-solutions" class="link-drop">
                      Ecommerce solutions
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="/enterprise-service" class="link-drop">
                      Enterprise Services
                    </a>
                  </div>
                </div>
              </div>
              <a href="/contact-us" id="header-but" className="header-but">
                Contact
              </a>
            </div>
            <div></div>
            {/* <div className="triangle-bottomright"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Headerr;
