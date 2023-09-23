import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import { Users } from "./components/Users";
import { Layout } from "./Layout/Layout";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="users/:id" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
