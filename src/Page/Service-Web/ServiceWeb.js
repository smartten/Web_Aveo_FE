import "./WebStyle.scss";
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
function ServiceWeb() {
  const onChange = (key) => {
    console.log(key);
  };

  const question = [
    {
      question: "What is the average cost of developing a website?",
      answer:
        "We are a leading PHP development company and we have a strong policy of accountability, so we quote approximate costs based on project requirements. We list all necessary project specifics and then determine the average time needed to accomplish each project. In addition, we present a plan that details the expense and amount of time the project would require.",
    },
    {
      question: "Can I modify my website design in the future?",
      answer:
        "Yes, you can have the designs updated later on. We are a leading PHP development company and our professional developers will make all the required improvements to the site's interface, functionality and layout based on your needs. We suggest identifying and reviewing the scope and essential elements of any project before beginning.",
    },
    {
      question: "Do you develop mobile-friendly websites?",
      answer:
        "Yes, we develop websites that are mobile-friendly. Our professional developers are well versed in advanced technologies based on CSS3 and HTML5. Being top php web development company we develop web applications that are engaging, consumer-centric, and graphically compelling, ideal for mobile devices.",
    },
    {
      question: "Do you provide maintenance and support after development?",
      answer:
        "DEHA provides a full maintenance and support cycle after completion of your PHP project. Being top php web development company we ensure that, during this time period, we focus on performance enhancement, fixing any bugs, SEO-related improvements, and other activities.",
    },
    {
      question: "How do you ensure the quality of the project?",
      answer:
        "We take a strict target-based approach to every project. Once you agree to our services, your project will move through our various departments for development, design, and quality testing. This will ensure you get the best results",
    },
    {
      question: "How much time do you require to complete a project?",
      answer:
        "At DEHA, we believe in accountability and are reasonable with our consumers and clients. We never give them false promises or commitments. This is why we also address all the relevant specifics of the project and then determine the time needed to complete the work. Our experts will calculate the length of time needed based on the work they are assigned.",
    },
    {
      question: "How much does it cost for web application development?",
      answer:
        "At the start of the project, DEHA seeks the approval of the client on all project details and then quotes an estimate cost for the same. This PHP web development company also shares the project duration and all minute developments included in the project. In case of any last-minute additions, DEHA informs the client of additional costs and time to complete the project.",
    },
    {
      question: "What are the benefits of Web development services?",
      answer:
        "We have a long history of providing top-notch Web solutions. Using a comprehensive knowledge base to meet your core needs, we leverage high-end strategies to create engaging websites. We're here to create interactive UI/UX, and a standard coding framework lets us use our skill set and technologies to create exactly what you need.",
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
                    <span>Web design</span>
                  </p>
                  <p className="text-title">& development</p>
                  <p className="sub-text">
                    Custom web design & development services catch <br /> up
                    with the digital transformation.
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
                <div className="text-center"></div>
                <div className="title">Front-end Development</div>
                <div className="desc">
                  We work with modern frameworks like React.js, Angular, Vue.js,
                  Nuxt, Next, and Gatsby to create next-generation user
                  experiences that integrate and interact seamlessly with your
                  database and APIs.
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center"></div>
                <div className="title">Back-end Development</div>
                <div className="desc">
                  Leverage our expertise with Cloud, DevOps, PHP, Node.js,
                  Python, .NET, Java, and RoR to build custom, secure and
                  reliable backends and APIs for web or mobile apps across
                  multiple domains.
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center"></div>
                <div className="title">Web Applications</div>
                <div className="desc">
                  As a web application development company, we have built all
                  sorts of web applications, from online forms and workflows to
                  whole management systems. We work on projects both big and
                  small.
                </div>
              </div>
              <div className="col-md-6 col-lg-3 item">
                <div className="text-center"></div>
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
                <div className="structure-name">Front End</div>
                <div className="structure-techs">
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/gyf6LnDKTuh8hqNwJzxA/" />
                    </div>
                    <div className="tech-name">Javascript</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/5WYUUgt1Q2SM5vjv0Nsr/" />
                    </div>
                    <div className="tech-name">Type Script</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/ouQOUiY5RGKeiqYzZ4fj/" />
                    </div>
                    <div className="tech-name">Angular JS</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/Hcf5fMeHQWi7c4HI3ZiD/" />
                    </div>
                    <div className="tech-name">React</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/0t9KYS3HT5OQUSclmwUs/" />
                    </div>
                    <div className="tech-name">Vue.js</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/tQYGWFdHSMGqeUmNIhPr/" />
                    </div>
                    <div className="tech-name">HTML5</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/nPahg5ipS5K5N7qAmd4g/" />
                    </div>
                    <div className="tech-name">CSS3</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/eag8WXzSlGMg2vGmWumB/" />
                    </div>
                    <div className="tech-name">Backbone JS</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/Y2hbzPbqTQWuhCkyLTQA/" />
                    </div>
                    <div className="tech-name">Bootstrap</div>
                  </div>
                </div>
              </div>
              <div className="structure">
                <div className="structure-name">Back End</div>
                <div className="structure-techs">
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/bkMNTJDMRZQGve9BTMjw/" />
                    </div>
                    <div className="tech-name">Python</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/85noCce9RBeIA1Y40krg/" />
                    </div>
                    <div className="tech-name">Ruby</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/j4vxSCWSmOmQRVSxViXg/" />
                    </div>
                    <div className="tech-name">PHP</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/3gXAdBG4RiKWK0j1UcST/" />
                    </div>
                    <div className="tech-name">Laravel</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/6aBwKpWTlaxsshOLvsR9/" />
                    </div>
                    <div className="tech-name">Node.js</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/pfpX7XAHRhSI88LB3ESY" />
                    </div>
                    <div className="tech-name">Golang</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/nJIddZvzR6WnrcfYe3eU/" />
                    </div>
                    <div className="tech-name">Magento</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/TnyINqlzScuKUw1iylWu/" />
                    </div>
                    <div className="tech-name">C</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/5ANwBfVQTZa8bJRFGFJ5/" />
                    </div>
                    <div className="tech-name">C#</div>
                  </div>
                </div>
              </div>
              <div className="structure">
                <div className="structure-name">Database</div>
                <div className="structure-techs">
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/87KL6cWrT3SOEEoNoXou/" />
                    </div>
                    <div className="tech-name">MS SQL</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/RsVXSgPQQqq81SPDOzsw/" />
                    </div>
                    <div className="tech-name">Postgre SQL</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/ja1APEkTTACB1muBU4tA/" />
                    </div>
                    <div className="tech-name">Mongo DB</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/LEYQcRDgRx6pWP7DW0bj/" />
                    </div>
                    <div className="tech-name">Oracle</div>
                  </div>
                  <div className="tech">
                    <div className="tech-img">
                      <img src="https://ntq.com.vn/media/akjs0V5TSje7zBN64WxY/" />
                    </div>
                    <div className="tech-name">MariaDB</div>
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
          <a href="#" className="btn-schedule">
            Schedule time to talk <ArrowRightOutlined />
          </a>
        </section>
      </main>
    </div>
  );
}

export default ServiceWeb;
