import classes from "./Trainings.module.css"; 
import TrainingCard from "../../Components/TrainingCard/TrainingCard";
import MainCenteredHeading from "../../Components/MainCenteredHeading/MainCenteredHeading";

export default function Trainings() {

    return (
        <>
            <MainCenteredHeading />
            <ul className={classes.trainingCardList}>
                <TrainingCard className={classes.trainingCard}/>
                <TrainingCard className={classes.trainingCard}/>
                <TrainingCard className={classes.trainingCard}/>
            </ul>
        </>
    );
}