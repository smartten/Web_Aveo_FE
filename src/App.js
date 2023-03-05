import Footer from "./components/Footer/Footer.js";
import CmcService from "./components/CMC_Service/CmcService.js";
import Testing from "./components/Testing/Testing";
import ServiceWeb from "./Page/Service-Web/ServiceWeb";
import Ecommerce from "./components/Ecommerce/Ecommerce";
import ServiceMobile from "./Page/Service-Mobile/ServiceMobile";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";
import ServiceEngineering from "./Page/Service-Engineering/ServiceEngineering";
import Integration from "./Page/Service-Integration/Integration";
import Blockchain from "./Page/Blockchain/Blockchain";
import Enterprise from "./Page/Enterprise/Enterprise";
import Home from "./components/Home/Home.js";
import React, { useEffect, useState } from "react";
import Headerr from "./components/Header/Headerr.js";
import Contact from "./Page/ContactUs/Contact.js";
import CloudComputing from "./Page/Cloud-Computing/CloudComputing";
import Iotapp from "./Page/ioT-App/Iotapp";
import WebApplication from "./components/Application/Application";
import Manufacturing from "./Page/Manufacturing/Manufacturing.js";
import Financial from "./Page/Financial/Financial.js";
import AboutUs from "./Page/About-Us/AboutUs.js";
import Retail from "./components/Retail/Retail";
import Healthcare from "./components/Healthcare/Healthcare";
import Whitepapers from "./components/Whitepapers/Whitepapers.js";
import Offshore from "./components/Offshore/Offshore.js";
import Page404 from "./Page/404/Page404.js";
function App() {
  return (
    <div className="App">
      <div>
        {/* <Headerr /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Headerr />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/mobile-application"
            element={
              <>
                <Headerr />
                <WebApplication />
                <Footer />
              </>
            }
          />
          <Route
            path="/testing-service"
            element={
              <>
                <Headerr />
                <Testing />
                <Footer />
              </>
            }
          />
          <Route
            path="/ecommerce"
            element={
              <>
                <Headerr />
                <Ecommerce />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact-us"
            element={
              <>
                <Headerr />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/cloud-service"
            element={
              <>
                <Headerr />
                <CloudComputing />
                <Footer />
              </>
            }
          />
          <Route
            path="/web-application"
            element={
              <>
                <Headerr />
                <WebApplication />
                <Footer />
              </>
            }
          />
          <Route
            path="/manufacturing"
            element={
              <>
                <Headerr />
                <Manufacturing />
                <Footer />
              </>
            }
          />
          <Route
            path="/financial"
            element={
              <>
                <Headerr />
                <Financial />
                <Footer />
              </>
            }
          />
          <Route
            path="/about-us"
            element={
              <>
                <Headerr />
                <AboutUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/retail"
            element={
              <>
                <Headerr />
                <Retail />
                <Footer />
              </>
            }
          />
          <Route
            path="/health-care"
            element={
              <>
                <Headerr />
                <Healthcare />
                <Footer />
              </>
            }
          />
          <Route
            path="/whitepapers"
            element={
              <>
                <Headerr />
                <Whitepapers />
                <Footer />
              </>
            }
          />
          <Route
            path="/offshore-development"
            element={
              <>
                <Headerr />
                <Offshore />
                <Footer />
              </>
            }
          />
          <Route
            path="/custom-software"
            element={
              <>
                <Headerr />
                <WebApplication />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
