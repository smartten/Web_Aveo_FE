import "./BlockChainStyle.scss";
import {
  CodeOutlined,
  WalletOutlined,
  ScheduleOutlined,
  FileTextOutlined,
  FundOutlined,
  DollarCircleOutlined,
  BulbOutlined,
  SelectOutlined,
  UserOutlined,
  PieChartOutlined,
  SwitcherOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
function Blockchain() {
  setTimeout(function () {
    var text = document.getElementsByClassName("text");
    for (var i = 0; i < text.length; i++) {
      text[i].classList.add("fadeRight", "cssanimation");
    }
    var image = document.getElementsByClassName("image");
    for (var i = 0; i < image.length; i++) {
      image[i].classList.add("fadeInLeft", "cssanimation");
    }
  }, 1000);
  return (
    <div className="blockchain">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="image">
                  <img src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/hero/Hero-blockchain" />
                </div>
                <div className="text">
                  <p className="text-title">
                    <span>Blockchain</span>
                  </p>
                  <p className="sub-text">
                    Accelerate innovation and transform your business networks
                    with blockchain consulting experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="developer-service">
        <div className="container">
          <div className="title-service">
            <div class="row justify-content-center">
              <div class="col-lg-10 col-xl-8">
                <div class="section-title title-01 mb-70">
                  <h3 class="title">Blockchain Development Services</h3>
                  <p class="sub-title">
                    We help you with blockchain development, implementation of
                    smart contracts, or with creating simple automated
                    decentralized applications (dApps) based on Ethereum
                    blockchain, or other decentralised databases.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-service">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <CodeOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">Blockchain engineering</b>
                    <p className="text-sub">
                      We assist you in building a cutting-edge product right
                      from development & quality assurance to deployment along
                      with ancillary services like UI/UX engineering and support
                      & sustenance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <FileTextOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">Smart contracts</b>
                    <p className="text-sub">
                      Make the execution of business contracts faster, reliable,
                      automated, tamper-proof, immutable, decentralized,
                      self-auditing, failure-proof, and more, with our
                      blockchain smart contract solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <ScheduleOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">Token implementation</b>
                    <p className="text-sub">
                      Tokenize your assets and join the coming financial
                      revolution. We develop mintable, burnable, haltable, and
                      transferable contracts using token standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <FundOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">dApps</b>
                    <p className="text-sub">
                      We build database-agnostic dApps for effective
                      implementation of enterprise use cases
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <WalletOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">Wallets</b>
                    <p className="text-sub">
                      A secure, digital, cryptocurrency wallet tailored for your
                      needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text">
                  <div className="icon-service">
                    <DollarCircleOutlined />
                  </div>
                  <div className="text-service">
                    <b className="text-title">Cryptocurrency</b>
                    <p className="text-sub">
                      Use of blockchain technology to facilitate monetary
                      exchange.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="certificates">
        <div className="container">
          <div className="content-certificates">
            <h3 className="title-certificates mb-3">
              Certificates & International Standards
            </h3>
            <div className="row justify-content-center">
              <div className="col-2">
                <img
                  src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/services/Img-cert-cmmi-level3"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-2">
                <img
                  src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/services/Img-cert-cmmi-level3"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-2">
                <img
                  src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/services/Img-cert-cmmi-level3"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-2">
                <img
                  src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/services/Img-cert-cmmi-level3"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-typical">
        <div className="container">
          <div className="content-typical">
            <p className="title-typical">
              Our Typical Blockchain Implementation Roadmap
            </p>
          </div>
          <div className="box-content-typical">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col">
                <div className="box">
                  <span className="nummber">1</span>
                  <div className="content-number">
                    <h3 className="title-box">Discover</h3>
                    <p className="content-title-box">
                      We work with you to gain clarity on your needs, learn when
                      and where blockchains makes sense in your business.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <span className="nummber">2</span>
                  <div className="content-number">
                    <h3 className="title-box">Research</h3>
                    <p className="content-title-box">
                      We determine and select the blockchain technology stack
                      and develop functional and technical architecture.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <span className="nummber">3</span>
                  <div className="content-number">
                    <h3 className="title-box">Build</h3>
                    <p className="content-title-box">
                      Our skilled blockchain engineers efficiently build and
                      test the proof of concept iteratively, retrospective to
                      confirm value and identify new challenges.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <span className="nummber">4</span>
                  <div className="content-number">
                    <h3 className="title-box">Scale</h3>
                    <p className="content-title-box">
                      We work with you to develop operating models and
                      governence, deploy blockchain solution in live production
                      environment. We also design roll-out strategy and
                      integrate with your legacy systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="big-guys">
        <div className="container">
          <p className="text-center title-big-guy">
            This BIG guys are using AVEO services and they are more than happier
            ever
          </p>
          <div className="row">
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col">
              <img
                src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/img_client_vinmec_pdzx1b"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="benefits-of-partnering">
        <div className="container">
          <p className="title-benefit">Benefits of Partnering with AVEO</p>
          <div className="container benefit ">
            <div className="row">
              <div className="col-4 content-part">
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
              <div className="col-4 content-part">
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
              <div className="col-4 content-part">
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
              <div className="col-4 content-part">
                <div className="icon-benefit">
                  <PieChartOutlined />
                </div>
                <div className="text-benefit">
                  <b>Experience</b>
                  <p>
                    We are strategic partner of big corporations such as Mitsui
                    O.S.K.Line, Marubeni, Mitani, Hino Motor, Vinmec
                    International Hospital...and delivered 1,000+ systems for
                    enterprise.
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
                    development, integration, deployment to system maintenance
                    and much mores.
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
                    An agile mindset is about creating and responding to change
                    in uncertain and turbulent environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us-v1">
        <div className="container">
          <div className="contact-content">
            <div className="contact-text">
              <h2>Connect with us</h2>
              <p>We're ready to talk opportunity</p>
              <a className="btn btn-contact" href="/contact-us">
                Contact Us
              </a>
            </div>
            <div className="conact-img">
              <img src="https://res.cloudinary.com/deha-vietnam/image/upload/f_webp/images/hero/Hero-img-default" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blockchain;
