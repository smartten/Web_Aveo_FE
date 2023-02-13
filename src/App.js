import ServiceWeb from "./Page/Service-Web/ServiceWeb";
import ServiceMobile from "./Page/Service-Mobile/ServiceMobile";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ServiceEngineering from "./Page/Service-Engineering/ServiceEngineering";
import Integration from "./Page/Service-Integration/Integration";
import Blockchain from "./Page/Blockchain/Blockchain";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ServiceWeb />} />
        <Route path="/mobile" element={<ServiceMobile />} />
        <Route path="/engineering" element={<ServiceEngineering />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/blockchain" element={<Blockchain />} />
      </Routes>
    </div>
  );
}

export default App;
