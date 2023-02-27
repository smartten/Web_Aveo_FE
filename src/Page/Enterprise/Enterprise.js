import "./EnterpriseStyle.scss";
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
function Enterprise() {
  const onChange = (key) => {
    console.log(key);
  };

  const question = [
    {
      question: "What is Enterprise Service Management?",
      answer:
        "Enterprise Service Management is defined as the strategy of applying service management principles to departments outside of IT, or throughout an organization. Using a single platform for all service management (including IT Service Management), you can tailor portals for each department; automate routing and workflows; utilize a single information repository; and track and report on outcomes.",
    },
    {
      question: "What is ESM tool?",
      answer:
        "ESM-Tools are a software developed with the aim to unify model infrastructure, giving a common framework for downloading, compiling, running and organizing coupled or standalone models.",
    },
    {
      //   key: 1,
      question: "ESM vs. ITSM",
      answer:
        "Enterprise service management is a term used to describe the use of service-oriented processes and tools across and organization (hence the use of “enterprise” as a qualifier in the name). ESM is meant to be a broad term (like ERP, EAM and CRM). This is a contrast to IT Service Management (ITSM) which is only concerned with the management of IT services. While the intended scope of ESM and ITSM are different, they share common roots (usually ITIL) and are often implemented using a common set of concepts, processes and tools within the organization. Many companies leverage ITIL domains and process areas as the foundation for their Enterprise Service Management operations and ITSM platforms to provide technology and information support for ESM processes",
    },
    {
      question: "Who Can benefit from ESM?",
      answer:
        "Employee HR support, Finance, Legal, Customer Service, Sales Support Security, Facilities / Building Management, Administrative support",
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
          <div className="slider-item">
            <div className="container">
              <div className="slide-content">
                <div className="text">
                  <p className="text-title">
                    <span>Enterprise Service</span>
                  </p>
                  <p className="sub-text">
                    Enterprise Service Management has emerged as a highly <br />
                    effective business model for delivering value to customers
                    <br />
                    either directly or through the internal operations of a
                    company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className="secction-title-1 mb-5">
          <p className="text-title">
            We bring you quickly spin up new groups such as HR, Facilities,
            Marketing, and more.
          </p>
          <p className="text-title">
            We tailor our solution to fit your business.
          </p>
        </section>
        <div className="container">
          <section className="section-feature-1 row mb-5">
            <div className="feature-img col-6">
              <img
                src="https://us.123rf.com/450wm/ostapenko/ostapenko1805/ostapenko180500160/ostapenko180500160.jpg?ver=6"
                style={{ width: "100%" }}
              />
            </div>
            <div className="feature-content col-6">
              <p className="title">Facilities</p>
              <ul>
                <li>Preventative Maintenance (PMCS) workflows and tracking</li>
                <li>Work Order Management</li>
                <li>Field Service Management</li>
                <p>
                  Manage work orders, assets, preventative maintenance, and
                  projects with the ability to assign and track all resources
                  and activities in one place. Accessible from any device via a
                  centralized portal means quick access for field techs and
                  end-users.
                </p>
              </ul>
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-content col-6">
              <p className="title">Human resources</p>
              <ul>
                <li>Onboarding/off-boarding of employees</li>
                <li>Simplify case management, HIPAA compliant</li>
                <li>Provide a single portal for all employee inquiries</li>
                <p>
                  Reduce inbound inquiries and improve employee response times
                  by offering an HR portal with integrated automation. Create a
                  centralized hub of information links and buttons for HR
                  actions-with integrated workflows-to help employees find the
                  answers they need quickly and reduce the drain on HR
                  resources.
                </p>
              </ul>
            </div>
            <div className="feature-img col-6">
              <img
                src="https://us.123rf.com/450wm/ostapenko/ostapenko1805/ostapenko180500160/ostapenko180500160.jpg?ver=6"
                style={{ width: "100%" }}
              />
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-img col-6">
              <img
                src="https://us.123rf.com/450wm/ostapenko/ostapenko1805/ostapenko180500160/ostapenko180500160.jpg?ver=6"
                style={{ width: "100%" }}
              />
            </div>
            <div className="feature-content col-6">
              <p className="title">Marketing & Creative</p>
              <ul>
                <li>
                  Create a request system for brochures, creative, events, etc.
                </li>
                <li>
                  Assign resources, timelines, and deliverables to each request
                </li>
                <li>
                  Manage requests, workflows, and projects together in one
                  platform
                </li>
                <p>
                  Marketers know, the requests never stop. Don't work harder,
                  work smarter. Manage all projects and inbound requests. See
                  work output, resource allocations, timing, and budgets in a
                  single portfolio view.
                </p>
              </ul>
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-content col-6">
              <p className="title">Event management</p>
              <ul>
                <li>
                  Create a project portfolio for both virtual and live events
                </li>
                <li>Assign and manage resource allocations across events</li>
                <li>Track project status, timing, and expenses</li>
                <p>
                  Events are complex - whether virtual or live, there are many
                  moving parts - from the invite process to programming and
                  execution. Manage each activity in a cohesive project plan
                  with team task creation and tracking.
                </p>
              </ul>
            </div>
            <div className="feature-img col-6">
              <img
                src="https://us.123rf.com/450wm/ostapenko/ostapenko1805/ostapenko180500160/ostapenko180500160.jpg?ver=6"
                style={{ width: "100%" }}
              />
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-img col-6">
              <img
                src="https://us.123rf.com/450wm/ostapenko/ostapenko1805/ostapenko180500160/ostapenko180500160.jpg?ver=6"
                style={{ width: "100%" }}
              />
            </div>
            <div className="feature-content col-6">
              <p className="title">Media management service</p>
              <ul>
                <li>
                  Asset tracking solutions and calibration/preventative
                  maintenance workflow
                </li>
                <li>Manage tickets and workflow with IT</li>
                <li>Centralized repository for self-service troubleshooting</li>
                <p>
                  From ongoing maintenance and calibration of equipment to
                  requests for usage or location tracking, managing AV assets
                  requires a systematic approach. One portal allows you to take
                  requests, track assets, and even coordinate new projects.
                </p>
              </ul>
            </div>
          </section>
        </div>
        <section className="our-approach">
          <div className="container">
            <p className="title-1">
              Why do you need Enterprise Service Management today?
            </p>
            <p className="desc">
              Companies implement enterprise service management processes and
              tools for the same reasons they undertake most strategic
              initiatives: productivity, efficiency, and quality.
            </p>
            <div className="row c4-item w-100">
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">1</span>
                  </p>
                </div>
                <div className="title">Sustainable value</div>
                <div className="desc">
                  <p>
                    Tracking incidents as they move through different support
                    teams is difficult and can lead to frustrating experiences
                    for end-users. Help desk software provides a single place
                    for managing the incident from the time it is reported until
                    the issue is resolved.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">2</span>
                  </p>
                </div>
                <div className="title">Decreased cost of delivery</div>
                <div className="desc">
                  <p>
                    Help desk software can provide more self-service and
                    user-enabled capabilities along with the ability to access
                    support resources from wherever the user happens to be
                    through mobile tools and web-based interfaces. It puts more
                    tools in the user's hands and reduces the resource burden on
                    help desk staff.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">3</span>
                  </p>
                </div>
                <div className="title">
                  Improved internal business alignment
                </div>
                <div className="desc">
                  <p>
                    With actionable intelligence to help your IT Service
                    Management organization manage the evolving challenges of
                    delivering effective service in increasingly complex
                    environments. Provide your teams with a detailed view of
                    your infrastructure and its dependencies with diagnostic
                    data, performance information, and actionable knowledge.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">4</span>
                  </p>
                </div>
                <div className="title">
                  Better informed governance decisions
                </div>
                <div className="desc">
                  <p>
                    With increased operational visibility. When it is clear what
                    each function is supposed to be doing and transparency into
                    how service delivery is taking place, it is easier for
                    management to make better-informed decisions and more
                    impactful leadership guidance to the organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="imgv1 d-flex align-items-center">
          <div className="container mt-5">
            <h2>
              With the use of technology, there is so much that we can
              accomplish together.
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

export default Enterprise;
