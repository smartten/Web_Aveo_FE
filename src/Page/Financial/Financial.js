import './FinancialStyle.scss';
import logo1 from "./COMATCH's_logo.svg";
import logo2 from './Group.svg';
import logo3 from './logo-tisa-white.svg';
import logo4 from './Logo-white_340x156-px-01.svg';
import logo5 from './layer1.svg';
import logo6 from './g16.svg';
import logo7 from './imageLogo1.svg';
import React, { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  LineChartOutlined,
  CopyOutlined,
  FundOutlined,
  FieldTimeOutlined,
  BulbOutlined,
  SelectOutlined,
  UserOutlined,
  PieChartOutlined,
  SwitcherOutlined,
  PaperClipOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
function Financial() {
  const [ourService, setOurService] = useState();
  const [content, setLogo] = useState();
  const [keyCus, setKeyCus] = useState();
  const [benefit, setBenefit] = useState();
  const [introServ, setIntroServ] = useState();
  useEffect(() => {
    document.title = 'AVEO Global - Financial';
    fetchBenefit();
    fetchLogo();
    fetchKeyCus();
    fetchOurService();
    fetchIntroServ();
  }, []);
  setTimeout(function () {
    var text = document.getElementsByClassName('text');
    for (var i = 0; i < text.length; i++) {
      text[i].classList.add('fadeRight', 'cssanimation');
    }
    var image = document.getElementsByClassName('image');
    for (var i = 0; i < image.length; i++) {
      image[i].classList.add('fadeInLeft', 'cssanimation');
    }
  }, 1000);

  const fetchLogo = async () => {
    try {
      const res = await fetch('http://192.168.0.98:8080/api/indust-content/all');
      const data = await res.json();
      setLogo(data);
    } catch (error) {
      console.error('Error fetching menu and logo:', error);
    }
  };

  const fetchOurService = async () => {
    try {
      const res = await fetch('http://192.168.0.98:8080/api/our-service-info/get-all');
      const data = await res.json();
      setOurService(data);
    } catch (error) {
      console.error('Error fetching menu and logo:', error);
    }
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
  const fetchIntroServ = async () => {
    try {
      const res = await fetch('http://192.168.0.98:8080/api/introduce-company');
      const data = await res.json();
      setIntroServ(data);
    } catch (error) {
      console.error('Error fetching menu and logo:', error);
    }
  };
  return (
    <div className="financial">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content">
                <div className="text">
                  <p className="text-title">
                    <span>Financial</span>
                  </p>
                  <p className="sub-text">We'll help you develop a solution, capable of beautifully visualizing data and revolutionize the financial services market</p>
                  <a href="/contact-us" className="btn btn-contact">
                    Contact Us
                  </a>
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
                  <h3 class="title">{content && content[3]?.title}</h3>
                  <p class="sub-title">
                    {content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: content[3]?.content,
                        }}
                      />
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-service">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <AppstoreOutlined />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{content && content[3]?.list[0]?.title}</b>
                    <p className="text-sub">{content && <div dangerouslySetInnerHTML={{ __html: content[3]?.list[0]?.content }} />}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <FundOutlined />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{content && content[3]?.list[1]?.title}</b>
                    <p className="text-sub">{content && <div dangerouslySetInnerHTML={{ __html: content[3]?.list[1]?.content }} />}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <CopyOutlined />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{content && content[3]?.list[2]?.title}</b>
                    <p className="text-sub">{content && <div dangerouslySetInnerHTML={{ __html: content[3]?.list[2]?.content }} />}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <SafetyCertificateOutlined />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{content && content[3]?.list[3]?.title}</b>
                    <p className="text-sub">{content && <div dangerouslySetInnerHTML={{ __html: content[3]?.list[3]?.content }} />}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <LineChartOutlined />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{content && content[3]?.list[4]?.title}</b>
                    <p className="text-sub">{content && <div dangerouslySetInnerHTML={{ __html: content[3]?.list[4]?.content }} />}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <FieldTimeOutlined />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{content && content[3]?.list[5]?.title}</b>
                    <p className="text-sub">{content && <div dangerouslySetInnerHTML={{ __html: content[3]?.list[5]?.content }} />}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              <div className="col-4 content-part">
                <div className="icon-benefit">
                  <BulbOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[0]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[0]?.content }}></div>}</p>
                </div>
              </div>
              <div className="col-4 content-part">
                <div className="icon-benefit">
                  <SelectOutlined />
                </div>
                <div className="text-benefit">
                  <b> {benefit && benefit[0]?.subIntroService[1]?.title} </b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[1]?.content }}></div>}</p>
                </div>
              </div>
              <div className="col-4 content-part">
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
              <div className="col-4 content-part">
                <div className="icon-benefit">
                  <PieChartOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[3]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[3]?.content }}></div>}</p>
                </div>
              </div>
              <div className="col-4 content-part">
                <div className="icon-benefit">
                  <SwitcherOutlined />
                </div>
                <div className="text-benefit">
                  <b>{benefit && benefit[0]?.subIntroService[4]?.title}</b>
                  <p>{benefit && <div dangerouslySetInnerHTML={{ __html: benefit[0]?.subIntroService[4]?.content }}></div>}</p>
                </div>
              </div>
              <div className="col-4 content-part">
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

export default Financial;
