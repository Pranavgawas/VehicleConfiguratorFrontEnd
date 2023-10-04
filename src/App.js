import "./App.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Navbar from "./components/inc/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Defaultconfig from "./components/pages/Defaultconfig";

import Welcomepage from "./components/pages/Welcomepage";
import Signin from "./components/pages/Signin";
import Banner from "./components/inc/Banner";
import Config from "./components/pages/Config";
function App() {
  return (
    <Router>
      <div>
        <Banner />
        <Navbar />
        <Routes>
        {/* 
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route> */}
        <Route path="/defaultconfig/:model_id" element={<Defaultconfig />}></Route>
        <Route path="/registration" element={<Welcomepage />}></Route>
        <Route path="/configure" element={<Config />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="*" element={<Home />}></Route>
        </Routes>
        


      </div>
    </Router>
  );
}

export default App;
