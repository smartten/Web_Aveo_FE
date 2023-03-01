import "./HeadStyle.scss";
import logo from "./Asset 1.svg";
import logo2 from "./Logo.svg";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  CaretDownOutlined,
  AlignRightOutlined,
  CaretDownFilled,
} from "@ant-design/icons";
import { Menu, Drawer } from "antd";

// window.onload = function () {
//   setTimeout(function () {
//     document.getElementById("logo").classList.add("logo");
//   }, 1000);

//   setTimeout(function () {
//     var testarray = document.getElementsByClassName("link");
//     for (var i = 0; i < testarray.length; i++) {
//       testarray[i].classList.add("fadeInBottom", "cssanimation");
//     }
//     document
//       .getElementById("header-but")
//       .classList.add("fadeInBottom", "cssanimation");
//   }, 1500);
// };

function Headerr() {
  // const navigate = useNavigate();

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

  function getItem(label, key, children) {
    return {
      key,
      label,
      children,
    };
  }
  const items = [
    getItem(
      <a className="link-for-res" style={{ color: "#616161" }} href="/">
        Home
      </a>,
      "home"
    ),
    getItem(
      <a style={{ color: "#616161" }} className="link-for-res" href="/about-us">
        About Us
      </a>,
      "about"
    ),
    getItem(
      <a style={{ color: "#616161" }} className="link-for-res">
        Services
      </a>,
      "services",
      [
        getItem(
          <a
            style={{ color: "#616161" }}
            className="link-for-res"
            href="/offshore-development"
          >
            Offshore Development Services
          </a>,
          "1"
        ),
        getItem(
          <a
            style={{ color: "#616161" }}
            className="link-for-res"
            href="/web-application"
          >
            Web Application Development
          </a>,
          "2"
        ),
        getItem(
          <a
            style={{ color: "#616161" }}
            className="link-for-res"
            href="/mobile-application"
          >
            Mobile Application Development
          </a>,
          "3"
        ),
        getItem(
          <a
            style={{ color: "#616161" }}
            className="link-for-res"
            href="/testing-service"
          >
            Testing Service
          </a>,
          "4"
        ),
        getItem(
          <NavLink
            style={{ color: "#616161" }}
            className="link-for-res"
            to="cloud-service"
          >
            Cloud Services
          </NavLink>,
          "5"
        ),
      ]
    ),
    getItem(
      <a style={{ color: "#616161" }} className="link-for-res">
        Industries
      </a>,
      "industries",
      [
        getItem(
          <a
            style={{ color: "#616161" }}
            className="link-for-res"
            href="/manufacturing"
          >
            Manufacturing
          </a>,
          "6"
        ),
        getItem(
          <a
            style={{ color: "#616161" }}
            className="link-for-res"
            href="/health-care"
          >
            Health Care
          </a>,
          "7"
        ),
        getItem(
          <a
            style={{ color: "#616161" }}
            className="link-for-res"
            href="/retail"
          >
            Retail
          </a>,
          "8"
        ),
        getItem(
          <a
            style={{ color: "#616161" }}
            className="link-for-res"
            href="/ecommerce"
          >
            Ecommerce
          </a>,
          "9"
        ),
        getItem(
          <a
            style={{ color: "#616161" }}
            className="link-for-res"
            href="/financial"
          >
            Financial
          </a>,
          "10"
        ),
      ]
    ),
  ];
  const [nav, setNav] = useState("");
  const [anhLogo, setLogo] = useState(logo);
  const [click, setClick] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var headDrop = document.getElementsByClassName("head-totall");
      var theLink = document.getElementsByClassName("link");

      if (window.scrollY >= 50) {
        for (var i = 0; i < headDrop.length; i++) {
          headDrop[i].style.backgroundColor = "white";
          headDrop[i].style.boxShadow = "0 1px 5px  rgba(0, 0, 0, 0.3)";
        }
        for (var i = 0; i < theLink.length; i++) {
          theLink[i].style.color = "black";
        }
        setLogo(logo2);
        setNav("nav");
      } else {
        for (var i = 0; i < headDrop.length; i++) {
          headDrop[i].style.backgroundColor = "white";
        }
        for (var i = 0; i < headDrop.length; i++) {
          headDrop[i].style.backgroundColor = "#ffffff00";
          headDrop[i].style.boxShadow = "";
        }
        for (var i = 0; i < theLink.length; i++) {
          theLink[i].style.color = "white";
        }
        setNav("");
        setLogo(logo);
      }
    });
  }, []);
  const handleColMenu = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        style={{ zIndex: 999 }}
        id="infor"
        className="overlay transition"
      ></div>

      {/* <div id="repon-menu"></div> */}

      <Drawer
        style={{ padding: -24 }}
        width="45vh"
        onClose={onClose}
        open={open}
      >
        <Menu
          style={{
            width: "125%",
            marginLeft: -27,
            // height: "100vh",
            // paddingRight: 85,
          }}
          // className="draw-menu"
          mode="inline"
          theme="light"
          items={items}
        />
        <a
          href="/contact-us"
          id="header-but"
          className="header-but px-4 px-lg-0 mt-2 m-lg-4"
        >
          Contact
        </a>
      </Drawer>

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
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div
            id="headDrop"
            className={nav ? "head-totall sticky" : "head-totall"}
          >
            <div id="repon-menu"></div>
            <div className="container d-flex justify-content-between">
              <div className="sizeLogo">
                <a href="/">
                  <img id="logo" src={anhLogo} />
                </a>
              </div>
              <div className="sizeLogo2">
                <a href="/">
                  <img id="logo" src={logo2} />
                </a>
              </div>
              <div id="alignRightOutlined">
                <AlignRightOutlined onClick={handleColMenu} />
              </div>
              <div id="head-menu" className="head-menu">
                <div>
                  <a href="/" class="link">
                    Home
                  </a>
                </div>
                <div class="dropdown">
                  <a href="/about-us" class="link">
                    About Us
                  </a>
                </div>
                <div class="dropdown">
                  <a class="link">
                    Services
                    <CaretDownFilled className="CaretDownFilled" />
                  </a>
                  <div class="dropdown-content">
                    <div className="div-for-a">
                      <a href="/offshore-development" class="link-drop">
                        Offshore Development Services
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="/web-application" class="link-drop">
                        Web Application Development
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="/mobile-application" class="link-drop">
                        Mobile Application Development
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="/testing-service" class="link-drop">
                        Testing Services
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="/cloud-service" class="link-drop">
                        Cloud Services
                      </a>
                    </div>
                  </div>
                </div>

                <div class="dropdown">
                  <a class="link">
                    Industries <CaretDownFilled className="CaretDownFilled" />
                  </a>
                  <div class="dropdown-content">
                    <div className="div-for-a">
                      <a href="/manufacturing" class="link-drop">
                        Manufacturing
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="/health-care" class="link-drop">
                        Health Care
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="/retail" class="link-drop">
                        Retail
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="/ecommerce" class="link-drop">
                        Ecommerce
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="/financial" class="link-drop">
                        Financial
                      </a>
                    </div>
                  </div>
                </div>

                <a href="/contact-us" id="header-but" className="header-but">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Headerr;
