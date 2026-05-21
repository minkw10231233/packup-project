import './styles/Home.css';
import './styles/Global.css';

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Consult from "./pages/Consult";
import Complete from "./pages/Complete";
import OnlyDrive from "./pages/OnlyDrive";
import OneHelp from "./pages/OneHelp";
import TwoHelp from "./pages/TwoHelp";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/only-drive" element={<OnlyDrive />} />
        <Route path="/one-help" element={<OneHelp />} />
        <Route path="/two-help" element={<TwoHelp />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;