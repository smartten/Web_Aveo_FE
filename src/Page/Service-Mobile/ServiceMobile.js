import "./MobileStyle.scss";
import { Collapse } from "antd";
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
import React, { useState } from "react";
const { Panel } = Collapse;
function ServiceMobile() {
  const onChange = (key) => {
    console.log(key);
  };
  const question = [
    {
      question:
        "How can I start Mobile development services with DEHA for my business?",
      answer:
        "You can simply call or email DEHA to begin your Mobile development services. DEHA's developers can make your Mobile development easy and fruitfu",
    },
    {
      question:
        "Do you offer post- App development support and maintenance for iPhone apps?",
      answer:
        "We have a team of project managers, developers and designers who will be working on your project. They will continuously update you during each development stage and pass on your changes and approvals to the respective teams.",
    },
    {
      question:
        "Will you partner with us as an android app development company for our clients?",
      answer:
        "DEHA can partner with you to provide an android app development for your clients. DEHA's android developers can note the client requirements and then recommend the right solution to them",
    },
    {
      question:
        "Is DEHA provides custom android app development services for my business?",
      answer:
        "DEHA doesn't aim to offer a standard solution to all enterprises. Instead, they can create a tailored android app to suffice the needs of your business. The app development company can custom-build a robust solution based on your industry and brand position.",
    },
    {
      question:
        "Which technologies and tools do you use to develop Android applications?",
      answer:
        "We use various tools and technologies such as XML, SQLite, Android NDK, Realm, and Android SDK to design and develop an Android application for your business.",
    },
    {
      question:
        "Which programming languages are the best for developing Android apps?",
      answer:
        "The programming language most used to develop Android applications is Java. In fact, a major part of the Android operating system is written in Java. But we also use C, Android NDK, and C++ to build Android applications.",
    },
    {
      question: "How much time will you take to complete the project?",
      answer:
        "We usually take around one or two months for Mobile application development. But the exact time taken to complete your project can be determined only after we discuss the idea and other project details.",
    },
    {
      question: "Is there a chance that Apple will reject my application?",
      answer:
        "We can reduce the possibility of your mobile app getting rejected. Our team of iOS app developers strictly follows the standard guidelines and functionality set by Apple. We offer quality assurance and testing services to ensure there's no room for rejection",
    },
    {
      question:
        "Which programming languages do you use to build iPhone applications?",
      answer:
        "The programming languages we use to develop your iPhone applications are Objective-C and C. We also use the XCode platform, as Apple offers support for C++ on XCode’s latest version.",
    },
    {
      question:
        "Do you offer post- App development support and maintenance for iPhone apps?",
      answer:
        "We are a leading iOS app development agency, and we help and maintenance even after your mobile application is deployed. We offer services like app upgrading, troubleshooting, system improvement, and others. By maintaining your mobile app regularly, we ensure it offers 100% performance and boosts your revenue.",
    },
  ];

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="body">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item-mobi">
            <div className="container">
              <div className="slide-content">
                <div className="text">
                  <p className="text-title">
                    <span>Mobile </span>
                  </p>
                  <p className="text-title">Development</p>
                  <p className="sub-text">
                    Build and transform your business through strategy,
                    <br /> design, and app development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className="section-services">
          <div className="container">
            <p className="title">We Create Best in Mobile Experiences</p>
            <div className="row c4-item w-100">
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <img src="" style={{ width: "100%" }} />
                </div>
                <div className="title">Innovative Design</div>
                <div className="desc">
                  We develop easy-to-use and creative Mobile application designs
                  that offer your users smoother navigation.
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <img src="" style={{ width: "100%" }} />
                </div>
                <div className="title">Customized App Development Company</div>
                <div className="desc">
                  We are a leading Mobile app development company, and our team
                  of Mobile developers offers fully customized Mobile app
                  development services that match your business and app
                  requirements.
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <img src="" style={{ width: "100%" }} />
                </div>
                <div className="title">On-Time Delivery</div>
                <div className="desc">
                  We understand that your time is precious, and we work hard to
                  complete the project on time while maintaining quality!
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <img src="" style={{ width: "100%" }} />
                </div>
                <div className="title">Years Of Experience</div>
                <div className="desc">
                  Being top Mobile app development company DEHA houses a team of
                  designers and developers with hands-on experience in Mobile
                  app development services.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-us">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-12 col-md-5">
                <div className="hrContent">
                  <h2>Let’s Make it Happen Together!</h2>
                  <p>
                    There are still not enough friends to realize our goal of “a
                    world where everyone can be absorbed in value creation.” If
                    you like, why don’t you take a look at DEHA VIET NAM?
                  </p>
                  <a href="/contact-us" className="button btn-reverse">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-approach">
          <div className="container">
            <p className="title-1">
              From Lean Design Sprints to Agile App Development
            </p>
            <p className="desc">
              Understanding and solving hundreds of case studies in the field of
              mobile applications, we are confident to bring customers a WOW
              experience with our application development experts. From the
              concept to the app being deployed to the Appstore, you’ll be
              completely satisfied with every step we take.
            </p>
            <div className="row c4-item w-100">
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">1</span>
                  </p>
                </div>
                <div className="title">Discover</div>
                <div className="list">
                  <ul>
                    <li>Hearing problems and requirements</li>
                    <li>Quotation</li>
                    <li>Propose Proposal and Contract</li>
                    <li>Requirement’s analysis</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">2</span>
                  </p>
                </div>
                <div className="title">Design & Implementation</div>
                <div className="list">
                  <ul>
                    <li>Prototyping</li>
                    <li>UI/UX design</li>
                    <li>Mobile App and API Development</li>
                    <li>3rd party integration</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">3</span>
                  </p>
                </div>
                <div className="title">Testing & Feedback</div>
                <div className="list">
                  <ul>
                    <li>Quality assurance</li>
                    <li>System Testing & Bug fixing</li>
                    <li>Feedback analysis</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">4</span>
                  </p>
                </div>
                <div className="title">Support & Maintenance</div>
                <div className="list">
                  <ul>
                    <li>App store deployment & optimize consultation</li>
                    <li>Application maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="imgv1 d-flex align-items-center">
          <div className="container mt-5">
            <h2>
              Revenue growth, user satisfaction with our leading mobile app
              developers. We carry out every step from consulting, design,
              development, and app store deployment.
            </h2>
          </div>
        </div>
        <section className="secction-title-1 mb-5">
          <p className="title">The benefit of</p>
          <p className="sub-title">PARTNERING WITH DEHA</p>
        </section>
        <section className="container benefit ">
          <div className="row">
            <div className="col-4 content-part">
              <div className="icon-benefit">
                <BulbOutlined />
              </div>
              <div className="text-benefit">
                <b>Expert Advice</b>
                <p>
                  We are a leading digital strategy consultant. We can offer an
                  unique and consultative perspective to your digital
                  transformation strategy in general and software engineering in
                  particular.
                </p>
              </div>
            </div>
            <div className="col-4 content-part">
              <div className="icon-benefit">
                <SelectOutlined />
              </div>
              <div className="text-benefit">
                <b>Quality-Focused Solutions</b>
                <p>
                  We are using cutting-edge technologies and tools in software
                  development process to bring the highest software development
                  quality, for example automation testing, RPA...
                </p>
              </div>
            </div>
            <div className="col-4 content-part">
              <div className="icon-benefit">
                <UserOutlined />
              </div>
              <div className="text-benefit">
                <b>Great Talent Pool</b>
                <p>
                  Our team has 260+ experienced developers with in-depth skills
                  & knowledge in software building and powerful technologies
                  stacks.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4 content-part">
              <div className="icon-benefit">
                <PieChartOutlined />
              </div>
              <div className="text-benefit">
                <b>Experience</b>
                <p>
                  We are strategic partner of big corporations such as Mitsui
                  O.S.K.Line, Marubeni, Mitani, Hino Motor, Vinmec International
                  Hospital...and delivered 1,000+ systems for enterprise.
                </p>
              </div>
            </div>
            <div className="col-4 content-part">
              <div className="icon-benefit">
                <SwitcherOutlined />
              </div>
              <div className="text-benefit">
                <b>All-in-One Provider</b>
                <p>
                  Our services are comprehensive from consulting, design,
                  development, integration, deployment to system maintenance and
                  much mores.
                </p>
              </div>
            </div>
            <div className="col-4 content-part">
              <div className="icon-benefit">
                <PaperClipOutlined />
              </div>
              <div className="text-benefit">
                <b>Agile Mindset</b>
                <p>
                  An agile mindset is about creating and responding to change in
                  uncertain and turbulent environments.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="our-favourite-stacks">
          <div className="container pt-5">
            <div className="text-title text-center">
              <h3 className="text-title-1">Our Favourite Stacks</h3>
              <h2 className="text-title-2">Technologies Expertise</h2>
            </div>
            <div className="section-structure">
              <div className="structure">
                <div className="structure-name">Mobile App Development</div>
                <div className="structure-techs">
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/W5gytm5RxG6p9xcfk8Og/" />
                    </div>
                    <div className="tech-name">Swift</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/yDmCjm3SWWcEHMEoRNug/" />
                    </div>
                    <div className="tech-name">Java</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/gT7kMmAtQq25tD4IRd5d/" />
                    </div>
                    <div className="tech-name">Kotlin</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/nzvg30JaRAKmi7fe8iJb/" />
                    </div>
                    <div className="tech-name">Objective-C</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/Hcf5fMeHQWi7c4HI3ZiD/" />
                    </div>
                    <div className="tech-name">ReactNative</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/I7gzLhqzS8OeAHmoU1eP/" />
                    </div>
                    <div className="tech-name">Flutter</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/3FJNR7HQyCaqtTUdS24w/" />
                    </div>
                    <div className="tech-name">Ionic</div>
                  </div>
                </div>
              </div>
              <div className="structure">
                <div className="structure-name">Database</div>
                <div className="structure-techs">
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/doiZ9RTST4GNHQmhGOXA/" />
                    </div>
                    <div className="tech-name">MySQL</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/RsVXSgPQQqq81SPDOzsw/" />
                    </div>
                    <div className="tech-name">Postgre SQL</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/4xJPaGIySeCcuxQwtm9L/" />
                    </div>
                    <div className="tech-name">Redis</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/ja1APEkTTACB1muBU4tA/" />
                    </div>
                    <div className="tech-name">Mongo DB</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/akjs0V5TSje7zBN64WxY/" />
                    </div>
                    <div className="tech-name">MariaDB</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/NXxC3ciVRfulE0iDTVV9/" />
                    </div>
                    <div className="tech-name">SQ Lite</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="asked-questions container">
          <h2 className="text-title-2">Frequently Asked Questions</h2>
          <div className="collapse-questions row mt-5">
            <div className="col-md-6 faq-container">
              {question.map((item, i) => (
                <div className="row-item">
                  <div className="faq-question">
                    <div
                      className="question-content"
                      style={{ borderBottom: "1px solid" }}
                    >
                      <a className="desc btn" onClick={() => toggle(i)}>
                        <b className={selected === i ? "text-color" : ""}>
                          {item.question}
                        </b>
                        <span>
                          {selected === i ? (
                            <CaretUpOutlined className="text-color" />
                          ) : (
                            <CaretDownOutlined />
                          )}
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    className={
                      selected === i
                        ? "col faq-answer show"
                        : "col faq-answer collapse"
                    }
                  >
                    <div
                      className="card card-body"
                      style={{ backgroundColor: "#efefef", margin: "10px 0px" }}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="schedule container"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <a href="/contact-us" className="btn-schedule">
            Schedule time to talk <ArrowRightOutlined />
          </a>
        </section>
      </main>
    </div>
  );
}

export default ServiceMobile;
