import "./style.scss";
import { Collapse } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
const { Panel } = Collapse;
function ServiceWeb() {
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
                    <span>Web design & development</span>
                  </p>
                  <p className="sub-text">
                    Custom web design & development services catch up with the
                    digital transformation.
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
            <p className="title">Our Web Application Development Services</p>
            <p className="desc">
              Regardless of how complex or even small your needs are, our
              dedicated in-house team of web developers and project managers
              will ensure that the job gets done with the highest level of
              professionalism and most cost affordably.
            </p>
            <div className="row c4-item w-100">
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrtz1IBmihsI5r44aBGpm1k5kJYEw3MCXNfg&usqp=CAU"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="title">Front-end Development</div>
                <div className="desc">
                  We work with modern frameworks like React.js, Angular, Vue.js,
                  Nuxt, Next, and Gatsby to create next-generation user
                  experiences that integrate and interact seamlessly with your
                  database and APIs.
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrtz1IBmihsI5r44aBGpm1k5kJYEw3MCXNfg&usqp=CAU"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="title">Back-end Development</div>
                <div className="desc">
                  Leverage our expertise with Cloud, DevOps, PHP, Node.js,
                  Python, .NET, Java, and RoR to build custom, secure and
                  reliable backends and APIs for web or mobile apps across
                  multiple domains.
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrtz1IBmihsI5r44aBGpm1k5kJYEw3MCXNfg&usqp=CAU"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="title">Web Applications</div>
                <div className="desc">
                  As a web application development company, we have built all
                  sorts of web applications, from online forms and workflows to
                  whole management systems. We work on projects both big and
                  small.
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrtz1IBmihsI5r44aBGpm1k5kJYEw3MCXNfg&usqp=CAU"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="title">Dedicated Web Developer</div>
                <div className="desc">
                  Hiring dedicated Web developers remotely can help your
                  business scale faster. You can hire dedicated Web developers
                  40h/week at a fixed monthly rate.
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
            <p className="title-1">Our approach to solve your problems</p>
            <p className="desc">
              With a point of view starts at clients' eyes to giving advice, we
              can understand the problem, consult the suitable solution, and
              deliver the best product.
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
                    <li>Solution design</li>
                    <li>Interface design</li>
                    <li>Information architecture</li>
                    <li>Website development</li>
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
                    <li>Automation testing & Bug fixingn</li>
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
                    <li>Health check</li>
                    <li>3rd party integration</li>
                    <li>System maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="imgv1 d-flex align-items-center">
          <div className="container mt-5">
            <h2>
              Our expert will bring an elegant, well-designed, and
              high-performance website to your client with perfect quality and
              meet your business needs.
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
                src="https://duhocthanhcong.vn/wp-content/uploads/school-photos/IMG%20Academy/IMG-Academy-Album1.jpg"
                style={{ width: "100%" }}
              />
            </div>
            <div className="feature-content col-6">
              <p className="title">Quality Product</p>
              <p className="text-content">
                Quality is our primary goal. We understand that every success
                always comes from a good product. Our quality guarantee
                certifications such as{" "}
                <span style={{ fontWeight: "700" }}>
                  ISO 9001, 27001, CCMI lv3, ISTQB.
                </span>
              </p>
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-content col-6">
              <p className="title">Talent Team</p>
              <p className="text-content">
                Our IT team experts are more than like a unity. We build a
                development team with a shared sense of ownership, knowledge,
                and high skill sets. We ready to seamlessly integrate with your
                industry practices, development approach, and process.
              </p>
            </div>
            <div className="feature-img col-6">
              <img
                src="https://duhocthanhcong.vn/wp-content/uploads/school-photos/IMG%20Academy/IMG-Academy-Album1.jpg"
                style={{ width: "100%" }}
              />
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-img col-6">
              <img
                src="https://duhocthanhcong.vn/wp-content/uploads/school-photos/IMG%20Academy/IMG-Academy-Album1.jpg"
                style={{ width: "100%" }}
              />
            </div>
            <div className="feature-content col-6">
              <p className="title">Budget-Friendly</p>
              <p className="text-content">
                DEHA follows an economical and agile method to help clients
                build cost-effective development solutions. Beyond that, you
                will receive our commitment to the performance of the product
                that fits your business.
              </p>
            </div>
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-content col-6">
              <p className="title">Innovation</p>
              <p className="text-content">
                Continuous improvement is the key that helps businesses thrive.
                Not only a technology partner but also, we are your trusted
                companion. Technology is changing every day, so we will keep you
                up to date.
              </p>
            </div>
            <div className="feature-img col-6">
              <img
                src="https://duhocthanhcong.vn/wp-content/uploads/school-photos/IMG%20Academy/IMG-Academy-Album1.jpg"
                style={{ width: "100%" }}
              />
            </div>
          </section>
        </div>
        <section className="our-favourite-stacks">
          <div className="container pt-5">
            <div className="text-title text-center">
              <h3 className="text-title-1">Our Favourite Stacks</h3>
              <h2 className="text-title-2">Technologies Expertise</h2>
            </div>
            <div style={{ height: "300px" }}></div>
          </div>
        </section>

        <section className="asked-questions container">
          <h2 className="text-title-2">Frequently Asked Questions</h2>
          <div className="collapse-questions row">
            <div className="collapse-questions-1 col-6 mt-5">
              <Collapse
                defaultActiveKey={["1"]}
                onChange={onChange}
                style={{ border: "none" }}
              >
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      What is the average cost of developing a website?
                    </b>
                  }
                  key="1"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    We are a leading PHP development company and we have a
                    strong policy of accountability, so we quote approximate
                    costs based on project requirements. We list all necessary
                    project specifics and then determine the average time needed
                    to accomplish each project. In addition, we present a plan
                    that details the expense and amount of time the project
                    would require.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      Do you develop mobile-friendly websites?
                    </b>
                  }
                  key="2"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "18px" }}>
                    Yes, we develop websites that are mobile-friendly. Our
                    professional developers are well versed in advanced
                    technologies based on CSS3 and HTML5. Being top php web
                    development company we develop web applications that are
                    engaging, consumer-centric, and graphically compelling,
                    ideal for mobile devices.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      How do you ensure the quality of the project?
                    </b>
                  }
                  key="3"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "18px" }}>
                    We take a strict target-based approach to every project.
                    Once you agree to our services, your project will move
                    through our various departments for development, design, and
                    quality testing. This will ensure you get the best results.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      What are the benefits of Web development services?
                    </b>
                  }
                  key="4"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "18px" }}>
                    We have a long history of providing top-notch Web solutions.
                    Using a comprehensive knowledge base to meet your core
                    needs, we leverage high-end strategies to create engaging
                    websites. We're here to create interactive UI/UX, and a
                    standard coding framework lets us use our skill set and
                    technologies to create exactly what you need.
                  </p>
                </Panel>
              </Collapse>
            </div>
            <div className="collapse-questions-2 col-6 mt-5">
              <Collapse
                defaultActiveKey={["1"]}
                onChange={onChange}
                style={{ border: "none" }}
              >
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      What is the average cost of developing a website?
                    </b>
                  }
                  key="1"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    We are a leading PHP development company and we have a
                    strong policy of accountability, so we quote approximate
                    costs based on project requirements. We list all necessary
                    project specifics and then determine the average time needed
                    to accomplish each project. In addition, we present a plan
                    that details the expense and amount of time the project
                    would require.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      Do you develop mobile-friendly websites?
                    </b>
                  }
                  key="2"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "18px" }}>
                    Yes, we develop websites that are mobile-friendly. Our
                    professional developers are well versed in advanced
                    technologies based on CSS3 and HTML5. Being top php web
                    development company we develop web applications that are
                    engaging, consumer-centric, and graphically compelling,
                    ideal for mobile devices.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      How do you ensure the quality of the project?
                    </b>
                  }
                  key="3"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "18px" }}>
                    We take a strict target-based approach to every project.
                    Once you agree to our services, your project will move
                    through our various departments for development, design, and
                    quality testing. This will ensure you get the best results.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      What are the benefits of Web development services?
                    </b>
                  }
                  key="4"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "18px" }}>
                    We have a long history of providing top-notch Web solutions.
                    Using a comprehensive knowledge base to meet your core
                    needs, we leverage high-end strategies to create engaging
                    websites. We're here to create interactive UI/UX, and a
                    standard coding framework lets us use our skill set and
                    technologies to create exactly what you need.
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

export default ServiceWeb;
