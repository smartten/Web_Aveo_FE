import logo from './New_logo_May30-white.svg';
import './FooterStyle.scss';
import React, { useEffect, useState } from 'react';

function Footer() {
  const [footer, setFooter] = useState();

  const fetchFooter = async () => {
    try {
      const res = await fetch('http://192.168.0.98:8080/api/footer/all');
      const data = await res.json();
      setFooter(data);
    } catch (error) {
      console.error('Error fetching menu and logo:', error);
    }
  };
  useEffect(() => {
    fetchFooter();
  }, []);

  function generateRowsFromHTMLString(htmlString) {
    const styledHTMLString = htmlString.replace(/<a /g, '<a style="color: white; text-decoration: none;" ');
    return styledHTMLString;
  }

  return (
    <section className="contact-us-v1" style={{ position: 'absolute' }}>
      {footer?.map((el) => (
        <div className="container " style={{}}>
          <div className="row mb-0 mb-5 pt-5 pb-4 hanoi">
            <br />
            <div style={{ marginRight: 'auto', width: '30%' }} className="col-12 col-sm-4">
              <img className="footer-logo" src={el.linkLogo} alt="logo-footer-img" />
              <div
                className="pt-sm-0"
                style={{
                  fontSize: '13px',
                  color: 'white',
                }}
                dangerouslySetInnerHTML={{ __html: el?.subFooters[2]?.content }}
              ></div>
            </div>
            <div style={{ marginRight: 'auto', width: '18%' }} className="col-12 col-sm-4">
              <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>{el?.subFooters[0]?.info}</span>
              <div dangerouslySetInnerHTML={{ __html: generateRowsFromHTMLString(el?.subFooters[0]?.content) }}></div>
            </div>
            <div style={{ marginRight: 'auto', width: '15%' }} className="col-12 col-sm-4">
              <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>{el?.subFooters[1]?.info}</span>
              <div dangerouslySetInnerHTML={{ __html: generateRowsFromHTMLString(el?.subFooters[1]?.content) }}></div>
            </div>
            <div className="col-12 col-sm-4 conact-img">
              <img src={el.linkImage} alt="footer_img" className="footer-img" />
            </div>
          </div>
          <hr class="divider"></hr>
          <div className="row mt-sm-5 pb-sm-4" style={{ height: 'auto' }}>
            <div className="col-12 all-right">
              <p
                style={{
                  color: 'white',
                  fontWeight: 600,
                  fontSize: 18,
                  fontFamily: 'inherit',
                }}
              >
                {el.copyRight}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Footer;
