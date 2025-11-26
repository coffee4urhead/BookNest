




import { Routes, Route } from "react-router";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Books from "./Dashboard.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}