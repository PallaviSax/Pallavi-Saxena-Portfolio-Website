import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Interests from "./pages/Interests"
import { Routes, Route, HashRouter } from "react-router-dom";

import './App.css'
import NavigationBar from './navbar.jsx'
import PallaviPicture from './images/PallaviProfilePic.png'
import AcapellaPic from './images/PallaviAcapella.png'

function App() {
  return (
    <>
    <HashRouter>
      <div>
      <NavigationBar></NavigationBar>
      <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/Home" element = {<Home />}/>
      <Route path="/Experience" element = {<Experience />}/>
      <Route path="/Interests" element = {<Interests />}/>
      </Routes>
      </div>
      </HashRouter>
    </>
  )
}

export default App

