import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          //Replace "a" with element
          <Route path="" element={<a />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
