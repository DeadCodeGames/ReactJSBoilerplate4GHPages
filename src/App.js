// import { Router, Routes, Route } from "react-router-dom" - use this for different routes in your web app :3
import Hewwo from "./components/Hewwo/hewwo.jsx";
import Structure from "./components/Stwuctuwe/stwuctuwe.jsx";
import Tutowial from "./components/Tutowial/tutowial.jsx";
import Footer from "./components/Footer/footer.jsx";
import './App.css';

function App() {
  return (
    <>
      <div id="content">
        <div id="title">
          react javascript boilerplate
          <Hewwo />
        </div>
        <Structure />
        <Tutowial />
      </div>
      <Footer />
    </>
  );
}

export default App;
