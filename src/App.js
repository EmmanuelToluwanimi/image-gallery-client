import Navbar from "./component/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
