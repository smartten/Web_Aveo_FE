import "./style.scss";
import { Collapse } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
const { Panel } = Collapse;
function ServiceEngineering() {
  const onChange = (key) => {
    console.log(key);
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
                    <span>Engineering & Maintenance</span>
                  </p>
                  <p className="sub-text">
                    Owning an Agile software development team is almost instant
                    with myriad of skills you need
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
                <div className="text-center">
                  <img
                    src="https://www.propatel.com/wp-content/uploads/2019/09/coding-and-testing-programming-of-software.jpg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="title">Engineering</div>
                <div className="desc">
                  A team of experienced engineers, mastering an agile mindset,
                  constantly updating technology advancements such as AI,
                  microservices, blockchain, IoT, cloud…
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <img
                    src="https://www.propatel.com/wp-content/uploads/2019/09/coding-and-testing-programming-of-software.jpg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="title">Creative</div>
                <div className="desc">
                  Creative design brings software to customers faster, making
                  them happier. Experienced design team, leading the trend will
                  help you realize all ideas about UI/UX.
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <img
                    src="https://www.propatel.com/wp-content/uploads/2019/09/coding-and-testing-programming-of-software.jpg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="title">Maintenance</div>
                <div className="desc">
                  Comprehensive maintenance process, experienced engineer team,
                  can participate in any phase of the project, including
                  maintenance, upgrade, testing, security, deployment.
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <img
                    src="https://www.propatel.com/wp-content/uploads/2019/09/coding-and-testing-programming-of-software.jpg"
                    style={{ width: "100%" }}
                  />
                </div>
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
            <p className="title-1">
              Advantages of a Dedicated Development Team
            </p>
            <p className="desc">
              No matter how big or small your development project is, DEHA has
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
              <p className="title">Accelerate Development</p>
              <p className="text-content">
                By joining the development team quickly, our engineers help you
                resume unfinished development or maintain legacy systems
                instantaneously. Working in multiple time zones helps even when
                your office is closed.
              </p>
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-content col-6">
              <p className="title">Quality first approach</p>
              <p className="text-content">
                Quality is our primary goal. We understand that every success
                always comes from a good product. Our quality guarantee
                certifications such as{" "}
                <span style={{ fontWeight: "700" }}>
                  ISO 9001, 27001, CCMI lv3, ISTQB.
                </span>
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
              <p className="title">Fast delivery</p>
              <p className="text-content">
                Using Agile Mindset, we bring you the ability to respond to
                change quickly, software deployment speed faster than ever.
              </p>
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-content col-6">
              <p className="title">Up to date technology</p>
              <p className="text-content">
                We drink technology for breakfast and software architecture for
                lunch. Constantly updating new technology is our passion. To us,
                technology can only be better.
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
              <p className="title">Continuous improvement</p>
              <p className="text-content">
                Continuous improvement is the key that helps businesses thrive.
                Hence, our knowledge, technology, and quality are improved
                regularly to meet your business requirements.
              </p>
            </div>
          </section>
        </div>

        <section className="asked-questions container">
          <h2 className="text-title-2">Frequently Asked Questions</h2>
          <div className="collapse-questions row">
            <div className="collapse-questions-1 col-6 mt-5">
              <Collapse
                // defaultActiveKey={["1"]}
                onChange={onChange}
                style={{ border: "none" }}
              >
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      What Are "Engineering" Services?
                    </b>
                  }
                  key="1"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    In context of what we do at DEHA, Engineering Services are
                    tasks, or consulting, or analysis on technical topics;
                    usually to support businesses with product design, product
                    development, failure analysis (forensics), or manufacturing.
                    The list also includes supply chain support, material
                    choices, and process optimization.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      How do I contact DEHA to outsource my engineering
                      projects?
                    </b>
                  }
                  key="2"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    You can either call us or fill up the contact form along
                    with your requirements. We will get back to you with a
                    quote.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      Is DEHA equipped with the latest technology and
                      infrastructure to provide engineering services?
                    </b>
                  }
                  key="3"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    We are equipped with state-of-the-art infrastructure and
                    technologies which leave our competitors far behind. Our
                    team of engineers at DEHA can address any kind of
                    engineering requirement.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      What processes are undertaken to ensure the quality of
                      engineering services?
                    </b>
                  }
                  key="4"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    We follow strict quality assurance processes to make sure
                    that we deliver high quality engineering services to our
                    customers. We are ISO 9001:2015, 27001:2015 certified.
                  </p>
                </Panel>
              </Collapse>
            </div>
            <div className="collapse-questions-2 col-6 mt-5">
              <Collapse
                // defaultActiveKey={["1"]}
                onChange={onChange}
                style={{ border: "none" }}
              >
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      Why Hire an Engineering Consultant?
                    </b>
                  }
                  key="1"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    The Short Answer: It maximizes your capabilities with
                    short-term, significant expertise.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      How much experience does DEHA have in providing
                      engineering services?
                    </b>
                  }
                  key="2"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    We have an experience of more than a decade (12 years) and
                    have been serving customers around the globe through our
                    multiple delivery centers.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      How do you ensure that my engineering data is kept
                      confidential?
                    </b>
                  }
                  key="3"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    We follow a careful procedure to take care that none of your
                    confidential data is published, disclosed, distributed, or
                    sold. Additionally, we make our employees sign a
                    non-disclosure agreement during the hiring process, assuring
                    further peace of mind.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      What is the project turnaround time?
                    </b>
                  }
                  key="4"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    We guarantee a turnaround time of 24 hours in most cases.
                    However, the project turnaround time will also depend on
                    project complexity, technology used, and the skills required
                    to achieve quality results.
                  </p>
                </Panel>
              </Collapse>
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

export default ServiceEngineering;
