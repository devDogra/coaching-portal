import { Card } from "@blueprintjs/core";
import classes from "./StudyMaterialsSection.module.css"
import { Button, Elevation, ProgressBar } from "@blueprintjs/core";
import { Divider } from "@blueprintjs/core";

export default function StudyMaterialsSection({title, x}) {  

    return (
        
        <section className={classes.studyMaterialsSection}>
            <h1>{title}</h1>
            <h1>{x}</h1>
            <div className={classes.studyMaterials}>
                <Card className={classes.studyMaterialCard} interactive={true} elevation={Elevation.TWO}>SM1</Card>
                <Card className={classes.studyMaterialCard} interactive={true} elevation={Elevation.TWO}>SM1</Card>
                <Card className={classes.studyMaterialCard} interactive={true} elevation={Elevation.TWO}>SM1</Card>
                <Card className={classes.studyMaterialCard} interactive={true} elevation={Elevation.TWO}>SM1</Card>
            </div>
            <Divider style={{borderWidth: "2px"}}/>

        </section>
    );

}