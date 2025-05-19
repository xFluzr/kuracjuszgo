import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Wrapper from "./Wrapper";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />}/>
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </>
  );
}

export default App;
