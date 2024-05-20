import './ManufacturingStyle.scss';
import React, { useEffect, useState } from 'react';
import {
  CommentOutlined,
  OneToOneOutlined,
  NodeIndexOutlined,
  ClockCircleOutlined,
  ScheduleOutlined,
  BulbOutlined,
  SelectOutlined,
  UserOutlined,
  PieChartOutlined,
  SwitcherOutlined,
  PaperClipOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
function Manufacturing() {
  const [ourService, setOurService] = useState();
  const [content, setLogo] = useState();
  const [keyCus, setKeyCus] = useState();
  const [benefit, setBenefit] = useState();
  const [introServ, setIntroServ] = useState();
  useEffect(() => {
    document.title = 'AVEO Global - Manufacturing';
    fetchBenefit();
    fetchLogo();
    fetchKeyCus();
    fetchOurService();
    fetchIntroServ();
  }, []);
  setTimeout(function () {
    var text = document.getElementsByClassName('text');
    for (var i = 0; i < text.length; i++) {
      text[i].classList.add('fadeInRight', 'cssanimation');
    }
    var image = document.getElementsByClassName('image');
    for (var i = 0; i < image.length; i++) {
      image[i].classList.add('fadeInLeft', 'cssanimation');
    }
  }, 1000);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      var up1 = document.getElementsByClassName('up1');
      var up2 = document.getElementsByClassName('up2');
      var up3 = document.getElementsByClassName('up3');
      var up4 = document.getElementsByClassName('up4');
      var up5 = document.getElementsByClassName('up5');
      var bigGuy = document.getElementsByClassName('big-guys');
      if (window.scrollY >= 250) {
        for (var i = 0; i < up1.length; i++) {
          up1[i].classList.add('fadeInUp', 'cssanimation');
        }
        // for (var i = 0; i < txtblock.length; i++) {
        //   txtblock[i].classList.add("fadeInRight", "cssanimation");
        // }
      }
      if (window.scrollY >= 330) {
        for (var i = 0; i < up2.length; i++) {
          up2[i].classList.add('fadeInUp', 'cssanimation');
        }
      }
      if (window.scrollY >= 450) {
        for (var i = 0; i < up5.length; i++) {
          up5[i].classList.add('fadeInUp', 'cssanimation');
        }
      }
      if (window.scrollY >= 800) {
        for (var i = 0; i < bigGuy.length; i++) {
          bigGuy[i].classList.add('fadeInLeft', 'cssanimation');
        }
      }
      if (window.scrollY >= 1100) {
        for (var i = 0; i < up3.length; i++) {
          up3[i].classList.add('fadeInUp', 'cssanimation');
        }
      }
      if (window.scrollY >= 1300) {
        for (var i = 0; i < up4.length; i++) {
          up4[i].classList.add('fadeInUp', 'cssanimation');
        }
      }
    });
  }, []);

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
    <div className="manufacturing">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content">
                <div className="text">
                  <p className="text-title">
                    <span>Manufacturing</span>
                  </p>
                  <p className="sub-text">Maintenance + Product Lifecycle Management + Quality</p>
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
                  <h3 class="title">{content && content[0]?.title}</h3>
                  <p class="sub-title">
                    {content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: content[0]?.content,
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
              <div className="col up1">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <CommentOutlined />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{content && content[0]?.list[0]?.title}</b>
                    <p className="text-sub">
                      {content && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: content[0]?.list[0]?.content,
                          }}
                        />
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col up1">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <ClockCircleOutlined />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{content && content[0]?.list[1]?.title}</b>
                    <p className="text-sub">
                      {content && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: content[0]?.list[1]?.content,
                          }}
                        />
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col up2">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <NodeIndexOutlined />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{content && content[0]?.list[2]?.title}</b>
                    <p className="text-sub">
                      {content && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: content[0]?.list[2]?.content,
                          }}
                        />
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col up2">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <DashboardOutlined />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{content && content[0]?.list[3]?.title}</b>
                    <p className="text-sub">
                      {content && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: content[0]?.list[3]?.content,
                          }}
                        />
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col up5">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <OneToOneOutlined />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{content && content[0]?.list[4]?.title}</b>
                    <p className="text-sub">
                      {content && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: content[0]?.list[4]?.content,
                          }}
                        />
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col up5">
                <div className="content-text row">
                  <div className="icon-service col-2">
                    <ScheduleOutlined />
                  </div>
                  <div className="text-service col">
                    <b className="text-title">{content && content[0]?.list[5]?.title}</b>
                    <p className="text-sub">
                      {content && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: content[0]?.list[5]?.content,
                          }}
                        />
                      )}
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
                  <b> {benefit && benefit[0]?.subIntroService[1]?.title} </b>
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

export default Manufacturing;
