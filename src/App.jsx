import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import GlobalStyle from "./assets/style/GlobalStyle";
import HomePage from "./pages/HomePage/HomePage";
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
          </Routes>
        </UserProvider>
      </ProgressProvider>
    </BrowserRouter>
  );
}

export default App;
