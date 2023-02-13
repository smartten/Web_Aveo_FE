import "./style.scss";
import { Collapse } from "antd";
import {
  ArrowRightOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
const { Panel } = Collapse;
function Integration() {
  const onChange = (key) => {
    console.log(key);
  };

  const question = [
    {
      question: "How do you integrate systems together?",
      answer:
        "To harmonize your systems, first off, we start with determining all processes and their relationships. Afterward, we can come up with the best suitable integration solution.",
    },
    {
      question: "Why is system integration important?",
      answer:
        "System integration is important for ensuring consistent data flow, effective collaboration across departments, better business intelligence and reporting.",
    },
    {
      question: "How do you integrate systems?",
      answer:
        "We have expertise in various integration platforms, database and reporting technologies, and cloud services. We are ready to offer you the best options possible, depending on your project requirements.",
    },
    {
      question: "Can you integrate legacy technology to cloud applications?",
      answer:
        "Offering hybrid integrations have been the core of our business. In many industries, the core backend systems are still operated on on-premise legacy infrastructure built decades ago and these systems are usually difficult to integrate to more modern technologies. Our cloud-based integration platform perfectly fits the requirements of doing hybrid integrations. Hybrid integrations make sense when you don't want to get rid of your current systems or simply you just can't. In that case, iPaaS can add a layer of modernization to your current systems",
    },
    {
      question: "Can you handle any data formats, even proprietary ones?",
      answer:
        "The answer is yes! Our integration platform can handle any format from legacy ones such as EDIFACT through proprietary company-specific message formats to modern ones, such as JSON or XML. We harmonize all the data into your preferred data format, so you don’t have to worry about translating or processing it yourself.",
    },
    {
      question:
        "Can you provide solutions for ensuring that the data is validated and enriched?",
      answer:
        "It is possible to validate all data against your business rules during the data transfer and if certain information is missing or the message includes errors, we will automatically forward it back for enrichment. Data validation is still done manually in many organizations which requires an extensive amount of labor force and working hours. Switching to automated validation and enrichment has saved time and money for our customers.",
    },
    {
      question: "Are you transferring data in real-time?",
      answer:
        "Timeliness of the data is vital. We can transfer data in real-time if that's your preference. We can also schedule data transfers to happen at a specific time if you prefer",
    },
    {
      question: "Do you offer API management?",
      answer:
        "APIs are essential building blocks of integration solutions. We are not only using APIs for enabling connections across trading partners, but we also offer the possibility for hosting your APIs in the cloud, if you want to build the connections yourself, as you only need a few one and using APIs make sense.",
    },
    {
      question: "How quickly can you develop new solutions?",
      answer:
        "The answer for this depends a lot on your case. Depending on the complexity of the solution, the first integrations can be deployed in just a few days or a few weeks.",
    },
    {
      question: "Do I need to employ integration architects?",
      answer:
        "No, you don't need to. Our integration experts will do all the work for you. All you need to have is a contact person from your IT team that assist our teams by answering their questions or setting up servers if necessary.",
    },
    {
      question: "How quickly can you onboard new integrations? ",
      answer:
        "Once again, it depends on the complexity of the case, however, developing, testing, and deploying a new integration can even happen in hours or in a few days. Just recently, we managed to do a complex high volume integration in 10 days while it would have lasted almost a year for another vendor.",
    },
    {
      question: "Do you provide support for maintaining the solutions?",
      answer:
        "We provide full support for maintaining the solutions. Depending on your requirements, you can choose the support plan that fits your need the most.",
    },
    {
      question: "Do I have full ownership of my data?",
      answer:
        "DEHA do not own or store your data. The data is only moving through our solutions in the cloud, but you maintain complete ownership of your data. Although, if you want, we can store the data on your behalf, as well as provide data logs for your reference.",
    },
    {
      question:
        "How secure is to transfer business-critical data through cloud solutions?",
      answer:
        "Transferring your information through our integrations in the cloud is secure. Our technical teams are happily answering any of your questions regarding security and comply with your security assessments if you find it necessary.",
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
                    <span>Reliable system integration</span>
                  </p>
                  <p className="sub-text">
                    Leads you to combine software products and technical
                    resources and make it a seamlessly integrated solution.
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
            <p className="title">What we offer</p>
            <p className="desc">
              We deliver software integration services, focusing on creating new
              business values, and improving IT infrastructure. We offer tech
              advisory, custom development, custom and ready-made APIs and
              software solutions integration.
            </p>
            <div className="row c4-item w-100">
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <img
                    src="https://www.propatel.com/wp-content/uploads/2019/09/coding-and-testing-programming-of-software.jpg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="title">System integration consulting</div>
                <div className="desc">
                  We are a system integration company with strong expertise in
                  providing ERP integration services, customer relationships
                  management (CRM), enterprise content management (ECM). We help
                  companies make their applications interoperable and compatible
                  with other business solutions.
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <img
                    src="https://www.propatel.com/wp-content/uploads/2019/09/coding-and-testing-programming-of-software.jpg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="title">Service-oriented architecture</div>
                <div className="desc">
                  Align your business objectives with your company’s IT
                  environment. We deliver service-oriented architecture services
                  and solutions, providing many benefits to your organization,
                  including enhanced information flow, configuration
                  flexibility, ability to quickly build new functionalities,
                  advanced integration capabilities, and many more.
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <img
                    src="https://www.propatel.com/wp-content/uploads/2019/09/coding-and-testing-programming-of-software.jpg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="title">Data integration</div>
                <div className="desc">
                  We help businesses organize their data across disparate data
                  sources and databases for improved information consistency and
                  quality. We also design and build modern data warehousing
                  solutions, modernize your existing DWH systems according to
                  current business logic and end-user needs.
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <img
                    src="https://www.propatel.com/wp-content/uploads/2019/09/coding-and-testing-programming-of-software.jpg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="title">API integration</div>
                <div className="desc">
                  Align multiple systems using API integration services. We
                  offer custom API development and ready-made solutions
                  integration for a wide range of business applications and
                  functions for a more efficient workflow and higher
                  productivity. Our expertise includes REST, JSON, XML, SOAP.
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
                  <h2>Let's Make it Happen Together!</h2>
                  <p>
                    There are still not enough friends to realize our goal of “a
                    world where everyone can be absorbed in value creation.” If
                    you like, why don’t you take a look at DEHA VIET NAM?
                  </p>
                  <a href="#" className="button btn-reverse">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-approach">
          <div className="container">
            <p className="title-1">Our Processes</p>
            <p className="desc">
              We analyze your business models and IT infrastructure to deliver
              the most effective solution. Our goal is to improve the datum
              quality and consistency inside your organization and increase
              compatibility across disparate software applications.
            </p>
            <div className="row c4-item w-100">
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">1</span>
                  </p>
                </div>
                <div className="title">System analysis</div>
                <div className="text-sub">
                  <p>
                    Each project starts with a comprehensive analysis that
                    serves a basis for further solution design and architecture,
                    time and cost estimations. Our IT integration services are
                    aimed at identifying the project’s business challenges;
                    based on findings, we offer the respective technology
                    solution.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">2</span>
                  </p>
                </div>
                <div className="title">System assessment</div>
                <div className="text-sub">
                  <p>
                    After the analysis stage, you get comprehensive
                    documentation with detailed recommendations and offered
                    solutions. The latter is built to increase agility, reduce
                    costs for IT maintenance, and improve data quality.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">3</span>
                  </p>
                </div>
                <div className="title">IT modernization</div>
                <div className="text-sub">
                  <p>
                    We deliver IT infrastructure modernization services as part
                    of system integration or legacy application modernization
                    services. Our experts will explore your current IT landscape
                    to prepare it for a smooth integration process.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <p>
                    <span className="number">4</span>
                  </p>
                </div>
                <div className="title">Solution design</div>
                <div className="text-sub">
                  <p>
                    We deliver custom software development and implementation
                    services for integration purposes. Based on functional and
                    non-functional requirements, our specialists will create
                    software requirements specification and confirm it with you.
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
          <p className="sub-title">PARTNERING WITH DEHA</p>
        </section>
        <div className="container">
          <section className="section-feature-1 row mb-5">
            <div className="feature-img col-6">
              <img
                src="https://img.freepik.com/free-vector/isometric-people-working-with-technology_52683-19078.jpg?w=2000"
                style={{ width: "100%" }}
              />
            </div>
            <div className="feature-content col-6">
              <p className="title">Efficient Integration</p>
              <p className="text-content">
                Your integration will be simplified and amplify efficiency. We
                work to decrease the development effort from your side while
                still executing a custom integration solution.
              </p>
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-content col-6">
              <p className="title">Optimize value</p>
              <p className="text-content">
                Identify ways to maximize the potential of your platforms before
                you merge them. Our experts assist you in understanding how to
                build on existing technologies to add value and compete in the
                marketplace.
              </p>
            </div>
            <div className="feature-img col-6">
              <img
                src="https://img.freepik.com/free-vector/isometric-people-working-with-technology_52683-19078.jpg?w=2000"
                style={{ width: "100%" }}
              />
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-img col-6">
              <img
                src="https://img.freepik.com/free-vector/isometric-people-working-with-technology_52683-19078.jpg?w=2000"
                style={{ width: "100%" }}
              />
            </div>
            <div className="feature-content col-6">
              <p className="title">Protect your data</p>
              <p className="text-content">
                Preserve your data not leaked or lost during the integration
                process. We use the encrypted network and leading security
                technology to ensure your secure migration.
              </p>
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-content col-6">
              <p className="title">Risk management</p>
              <p className="text-content">
                We analyze each platform and future technology to give you a
                panorama picture of its integration. From that point, your team
                can prepare the potential risks and how to overcome them.
              </p>
            </div>
            <div className="feature-img col-6">
              <img
                src="https://img.freepik.com/free-vector/isometric-people-working-with-technology_52683-19078.jpg?w=2000"
                style={{ width: "100%" }}
              />
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-img col-6">
              <img
                src="https://img.freepik.com/free-vector/isometric-people-working-with-technology_52683-19078.jpg?w=2000"
                style={{ width: "100%" }}
              />
            </div>
            <div className="feature-content col-6">
              <p className="title">Strong expertise</p>
              <p className="text-content">
                For more than six years, we have been delivering enterprise
                system integration services to small and million-dollar
                businesses. Thus, our team can provide you with professional
                consulting on your integration project..
              </p>
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-content col-6">
              <p className="title">Free strategy</p>
              <p className="text-content">
                We have a good option for those having no idea how to start an
                integration project. The session with our experts can help you
                get a step-by-step strategy for your project development for
                free. You will get many useful materials to kick off your
                project.
              </p>
            </div>
            <div className="feature-img col-6">
              <img
                src="https://img.freepik.com/free-vector/isometric-people-working-with-technology_52683-19078.jpg?w=2000"
                style={{ width: "100%" }}
              />
            </div>
          </section>
        </div>

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
          <a href="#" className="btn-schedule">
            Schedule time to talk <ArrowRightOutlined />
          </a>
        </section>
        <section className="our-clients">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="title">
                  <p className="text-v1">Our Clients</p>
                  <p className="text-v2">Trusted by over 300+ clients</p>
                  <p className="text-v3">
                    We bring solutions to make life easier for our customers.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Integration;
