import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home.component";
import Signup from "./components/signup/signup.component";
import UpdateModal from "./components/updateModal/updateModal.component";
import CreateModal from "./components/createModal/createModal.component";
function App() {
  return (
    <div className="p-10 text-white text-center min-h-screen bg-slate-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<CreateModal />} />
          <Route path="/update" element={<UpdateModal />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
