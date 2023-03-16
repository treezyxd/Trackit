import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import GlobalStyle from "./assets/style/GlobalStyle";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [Token, setToken] = useState("");

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage token={Token} setToken={setToken} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
