import "./HeadStyle.scss";
import logo from "./New_logo_May30-white.svg";
import logo2 from "./New-logo-30May.svg";
import React, { useEffect, useState } from "react";
import {
  RightOutlined,
  AlignRightOutlined,
  CaretDownFilled,
  CloseOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Menu, Drawer } from "antd";
import { PageHeader } from "@ant-design/pro-layout";

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
};

function getItem(label, key, children) {
  return {
    key,
    label,
    children,
  };
}
const items = [
  getItem(
    <a className="link-for-res" href="/">
      Home
    </a>,
    "home"
  ),
  getItem(
    <a className="link-for-res" href="/about-us">
      About Us
    </a>,
    "about"
  ),
  getItem(<a className="link-for-res">Services</a>, "services", [
    getItem(
      <a className="link-for-sub" href="/offshore-development">
        Offshore Development Services
      </a>,
      "1"
    ),
    getItem(
      <a className="link-for-sub" href="/web-application">
        Web Application Development
      </a>,
      "2"
    ),
    getItem(
      <a className="link-for-sub" href="/mobile-application">
        Mobile Application Development
      </a>,
      "3"
    ),
    getItem(
      <a className="link-for-sub" href="/testing-services">
        Testing Service
      </a>,
      "4"
    ),
    getItem(
      <a className="link-for-sub" href="/cloud-services">
        Cloud Services
      </a>,
      "5"
    ),
    getItem(
      <a className="link-for-sub" href="/custom-software">
        Custom Software Development
      </a>,
      "11"
    ),
  ]),
  getItem(<a className="link-for-res">Industries</a>, "industries", [
    getItem(
      <a className="link-for-sub" href="/manufacturing">
        Manufacturing
      </a>,
      "6"
    ),
    getItem(
      <a className="link-for-sub" href="/health-care">
        Health Care
      </a>,
      "7"
    ),
    getItem(
      <a className="link-for-sub" href="/retail">
        Retail
      </a>,
      "8"
    ),
    getItem(
      <a className="link-for-sub" href="/ecommerce">
        Ecommerce
      </a>,
      "9"
    ),
    getItem(
      <a className="link-for-sub" href="/financial">
        Financial
      </a>,
      "10"
    ),
  ]),
];
function Headerr() {
  const [nav, setNav] = useState("");
  const [anhLogo, setLogo] = useState(logo);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

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
    setOpen2(false);
    setOpen3(false);
  };
  const onClicked = (e) => {
    setOpen2(true);
  };
  const onClicked2 = (e) => {
    setOpen3(true);
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
        style={{ padding: -24, overflow: "hidden" }}
        width="100%"
        onClose={onClose}
        open={open}
      >
        <Menu
          style={{
            width: "100%",
          }}
          mode="vertical"
          theme="light"
          // items={items}
        >
          <Menu.Item>
            <a className="link-for-res" href="/">
              Home
            </a>
          </Menu.Item>
          <Menu.Item>
            <a className="link-for-res" href="/about-us">
              About Us
            </a>
          </Menu.Item>
          <Menu.Item onClick={onClicked}>
            <div className="d-flex justify-content-between">
              <a className="link-for-res">Services</a>
              <RightOutlined className="my-auto" />
            </div>
          </Menu.Item>
          <Menu.Item onClick={onClicked2}>
            <div className="d-flex justify-content-between">
              <a className="link-for-res">Industries</a>
              <RightOutlined className="my-auto" style={{}} />
            </div>
          </Menu.Item>
        </Menu>
        <a
          href="/contact-us"
          id="header-but"
          className="header-but px-3 px-lg-0 m-lg-4"
        >
          Contact
        </a>
      </Drawer>

      <Drawer
        style={{ overflow: "hidden" }}
        width="100%"
        onClose={onClose}
        open={open2}
      >
        <PageHeader onBack={() => setOpen2(false)} title="Services" />
        <div style={{ paddingLeft: 16, lineHeight: 2.9, opacity: 0.95 }}>
          <a className="link-for-sub" href="/offshore-development">
            Offshore Development Services
          </a>
          <br />
          <a className="link-for-sub" href="/web-application">
            Web App Development
          </a>
          <br />
          <a className="link-for-sub" href="/mobile-application">
            Mobile App Development
          </a>
          <br />
          <a className="link-for-sub" href="/testing-services">
            Testing Service
          </a>
          <br />
          <a className="link-for-sub" href="/cloud-services">
            Cloud Services
          </a>
          <br />
          <a className="link-for-sub" href="/custom-software">
            Custom Software Development
          </a>
        </div>
      </Drawer>
      <Drawer
        style={{ overflow: "hidden" }}
        width="100%"
        onClose={onClose}
        open={open3}
      >
        <PageHeader onBack={() => setOpen3(false)} title="Industries" />
        <div style={{ paddingLeft: 16, lineHeight: 2.9, opacity: 0.95 }}>
          <a className="link-for-sub" href="/manufacturing">
            Manufacturing
          </a>
          <br />
          <a className="link-for-sub" href="/health-care">
            Health Care
          </a>
          <br />
          <a className="link-for-sub" href="/retail">
            Retail
          </a>
          <br />
          <a className="link-for-sub" href="/ecommerce">
            Ecommerce
          </a>
          <br />
          <a className="link-for-sub" href="/financial">
            Financial
          </a>
        </div>
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
                {open ? (
                  <PlusOutlined rotate={45} onClick={onClose} />
                ) : (
                  <AlignRightOutlined onClick={handleColMenu} />
                )}
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
                        Web App Development
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="/mobile-application" class="link-drop">
                        Mobile App Development
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="/testing-services" class="link-drop">
                        Testing Services
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="/cloud-services" class="link-drop">
                        Cloud Services
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="/custom-software" class="link-drop">
                        Custom Software Development
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
