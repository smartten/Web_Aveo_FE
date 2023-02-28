import Footer from "./components/Footer/Footer.js";
import CmcService from "./components/CMC_Service/CmcService.js";
import Testing from "./components/Testing/Testing";
import ServiceWeb from "./Page/Service-Web/ServiceWeb";
import Ecommerce from "./components/Ecommerce/Ecommerce";
import ServiceMobile from "./Page/Service-Mobile/ServiceMobile";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ServiceEngineering from "./Page/Service-Engineering/ServiceEngineering";
import Integration from "./Page/Service-Integration/Integration";
import Blockchain from "./Page/Blockchain/Blockchain";
import Enterprise from "./Page/Enterprise/Enterprise";
import Home from "./components/Home/Home.js";
import React, { useEffect } from "react";
import Headerr from "./components/Header/Headerr.js";
import Contact from "./Page/ContactUs/Contact.js";
import Company from "./Page/Company/Company";
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
function App() {
  return (
    <div className="App">
      <Headerr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-design-and-development" element={<ServiceWeb />} />
        <Route path="/mobile-application" element={<WebApplication />} />
        <Route
          path="/engineering-and-maintenance"
          element={<ServiceEngineering />}
        />
        <Route path="/integration-services" element={<Integration />} />
        <Route path="/blockchain-service" element={<Blockchain />} />
        <Route path="/enterprise-service" element={<Enterprise />} />
        <Route path="/testing-service" element={<Testing />} />
        <Route path="/cms-service" element={<CmcService />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/company" element={<Company />} />
        <Route path="/cloud-computing" element={<CloudComputing />} />
        <Route path="/iot-application" element={<Iotapp />} />
        <Route path="/web-application" element={<WebApplication />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/health-care" element={<Healthcare />} />
        <Route path="/whitepapers" element={<Whitepapers />} />
        <Route path="/offshore-development" element={<Offshore />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
