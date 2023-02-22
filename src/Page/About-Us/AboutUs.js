import "./AboutStyle.scss";

function AboutUs() {
  return (
    <div className="about-us">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content">
                <div className="text">
                  <p className="text-title">
                    <span>Vietnam Leading Digital Strategy Consultant</span>
                  </p>
                  <p className="sub-text">
                    DEHA Vietnam specialized in digital strategy consulting for
                    business firm varies from industries such as: Manufacturing,
                    Retail, Ecommerce, Finance, Internet Service,
                    Transportation, Construction... With a team of experienced
                    experts, we help you to LEVERAGE YOUR BUSINESS in the age of
                    Digital Transformation.
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
                  <td>DEHA VIETNAM JOINT STOCK COMPANY</td>
                </tr>
                <tr>
                  <th>Established</th>
                  <td>Jan 2016</td>
                </tr>
                <tr>
                  <th>Headquarter</th>
                  <td>
                    5F, Intracom Building, 82 Dich Vong Hau street, Cau Giay,
                    Hanoi, Vietnam
                  </td>
                </tr>
                <tr>
                  <th>International Standards</th>
                  <td>
                    <ul>
                      <li>+ ISO 9001:2015</li>
                      <li>+ ISO/IEC 27001:2013</li>
                      <li>+ CMMI Level 3 version 2.0</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Development Centers</th>
                  <td>
                    <ul>
                      <li>
                        <strong>HEADQUARTER</strong>: 5F, Intracom Building, 82
                        Dich Vong Hau street, Cau Giay, Hanoi, Vietnam
                      </li>
                      <li>
                        <strong>Thua Thien Hue, Vietnam</strong>: 28 Nguyen Tri
                        Phuong, Phu Nhuan, Thua Thien Hue, Vietnam
                      </li>
                      <li>
                        <strong>Tokyo, JAPAN</strong>: 104-0045, 4F, CUBE
                        TSUKIJI, 3-7-11 Tsukiji, Chuo-ward, Tokyo
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
          <p className="mission-content">Delivering Happiness</p>
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

export default AboutUs;
