import NavBar from "./Components/NavBar/NavBar";
import "./App.css"; 
import "@blueprintjs/core/lib/css/blueprint.css";
import TrainingCard from "./Components/TrainingCard/TrainingCard";
import { CardList } from "@blueprintjs/core";
import classes from "./App.module.css"; 
import StudyMaterialsSection from "./Components/StudyMaterialsSection/StudyMaterialsSection";


export default function App() {
  return (
    <>
      <NavBar />
      <StudyMaterialsSection title="1. Buying Maggi"></StudyMaterialsSection>
      <StudyMaterialsSection title="2. Boiling Water"></StudyMaterialsSection>
      <StudyMaterialsSection title="3. Making Maggi"></StudyMaterialsSection>
      {/* <h1 className="bp5-heading" style={{
        textAlign: "center",
        fontWeight: "bold",
        margin: "1em 0"
      }}>Your Trainings</h1>
      <ul className="training-card-list">
        <TrainingCard className={classes.trainingCard}/>
        <TrainingCard className={classes.trainingCard}/>
        <TrainingCard className={classes.trainingCard}/>
      </ul> */}
    </>
  );
}