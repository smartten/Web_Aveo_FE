import './AboutStyle.scss';
import React, { useEffect, useState } from 'react';
import { BulbOutlined, SelectOutlined, UserOutlined, PieChartOutlined, SwitcherOutlined, PaperClipOutlined } from '@ant-design/icons';
function AboutUs() {
  const [aboutus, setAboutus] = useState();
  const [keyCus, setKeyCus] = useState();
  const [benefit, setBenefit] = useState();
  useEffect(() => {
    document.title = 'AVEO Global - Leading Software Development Company in Vietnam';
    fetchAboutUs();
    fetchKeyCus();
    fetchBenefit();
  }, []);

  const fetchAboutUs = async () => {
    const res = await fetch('http://192.168.0.98:8080/api/aboutus/get-all');
    const data = await res.json();
    setAboutus(data);
    return data;
  };

  const fetchKeyCus = async () => {
    try {
      const res = await fetch('http://192.168.0.98:8080/api/keycustomer/get-all');
      const data = await res.json();
      setKeyCus(data);
    } catch (error) {
      console.error('Error fetching menu and logo:', error);
    }
  };

  const fetchBenefit = async () => {
    try {
      const res = await fetch('http://192.168.0.98:8080/api/service-introduction/all');
      const data = await res.json();
      setBenefit(data);
    } catch (error) {
      console.error('Error fetching menu and logo:', error);
    }
  };

  function containsParagraph(content) {
    return /<p.*?>/.test(content);
  }

  return (
    <div className="about-us">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content">
                <div className="text">
                  <p className="text-title">Vietnam's Top Software Development, Outsourcing Company</p>
                  <p className="sub-text">
                    AVEO Global is one of the leading Information Technology companies in Vietnam, specializing in providing digital transformation consulting services
                    and software solutions in Finance, Healthcare, Manufacturing, Ecommerce and Retail for Domestic and International Businesses. we help you to LEVERAGE
                    YOUR BUSINESS in the age of Digital Transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {aboutus?.map((el) => (
        <div className="container" key={el.id}>
          <h2 className="title">{el.title}</h2>
          <div className="content">
            {el.content ? (
              <div dangerouslySetInnerHTML={{ __html: el.content }} />
            ) : containsParagraph(el.content) ? (
              <p dangerouslySetInnerHTML={{ __html: el.content }} />
            ) : (
              <p>{el.content}</p>
            )}
          </div>
        </div>
      ))}

      <section className="big-guys">
        <div className="container">
          {keyCus?.map((el) => (
            <>
              <p className="text-center title-big-guy">{el.title}</p>
              <div className="row justify-content-center flex-wrap" key={el.id}>
                {el?.subKeyCus.map((item) => (
                  <div className="col-2 left">
                    <img src={item.link} style={{ width: '100px', height: '100px' }} alt="" />
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </section>

      <section className="benefits-of-partnering">
        <div className="container">
          <p className="title-benefit">{benefit && benefit[0]?.titleName}</p>
          <div className="container benefit ">
            <div className="row">
              <div className="col-4 content-part up3">
                <div className="icon-benefit">
                  <BulbOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[0]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[0]?.content }}></div>}</p>
                </div>
              </div>
              <div className="col-4 content-part up3">
                <div className="icon-benefit">
                  <SelectOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[1]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[1]?.content }}></div>}</p>
                </div>
              </div>
              <div className="col-4 content-part up3">
                <div className="icon-benefit">
                  <UserOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[2]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[2]?.content }}></div>}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4 content-part up4">
                <div className="icon-benefit">
                  <PieChartOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[3]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[3]?.content }}></div>}</p>
                </div>
              </div>
              <div className="col-4 content-part up4">
                <div className="icon-benefit">
                  <SwitcherOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[4]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[4]?.content }}></div>}</p>
                </div>
              </div>
              <div className="col-4 content-part up4">
                <div className="icon-benefit">
                  <PaperClipOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[5]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[5]?.content }}></div>}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
