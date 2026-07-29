import { Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";

function App() {
  return (
   <>
  <ScrollToHash />

  <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/features" element={<Features />} />
  </Routes>
</>
  );
}

export default App;