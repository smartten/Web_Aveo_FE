import "./style.scss";
import { Collapse } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
const { Panel } = Collapse;
function ServiceMobile() {
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
                    <span>Mobile Development</span>
                  </p>
                  <p className="sub-text">
                    Build and transform your business through strategy, design,
                    and app development
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
                  <img
                    src="https://cdn.online.codegym.vn/wp-content/uploads/sites/5/2021/08/khoa-hoc-mobile-app-development-9.jpg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="title">Innovative Design</div>
                <div className="desc">
                  We develop easy-to-use and creative Mobile application designs
                  that offer your users smoother navigation.
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <img
                    src="https://cdn.online.codegym.vn/wp-content/uploads/sites/5/2021/08/khoa-hoc-mobile-app-development-9.jpg"
                    style={{ width: "100%" }}
                  />
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
                  <img
                    src="https://cdn.online.codegym.vn/wp-content/uploads/sites/5/2021/08/khoa-hoc-mobile-app-development-9.jpg"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="title">On-Time Delivery</div>
                <div className="desc">
                  We understand that your time is precious, and we work hard to
                  complete the project on time while maintaining quality!
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center">
                  <img
                    src="https://cdn.online.codegym.vn/wp-content/uploads/sites/5/2021/08/khoa-hoc-mobile-app-development-9.jpg"
                    style={{ width: "100%" }}
                  />
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
        <div className="container">
          <section className="section-feature-1 row mb-5">
            <div className="feature-img col-6">
              <img
                src="https://img.freepik.com/free-vector/isometric-people-working-with-technology_52683-19078.jpg?w=2000"
                style={{ width: "100%" }}
              />
            </div>
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
          </section>
          <section className="section-feature-1 row mb-5">
            <div className="feature-content col-6">
              <p className="title">Fast delivery</p>
              <p className="text-content">
                OApplying Agile Mindset, we bring you the ability to respond to
                change quickly, software deployment speed faster than ever.
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
              <p className="title">All in one solution</p>
              <p className="text-content">
                We provide you an end-to-end website development solution from
                listening requirements to implementing, testing, deploying, and
                maintaining the system.
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
          <section className="section-feature-1 row mb-5">
            <div className="feature-content col-6">
              <p className="title">App store deployment consultation</p>
              <p className="text-content">
                After many years of developing and deploying a hundred mobile
                applications, we are glad to say that we have expertise in app
                store deployment and optimization. We help customers acquire
                users and generate revenue as soon as possible
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
        <section className="creative-portfolio bg-gray">
          <div className="container">
            <div className="text-title text-center">
              <h3 className="text-title-1">Creative Portfolio</h3>
              <h2
                className="text-title-2"
                style={{ marginBottom: "80px", marginTop: "15px" }}
              >
                Success cases
              </h2>
            </div>
            <div className="list-img row">
              <div className="col-4">
                <div className="mb-3 img-hover">
                  <img
                    src="https://web.archive.org/web/20210920051254im_/https://deha-soft.com/wp-content/uploads/2021/07/w3.jpg"
                    style={{ float: "right", marginBottom: "1rem" }}
                  />
                </div>
                <div className="img-hover">
                  <img
                    src="https://web.archive.org/web/20220105053526im_/https://deha-soft.com/wp-content/uploads/2021/07/w6.jpg"
                    style={{ float: "right" }}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="mb-3 img-hover">
                  <img src="https://web.archive.org/web/20220105053358im_/https://deha-soft.com/wp-content/uploads/2021/07/w5.jpg" />
                </div>
                <div className="img-hover">
                  <img src="https://web.archive.org/web/20220105053545im_/https://deha-soft.com/wp-content/uploads/2021/07/w4.jpg" />
                </div>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </section>
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
                // defaultActiveKey={["1"]}
                onChange={onChange}
                style={{ border: "none" }}
              >
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      How can I start Mobile development services with DEHA for
                      my business?
                    </b>
                  }
                  key="1"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    You can simply call or email DEHA to begin your Mobile
                    development services. DEHA's developers can make your Mobile
                    development easy and fruitful.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      Will you partner with us as an android app development
                      company for our clients?
                    </b>
                  }
                  key="2"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    DEHA can partner with you to provide an android app
                    development for your clients. DEHA's android developers can
                    note the client requirements and then recommend the right
                    solution to them.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      Which technologies and tools do you use to develop Android
                      applications?
                    </b>
                  }
                  key="3"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    We use various tools and technologies such as XML, SQLite,
                    Android NDK, Realm, and Android SDK to design and develop an
                    Android application for your business.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      How much time will you take to complete the project?
                    </b>
                  }
                  key="4"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    We usually take around one or two months for Mobile
                    application development. But the exact time taken to
                    complete your project can be determined only after we
                    discuss the idea and other project details.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      Which programming languages do you use to build iPhone
                      applications?
                    </b>
                  }
                  key="5"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    The programming languages we use to develop your iPhone
                    applications are Objective-C and C. We also use the XCode
                    platform, as Apple offers support for C++ on XCode's latest
                    version.
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
                      Do you offer post- App development support and maintenance
                      for iPhone apps?
                    </b>
                  }
                  key="1"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    We have a team of project managers, developers and designers
                    who will be working on your project. They will continuously
                    update you during each development stage and pass on your
                    changes and approvals to the respective teams.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      Is DEHA provides custom android app development services
                      for my business?
                    </b>
                  }
                  key="2"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    DEHA doesn’t aim to offer a standard solution to all
                    enterprises. Instead, they can create a tailored android app
                    to suffice the needs of your business. The app development
                    company can custom-build a robust solution based on your
                    industry and brand position.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      Which programming languages are the best for developing
                      Android apps?
                    </b>
                  }
                  key="3"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    The programming language most used to develop Android
                    applications is Java. In fact, a major part of the Android
                    operating system is written in Java. But we also use C,
                    Android NDK, and C++ to build Android applications.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      Is there a chance that Apple will reject my application?
                    </b>
                  }
                  key="4"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    We can reduce the possibility of your mobile app getting
                    rejected. Our team of iOS app developers strictly follows
                    the standard guidelines and functionality set by Apple. We
                    offer quality assurance and testing services to ensure
                    there's no room for rejection.
                  </p>
                </Panel>
                <Panel
                  header={
                    <b style={{ fontSize: "18px" }}>
                      Do you offer post- App development support and maintenance
                      for iPhone apps?
                    </b>
                  }
                  key="5"
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  <p style={{ fontSize: "15px" }}>
                    We are a leading iOS app development agency, and we help and
                    maintenance even after your mobile application is deployed.
                    We offer services like app upgrading, troubleshooting,
                    system improvement, and others. By maintaining your mobile
                    app regularly, we ensure it offers 100% performance and
                    boosts your revenue.
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

export default ServiceMobile;
