import image1 from "./Application dev.png";
import smartphone from "./icon/Mobile-Development.svg";
import web from "./icon/Front-End-Development.svg";
import webDe from "./icon/UI-UX-Design-1.svg";
import didwnm from "./img_didwnm.webp";
import graph from "./icon/Automation-Service.svg";
import test from "./icon/Icon-4-2.svg";
import support from "./icon/24hours.svg";
import defaultt from "./Hero-img-default.webp";
import "./applicationStyle.scss";
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

function Application() {
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
    document.title = "AVEO Global - Application Development";
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var mobility = document.getElementsByClassName("mobility");
      var mobility2 = document.getElementsByClassName("mobility-2");
      var mobility3 = document.getElementsByClassName("mobility-3");
      var imgDigi = document.getElementsByClassName("img-digi");
      var txtBlock = document.getElementsByClassName("txt-block");
      var animate = document.getElementsByClassName("animate");
      var animate2 = document.getElementsByClassName("animate-2");
      var animate3 = document.getElementsByClassName("bg-snow-animate");

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
      if (window.scrollY >= 750) {
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
      if (window.scrollY >= 1650) {
        for (var i = 0; i < animate3.length; i++) {
          animate3[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 3000) {
        for (var i = 0; i < animate.length; i++) {
          animate[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 3300) {
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
              <h1>Application Development</h1>
              <p className="px-3 px-sm-0">
                Automate your business processes, cost saving, stay connected
                with your clients and get more revenue. The market is now in
                your hand.
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
              We offer a complete solution from consulting, design, development,
              <br />
              integration, deployment and system maintenance for businesses.
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
                <img src={smartphone} />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>Mobility Transformation</h5>
                <p>
                  We help global brands design and build superior digital
                  products, enabling seamless user experiences across all modern
                  platforms and devices.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6  mobility">
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-lg-2">
                <img src={web} />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>Enterprise Web Application</h5>
                <p>
                  Keep your business running in terms of sales, marketing,
                  customer relationships, analytics, financial, security – any
                  area where your concerns need to be covered.
                </p>
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
                <img src={webDe} />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>Experience & Creative Design</h5>
                <p>
                  We create an UI/UX that will make your users feel familiar and
                  friendly. We know what core features your users will admire.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6  mobility-2">
            <div className="row m-0 p-0 g-0">
              <div className="col-12  col-lg-2">
                <img src={graph} />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>Testing, Automation Testing</h5>
                <p>Test automation and manual testing (Agile Testing).</p>
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
                <img src={test} />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>Penetration Testing</h5>
                <p>
                  Detect Security Vulnerabilities and Security Hotspots during
                  code review.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6  mobility-3">
            <div className="row m-0 p-0 g-0">
              <div className="col-12 col-lg-2">
                <img src={support} />
              </div>
              <div className="col-12 col-lg-10 fbox-txt">
                <h5>Maintenance And Support</h5>
                <p>
                  We help you keep your business run smoothly, stay secure and
                  up-to-date with nextgen technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* div end container */}

      <br />
      <div className="container">
        <div className="row g-0 mt-5">
          <div className="col-12 col-sm-6 col-lg-6">
            <img className="img-digi" src={didwnm} />
          </div>
          <div
            style={{}}
            className="col-12 col-sm-6 col-lg-6 py-lg-5 px-lg-2 my-lg-auto txt-block"
          >
            <h3 className="p-1 pt-4 pt-sm-0">
              Digitalize your business, increase your customer experience and
              revenue
            </h3>
            <div>
              <ul>
                <li class="list-item">
                  <p class="p-lg mt-sm-1">
                    Tapping your digital full potential clients. With 90% of
                    people use smartphones, you can reach your audience
                    everytime, everywhere.
                  </p>
                </li>
                <li class="list-item">
                  <p class="p-lg">
                    It's not only helps clients to stay connect with your brand,
                    but also be used to deliver deals, offers, and coupons to
                    the clients effectively.
                  </p>
                </li>
                <li class="list-item">
                  <p class="p-lg">
                    Applying digital technologies, you can save 60% operation
                    costs with Business Process Automation.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="my-5 py-sm-5 bg-snow">
        <div className="container">
          <div className="row px-2 px-sm-0 bg-snow-animate">
            <div className="col-sm-4 g-0 gx-sm-4">
              <div className="row g-0 p-0 ">
                <div className="col-4 col-sm-5">
                  <span>600+</span>
                </div>
                <div className="col-8 col-sm-7 my-sm-auto pt-2 pt-sm-1 pt-lg-3 gx-sm-5">
                  <p>Businesses Are Digitized</p>
                </div>
              </div>
            </div>

            <div
              style={{ marginRight: "auto", marginLeft: "auto" }}
              className="col-sm-4 g-0 p-0"
            >
              <div className="row g-0 p-0 m-0">
                <div className="col-xl-2"></div>
                <div className="col-4 col-sm-5 col-xl-4 g-0">
                  <span>80%</span>
                </div>
                <div className="col-8 col-sm-7  col-xl-6 my-sm-auto pt-2 pt-sm-0 pt-lg-3 g-0">
                  <p>Increase 4X Revenue</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="row">
                <div className="col-xl-4"></div>
                <div className="col-4 col-sm-5 col-xl-4 g-0">
                  <span>96%</span>
                </div>
                <div
                  // style={{ float: "right" }}
                  className="col-8 col-sm-7 col-xl-4 my-sm-auto pt-2 pt-sm-2 pt-lg-3  g-0"
                >
                  <p>Cost Saving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-0 m-0">
        <div className="col-12 my-5 section-title">
          <h3 className="mb-sm-4">
            Our Approach to Application
            <br /> Development
          </h3>
          <p>
            For new software product creation, our dedicated development teams
            use
            <br />
            agile and continuous delivery practices to accelerate development.
            We <br />
            focus on cost-effective and metrics-driven execution to maximize
            value
            <br />
            for our customers.
          </p>
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
                <h5>Discover</h5>
                <p>
                  We work with you to gain clarity on your needs, defining clear
                  business outcomes to set up a successful engagement.
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
                <h5>Research</h5>
                <p>
                  We determine the best solution for your software and develop a
                  plan of action, including design, staffing, and delivery
                  approach.
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
                <h5>Develop</h5>
                <p>
                  Our skilled engineers efficiently execute the plan and
                  validate the solution, providing iterative delivery and
                  constant communication.
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
                <h5>Operate</h5>
                <p>
                  We implement and support the final product, delivering defined
                  metrics, optimal results, and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>

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
export default Application;
