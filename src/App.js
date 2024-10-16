// import { Router, Routes, Route } from "react-router-dom" - use this for different routes in your web app :3
import Hewwo from "./components/Hewwo/hewwo.jsx";
import Tutowial from './components/Tutowial/tutowial.jsx'
import './App.css';

function App() {
  return (
    <>
      <div id="content">
        <div id="title">
          react javascript boilerplate
          <Hewwo />
        </div>
        <Tutowial />
      </div>
      <footer>
        <span>Created in 2024 with </span>
        <img id="heartemoji" src="https://em-content.zobj.net/source/twitter/154/heavy-black-heart_2764.png" draggable="false" alt="heart emoji" />
        <span> by kanshen from <span className="x">×</span><a className="deadcode" href="https://deadcode.is-a.dev">DEADCODE</a><span className="x">×</span></span>
        <span> · </span>
        <span>{process.env.NODE_ENV === "production" ? (<>clone <a href="https://github.com/DeadCodeGames/ReactJSBoilerplate4GHPages">here</a> :3</>) : "Running in DEVELOPMENT MODE"}</span>
      </footer>
    </>
  );
}

export default App;
