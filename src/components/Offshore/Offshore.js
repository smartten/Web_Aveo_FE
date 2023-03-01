import image1 from "./Off-Shore-Banner-1.png";
import defaultt from "./Hero-img-default.webp";
import icon1 from "./icon/Mobile-Development.svg";
import icon2 from "./icon/Web-Development-1.svg";
import icon3 from "./Automation-Service.svg";
import icon4 from "./icon/Product-Development.svg";
import icon5 from "./icon/Maintain.svg";
import icon6 from "./icon/UI-UX-Design-1.svg";
import logo1 from "./COMATCH's_logo.svg";
import logo2 from "./Group.svg";
import logo3 from "./logo-tisa-white.svg";
import logo4 from "./Logo-white_340x156-px-01.svg";
import logo5 from "./layer1.svg";
import logo6 from "./g16.svg";
import logo7 from "./imageLogo1.svg";
import "./offStyle.scss";
import React, { useEffect } from "react";
import {
  ArrowRightOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
  BulbOutlined,
  SelectOutlined,
  UserOutlined,
  PieChartOutlined,
  SwitcherOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";

function Offshore() {
  setTimeout(function () {
    var testarray = document.getElementsByClassName("img-fluid");
    for (var i = 0; i < testarray.length; i++) {
      testarray[i].classList.add("fadeInLeft", "cssanimation");
    }
    // var heroSection = document.getElementsByClassName("hero-section");
    // for (var i = 0; i < heroSection.length; i++) {
    //   heroSection[i].style.height = "auto";
    // }
  }, 2500);
  setTimeout(function () {
    var heroText = document.getElementsByClassName("hero-text");
    for (var i = 0; i < heroText.length; i++) {
      heroText[i].classList.add("fadeInRight", "cssanimation");
    }
  }, 2500);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var mobility = document.getElementsByClassName("mobility");
      var mobility2 = document.getElementsByClassName("mobility-2");
      var mobility3 = document.getElementsByClassName("mobility-3");
      var imgDigi = document.getElementsByClassName("img-digi");
      var txtBlock = document.getElementsByClassName("txt-block");
      var animate = document.getElementsByClassName("animate");
      var animate2 = document.getElementsByClassName("animate-2");

      if (window.scrollY >= 380) {
        for (var i = 0; i < mobility.length; i++) {
          mobility[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 600) {
        for (var i = 0; i < mobility2.length; i++) {
          mobility2[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 950) {
        for (var i = 0; i < mobility3.length; i++) {
          mobility3[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 1000) {
        for (var i = 0; i < imgDigi.length; i++) {
          imgDigi[i].classList.add("fadeInLeft", "cssanimation");
        }
        for (var i = 0; i < txtBlock.length; i++) {
          txtBlock[i].classList.add("fadeInRight", "cssanimation");
        }
      }
      if (window.scrollY >= 1100) {
        for (var i = 0; i < animate.length; i++) {
          animate[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 1400) {
        for (var i = 0; i < animate2.length; i++) {
          animate2[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      console.log("check point:", window.scrollY);
    });
  }, []);
  return (
    <div className="container-fluid overflow-hidden p-0 m-0 g-0">
      <div className="hero-section g-0 m-0 py-sm-5">
        <div className="container d-flex">
          <div className="row mt-4 pt-5 mt-sm-0 pt-sm-0">
            <div className="col-12  col-md-5 py-0 py-sm-5">
              <img className="img-fluid py-0 py-sm-5" src={image1} />
            </div>
            <div className="col-12 col-md-6 px-1 pb-3 px-sm-4 my-sm-auto hero-text">
              <h1>Offshore Development</h1>
              <p className="px-3 px-sm-0">
                An offshore development center is your own software development
                services team but is located in another country. It is kind of
                like building your own team at a remote location that works
                directly with you and your team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-0 m-0">
          <div className="col-12 my-5 section-title">
            <h3>Our Services</h3>
            <p>
              Our Offshore Development Services enables businesses to create an
              operation team of experts in an offshore location, enabling
              businesses to take advantage of different time zones, talent, and
              infrastructure costs. It also helps businesses to tap into a
              talent pool that would otherwise be unavailable, thus ensuring
              diversity. Best suited for medium to large-scale businesses
              looking to take advantage of remote/offshore talent.
            </p>
          </div>
        </div>

        <div className="row g-0 m-0 mb-sm-3 content-mob">
          <div
            style={{ marginRight: "auto" }}
            className="col-12 col-sm-6 mobility"
          >
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-lg-2">
                <img src={icon1} />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5> Offshore Mobile App Development</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6  mobility">
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-lg-2">
                <img src={icon2} />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>Offshore Web Development</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-0 m-0  mb-sm-3 content-mob">
          <div
            style={{ marginRight: "auto" }}
            className="col-12 col-sm-6  mobility-2"
          >
            <div className="row m-0 p-0 g-0">
              <div className="col-12  col-lg-2">
                <img src={icon4} />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>Offshore Product Development</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6  mobility-2">
            <div className="row m-0 p-0 g-0">
              <div className="col-12  col-lg-2">
                <img src={icon3} />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>Offshore Testing</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-0 m-0 mb-sm-5 content-mob">
          <div
            style={{ marginRight: "auto" }}
            className="col-12 col-sm-6  mobility-3"
          >
            <div className="row m-0 p-0 g-0">
              <div className="col-12  col-lg-2">
                <img src={icon5} />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>Offshore Maintenance</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6  mobility-3">
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-lg-2">
                <img src={icon6} />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>Offshore UI/UX Design</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* div end container */}

      <div className="row g-0 m-0">
        <div className="col-12 my-5 section-title">
          <h3 className="mb-sm-4">How To Collaborate With Us</h3>
        </div>
      </div>

      <div className="container">
        <div className="row g-0 mb-sm-3 step-for-col">
          <div
            style={{ marginRight: "auto" }}
            className="col-12 col-sm-6 px-sm-4 step"
          >
            <div className="row m-0 p-3 py-sm-4 g-0">
              <div className="col-2 col-sm-1">
                <span className="nr">1</span>
              </div>
              <div className="col-10 col-sm-11 px-sm-3  p-lg-2 fbox-txt">
                <h5>Requirement gathering</h5>
                <p>
                  TECHVIFY gathers the client's requirements regarding resources
                  and tech stacks.
                </p>
              </div>
            </div>
          </div>
          <div className="col-2 col-sm-6  px-sm-4 step">
            <div className="row p-3 py-sm-4 g-0">
              <div className="col-2 col-sm-1">
                <span className="nr">2</span>
              </div>
              <div className="col-10 col-sm-11 px-sm-3  p-lg-2 fbox-txt">
                <h5>CV preparation</h5>
                <p>
                  TECHVIFY screens internal resources to help you connect with
                  the right talents to match the requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-0 mb-sm-5 step-for-col">
          <div
            style={{ marginRight: "auto" }}
            className="col-12 col-sm-6  px-sm-4 step"
          >
            <div className="row m-0 p-3 py-sm-4 g-0">
              <div className="col-2 col-sm-1">
                <span className="nr">3</span>
              </div>
              <div className="col-10 col-sm-11 px-sm-3  p-lg-2 fbox-txt">
                <h5>Client interview</h5>
                <p>
                  You will interview and evaluate the team members directly via
                  video call, then decide whom to hire and how much to pay.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6  px-sm-4 step">
            <div className="row p-3 py-sm-4 g-0">
              <div className="col-2 col-sm-1">
                <span className="nr">4</span>
              </div>
              <div className="col-10 col-sm-11 px-sm-3  p-lg-2 fbox-txt">
                <h5>Contract sign-off & onboarding</h5>
                <p>
                  TECHVIFY is in charge of infrastructure and environmental
                  setup, as well as the preparation of other resources.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-0 mb-sm-5 step-for-col">
          <div
            style={{ marginRight: "auto" }}
            className="col-12 col-sm-6  px-sm-4 step"
          >
            <div className="row m-0 p-3 py-sm-4 g-0">
              <div className="col-2 col-sm-1">
                <span className="nr">5</span>
              </div>
              <div className="col-10 col-sm-11 px-sm-3  p-lg-2 fbox-txt">
                <h5>Take-off</h5>
                <p>Kick-start your project.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6"></div>
        </div>

        <section className="big-guys">
          <div className="container">
            <p className="text-center title-big-guy">
              This BIG guys are using services and they are more than happier
              ever
            </p>
            <div className="row justify-content-center flex-wrap">
              <div className="col-2">
                <img
                  src={logo1}
                  style={{ width: "100%", height: "auto", marginTop: "10px" }}
                />
              </div>
              {/* <div className="col">
              <img
                src={logo2}
                style={{ width: "110%", height: "auto", marginTop: "20px" }}
              />
            </div> */}
              <div className="col-2">
                <img
                  src={logo3}
                  style={{
                    width: "80%",
                    height: "auto",
                    marginLeft: "20px",
                    marginTop: "10px",
                  }}
                />
              </div>
              {/* <div className="col">
              <img src={logo4} style={{ width: "80%", height: "auto" }} />
            </div> */}
              <div className="col-2">
                <img
                  src={logo6}
                  style={{ width: "70%", height: "auto", marginTop: "10px" }}
                />
              </div>
              <div className="col-2">
                <img
                  src={logo7}
                  style={{ width: "70%", height: "auto", marginTop: "0px" }}
                />
              </div>
              <div className="col-2">
                <img src={logo5} style={{ width: "25%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="row my-sm-5 py-5 g-0">
          <div className="col-12 g-0">
            <h3 class="h3-md">Benefits of Partnering with AVEO</h3>
          </div>
        </div>

        <div className="animate">
          <div className="row g-0 m-0 p-0 content-bot">
            <div
              style={{ marginRight: "auto" }}
              className="col-lg-4 mb-3 mb-lg-0  px-4 content-part"
            >
              <div className="icon-benefit mb-4">
                <BulbOutlined />
              </div>
              <div className="text-benefit">
                <span>Expert Advice</span>
                <p className="my-sm-3">
                  We are a leading digital strategy consultant. We can offer an
                  unique and consultative perspective to your digital
                  transformation strategy in general and software engineering in
                  particular.
                </p>
              </div>
            </div>
            <div
              style={{ marginRight: "auto" }}
              className="col-lg-4 mb-3 mb-lg-0 px-4 content-part"
            >
              <div className="icon-benefit mb-4">
                <SelectOutlined />
              </div>
              <div className="text-benefit">
                <span>Quality-Focused Solutions</span>
                <p className="my-sm-3">
                  We are using cutting-edge technologies and tools in software
                  development process to bring the highest software development
                  quality, for example automation testing, RPA...
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-3 mb-lg-0 px-4 content-part">
              <div className="icon-benefit mb-4">
                <UserOutlined />
              </div>
              <div className="text-benefit">
                <span>Great Talent Pool</span>
                <p className="my-sm-3">
                  Our team has 260+ experienced developers with in-depth skills
                  & knowledge in software building and powerful technologies
                  stacks.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-2">
          <div className="row mx-0 px-0 g-0 mt-lg-4 mb-sm-5 pb-sm-5 content-bot">
            <div
              style={{ marginRight: "auto" }}
              className="col-lg-4 mb-3 mb-lg-0 px-4 g-0 content-part"
            >
              <div className="icon-benefit mb-4">
                <PieChartOutlined />
              </div>
              <div className="text-benefit">
                <span>Experience</span>
                <p className="my-sm-3">
                  We are strategic partner of big corporations such as Mitsui
                  O.S.K.Line, Marubeni, Mitani, Hino Motor, Vinmec International
                  Hospital...and delivered 1,000+ systems for enterprise.
                </p>
              </div>
            </div>
            <div
              style={{ marginRight: "auto" }}
              className="col-lg-4 mb-3 mb-lg-0 px-4 content-part"
            >
              <div className="icon-benefit mb-4">
                <SwitcherOutlined />
              </div>
              <div className="text-benefit">
                <span>All-in-One Provider</span>
                <p className="my-sm-3">
                  Our services are comprehensive from consulting, design,
                  development, integration, deployment to system maintenance and
                  much mores.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-sm-0 px-4 content-part">
              <div className="icon-benefit mb-4">
                <PaperClipOutlined />
              </div>
              <div className="text-benefit">
                <span>Agile Mindset</span>
                <p className="my-sm-3">
                  An agile mindset is about creating and responding to change in
                  uncertain and turbulent environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end container */}
    </div>
  );
}
export default Offshore;
