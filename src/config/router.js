import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App.jsx";
import About from "../containers/About";
import Contact from "../containers/Contact";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
