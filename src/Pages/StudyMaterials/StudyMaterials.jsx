import classes from "./StudyMaterials.module.css"; 
import NavBar from "../../Components/NavBar/NavBar";
import StudyMaterialsSection from "../../Components/StudyMaterialsSection/StudyMaterialsSection";
import { Divider } from "@blueprintjs/core";

export default function StudyMaterials() {

    return (
        <>
            <NavBar/>
            
            <StudyMaterialsSection title="1. Buying Maggi" />
            <StudyMaterialsSection title="2. Boiling Water" />
            <StudyMaterialsSection title="3. Cooking" />
        </>
    );
}