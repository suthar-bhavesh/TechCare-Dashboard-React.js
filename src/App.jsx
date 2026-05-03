import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/patients" />}></Route>
        <Route path="/patients" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
