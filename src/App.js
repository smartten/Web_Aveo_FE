import Headerr from "./components/Header/Headerr.js";
import Footer from "./components/Footer/Footer.js";
import CmcService from "./components/CMC_Service/CmcService.js";
import ServiceWeb from "./Page/Service-Web/ServiceWeb";
import ServiceMobile from "./Page/Service-Mobile/ServiceMobile";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ServiceEngineering from "./Page/Service-Engineering/ServiceEngineering";
import Integration from "./Page/Service-Integration/Integration";
import Blockchain from "./Page/Blockchain/Blockchain";
import Enterprise from "./Page/Enterprise/Enterprise";

import React, { useEffect } from "react";

function App() {
  return (
    <>
      <Headerr />
      <br />
      <br />
      <br />
      <br />
      <br />
        <div className="App">
            <Routes>
                <Route path="/web" element={<ServiceWeb />} />
                <Route path="/mobile" element={<ServiceMobile />} />
                <Route path="/engineering" element={<ServiceEngineering />} />
                <Route path="/integration" element={<Integration />} />
                <Route path="/blockchain" element={<Blockchain />} />
                <Route path="/enterprise" element={<Enterprise />} />
            </Routes>
        </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <CmcService /> */}
      <Footer />
      <Footer />
      <Footer />
    </>
  )
}
export default App;
