import ServiceWeb from "./Page/Service-Web/ServiceWeb";
import ServiceMobile from "./Page/Service-Mobile/ServiceMobile";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ServiceWeb />} />
        <Route path="/mobile" element={<ServiceMobile />} />
      </Routes>
    </div>
  );
}

export default App;
