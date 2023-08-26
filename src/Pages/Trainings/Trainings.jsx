import classes from "./Trainings.module.css"; 
import TrainingCard from "../../Components/TrainingCard/TrainingCard";

export default function Trainings() {

    return (
        <>
            <h1 className="bp5-heading" 
                style={{ textAlign: "center", fontWeight: "bold", margin: "1em 0" }}
            > Your Trainings
            </h1>
            
            <ul className={classes.trainingCardList}>
                <TrainingCard className={classes.trainingCard}/>
                <TrainingCard className={classes.trainingCard}/>
                <TrainingCard className={classes.trainingCard}/>
            </ul>
        </>
    );
}