import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import GlobalStyle from "./assets/style/GlobalStyle";
import HomePage from "./pages/HomePage/HomePage";
import SignUp from "./pages/HomePage/SignUp";
import Habits from "./pages/HabitsPage/index";

import UserProvider from "./contexts/UserContext";
import ProgressProvider from "./contexts/ProgressContext";

function App() {
  const [token, setToken] = useState("");

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ProgressProvider>
        <UserProvider>
          <Routes>
            <Route exact path="/" element={<HomePage setToken={setToken} />} />
            <Route exact path="/cadastro" element={<SignUp />} />
            <Route exact path="/habitos" element={<Habits />} />
          </Routes>
        </UserProvider>
      </ProgressProvider>
    </BrowserRouter>
  );
}

export default App;
