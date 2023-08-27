import "./App.css"; 
import "@blueprintjs/core/lib/css/blueprint.css";

import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@blueprintjs/core";
import { Intent } from "@blueprintjs/core";
import { Classes } from "@blueprintjs/core";

import NavBar from "./Components/NavBar/NavBar";
import Trainings from "./Pages/Trainings/Trainings";
import StudyMaterials from "./Pages/StudyMaterials/StudyMaterials";
import Register from "./Pages/Register/Register";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Trainings />}></Route>
        <Route path="/training" element={<StudyMaterials />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>

    </>
  );
}