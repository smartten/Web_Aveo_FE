import Headerr from "./components/Header/Headerr.js";
import Footer from "./components/Footer/Footer.js";
// import CmcService from "./components/CMC_Service/CmcService.js";
// import Testing from "./components/Testing/Testing.js";
import Ecommerce from "./components/Ecommerce/Ecommerce.js";

import React, { useEffect } from "react";

function App() {
  return (
    <>
      <Headerr />
      <Ecommerce />
      <Footer />
    </>
  );
}

export default App;
