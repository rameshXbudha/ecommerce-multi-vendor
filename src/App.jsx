import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/header' element={<Header />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/hero' element={<Hero />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
