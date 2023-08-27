import "./App.css"; 
import "@blueprintjs/core/lib/css/blueprint.css";

import { Route, Routes, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@blueprintjs/core";
import { Intent } from "@blueprintjs/core";
import { Classes } from "@blueprintjs/core";

import NavBar from "./Components/NavBar/NavBar";
import Trainings from "./Pages/Trainings/Trainings";
import StudyMaterials from "./Pages/StudyMaterials/StudyMaterials";
import Register from "./Pages/Register/Register";

export default function App() {

  const location = useLocation();
  function blah() {
      console.log(location.pathname); 
      return 10; 
  }

  function toRenderNavbar() {
    let toRender = true; 
    let noRenderList = [
      "/register",
      "/login"
    ];


    noRenderList.forEach(noRenderPath => {
      if (noRenderPath == location.pathname) toRender = false; 
    });

    return toRender; 
  }

  return (
    <>
      {
        toRenderNavbar() && <NavBar />
      }
    
      <Routes>
        <Route path="/" element={<Trainings />}></Route>
        <Route path="/training" element={<StudyMaterials />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>

    </>
  );
}