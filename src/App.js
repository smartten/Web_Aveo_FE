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
import React, { useEffect } from "react";
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
      <Headerr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile-application" element={<WebApplication />} />
        <Route path="/testing-service" element={<Testing />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/cloud-service" element={<CloudComputing />} />
        <Route path="/web-application" element={<WebApplication />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/health-care" element={<Healthcare />} />
        <Route path="/whitepapers" element={<Whitepapers />} />
        <Route path="/offshore-development" element={<Offshore />} />
        <Route path="/custom-software" element={<WebApplication />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
