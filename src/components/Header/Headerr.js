import './HeadStyle.scss';
import logo from './New_logo_May30-white.svg';
import logo2 from './New-logo-30May.svg';
import React, { useEffect, useState } from 'react';
import { RightOutlined, AlignRightOutlined, CaretDownFilled, PlusOutlined } from '@ant-design/icons';
import { Menu, Drawer } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { Link, useLocation, useNavigate } from 'react-router-dom';

window.onload = function () {
  setTimeout(function () {
    document.getElementById('logo').classList.add('logo');
  }, 1000);

  setTimeout(function () {
    var testarray = document.getElementsByClassName('link');
    for (var i = 0; i < testarray.length; i++) {
      testarray[i].classList.add('fadeInBottom', 'cssanimation');
    }
    document.getElementById('header-but').classList.add('fadeInBottom', 'cssanimation');
  }, 1500);
};

function Headerr() {
  const [nav, setNav] = useState('');
  const [anhLogo, setLogo] = useState(logo);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [menu, setMenu] = useState();
  const [logo1, setLogoo] = useState();
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      var headDrop = document.getElementsByClassName('head-totall');
      var theLink = document.getElementsByClassName('link');
      if (window.scrollY >= 50) {
        for (var i = 0; i < headDrop.length; i++) {
          headDrop[i].style.backgroundColor = 'white';
          headDrop[i].style.boxShadow = '0 1px 5px  rgba(0, 0, 0, 0.3)';
        }
        for (var i = 0; i < theLink.length; i++) {
          theLink[i].style.color = 'black';
        }
        setLogo(logo2);
        setNav('nav');
      } else {
        for (var i = 0; i < headDrop.length; i++) {
          headDrop[i].style.backgroundColor = 'white';
        }
        for (var i = 0; i < headDrop.length; i++) {
          headDrop[i].style.backgroundColor = '#ffffff00';
          headDrop[i].style.boxShadow = '';
        }
        for (var i = 0; i < theLink.length; i++) {
          theLink[i].style.color = 'white';
        }
        setNav('');
        setLogo(logo);
      }
    });
  }, []);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleColMenu = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    setOpen2(false);
    setOpen3(false);
  };
  const onClicked = (e) => {
    setOpen2(true);
  };
  const onClicked2 = (e) => {
    setOpen3(true);
  };

  const fetchMenuAndLogo = async () => {
    try {
      const [menuResponse, logoResponse] = await Promise.all([
        fetch('http://192.168.0.98:8080/api/menu/get-all').then((res) => res.json()),
        fetch('http://192.168.0.98:8080/api/logo/get-all').then((res) => res.json()),
      ]);
      setMenu(menuResponse);
      setLogoo(logoResponse);
    } catch (error) {
      console.error('Error fetching menu and logo:', error);
    }
  };

  useEffect(() => {
    fetchMenuAndLogo();
  }, []);

  return (
    <>
      <div style={{ zIndex: 999 }} id="infor" className="overlay transition"></div>

      {/* <div id="repon-menu"></div> */}

      <Drawer style={{ padding: -24, overflow: 'hidden' }} width="100%" onClose={onClose} open={open}>
        <Menu
          style={{
            width: '100%',
          }}
          mode="vertical"
          theme="light"
          // items={items}
        >
          <Menu.Item>
            <Link className="link-for-res" to="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link className="link-for-res" to="/about-us">
              About Us
            </Link>
          </Menu.Item>
          <Menu.Item onClick={onClicked}>
            <div className="d-flex justify-content-between">
              <Link className="link-for-res" to="/">
                Services
              </Link>
              <RightOutlined className="my-auto" />
            </div>
          </Menu.Item>
          <Menu.Item onClick={onClicked2}>
            <div className="d-flex justify-content-between">
              <Link className="link-for-res" to="/">
                Industries
              </Link>
              <RightOutlined className="my-auto" style={{}} />
            </div>
          </Menu.Item>
        </Menu>
        <Link to="/contact-us" id="header-but" className="header-but px-3 px-lg-0 m-lg-4">
          Contact
        </Link>
      </Drawer>

      <div
        id="navbar"
        style={{
          paddingBottom: 6,
          position: 'fixed',
          marginTop: 0,
          width: '100%',
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <div id="headDrop" className={nav ? 'head-totall sticky' : 'head-totall'}>
            <div id="repon-menu"></div>
            <div className="container d-flex justify-content-between">
              <div>
                {logo1?.map((el) => (
                  <div className="sizeLogo" key={el.id}>
                    <Link to="/">{scrollY > 50 ? <img id="logo" src={el.logoLink} alt="Scrolled Logo" /> : <img id="logo" src={el.logo1Link} alt="Default Logo" />}</Link>
                  </div>
                ))}
              </div>
              <div id="alignRightOutlined">{open ? <PlusOutlined rotate={45} onClick={onClose} /> : <AlignRightOutlined onClick={handleColMenu} />}</div>
              <div id="head-menu" className="head-menu">
                {menu?.map((el) => (
                  <div class="dropdown" key={el?.code}>
                    <Link to={`${el?.router}`} className="link">
                      {el?.titleName}
                      {el && el?.subCategories && el?.subCategories?.length > 0 && <CaretDownFilled className="CaretDownFilled" />}
                    </Link>
                    {el && el?.subCategories && el?.subCategories?.length > 0 && (
                      <div class="dropdown-content">
                        {el.subCategories.map((sub) => (
                          <div className="div-for-a">
                            <Link to={sub.router} class="link-drop">
                              {sub.titleName}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link to="/contact-us" id="header-but" className="header-but">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Headerr;
