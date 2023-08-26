import NavBar from "./Components/NavBar/NavBar";
import "./App.css"; 
import "@blueprintjs/core/lib/css/blueprint.css";

import { Route, Routes } from "react-router-dom";
import Trainings from "./Pages/Trainings/Trainings";
import { Link } from "react-router-dom";
import { Button } from "@blueprintjs/core";
import { Intent } from "@blueprintjs/core";
import { Classes } from "@blueprintjs/core";
export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Trainings />}></Route>
        <Route path="/materials" element={<Trainings />}></Route>
      </Routes>

    </>
  );
}