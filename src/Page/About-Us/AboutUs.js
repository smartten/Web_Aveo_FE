import "./AboutStyle.scss";
import React, { useEffect } from "react";
import {
  CloudServerOutlined,
  DashboardOutlined,
  FieldTimeOutlined,
  CodeOutlined,
  BulbOutlined,
  SelectOutlined,
  UserOutlined,
  PieChartOutlined,
  SwitcherOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import logo1 from "./COMATCH's_logo.svg";
import logo2 from "./Group.svg";
import logo3 from "./logo-tisa-white.svg";
import logo4 from "./Logo-white_340x156-px-01.svg";
import logo5 from "./layer1.svg";
import logo6 from "./g16.svg";
import logo7 from "./imageLogo1.svg";
function AboutUs() {
  useEffect(() => {
    document.title =
      "Aveo Global: Global AI and Software Consulting & Development";
  }, []);
  return (
    <div className="about-us">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content">
                <div className="text">
                  <p className="text-title">
                    Vietnam's Top Software Development, Outsourcing Company
                  </p>
                  <p className="sub-text">
                    AVEO Global is one of the leading Information Technology
                    companies in Vietnam, specializing in providing digital
                    transformation consulting services and software solutions in
                    Finance, Healthcare, Manufacturing, Ecommerce and Retail for
                    Domestic and International Businesses. we help you to
                    LEVERAGE YOUR BUSINESS in the age of Digital Transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="factsheet">
        <div className="container">
          <h2 className="title-factsheet">Factsheet</h2>
          <div className="table-info">
            <table className="table" style={{ marginBottom: "0px" }}>
              <tbody>
                <tr>
                  <th>Company Name</th>
                  <td>AVEO GLOBAL TECHNOLOGY COMPANY LIMITED</td>
                </tr>
                <tr>
                  <th>Established</th>
                  <td>2019</td>
                </tr>
                <tr>
                  <th>Head office</th>
                  <td>
                    4F - No 9 Building, 9 Ha Dinh, Thanh Xuan, Hanoi, Vietnam
                  </td>
                </tr>
                <tr>
                  <th>Office</th>
                  <td>
                    4F - Ocean Park Building, No 1 Dao Duy Anh, Dong Da, Hanoi, Vietnam
                  </td>
                </tr>

                <tr>
                  <th>Development Centers</th>
                  <td>
                    <ul>
                      <li>
                      <strong>OFFICE</strong>: 4F - Ocean Park Building, No 1 Dao Duy Anh, Dong Da, Hanoi, Vietnam
                      </li>
                      <li>
                        <strong>Japan</strong>: 5-21-5 Higashisuna, Koutouku,
                        Tokyo-Japan
                      </li>
                      <li>
                        <strong>Singapore</strong>: Coming Soon
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="out-mission">
        <div className="container">
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-content">
            To bring innovative technology into life by leveraging engineering
            workforce in Vietnam
          </p>
        </div>
      </section>
      <section className="out-vision">
        <div className="container">
          <h2 className="mission-title">Our Vision</h2>
          <p className="mission-content">
            Becoming a publicly listed company operating and investing in the
            multinational and multi-industry field with a positive working
            environment, participating in the list of 500 largest private
            enterprises in Vietnam (VNR500), based on the core competence of
            digital technology.
          </p>
        </div>
      </section>
      <section className="out-values">
        <div className="container">
          <h2 className="mission-title">Our Values</h2>
          <p className="mission-content">
            Morality - Companionship - Study - Participation - Sincerity -
            Consistency
          </p>
        </div>
      </section>
      <section className="big-guys">
        <div className="container">
          <p className="text-center title-big-guy">
            This BIG guys are using services and they are more than happier ever
          </p>
          <div className="row justify-content-center flex-wrap">
            <div className="col-2 ml">
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
            <div className="col-2 left">
              <img
                src={logo3}
                style={{
                  width: "80%",
                  height: "auto",
                  // marginLeft: "20px",
                  marginTop: "10px",
                }}
              />
            </div>
            {/* <div className="col">
              <img src={logo4} style={{ width: "80%", height: "auto" }} />
            </div> */}
            <div className="col-2 left">
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
            <div className="col-2 left">
              <img src={logo5} style={{ width: "30%", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>
      <section className="benefits-of-partnering">
        <div className="container">
          <p className="title-benefit">Benefits of Partnering with AVEO</p>
          <div className="container benefit ">
            <div className="row">
              <div className="col-4 content-part up3">
                <div className="icon-benefit">
                  <BulbOutlined />
                </div>
                <div className="text-benefit">
                  <b>Expert Advice</b>
                  <p>
                    We are a leading digital strategy consultant. We can offer
                    an unique and consultative perspective to your digital
                    transformation strategy in general and software engineering
                    in particular.
                  </p>
                </div>
              </div>
              <div className="col-4 content-part up3">
                <div className="icon-benefit">
                  <SelectOutlined />
                </div>
                <div className="text-benefit">
                  <b>Quality-Focused Solutions</b>
                  <p>
                    We are using cutting-edge technologies and tools in software
                    development process to bring the highest software
                    development quality, for example automation testing, RPA...
                  </p>
                </div>
              </div>
              <div className="col-4 content-part up3">
                <div className="icon-benefit">
                  <UserOutlined />
                </div>
                <div className="text-benefit">
                  <b>Great Talent Pool</b>
                  <p>
                    Our team has 70+ experienced developers with in-depth skills
                    & knowledge in software building and powerful technologies
                    stacks.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4 content-part up4">
                <div className="icon-benefit">
                  <PieChartOutlined />
                </div>
                <div className="text-benefit">
                  <b>Experience</b>
                  <p>
                    We are strategic partner of big corporations such as Blitz
                    Group, Co MARTCH, MIC ..and delivered 200+ systems for
                    enterprise.
                  </p>
                </div>
              </div>
              <div className="col-4 content-part up4">
                <div className="icon-benefit">
                  <SwitcherOutlined />
                </div>
                <div className="text-benefit">
                  <b>All-in-One Provider</b>
                  <p>
                    Our services are comprehensive from consulting, design,
                    development, integration, deployment to system maintenance
                    and much mores.
                  </p>
                </div>
              </div>
              <div className="col-4 content-part up4">
                <div className="icon-benefit">
                  <PaperClipOutlined />
                </div>
                <div className="text-benefit">
                  <b>Agile Mindset</b>
                  <p>
                    An agile mindset is about creating and responding to change
                    in uncertain and turbulent environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
