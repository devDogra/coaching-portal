import classes from "./MainCenteredHeading.module.css";

export default function MainCenteredHeading() {
    return (
        <h1 className={classes.mainCenteredHeading + " bp5-heading"} > 
            Your Trainings
        </h1>
    ); 
}