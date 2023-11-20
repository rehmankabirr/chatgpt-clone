import { Route, Routes } from "react-router-dom";
import { Landing, Login, Register } from "./pages/User";
import Chat from "./pages/Chat";
import "./App.css";
import { useAuth } from "./context/User/AuthContext";

function App() {
  const { isLogin } = useAuth();
  console.log(isLogin);
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
