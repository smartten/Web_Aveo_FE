import "./EngiStyle.scss";
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
function ServiceEngineering() {
  const onChange = (key) => {
    console.log(key);
  };

  const question = [
    {
      question: `What Are "Engineering" Services?`,
      answer:
        "In context of what we do at AVEO, Engineering Services are tasks, or consulting, or analysis on technical topics; usually to support businesses with product design, product development, failure analysis (forensics), or manufacturing. The list also includes supply chain support, material choices, and process optimization.",
    },
    {
      question: "Why Hire an Engineering Consultant?",
      answer:
        "The Short Answer: It maximizes your capabilities with short-term, significant expertise.",
    },
    {
      question: "How do I contact AVEO to outsource my engineering projects?",
      answer:
        "You can either call us or fill up the contact form along with your requirements. We will get back to you with a quote.",
    },
    {
      question:
        "How much experience does AVEO have in providing engineering services?",
      answer:
        "We have an experience of more than a decade (12 years) and have been serving customers around the globe through our multiple delivery centers",
    },
    {
      question:
        "Is AVEO equipped with the latest technology and infrastructure to provide engineering services?",
      answer:
        "We are equipped with state-of-the-art infrastructure and technologies which leave our competitors far behind. Our team of engineers at AVEO can address any kind of engineering requirement.",
    },
    {
      question:
        "How do you ensure that my engineering data is kept confidential?",
      answer:
        "We follow a careful procedure to take care that none of your confidential data is published, disclosed, distributed, or sold. Additionally, we make our employees sign a non-disclosure agreement during the hiring process, assuring further peace of mind.",
    },
    {
      question:
        "What processes are undertaken to ensure the quality of engineering services?",
      answer:
        "We follow strict quality assurance processes to make sure that we deliver high quality engineering services to our customers. We are ISO 9001:2015, 27001:2015 certified.",
    },
    {
      question: "What is the project turnaround time?",
      answer:
        "We guarantee a turnaround time of 24 hours in most cases. However, the project turnaround time will also depend on project complexity, technology used, and the skills required to achieve quality results.",
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
          <div className="slider-item-engi">
            <div className="container">
              <div className="slide-content">
                <div className="text">
                  <p className="text-title">
                    <span>Engineering </span>
                  </p>
                  <p className="text-title">& Maintenance</p>
                  <p className="sub-text">
                    Owning an Agile software development team is <br /> almost
                    instant with myriad of skills you need
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
            <p className="title">Our Services</p>
            <p className="desc">
              Utilize our technical and maintenance services to help you focus
              on your core businesses. We can be involved at any point in the
              development process to accelerate the delivery of software to the
              market. By means of continuous improvement, we bring solid steps
              to your business process
            </p>
            <div className="row c4-item w-100">
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center"></div>
                <div className="title">Engineering</div>
                <div className="desc">
                  A team of experienced engineers, mastering an agile mindset,
                  constantly updating technology advancements such as AI,
                  microservices, blockchain, IoT, cloud…
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center"></div>
                <div className="title">Creative</div>
                <div className="desc">
                  Creative design brings software to customers faster, making
                  them happier. Experienced design team, leading the trend will
                  help you realize all ideas about UI/UX.
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center"></div>
                <div className="title">Maintenance</div>
                <div className="desc">
                  Comprehensive maintenance process, experienced engineer team,
                  can participate in any phase of the project, including
                  maintenance, upgrade, testing, security, deployment.
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center"></div>
                <div className="title">Human Resource</div>
                <div className="desc">
                  Deploy an almost instant development team with all the skills
                  you need for the project, available in design, development,
                  testing, maintenance, and by technology sector.
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
                    you like, why don’t you take a look at AVEO VIET NAM?
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
              Advantages of a Dedicated Development Team
            </p>
            <p className="desc">
              No matter how big or small your development project is, AVEO has
              access to a big pool of dedicated developers for quick
              augmentation.
            </p>
            <div className="row c4-item w-100">
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">1</span>
                  </p>
                </div>
                <div className="title">Top Developers</div>
                <div className="text-sub">
                  <p>
                    We tap into our talent pool to choose the top coders and
                    dedicated developers who would be most suitable for your
                    project and match your requirements. Our certified coders
                    are experts in multi-technology stacks that help you scale
                    where and when you want.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">2</span>
                  </p>
                </div>
                <div className="title">Quick Ramp-ups</div>
                <div className="text-sub">
                  <p>
                    Our highly driven team members can rapidly ramp up your
                    development project by implementing significant business
                    transformations in the blink of an eye. We leverage our
                    specialized talent to complete projects quickly to ensure
                    you reduced time-to-market while keeping in mind your
                    project's vision
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">3</span>
                  </p>
                </div>
                <div className="title">Versatile Teams</div>
                <div className="text-sub">
                  <p>
                    Let us know your project specs, and our dedicated and
                    versatile team members, with proven expertise in PHP,
                    Python, NodeJS, Django, Angular, WordPress, React Native,
                    and other diverse areas, will offer you result-driven
                    solutions. We'll help you meet your project goals on time
                    and on budget, and serve as key growth drivers for your
                    business.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">4</span>
                  </p>
                </div>
                <div className="title">Efficient Product Delivery</div>
                <div className="text-sub">
                  <p>
                    From quick customizations of pre-designed platforms to
                    full-scale software development, the high-quality and
                    efficient services of our dedicated teams, in multiple
                    areas, lead our clients to forge long-term relations with
                    us.
                  </p>
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
          <p className="sub-title">PARTNERING WITH AVEO</p>
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

export default ServiceEngineering;
