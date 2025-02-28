import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/Home";
import { Houses } from "./pages/Houses";
import { HouseDetails } from "./pages/HouseDetails";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { ThemeProvider } from "@mui/material";
import { MainTheme } from "./theme/MainTheme";
import { UserContextProvider } from "./context/UserContext"; // Adjust path as needed

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={MainTheme}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="boliger" element={<Houses />} />
              <Route path="boliger/:id" element={<HouseDetails />} />
              <Route path="/search/:keyword" element={<Houses />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
