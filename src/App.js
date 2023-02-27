import logo from "./logo.svg";
import "./App.css";
import LoginSytem from "./LoginSytem";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PrivateRoutes from "./utils";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
          <Route path="/Home" element={<Home />} />
          </Route>
            <Route path="/" element={<LoginSytem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
