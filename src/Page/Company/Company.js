import "./CompanyStyle.scss";
import { Radio, Timeline } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
function Company() {
  return (
    <div className="body">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item-company"></div>
        </div>
      </section>
      <section className="misson">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <b className="tite-misson">Mission</b>
              <p className="sub-title-misson">
                To <span style={{ color: "#1d2055" }}>deliver happiness</span>{" "}
                to our <span style={{ color: "#f15f22" }}>clients </span>
                and <span style={{ color: "#f15f22" }}>staffs</span>.
              </p>
              <b className="text-content">
                Happiness, with DEHA, is the highest value that people
                accumulate through work, cooperation with a positive attitude
                along with a worthy life.
              </b>
              <p className="sub-content">
                Happiness is not an outcome, but a collection of experiences,
                long-lasting and enduring. DEHA considers the attainment of
                happiness as the goal of its business activities. All activities
                of DEHA are aimed at the continuous, unlimited transfer of
                values to members, partners and customers to achieve that
                happiness.
              </p>
            </div>
            <div className="col-6">
              <img src="https://i.pinimg.com/736x/27/98/84/2798844f8d48b38a0341365c6abab409.jpg" />
            </div>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="container">
          <div className="text-center">
            <p className="rewards">Rewards</p>
            <p className="achie">Our Achievements</p>
          </div>
          <div className="row">
            <div className="col-4 new-1">
              <div className="img-new">
                <img src="https://web.archive.org/web/20220105053311im_/https://deha-soft.com/wp-content/uploads/2021/07/Group-23.png" />
              </div>
              <div>
                <p>
                  DEHA Viet Nam received an investment license into Hue city
                </p>
              </div>
            </div>
            <div className="col-4 new-1">
              <div className="img-new">
                <img src="https://web.archive.org/web/20220105053311im_/https://deha-soft.com/wp-content/uploads/2021/07/Group-23.png" />
              </div>
              <div>
                <p>
                  DEHA Viet Nam received an investment license into Hue city
                </p>
              </div>
            </div>
            <div className="col-4 new-1">
              <div className="img-new">
                <img src="https://web.archive.org/web/20220105053311im_/https://deha-soft.com/wp-content/uploads/2021/07/Group-23.png" />
              </div>
              <div>
                <p>
                  DEHA Viet Nam received an investment license into Hue city
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4 new-1">
              <div className="img-new">
                <img src="https://web.archive.org/web/20220105053311im_/https://deha-soft.com/wp-content/uploads/2021/07/Group-23.png" />
              </div>
              <div>
                <p>
                  DEHA Viet Nam received an investment license into Hue city
                </p>
              </div>
            </div>
            <div className="col-4 new-1">
              <div className="img-new">
                <img src="https://web.archive.org/web/20220105053311im_/https://deha-soft.com/wp-content/uploads/2021/07/Group-23.png" />
              </div>
              <div>
                <p>
                  DEHA Viet Nam received an investment license into Hue city
                </p>
              </div>
            </div>
            <div className="col-4 new-1">
              <div className="img-new">
                <img src="https://web.archive.org/web/20220105053311im_/https://deha-soft.com/wp-content/uploads/2021/07/Group-23.png" />
              </div>
              <div>
                <p>
                  DEHA Viet Nam received an investment license into Hue city
                </p>
              </div>
            </div>
          </div>
          <section className="the-teams">
            <div className="text-team">
              <p className="meet-team">Meet the teams</p>
              <b className="leadership">Leadership Team </b>
              <b className="sub-team">
                Save your time and money by choosing our professional team.
              </b>
            </div>
            <div className="team-people">
              <div className="row">
                <div className="col-3">
                  <div className="img-team">
                    <img src="https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/08/kimoanh-853-1620472405244.jpeg" />
                  </div>
                  <div className="info-team">
                    <b className="name-info">Thang, Han Van</b>
                    <p className="role-info">-Chairman, Founder</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="img-team">
                    <img src="https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/08/kimoanh-853-1620472405244.jpeg" />
                  </div>
                  <div className="info-team">
                    <b className="name-info">Thang, Han Van</b>
                    <p className="role-info">-Chairman, Founder</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="img-team">
                    <img src="https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/08/kimoanh-853-1620472405244.jpeg" />
                  </div>
                  <div className="info-team">
                    <b className="name-info">Thang, Han Van</b>
                    <p className="role-info">-Chairman, Founder</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="img-team">
                    <img src="https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/08/kimoanh-853-1620472405244.jpeg" />
                  </div>
                  <div className="info-team">
                    <b className="name-info">Thang, Han Van</b>
                    <p className="role-info">-Chairman, Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="timeline-sec">
            <div className="container">
              <div className="text-timeline">
                <p className="title-timeline">Timeline</p>
                <b className="sub-timeline">A Brief History</b>
              </div>
            </div>
            <div className="time">
              <div className="timeline">
                <div className="timeline-row">
                  <div className="timeline-time">
                    2021<small>APRIL 2021</small>
                  </div>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <p>
                      Milestone Admin Dashboard contains C3 graphs, flot graphs,
                      data tables, calendar, drag &amp; drop and ion slider.
                    </p>
                  </div>
                </div>
                <div className="timeline-row">
                  <div className="timeline-time">
                    2021<small>MARCH 2021</small>
                  </div>
                  <div className="timeline-dot green-one-bg" />
                  <div className="timeline-content green-one">
                    <p>
                      Milestone Admin Dashboard contains C3 graphs, flot graphs,
                      data tables, calendar.
                    </p>
                  </div>
                </div>
                <div className="timeline-row">
                  <div className="timeline-time">
                    2019<small>JULY 2019</small>
                  </div>
                  <div className="timeline-content green-two">
                    <p>
                      Custom C3 graphs, Custom flot graphs, flot graphs, small
                      graphs, Sass, profile and timeline.
                    </p>
                  </div>
                </div>
                <div className="timeline-row">
                  <div className="timeline-time">
                    2019<small>JUNE 2019</small>
                  </div>
                  <div className="timeline-dot green-three-bg" />
                  <div className="timeline-content green-three">
                    <p>
                      Admin theme includes graphs, invoice, timeline, widgets,
                      projects, calendar, components, layouts, todo's.
                    </p>
                    <div></div>
                  </div>
                </div>
                <div className="timeline-row">
                  <div className="timeline-time">
                    2019<small>APRIL 2019</small>
                  </div>
                  <div className="timeline-dot green-four-bg" />
                  <div className="timeline-content green-four">
                    <p className="no-margin">
                      Milestone Admin Dashboard includes invoice, profile,
                      tasks, gallery, projects, maintanence.
                    </p>
                  </div>
                </div>
                <div className="timeline-row">
                  <div className="timeline-time">
                    2019<small>MARCH 2019</small>
                  </div>
                  <div className="timeline-dot teal-bg" />
                  <div className="timeline-content teal">
                    <p className="no-margin">
                      Panels, alerts, notifications, new input styles, pricing
                      plans, project plan, signup, login and register.
                    </p>
                  </div>
                </div>
                <div className="timeline-row">
                  <div className="timeline-time">
                    2019<small>FEBRUARY 2019</small>
                  </div>
                  <div className="timeline-dot sea-green-bg" />
                  <div className="timeline-content sea-green">
                    <p>
                      Milestone Admin Dashboard contains Ion slider, heatmap,
                      alerts, breadcrumbs, alerts, pricing, signup, login and
                      register.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section
          className="schedule container"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <a href="/contact-us" className="btn-schedule">
            Schedule time to talk <ArrowRightOutlined />
          </a>
        </section>
      </section>
    </div>
  );
}

export default Company;
