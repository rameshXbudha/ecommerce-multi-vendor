import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Contact from "./component/Contact";
// import Footer from "./component/Footer";
// import Header from "./component/Header";
// import Hero from "./component/Hero";
// import About from "./component/About";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route path="/about/:id/:name" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>

          <Route path="/error" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
