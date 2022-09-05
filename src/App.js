import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home.component";
import Signup from "./components/signup/signup.component";

function App() {
  return (
    <div className="p-10 text-white text-center min-h-screen bg-slate-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
