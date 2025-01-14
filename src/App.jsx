import Home from "./pages/Home"
import Works from "./pages/Works"
import Fun from "./pages/Fun"
import { Routes, Route, HashRouter } from "react-router-dom";

import './App.css'
import NavigationBar from './navbar.jsx'
import PallaviPicture from './images/PallaviProfilePic.png'
function App() {
  return (
    <>
    <HashRouter>
      <div>
      <NavigationBar></NavigationBar>
      <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/Home" element = {<Home />}/>
      <Route path="/Works" element = {<Works />}/>
      <Route path="/Fun" element = {<Fun />}/>
      </Routes>
      </div>
      </HashRouter>
    </>
  )
}

export default App

