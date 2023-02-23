import "./HeadStyle.scss";
import logo from "./Asset 1.svg";
import logo2 from "./Logo.svg";
import React, { useEffect, useState } from "react";
import {
  CaretRightOutlined,
  AlignRightOutlined,
  CaretDownFilled,
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
};
function Headerr() {
  const [nav, setNav] = useState("");
  const [menu, setMenu] = useState(true);
  const [anhLogo, setLogo] = useState(logo);
  const [click, setClick] = useState(false);

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
          theLink[i].style.color = "#616161";
        }
        setLogo(logo2);
        setNav("nav");
      } else {
        if (click) {
          for (var i = 0; i < headDrop.length; i++) {
            headDrop[i].style.backgroundColor = "white";
          }
        } else {
          for (var i = 0; i < headDrop.length; i++) {
            headDrop[i].style.backgroundColor = "#ffffff00";
            headDrop[i].style.boxShadow = "";
          }
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
    var arrayMenu = document.getElementsByClassName("head-menu");
    var headTo = document.getElementsByClassName("head-totall");
    var headRepon = document.getElementsByClassName("head-reponsive");
    var theLink = document.getElementsByClassName("link");

    if (menu) {
      for (var i = 0; i < arrayMenu.length; i++) {
        arrayMenu[i].style.display = "block";
      }
      for (var i = 0; i < headRepon.length; i++) {
        headRepon[i].style.display = "block";
      }
      for (var i = 0; i < theLink.length; i++) {
        theLink[i].style.color = "#717171";
      }

      for (var i = 0; i < headTo.length; i++) {
        headTo[i].style.backgroundColor = "white";
      }
      setMenu(false);
      setClick(true);
    } else {
      for (var i = 0; i < arrayMenu.length; i++) {
        arrayMenu[i].style.display = "none";
      }
      for (var i = 0; i < headRepon.length; i++) {
        headRepon[i].style.display = "none";
      }
      for (var i = 0; i < theLink.length; i++) {
        theLink[i].style.color = "#717171";
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

      <div className="head-reponsive"></div>

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
            <div className="container d-flex justify-content-between">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
                className="sizeLogo"
              >
                <a href="/">
                  <img id="logo" src={anhLogo} />
                </a>
                <div id="alignRightOutlined">
                  <AlignRightOutlined
                    onClick={handleColMenu}
                    className="alignRightOutlined m-4"
                  />
                </div>
              </div>
              <div id="head-menu" className="head-menu">
                <div>
                  <a href="/" class="link">
                    Home
                  </a>
                </div>

                <div class="dropdown">
                  <a href="" class="link">
                    Services
                    <CaretDownFilled className="CaretDownFilled" />
                  </a>
                  <div class="dropdown-content">
                    <div className="div-for-a">
                      <a href="" class="link-drop">
                        Offshore Development Services
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="/web-application" class="link-drop">
                        Web Application Development
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="/web-application" class="link-drop">
                        Mobile Application Development
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="/testing-service" class="link-drop">
                        Testing Services
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="/cloud-computing" class="link-drop">
                        Cloud Services
                      </a>
                    </div>
                  </div>
                </div>

                <div class="dropdown">
                  <a href="" class="link">
                    Industries <CaretDownFilled className="CaretDownFilled" />
                  </a>
                  <div class="dropdown-content">
                    <div className="div-for-a">
                      <a href="" class="link-drop">
                        Manufacturing
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="/healthcare" class="link-drop">
                        Health Care
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="/retail" class="link-drop">
                        Retail
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="" class="link-drop">
                        Ecommerce
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="" class="link-drop">
                        Financial
                      </a>
                    </div>
                  </div>
                </div>
                <div class="dropdown">
                  <a href="" class="link">
                    Resources <CaretDownFilled className="CaretDownFilled" />
                  </a>
                  <div class="dropdown-content">
                    <div className="div-for-a">
                      <a href="" class="link-drop">
                        Blogs
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="" class="link-drop">
                        Whitepapers
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="" class="link-drop">
                        About Us
                      </a>
                    </div>
                    <div className="div-for-a">
                      <a href="" class="link-drop">
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
                <a href="/contact-us" id="header-but" className="header-but">
                  Contact
                </a>
              </div>
            </div>
            {/* <div className="triangle-bottomright"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Headerr;
