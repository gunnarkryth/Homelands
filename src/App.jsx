import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Routes
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/Home";
import { Houses } from "./pages/Houses";
import { HouseDetails } from "./pages/HouseDetails";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="boliger" element={<Houses />} />
          <Route path="bolig-detaljer" element={<HouseDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
