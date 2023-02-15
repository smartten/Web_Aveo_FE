import ServiceWeb from "./Page/Service-Web/ServiceWeb";
import ServiceMobile from "./Page/Service-Mobile/ServiceMobile";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ServiceEngineering from "./Page/Service-Engineering/ServiceEngineering";
import Integration from "./Page/Service-Integration/Integration";
import Blockchain from "./Page/Blockchain/Blockchain";
import Enterprise from "./Page/Enterprise/Enterprise";
function App() {
  return (
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
  );
}

export default App;
