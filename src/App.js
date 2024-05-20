import Footer from './components/Footer/Footer.js';
import Testing from './components/Testing/Testing';
import Ecommerce from './components/Ecommerce/Ecommerce';
import { Routes, Route, BrowserRouter as Router, useParams } from 'react-router-dom';
import Home from './components/Home/Home.js';
import React, { useEffect, useState } from 'react';
import Headerr from './components/Header/Headerr.js';
import Contact from './Page/ContactUs/Contact.js';
import CloudComputing from './Page/Cloud-Computing/CloudComputing';
import WebApplication from './components/Application/Application';
import Manufacturing from './Page/Manufacturing/Manufacturing.js';
import Financial from './Page/Financial/Financial.js';
import AboutUs from './Page/About-Us/AboutUs.js';
import Retail from './components/Retail/Retail';
import Healthcare from './components/Healthcare/Healthcare';
import Whitepapers from './components/Whitepapers/Whitepapers.js';
import Offshore from './components/Offshore/Offshore.js';
import Page404 from './Page/404/Page404.js';
import Blog from './Page/Blog/Blog.js';
import DetailBlog from './Page/Blog/DetailBlog.js';
function App() {
  return (
    <div className="App">
      <Headerr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/mobile-application" element={<WebApplication />} />
        <Route path="/testing-services" element={<Testing />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/cloud-services" element={<CloudComputing />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/health-care" element={<Healthcare />} />
        <Route path="/whitepapers" element={<Whitepapers />} />
        <Route path="/offshore-development" element={<Offshore />} />
        {/* Add more routes for your application as needed */}
        <Route path="*" element={<Page404 />} />
        <Route path="/blog/:id" element={<DetailBlog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
