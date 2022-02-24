import { Routes, Route } from "react-router-dom";

import Home from './pages/index';
import About from './pages/about';
import Releases from './pages/releases';
import Contact from './pages/contact';
import Privacy from './pages/tonguemeleon/privacy';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="releases" element={<Releases />} />
    <Route path="contact" element={<Contact />} />
    <Route path="tonguemeleon/privacy" element={<Privacy />} />
  </Routes>
);

export default App;
