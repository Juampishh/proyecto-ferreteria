import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./assets/components/Container/container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
