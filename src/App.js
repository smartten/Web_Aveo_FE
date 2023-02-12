import Headerr from "./components/Header/Headerr.js";
import Footer from "./components/Footer/Footer.js";
import CmcService from "./components/CMC_Service/CmcService.js";

import React, { useEffect } from "react";

function App() {
  return (
    <>
      <Headerr />
      <CmcService />
      <Footer />
    </>
  );
}

export default App;
