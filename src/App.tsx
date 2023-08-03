import "./App.css";
import Main from "./pages/MainPage/MainPage";
import Success from "./pages/ResultPage/SuccessPage";
import Fail from "./pages/ResultPage/FailPage";
import Nav from "./pages/Nav/Nav";
import Monitor from "./pages/Monitoring/Monitor";
import About from "./pages/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NightSky from "./pages/MainPage/NightSky";
import Rendering from "./pages/RenderingPage/RenderingPage";
import Wait from "./pages/Wait/WaitPage";
import DeployList from "./pages/DeployListPage/DeployList";
import { AuthProvider} from "./contexts/AuthContext";
import { TokenProvider } from "./contexts/TokenContext";

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        <TokenProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/fail" element={<Fail />}></Route>
          <Route path="/monitor" element={<Monitor />}></Route>
          <Route path="/rendering" element={<Rendering />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/wait" element={<Wait />}></Route>
          <Route path="deploy" element={<DeployList/>}></Route>
        </Routes>
        <NightSky />
      </BrowserRouter>
      </TokenProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
