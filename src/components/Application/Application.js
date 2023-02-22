import image1 from "./hero-application-development.webp";
import smartphone from "./smartphone.png";
import webDe from "./web-design.png";
import web from "./web-brower.png";
import didwnm from "./img_didwnm.webp";
import graph from "./graph.png";
import test from "./test.png";
import support from "./support.png";
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
    var heroSection = document.getElementsByClassName("hero-section");
    for (var i = 0; i < heroSection.length; i++) {
      heroSection[i].style.height = "auto";
    }
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
      console.log("check point:", window.scrollY);
    });
  }, []);
  return (
    <div className="container-fluid overflow-hidden p-0 m-0 g-0">
      <div className="row hero-section g-0 m-0 p-sm-5">
        <div className="col-12 col-sm-5 py-sm-5">
          <img className="img-fluid pt-sm-5" src={image1} />
        </div>
        <div className="col-12 col-sm-6 px-sm-5 my-sm-auto hero-text">
          <h1>Application Development</h1>
          <p>
            Automate your business processes, cost saving, stay connected with
            your clients and get more revenue. The market is now in your hand.
          </p>
        </div>
        <div className="col-12 col-sm-1"></div>
      </div>

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

      <div className="row g-0 m-0 px-sm-5 mx-sm-5 mb-sm-3">
        <div className="col-12 col-sm-6 px-sm-5 mobility">
          <div className="row m-0 p-0 g-0">
            <div className="col-12 col-sm-2">
              <img src={smartphone} />
            </div>
            <div className="col-12 col-sm-10 fbox-txt">
              <h5>Mobility Transformation</h5>
              <p>
                We help global brands design and build superior digital
                products, enabling seamless user experiences across all modern
                platforms and devices.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 px-sm-5 mobility">
          <div className="row m-0 p-0 g-0">
            <div className="col-12 col-sm-2">
              <img src={web} />
            </div>
            <div className="col-12 col-sm-10 fbox-txt">
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

      <div className="row g-0 m-0 px-sm-5 mx-sm-5 mb-sm-3">
        <div className="col-12 col-sm-6 px-sm-5 mobility-2">
          <div className="row m-0 p-0 g-0">
            <div className="col-12 col-sm-2">
              <img src={webDe} />
            </div>
            <div className="col-12 col-sm-10 fbox-txt">
              <h5>Experience & Creative Design</h5>
              <p>
                We create an UI/UX that will make your users feel familiar and
                friendly. We know what core features your users will admire.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 px-sm-5 mobility-2">
          <div className="row m-0 p-0 g-0">
            <div className="col-12 col-sm-2">
              <img src={graph} />
            </div>
            <div className="col-12 col-sm-10 fbox-txt">
              <h5>Testing, Automation Testing</h5>
              <p>Test automation and manual testing (Agile Testing).</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-0 m-0 px-sm-5 mx-sm-5 mb-sm-5">
        <div className="col-12 col-sm-6 px-sm-5 mobility-3">
          <div className="row m-0 p-0 g-0">
            <div className="col-12 col-sm-2">
              <img src={test} />
            </div>
            <div className="col-12 col-sm-10 fbox-txt">
              <h5>Penetration Testing</h5>
              <p>
                Detect Security Vulnerabilities and Security Hotspots during
                code review.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 px-sm-5 mobility-3">
          <div className="row m-0 p-0 g-0">
            <div className="col-12 col-sm-2">
              <img src={support} />
            </div>
            <div className="col-12 col-sm-10 fbox-txt">
              <h5>Maintenance And Support</h5>
              <p>
                We help you keep your business run smoothly, stay secure and
                up-to-date with nextgen technologies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-0  bg-01">
        <div className="col-12"></div>
      </div>

      <div className="row g-0 m-5 px-sm-5">
        <div className="col-12 col-sm-6">
          <img className="img-digi" src={didwnm} />
        </div>
        <div
          style={{ width: "40%" }}
          className="col-12 col-sm-6 py-sm-5 my-sm-5 mx-sm-4 txt-block"
        >
          <h3>
            Digitalize your business, increase your customer experience and
            revenue
          </h3>
          <div>
            <ul>
              <li class="list-item">
                <p class="p-lg mt-sm-5">
                  Tapping your digital full potential clients. With 90% of
                  people use smartphones, you can reach your audience everytime,
                  everywhere.
                </p>
              </li>
              <li class="list-item">
                <p class="p-lg">
                  It's not only helps clients to stay connect with your brand,
                  but also be used to deliver deals, offers, and coupons to the
                  clients effectively.
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
      <br />
      <div className="row  my-5 px-sm-5 py-sm-5 bg-snow">
        <div style={{ width: "30%" }} className="col-sm-4 mx-sm-5">
          <div className="row g-0 p-0">
            <div className="col-sm-6 g-0">
              <span>600+</span>
            </div>
            <div className="col-sm-6 my-sm-auto pt-sm-3 px-sm-3 g-0">
              <p>Businesses Are Digitized</p>
            </div>
          </div>
        </div>

        <div
          style={{ width: "36%", marginLeft: -80 }}
          className="col-sm-4 g-0 p-0"
        >
          <div className="row g-0 p-0 m-0">
            <div className="col-sm-6 g-0">
              <span>80%</span>
            </div>
            <div className="col-sm-6 my-sm-auto pt-sm-3 px-sm-3 g-0">
              <p>Increase 4X Revenue</p>
            </div>
          </div>
        </div>
        <div style={{ width: "30%" }} className="col-sm-4">
          <div className="row g-0 p-0 m-0">
            <div className="col-sm-6 g-0">
              <span>96%</span>
            </div>
            <div className="col-sm-6 my-sm-auto pt-sm-3 px-sm-3 g-0">
              <p>Cost Saving</p>
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

      <div className="row g-0  px-sm-5 mx-sm-5 mb-sm-2">
        <div
          style={{ width: "46.5%" }}
          className="col-12 col-sm-6 mx-sm-5 px-sm-4 step"
        >
          <div className="row m-0 py-sm-4 g-0">
            <div className="col-12 col-sm-1">
              <span className="nr">1</span>
            </div>
            <div className="col-12 col-sm-11 p-sm-2 fbox-txt">
              <h5>Discover</h5>
              <p>
                We work with you to gain clarity on your needs, defining clear
                business outcomes to set up a successful engagement.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ width: "46.5%", marginLeft: -25 }}
          className="col-12 col-sm-6  px-sm-4 step"
        >
          <div className="row py-sm-4 g-0">
            <div className="col-12 col-sm-1">
              <span className="nr">2</span>
            </div>
            <div className="col-12 col-sm-11 p-sm-2 fbox-txt">
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
      <div className="row g-0  px-sm-5 mx-sm-5 mb-sm-5">
        <div
          style={{ width: "46.5%" }}
          className="col-12 col-sm-6 mx-sm-5 px-sm-4 step"
        >
          <div className="row m-0 py-sm-4 g-0">
            <div className="col-12 col-sm-1">
              <span className="nr">3</span>
            </div>
            <div className="col-12 col-sm-11 p-sm-2 fbox-txt">
              <h5>Develop</h5>
              <p>
                Our skilled engineers efficiently execute the plan and validate
                the solution, providing iterative delivery and constant
                communication.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ width: "46.5%", marginLeft: -25 }}
          className="col-12 col-sm-6  px-sm-4 step"
        >
          <div className="row py-sm-4 g-0">
            <div className="col-12 col-sm-1">
              <span className="nr">4</span>
            </div>
            <div className="col-12 col-sm-11 p-sm-2 fbox-txt">
              <h5>Operate</h5>
              <p>
                We implement and support the final product, delivering defined
                metrics, optimal results, and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-sm-5 py-sm-5 g-0">
        <div className="col-12 g-0">
          <h3 class="h3-md">Benefits of Partnering with DEHA</h3>
        </div>
      </div>

      <div className="row mx-sm-5 px-sm-5">
        <div
          style={{ width: "30%", marginLeft: 50 }}
          className="col-sm-4 px-sm-4 content-part"
        >
          <div className="icon-benefit mb-sm-4">
            <BulbOutlined />
          </div>
          <div className="text-benefit">
            <span>Expert Advice</span>
            <p className="my-sm-3">
              We are a leading digital strategy consultant. We can offer an
              unique and consultative perspective to your digital transformation
              strategy in general and software engineering in particular.
            </p>
          </div>
        </div>
        <div style={{ width: "30%" }} className="col-sm-4 px-sm-4 content-part">
          <div className="icon-benefit mb-sm-4">
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
        <div style={{ width: "30%" }} className="col-sm-4 px-sm-4 content-part">
          <div className="icon-benefit mb-sm-4">
            <UserOutlined />
          </div>
          <div className="text-benefit">
            <span>Great Talent Pool</span>
            <p className="my-sm-3">
              Our team has 260+ experienced developers with in-depth skills &
              knowledge in software building and powerful technologies stacks.
            </p>
          </div>
        </div>
      </div>

      <div className="row mx-sm-5 px-sm-5 mt-sm-4 mb-sm-5 pb-sm-5">
        <div
          style={{ width: "30%", marginLeft: 50 }}
          className="col-sm-4 px-sm-4 content-part"
        >
          <div className="icon-benefit mb-sm-4">
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
        <div style={{ width: "30%" }} className="col-sm-4 px-sm-4 content-part">
          <div className="icon-benefit mb-sm-4">
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
        <div style={{ width: "30%" }} className="col-sm-4 px-sm-4 content-part">
          <div className="icon-benefit mb-sm-4">
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

      <div className="row bg-04 p-sm-5">
        <div className="col-sm-5 g-0 p-sm-5 mx-sm-5 cta-11-txt">
          <h2>Connect with us</h2>
          <p className="my-sm-3">We’re ready to talk opportunity</p>
          <div className="btn-deha mt-sm-4 py-sm-3">
            <a className="" href="">
              Contact Us
            </a>
          </div>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-4">
          <img className="img-defaultt" src={defaultt} />
        </div>
      </div>
    </div>
  );
}
export default Application;
