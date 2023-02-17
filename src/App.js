import logo from "../src/components/Header/download.png";
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

function App() {
  return (
    <div className="App">
      <Headerr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-design-and-development" element={<ServiceWeb />} />
        <Route path="/mobile-development" element={<ServiceMobile />} />
        <Route
          path="/engineering-and-maintenance"
          element={<ServiceEngineering />}
        />
        <Route path="/integration-services" element={<Integration />} />
        <Route path="/blockchain-service" element={<Blockchain />} />
        <Route path="/enterprise-service" element={<Enterprise />} />
        <Route path="/testing-service" element={<Testing />} />
        <Route path="/cms-service" element={<CmcService />} />
        <Route path="/ecommerce-solutions" element={<Ecommerce />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
